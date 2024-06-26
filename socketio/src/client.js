const socket = io()

const form = document.getElementById("form")
const input = document.getElementById("input")
const messages = document.getElementById("messages")

form.addEventListener('submit', e => {
  e.preventDefault()

  if (input.value.length === 0) {
    return
  }

  socket.emit('chat message', input.value)
  input.value = ""
})

socket.on("chat message", msg => {
  const item = document.createElement("li")
  item.innerText = msg
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})
