// Item.js
import Component from '../core/Component.js';
import AppendButton from './AppendButton.js';

export default class Item extends Component {
  setup() {
    this.state = {
      clickCount: 0
    }
  }

  template() {
    const { contents, active, seq } = this.props;
    return `
      <li data-seq="${seq}">
        ${contents}
        <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
          ${active ? '활성' : '비활성'}
        </button>
        <button class="deleteBtn">삭제</button>
        <div class="clickButton"></div>
      </li>
    `;
  }

  mounted() {
    const { appendClickCount, totalClickCount } = this;
    const $countAppender = this.$target.querySelector('.clickButton')

    new AppendButton($countAppender, {
      totalClickCount,
      appendClickCount: appendClickCount.bind(this)
    })
  }

  get totalClickCount() {
    return this.state.clickCount
  }

  appendClickCount() {
    const { clickCount } = this.state
    this.setState({
      clickCount: clickCount + 1
    })
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
