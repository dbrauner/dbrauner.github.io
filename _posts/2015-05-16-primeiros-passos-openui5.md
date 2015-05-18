---
layout: post
title: Primeiros Passos com OpenUI5
categories: []
tags: []
published: True
date: YYYY-MM-DD 12:00:00

---

Recentemente eu fui introduzido ao [OpenUI5](http://openui5.org/), uma biblioteca Javascript para construção de aplicações empresariais web, com o intuito de ser responsivo à todos os dispositivos e prover uma experiência dinâmica e consistente ao usuário!

![OpenUI5 Logo](/assets/img/posts/openui5-logo.jpg)

A ferramenta foi criada e é mantida pela [SAP](http://www.sap.com), mas é um recurso opensource e está disponibilizado no [GitHub](https://github.com/SAP/openui5/), dessa forma, você ainda pode contribuir com correções e novas implementações, ou dar um [fork](https://github.com/SAP/openui5#fork-destination-box) e customizá-lo do seu jeito!

Mas vamos ao que interessa, que tal partir do ponto zero e iniciar uma aplicação usando o Sublime?
<!-- more -->

![App OpenUI5](/assets/img/posts/app-openui5.png)

Bom, primeiramente eu fiz o download da [Runtime](http://openui5.org/download.html) e coloquei em uma pasta que será copiada posteriormente para o resources do projeto. 

Não posso deixar de comentar que atualmente é possível criar as aplicações a partir do Eclipse e instalar os plugins da SAP que são exigidos para criar uma aplicação UI5, eu particularmente acho o Sublime muito mais fácil e leve de se usar, se alguém quiser alguma dica de como utilizar pelo Eclipse, só sugerir nos comentários ou entrar em contato direto comigo que escrevo algo a respeito.

<h2>Sublime</h2>

Bom, pra quem não sabe, o [Sublime](http://www.sublimetext.com/) é um editor de texto sofisticado, altamente customizável e com diversos recursos que simplificam a codificação e aumentam a produtividade. O legal é que, como é customizável, você pode criar por si mesmo os plugins e snippets para seus projetos, idependente do framework ou linguagem!

Seguindo nesta linha, foi criado o projeto [SublimeUI5](https://github.com/qmacro/SublimeUI5), que são ferramentas para facilitar a criação de projetos OpenUI5 pelo Sublime!

Um dos recursos interessantes é poder criar projetos a partir de Templates, semelhante ao que as IDE's fazem para linguagens, como Java, que já criam um 'Hello World' e você segue dali. Para isto, primeiro é necessário fazer alguns ajustes no Sublime:


1 - Instalar o [Package Control](https://packagecontrol.io/installation) - O Package Control é uma ferramenta necessária para instalar plugins com vários recursos, chamados de Packages, como o SublimeUI5 é um destes, precisamos installationlar este plugin. 
Para o Sublime Text 3, é só teclar `Ctrl + '` e colar o seguinte na caixa de comando que irá aparecer:

{% highlight javascript %}

import urllib.request,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

{% endhighlight %}

2 - Instalar o STProjectMaker. Já que temos o Package Control, é só ir no Sublime, digitar `Ctrl + Shift + P` e procurar pelo Snippet `Package Control: Install Package`, depois disto é só procurar por `STProjectMaker`.

3 - O próximo passo é obter o SublimeUI5, então vá para `Preferences -> Browse Packages...` Dentro desta pasta você deve fazer o checkout do projeto, então use o prompt de comando (cmd) para ir até o diretório e digite:

{% highlight bash %}

git clone https://github.com/qmacro/SublimeUI5.git
 
{% endhighlight %} 

3 - Agora vá para `Preferences -> Package Settings -> Project Maker -> Settings User`, dentro deste arquivo você deve configurar o caminho da pasta de templates que está dentro do projeto que você acabou de baixar. No meu caso ficou assim:

{% highlight javascript %}

{ "template_path": "C:/Users/Douglas/AppData/Roaming/Sublime Text 3/Packages/SublimeUI5/Templates/" } 

{% endhighlight %}

Lembrando que o caminho `C:/Users/Douglas/AppData/Roaming/` é relativo ao meu computador, você deve garantir que o caminho é válido na sua instalação.

Pronto! Agora você tem tudo pronto para começar um projeto utilizando o OpenUI5!

Vamos começar por um template simples:
Primeiro você deve usar o recurso que foi instalado para criar novos projetos, então no Sublime você digita `Shift + Ctrl + N` ou vai em `Project -> Create Project`. Uma lista com os templates disponíveis irá aparecer, para este exemplo iremos usar o primeiro, `UI5 JS TileContainer`. Após o Enter você deve informar o nome e a pasta onde o projeto irá ficar. Tudo certo? agora vá em Open folder e escolha a pasta do projeto, uma lista com os arquivos do projeto irá aparecer numa aba à esquerda. 

No arquivo index.html deve ser ajustado o caminho relativo da pasta resources do openui5-sdk, recomendo fazer como eu fiz, fazer uma cópia e colocar na pasta do projeto.

Por ser um projeto totalmente baseado em HTML + CSS + Javascript, não existem muitas exigências quanto ao servidor em que a aplicação deve rodar, ela só não roda diretamente no browser ao colocar o caminho relativo, por causa de algumas restrições do browser quanto às requisições HTTP que a biblioteca faz para a inicialização, isto quer dizer que: Se quisermos rodar a aplicação localmente no PC, devemos criar um servidor que irá ficar escutando no localhost da máquina.

Para não nos delongarmos mais no assunto, vou introduzir um modelo de servidor local muito leve e simples de usar, o [Mongoose](https://code.google.com/p/mongoose/) é uma ferramenta desenvolvida pela *Google*, e constitui de apenas um arquivo executável que você joga na pasta onde quer que o servidor seja executado, após isto, é só ir no browser e digitar `localhost:4000` (a porta padrão do servidor), ele irá buscar pelo arquivo `index.html` e irá executar a aplicação para você. Não é incrível?

Pronto! Agora é só botar a mão na massa e criar a sua aplicação! Se alguém tiver interesse, explico como se pode fazer o upload em um servidor, até mesmo o GitHub Pages serve!

Abraço!