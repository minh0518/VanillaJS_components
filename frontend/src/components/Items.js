// Items.js
import Component from '../core/Component.js';
import Item from './Item.js';

export default class Items extends Component {
  template() {
    const { filteredItems } = this.props;
    return `
      <ul>
        ${filteredItems
          .map(
            ({ contents, active, seq }) => `
          <div data-component="item-${seq}"></div>
        `,
          )
          .join('')}
      </ul>
    `;
  }

  mounted() {
    const { filteredItems, deleteItem, toggleItem } = this.props;
    filteredItems.forEach(({ contents, active, seq }) => {
      const $item = this.$target.querySelector(`[data-component="item-${seq}"]`);
      new Item($item, {
        contents,
        active,
        seq,
        deleteItem,
        toggleItem,
      });
    });
  }
}
