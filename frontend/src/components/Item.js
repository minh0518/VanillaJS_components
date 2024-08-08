// Item.js
import Component from '../core/Component.js';

export default class Item extends Component {
  template() {
    const { contents, active, seq } = this.props;
    return `
      <li data-seq="${seq}">
        ${contents}
        <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
          ${active ? '활성' : '비활성'}
        </button>
        <button class="deleteBtn">삭제</button>
      </li>
    `;
  }

  setEvent() {
    const { deleteItem, toggleItem } = this.props;

    this.addEvent('click', '.deleteBtn', ({ target }) => {
      deleteItem(Number(target.closest('[data-seq]').dataset.seq));
    });

    this.addEvent('click', '.toggleBtn', ({ target }) => {
      toggleItem(Number(target.closest('[data-seq]').dataset.seq));
    });
  }
}
