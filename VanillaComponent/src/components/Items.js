import Components from "../core/Component.js";

export default class Items extends Components {
  setup() {
    this.$state = {
      items: ["item1", "item2"],
    };
  }

  template() {
    const { items } = this.$state;
    return `
      <ul>      
        ${items
          .map(
            (item, index) => `
          <li>
            ${item}
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
    this.$target.addEventListener("click", ({ target }) => {
      console.log("yea");
      const items = [...this.$state.items];
      if (target.classList.contains("addBtn")) {
        this.setState({ items: [...items, `item${items.length + 1}`] });
      }
      if (target.classList.contains("deleteBtn")) {
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      }
    });
  }
}
