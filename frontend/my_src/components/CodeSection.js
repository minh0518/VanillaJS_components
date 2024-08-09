import Component from "../core/Component";

export default class CodeSection extends Component {
    template() {
        const { codeList } = this.props
        return (
            `
            <p class="category">품목</p>
              <button class="searchProductDataButton">검색하기</button>
            <div class="codeList">${codeList.map(i => {
                return `${i.code} ${i.name}`
            })}</div> 
            `
        )
    }


    setEvent() {
        const { selectCodeListFromProductSearch } = this.props
        this.addEvent('click', '.searchProductDataButton', ({ target }) => { 
            
        })
    }
}