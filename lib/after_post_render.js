'use strict';

var objectAssign = require('object-assign');

var Typograf = require('typograf');

module.exports = function(data) {
  var lang = this.config.language ? this.config.language : 'en',
      tp = new Typograf({lang: lang});

  return objectAssign(data, {
    content: tp.execute(data.content)
  });
};