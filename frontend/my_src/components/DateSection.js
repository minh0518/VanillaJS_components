import Component from '../core/Component.js';
import { getDateStringByDate } from '../utils/date.js'

export default class DateSection extends Component {

  template() {
    const { date } = this.props;
    return `
      <input type="date" id="startDate" min="2020-01-01" max=${getDateStringByDate(new Date())} value=${date.startDate} ></input>
      ~
      <input type="date" id="endDate" min="2020-01-01" max=${getDateStringByDate(new Date())} value=${date.endDate}></input>
      `;
  }

  setEvent() {
    const { updateDate, setValidEndDate } = this.props
    this.addEvent('change', '#startDate', ({ target }) => {
      updateDate(target.value, 'start')
      setValidEndDate(target.value)
    })
    this.addEvent('change', '#endDate', ({ target }) => {
      updateDate(target.value, 'end')
      setValidEndDate(target.value)
    })
  }
}
