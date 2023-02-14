// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartIconList = document.querySelectorAll(".like-glyph");
const modal = document.querySelector("#modal");

function heartClick() {
  heartIconList.forEach(e => {
    e.addEventListener("click", () => {
      if (e.textContent === EMPTY_HEART) {
          mimicServerCall()
          .then(() => {
            e.textContent = FULL_HEART;
            e.setAttribute("class", "activated-heart");
          })
          .catch((error) => {
            modal.removeAttribute("class");
            modal.textContent = error;
            setTimeout(() => {
              modal.setAttribute("class", "hidden");
            }, 3000)
          })
      } else {
        e.textContent = EMPTY_HEART;
        e.removeAttribute("class");
      };
    })
  });
}

document.addEventListener("DOMContentLoaded", heartClick);


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
