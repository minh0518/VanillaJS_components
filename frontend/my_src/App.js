import Component from './core/Component.js';
import Items from './components/Items.js';
import ItemAppender from './components/ItemAppender.js';
import ItemFilter from './components/ItemFilter.js';

export default class App extends Component {
  setup() {
    this.state = {
      pageNumber: 0,
      currentPageData: [],
      checkedInfo: []
    }
  }

  template() {
    return `
      <div class="test"></div>
    `;
  }

  // 자식 컴포넌트를 마운트
  mounted() {
    const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;
    const $itemAppender = this.$target.querySelector('[data-component="item-appender"]');
    const $items = this.$target.querySelector('[data-component="items"]');
    const $itemFilter = this.$target.querySelector('[data-component="item-filter"]');

    new ItemAppender($itemAppender, {
      addItem: addItem.bind(this),
    });
    new Items($items, {
      filteredItems,
      deleteItem: deleteItem.bind(this),
      toggleItem: toggleItem.bind(this),
    });
    new ItemFilter($itemFilter, {
      filterItem: filterItem.bind(this),
    });
  }

}
