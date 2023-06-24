import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // method will be here
  up(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log("arrow up is clicked");
  }

  down(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log("arrow down is clicked");
  }
}