import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // method will be here
  static values = { id: Number }
  static targets = [ "sum" ]

  up(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    //console.log("arrow up is clicked");

    let id = this.idValue;
    let score = this.sumTarget;
    //console.log( id );
    //console.log( score );

    let url = `/entries/${id}/increase_score`
    //console.log(url)


    fetch(url).then((response) => response.text()).then(response => {
        // handle the response
        //console.log( response );
        score.textContent = response;
      })
  }

  down(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log("arrow down is clicked");

    let id = this.idValue;
    let score = this.sumTarget;
    let url = `/entries/${id}/descrease_score`
    fetch(url).then((response) => response.text()).then(response => {
      // handle the response
      //console.log( response );
      score.textContent = response;
    })
  }
}