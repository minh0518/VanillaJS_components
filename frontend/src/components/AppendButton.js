import Component from "../core/Component.js"

export default class AppendButton extends Component {
    template() {
        const { totalClickCount } = this.props
        return `
        <p>${totalClickCount}</p>
        <button class="addButton">증가</button>
        `
    }

    setEvent() {
        const { appendClickCount } = this.props;
        this.addEvent('click', '.addButton', ({ target }) => {
            appendClickCount();
        })

    }
}