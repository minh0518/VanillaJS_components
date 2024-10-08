export default class Component {
  $target;
  props;
  state;
  constructor($target, props) {
    this.$target = $target;
    this.props = props; // props 할당
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() { }
  mounted() { }
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted(); // render 후에 mounted가 실행 된다.
  }
  setEvent() { }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}
