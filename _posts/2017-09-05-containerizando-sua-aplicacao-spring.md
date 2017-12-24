---
layout: post
title: Containerizando Sua Aplicação Spring Boot
categories: []
tags: []
published: True
date: 2017-09-05 12:00:00

---

Uma das tendências de desenvolvimento em cloud é a utilização do conceito de micro-serviços, que 
 basicamente define que uma aplicação é composto de vários serviços independentes, cada um com
 seu ciclo de desenvolvimento e independentes no que diz respeito aos dados e linguagem. 
 Em um projeto que trabalhei, optamos por escolher o Spring Framework, que traz muitas
 facilidades para se implementar o conceito, além de integrar muito bem com plataformas cloud
 como o Cloud Foundry by Pivotal. A minha ideia é mostrar como você pode montar um ambiente 
 de desenvolvimento local e facilmente deployar o microserviço no Cloud Foundry. 
 
 <!-- more -->

Neste artigo eu irei descrever um serviço que utiliza um banco de dados Postgres e que
também faz uso de serviço da Amazon AWS, o S3 bucket, que é basicamente um repositório de objetos
de qualquer tipo, como se fosse um file system, mas altamente escalável, além de ter uma confiabilidade
incrível e alta disponibilidade. Pois bem, o serviço de exemplo que irei mostrar é uma aplicação 
Spring Boot que possui uma interface REST para receber um arquivo e guardar no storage, além de fazer
 um registro no banco de dados.
 
 ![Micro serviço - Overview](/assets/img/posts/ms-overview.png) 
 
 Vamos começar criando a aplicação Spring Boot;
 
 O projeto Spring Initializr permite a você criar a "casca" do projeto de forma bem rápida,
 gerando o projeto Maven (ou gradle) com todas as dependências escolhidas.
 
 Iremos criar uma entidade de banco que representa o documento salvo, que irá conter o nome
 do documento e o caminho em que será salvo.
 
 ```java
src/com/brauner/demo/domain/Document.java
```
```java
@Entity
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private
    Long id;

    private String name;

    private String path;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}

```
 Iremos usar o Spring Data JPA Repository para lidar com as operações de banco, charemos de 
 `DocumentRepository`.
 
```java
src/main/java/com/brauner/demo/DocumentRepository.java
```
```java
public interface DocumentRepository extends CrudRepository<Document, Long> {

    List<Document> findByName(String name);
}
```
 Foi criado o método `findByName` para exemplificar o funcionamento da extensibilidade do
 framework. Todas as operações padrão são criadas automaticamente, a implementação de como
 a busca irá funcionar não precisa ser feita, pois o framework detecta esta necessidade.
 
 
 
 
 Configurar o banco de dados;
 
 Configurar o S3;
 
 <h2>Executando localmente</h2>
 
 E como testar? Obviamente você quer garantir que seu projeto funciona antes de fazer o deploy
  para a plataforma cloud, é claro que isto também faz parte de um processo de desenvolvimento
  com qualidade e bem definido. Irei mostrar como você pode fazer uso da tecnologia Docker 
  para containerizar localmente a sua aplicação e ainda fornecer os serviços para ela, o 
  banco de dados e o objectstore de forma que não afete os serviços da nuvem e sem instalar
  milhares de ferramentas localmente. Tudo o que você precisa é do Docker e Docker Compose (que já vem
  incluso na instalação do Docker se instalar em Windows ou Mac).
  
  ![Docker compose](/assets/img/posts/compose.jpg)
  
  Com o Docker Compose, iremos ecapsular cada componente da aplicação em um containeres específicos,
  e iremos levantar todos ao mesmo tempo para simular o ambiente cloud.
  
  <h3>Container da aplicação</h3>
  
  A configuração do container para rodar a aplicação é bastante simples, basta criar o arquivo `Dockerfile`
  abaixo na raiz do projeto. 
  
```docker
FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD target/*.jar app.jar
CMD java $JAVA_OPTS -jar /app.jar
```
