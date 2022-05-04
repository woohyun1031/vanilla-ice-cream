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
  sendEvent() {
    this.$target.querySelector(".addBtn").addEventListener("click", () => {
      const { items } = this.$state; // ["item1", "item2"]
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) =>
      deleteBtn.addEventListener("click", ({ target }) => {
        console.log(this.$state.items);
        console.log([...this.$state.items]);
        const items = this.$state.items;
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      })
    );
  }
}
