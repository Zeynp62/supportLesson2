const titleElement = document.querySelector('#main-title')
const paragraphElement = document.querySelector('.cool')
const bodyElement = document.querySelector('body')
const commentsList = document.querySelector('#comments')
const commentElements = commentsList.querySelectorAll('li')

const h2Element = document.createElement('h2')
h2Element.textContent = 'comments:'
bodyElement.appendChild(h2Element)

const buttonElement = document.querySelector('button')

// paragraphElement.textContent = 'Gone'
paragraphElement.style.textAlign = 'center'
titleElement.style.textAlign = 'center'
//document.body.style.backgroundColor = 'pink'
paragraphElement.style.color = 'yellow'
// console.dir(paragraphElement.textContent)
// console.dir(commentElements)

commentElements.forEach((comment) => {
  comment.style.fontSize = '30px'
  // console.log((comment.style.fontSize = '30px'))
})
buttonElement.setAttribute('id', 'submit')
buttonElement.classList.add('btn')
 buttonElement.classList.replace('btn', 'action-button')
bodyElement.classList.toggle('dark-mode')
bodyElement.classList.toggle('dark-mode')

if (buttonElement.hasAttribute('disabled') === true) {
  buttonElement.removeAttribute('disabled')
  console.log('the button is enabled')
}
