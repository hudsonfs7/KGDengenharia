const nav = document.querySelector('nav')
const buttonOpen = document.querySelectorAll('nav .menu-open')
const buttonClose = document.querySelectorAll('nav .menu-close')

for (const element of buttonOpen) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

for (const element of buttonClose) {
  element.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}



