import CodeSection from './components/codeSection.js';
import DateSection from './components/dateSection.js';
import Component from './core/Component.js';
import { getDateStringByDate } from './utils/date.js';

export default class App extends Component {
  setup() {
    this.state = {
      date: {
        startDate: '',
        endDate: '',
      },
      code: {
        // {code,name}
        codeList: []
      },
      description: {
        description: '',
      },
      pagination: {
        pageNumber: 0,
      },
      table: {
        currentPageData: [],
        checkedInfo: [],
      }
    }
  }

  template() {
    return `
    <div class="container">
    <div class="content">
      <p class="title">■ 판매 조회</p>
      <div class="top">

        <!-- 날짜 검색 -->
        <div class="date" data-component="date-section">
          <!-- <p class="category">전표 일자</p>
          <input type="date" id="startDate" min="2020-01-01" />
          ~
          <input type="date" id="endDate" min="2020-01-01" /> -->
        </div>


        <!--품목 검색-->
        <div class="code" data-component="code-section">

          <!-- <p class="category">품목</p>
          <button class="searchProductDataButton">검색하기</button>
          <div class="codeList"></div> -->

        </div>


        <!-- 적요 검색 -->
        <div class="description" data-component="description-section">

          <!-- <p class="category">적요</p>
          <input class="descriptionInput" placeholder="적요" /> -->
        </div>

        <div class="search">
          <button class="searchButton">검색</button>
        </div>
      </div>
      <div class="bottom">

        <!-- 페이지 네이션 버튼 -->
        <div class="controlButtons" data-component="pageNationButton-section">
          <!-- <button class="leftButton">&lt; &nbsp; 이전</button>
          <button class="rightButton">다음 &nbsp; &gt;</button> -->
        </div>

        <!-- 결과 테이블 렌더링 -->
        <div class="resultTable"  data-component="resultTable-section" >
          <!-- <table>
            <thead>
              <tr>
                <th><input type="checkbox" id="checkAll" /></th>
                <th>전표일자/번호</th>
                <th>품목코드</th>
                <th>품목명</th>
                <th>수량</th>
                <th>단가</th>
                <th>적요</th>
              </tr>
            </thead>
            <tbody class="tbody">

            </tbody>
          </table> -->
        </div>
        <div class="optionButtons">
          <button class="new">신규</button>
          <button class="delete">선택 삭제</button>
        </div>
      </div>
    </div>
  </div>
    `;
  }

  // 자식 컴포넌트를 마운트
  mounted() {

    const { date, updateDate, setValidEndDate, code, selectCodeListFromProductSearch } = this

    const $dateSection = this.$target.querySelector('[data-component="date-section"]');
    const $codeSection = this.$target.querySelector('[data-component="code-section"]');
    const $descriptionSection = this.$target.querySelector('[data-component="description-section"]');
    const $pageNationButtonSection = this.$target.querySelector('[data-component="pageNationButton-section"]');
    const $esultTableSection = this.$target.querySelector('[data-component="resultTable-section"]');
    new DateSection($dateSection, {
      date,
      updateDate: updateDate.bind(this),
      setValidEndDate: setValidEndDate.bind(this)
    })

    new CodeSection($codeSection, {
      code,
      selectCodeListFromProductSearch
    })
  }



  /**
   * 선택된 품목 코드 getter
   */
  get code() {
    const { code } = this.state
    return code
  }


  /**
   * 날짜 상태 getter
   */
  get date() {
    const { date } = this.state
    return date
  }

  /**
   * 날짜 상태 업데이트
   * @param {string} dateString - 날짜 문자열
   * @param {'start'|'end'} target - 시작날짜 or 종료날짜 선택 여부
   */
  updateDate(dateString, target) {
    const shallow = this.state.date
    if (target === 'start') {
      this.setState({
        date: {
          ...shallow,
          startDate: dateString,
        },
      })
    }
    if (target === 'end') {
      this.setState({
        date: {
          ...shallow,
          endDate: dateString,
        },
      })
    }
  }
  /**
   * 시작 날짜보다 종료 날짜가 앞서는 상황을 막아주는 이벤트 핸들러 콜백
   * @param {string} dateString - 현재 선택된 날짜
   */
  setValidEndDate(dateString) {
    document.querySelector('#endDate').min = dateString
  }


  selectCodeListFromProductSearch(values) {
    // code: {
    //   // {code,name}
    //   codeList: []
    // },
    this.setState({
      code: {
        // 새로 선택할 때마다 바뀌어야 해서 기존 값은 버려도 될듯?
        codeList: [...values]
      }
    })
  }


}

