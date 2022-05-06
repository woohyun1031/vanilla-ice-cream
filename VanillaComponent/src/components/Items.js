import Components from "../core/Component.js";

export default class Items extends Components {
  get filteredItems() {
    const { isFilter, items } = this.$state;
    return items.filter(
      ({ active }) =>
        (isFilter === 1 && active) ||
        (isFilter === 2 && !active) ||
        isFilter === 0
    );
  }
  setup() {
    this.$state = {
      isFilter: 0,
      items: [
        {
          seq: 1,
          contents: "item1",
          active: false,
        },
        {
          seq: 2,
          contents: "item2",
          active: true,
        },
      ],
    };
  }

  template() {
    const { items } = this.$state;
    return `
    <h1>Vanilla item</h1>
      <header>
        <input type="text" class="appender" placeholder="아이템 입력"/>
      </header>
      <ul>      
        ${items
          .map(
            ({ contents, active, seq }, index) => `
          <li data-seq="${seq}">
          ${contents}
          <button class="toggleBtn" style="color: ${active ? "#09F" : "#F09"}">
            ${active ? "활성" : "비활성"}
          </button>
            <button class="deleteBtn" data-index=${index}>삭제</button>
          </li>`
          )
          .join("")}
      </ul>
      <button class="addBtn">추가</button>
    `;
  }

  setEvent() {
    // event를 각각의 하위 요소가 아니라 component의 target 자체에 등록
    this.addEvent("click", ".addBtn", () => {
      const items = [...this.$state.items];
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent("click", ".deleteBtn", (e) => {
      const items = [...this.$state.items];
      items.splice(e.target.dataset.index, 1);
      this.setState({ items });
    });
    this.addEvent("keyup", ".appender", (e) => {
      if (e.key !== "Enter") return;
      const items = [...this.$state.items];
      const seq = Math.max(0, ...items.map((item) => item.seq)) + 1;
      const contents = e.target.value; //input value
      const active = false;
      this.setState({ items: [...items, { seq, contents, active }] });
    });
    this.addEvent("click", ".toggleBtn", (e) => {
      const items = [...this.$state.items];
      const seq = Number(e.target.closest("[data-seq]").dataset.seq);
      const index = items.findIndex((item) => item.seq === seq);
      items[index].active = !items[index].active;
      console.log(
        `Number ${items[index].seq} change to ${items[index].active}`
      );
      this.setState({ items });
    });
    //() => {} === callback(event)
  }
}
