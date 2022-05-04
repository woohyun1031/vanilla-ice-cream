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
}
