import Component from "../core/Component.js";

export default class ItemAppender extends Component {
  template() {
    return `
      <input type="text" class="appender" placeholder="아이템 내용 입력" />
      <button class="appendBtn">추가하기</button>  
    `;
  }

  setEvent() {
    const { addItem } = this.$props;
    this.addEvent("keyup", ".appender", ({ key, target }) => {
      if (key !== "Enter") return;
      addItem(target.value);
    });
    this.addEvent("click", ".appendBtn", () => {
      const inputSelector = this.$target.querySelector(".appender");
      const value = inputSelector.value;
      addItem(value);
    });
  }
}
