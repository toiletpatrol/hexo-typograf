/* globals hexo:false*/
'use strict';

hexo.extend.filter.register('after_post_render', require('./lib/after_post_render'));