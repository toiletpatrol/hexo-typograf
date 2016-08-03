'use strict';

var objectAssign = require('object-assign'),
    Typograf = require('typograf'),
    lang = hexo.config.language ? hexo.config.language : 'en',
    tp = new Typograf({lang: lang});

hexo.extend.filter.register('after_post_render', function(data) {
  return objectAssign(data, {
    content: tp.execute(data.content)
  });
});