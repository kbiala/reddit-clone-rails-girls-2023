import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // method will be here
  static values = { id: Number }
  static targets = [ "sum" ]

  up(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    let id = this.idValue;
    let score = this.sumTarget;
    let url = `/entries/${id}/increase_score`

    fetch(url).then((response) => response.text()).then(response => {
        score.textContent = response;
      })
  }

  down(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    let id = this.idValue;
    let score = this.sumTarget;
    let url = `/entries/${id}/decrease_score`

    fetch(url).then((response) => response.text()).then(response => {
      score.textContent = response;
    })
  }
}