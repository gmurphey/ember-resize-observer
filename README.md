ember-resize-observer
==============================================================================

Adds a polyfill for [ResizeObserver](https://developers.google.com/web/updates/2016/10/resizeobserver) to your app, as well as a mixin to watch resizing of components.

Installation
------------------------------------------------------------------------------

```
ember install ember-resize-observer
```


Usage
------------------------------------------------------------------------------

To watch for resizing of a component element, import and use the mixin.

``` javascript
import Component from '@ember/component';
import ResizeObservable from 'ember-resize-observer/mixins/resize-observable';

export default Component.extend(ResizeObservable, {
  // observedResize will be called any time the component's element is resized
  observedResize() {

  }
});
```

The mixin also makes use of the `init`, `didInsertElement`, and `willDestroyElement` hooks.
If your component makes use of any of these, it's important to remember to call `this._super`.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-resize-observer`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
