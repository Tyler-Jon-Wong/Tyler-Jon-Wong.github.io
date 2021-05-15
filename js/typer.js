/*
Title: Simple typing effect pure JS (beginner)
Script writted by ljc-dev from https://dev.to/ljcdev/simple-typing-effect-pure-js-4p5m
*/

var typeText = document.querySelector(".typed-dynamic")
var textToBeTyped = ["Developer","Engineering Student", "Freelancer"]
var index = 0, isAdding = true, textIndex = 0;

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of
    // the textToBeTyped using index.
    typeText.innerText = textToBeTyped[textIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTyped[textIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout( function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        textIndex = (textIndex + 1) % textToBeTyped.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, 120)
}
// start animation
playAnim()
