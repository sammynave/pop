import {
  PopSection
} from '../src/index';

QUnit.module('pop-section tests');

QUnit.test('PopTest', assert => {
  customElements.define('pop-section', PopSection);
  let expected = '';
  let ps = document.createElement('pop-section');
  document.body.appendChild(ps);
  assert.equal(ps.innerHTML, expected);
});
