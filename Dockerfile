#docker run --rm    -it blog:3.5 jekyll build
#FROM jekyll/jekyll
FROM ruby:2.1-onbuild
RUN gem install jekyll
ADD . /srv/jekyll
EXPOSE 4000

CMD ["jekyll server --watch"]
