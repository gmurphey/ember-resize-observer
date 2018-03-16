import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didInsertElement() {
    this._super(...arguments);

    this._resizeObservableHeight = null;
    this._resizeObservableWidth = null;

    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (this._resizeObservableHeight || this._resizeObservableWidth) {
          this.observedResize();
        }

        let { width, height } = entry.contentRect;

        this._resizeObservableHeight = height;
        this._resizeObservableWidth = width;
      }
    });

    this.resizeObserver.observe(this.element);
  },

  willDestroyElement() {
    this.resizeObserver.unobserve(this.element);
  },

  observedResize() {

  }
});
