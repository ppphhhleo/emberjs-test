import { module, test } from 'qunit';
import { setupTest } from 'ember-quickstart/tests/helpers';

module('Unit | Route | testingauth', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:testingauth');
    assert.ok(route);
  });
});
