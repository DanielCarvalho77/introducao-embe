import { module, test } from 'qunit';
import { setupRenderingTest } from 'store/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | app/components/product/details',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<App::Components::Product::Details />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <App::Components::Product::Details>
        template block text
      </App::Components::Product::Details>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
