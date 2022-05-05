export default class Components {
  //target, state 2개의 property
  $target; //target elements
  $state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.setEvent();
    this.render();
  }
  //state setup
  setup() {
    console.log("setup");
  }
  //html template
  template() {
    return "";
  }
  //add event
  setEvent() {
    console.log("setEvent");
  }
  //set State
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  //render
  render() {
    this.$target.innerHTML = this.template();
  }
  //'click', '.addBtn', callback func
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    //$target에서 selector에 해당하는 query 모두 선택하고 chiledren 배열에 넣는다.
    const isTarget = (target) => {
      return children.includes(target) || target.closest(selector);
    };
    //target이 children에 없으면 target에서 가장 가까운 closest를 찾는다
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
