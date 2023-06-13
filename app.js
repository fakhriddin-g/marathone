let upBtn = document.querySelector('.up-button')
let downBtn = document.querySelector('.down-button')
let sidebar = document.querySelector('.sidebar')
let mainSlide = document.querySelector('.main-slide')

let slidesCount = mainSlide.querySelectorAll('div').length
let slideIndex = 0

function changeSlide(direction) {
  if (direction === 'up') {
    slideIndex++
    if (slideIndex === slidesCount) {
      slideIndex = 0
    }
  } else if (direction === 'down') {
    slideIndex--
    if (slideIndex < 0) { 
      slideIndex = slidesCount - 1
    }
  }
}