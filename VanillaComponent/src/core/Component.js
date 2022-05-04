export default class Components {
  //target, state 2개의 property
  $target; //target elements
  $state;
  constructor($target) {
    this.$target = $target;
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
  sendEvent() {
    console.log("sendEvent");
  }
  //set State
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  //render
  render() {
    this.$target.innerHTML = this.template();
    this.sendEvent();
  }
}
