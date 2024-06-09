import './src/styles/main.css'
import {hamburgerMenu} from './src/utils/hamburger.js'
import VanillaTilt from 'vanilla-tilt'

VanillaTilt.init(document.querySelectorAll('.card'), {
 max: 10,
 speed: 400,
 glare: true,
 'max-glare': 0.5,
})

hamburgerMenu()

const isTouchDevice =
 'ontouchstart' in window ||
 navigator.maxTouchPoints > 0 ||
 navigator.msMaxTouchPoints > 0

if (!isTouchDevice) {
 let cursorX = 0
 let cursorY = 0
 const cursorSize = 130

 document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX - cursorSize / 2
  cursorY = e.clientY - cursorSize / 2
  requestAnimationFrame(updateCursor)
 })

 document.addEventListener('scroll', function () {
  requestAnimationFrame(updateCursor)
 })

 function updateCursor() {
  const cursor = document.querySelector('.cursor')
  cursor.style.width = `${cursorSize}px`
  cursor.style.height = `${cursorSize}px`
  cursor.style.transform = `translate(${cursorX}px, ${cursorY + window.scrollY}px)`
 }
}

const heroParallax = document.getElementById('hero-parallax')
const heroTitle = document.getElementById('hero_title')

document.addEventListener('scroll', function () {
 const scrollPosition = window.scrollY
 heroParallax.style.transform = 'translateY(' + scrollPosition * 1.5 + 'px)'
 heroParallax.style.opacity = 1 - scrollPosition / 600
 heroTitle.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)'
 heroTitle.style.opacity = 2.5 - scrollPosition / 500
})
