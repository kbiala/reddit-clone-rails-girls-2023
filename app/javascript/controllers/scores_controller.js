import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // method will be here
  static values = { id: Number }
  static targets = [ "sum" ]

  up(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log("arrow up is clicked");

    let id = this.idValue;
    let score = this.sumTarget;
    console.log( id );
    console.log( score );


  }

  down(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log("arrow down is clicked");

    let id = this.idValue;
    let score = this.sumTarget;

  }
}