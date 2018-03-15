import Component from '@ember/component';
import ResizeObservableMixin from 'ember-resize-observer/mixins/resize-observable';
import sinon from 'sinon';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { find } from 'ember-native-dom-helpers';
import { later } from '@ember/runloop';
import { Promise } from 'rsvp';

const timeout = (interval) => {
  return new Promise((resolve) => {
    later(resolve, interval);
  });
};

module('mixin:resize-observable', function(hooks) {
  setupRenderingTest(hooks);

  test('the observedResize method is not called when the component is rendered', async function(assert) {
    let resizeSpy = sinon.spy();
    let FooBarComponent = Component.extend(ResizeObservableMixin, {
      classNames: ['foo-bar'],
      observedResize: resizeSpy
    });

    this.owner.register('component:foo-bar', FooBarComponent);

    await render(hbs`{{foo-bar}}`);
    await timeout(500);

    assert.equal(resizeSpy.callCount, 0, 'the observedResize method was not called');
  })

  test('the observedResize method is called when the component element is resized', async function (assert) {
    let resizeSpy = sinon.spy();
    let FooBarComponent = Component.extend(ResizeObservableMixin, {
      classNames: ['foo-bar'],
      observedResize: resizeSpy
    });

    this.owner.register('component:foo-bar', FooBarComponent);

    await render(hbs`{{foo-bar}}`);

    let element = find('.foo-bar');

    element.style.width = '100px';

    await timeout(500);

    element.style.width = '150px';

    await timeout(500);

    assert.equal(resizeSpy.callCount, 2, 'the observedResize method was called for each');
  });
});
