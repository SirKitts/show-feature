import { evaluateFeature } from './index.js';

class ShowFeature extends HTMLElement {
  static get observedAttributes() {
    return ['key', 'from', 'to', 'timezone'];
  }

  connectedCallback() {
    const key = this.getAttribute('key') || 'day';
    const fromDate = this.getAttribute('from');
    const toDate = this.getAttribute('to');
    const timezone = this.getAttribute('timezone') || 'local';

    const show = evaluateFeature({ key, fromDate, toDate, timezone });

    if (!show) {
      this.innerHTML = '';
      this.style.display = 'none';
    }
  }
}

customElements.define('show-feature', ShowFeature);
