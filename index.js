'use strict';

var objectAssign = require('object-assign'),
    Typograf = require('typograf'),
    lang = hexo.config.language ? hexo.config.language : 'en',
    tp = new Typograf({lang: lang});

hexo.extend.filter.register('after_post_render', function(data) {
  data.excerpt && objectAssign(data, {
    excerpt: tp.execute(data.excerpt)
  });

  data.content && objectAssign(data, {
    content: tp.execute(data.content)
  });

  data.title && objectAssign(data, {
    title: tp.execute(data.title)
  });

  return data;
});