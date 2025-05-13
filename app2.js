const titleEl = document.querySelector('#main-title')
const paragraphEl = document.querySelector('.cool')
const bodyEl = document.querySelector('body')
const commentList = document.querySelector('#comments')//ul tag
const commentEl = commentList.querySelectorAll('li')
const buttonEl = document.querySelector('button')

// const titleById = document.getElementById('main-title')
// const paragraphByClass= document.getElementsByClassName('cool')
//create elements
const h2Element = document.createElement('h2') // create element not existing in html
h2Element.textContent = 'Names Section: '// give this element a value
bodyEl.appendChild(h2Element)//append ( add it to the body) to display

commentList.style.fontSize='20px'
paragraphEl.textContent = 'no paragraph'
titleEl.style.textAlign= 'center'
titleEl.style.color = 'red'

buttonEl.setAttribute('id', 'submit')
buttonEl.classList.add('btn')
buttonEl.classList.replace('btn', 'action-button')

bodyEl.classList.toggle('dark-mode')
bodyEl.classList.toggle('dark-mode')

if (buttonEl.hasAttribute('disabled')) {
  buttonEl.removeAttribute('disabled')
}
