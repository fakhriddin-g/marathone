let item = document.querySelector('.item')
let placeholders = document.querySelectorAll('.placeholder')

item.ondragstart = (e) => {
  setTimeout(() => {
    e.target.classList.add('hide')
  }, 0);
}

item.ondragend = (e) => {
  e.target.classList.remove('hide')
}

for (let placeholder of placeholders) {
  placeholder.ondragover = (e) => {
    e.preventDefault()
  }
  placeholder.ondragenter = (e) => {
    e.target.classList.add('hovered')
  }
  placeholder.ondragleave = (e) => {
    e.target.classList.remove('hovered')
  }
  placeholder.ondrop = (e) => {
    e.target.append(item)
    e.target.classList.remove('hovered')
  }
}