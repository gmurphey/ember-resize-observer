'use strict';

const path = require('path');
const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-resize-observer',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/resize-observer-polyfill/ResizeObserver.js');
  },

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(
      funnel(path.dirname(require.resolve('resize-observer-polyfill')), {
        destDir: 'resize-observer-polyfill',
        include: ['ResizeObserver.js']
      })
    );

    return mergeTrees(trees);
  }
};
