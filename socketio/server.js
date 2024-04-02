import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { getFilePath } from './modules/utils.js'

const app = express()
const server = createServer(app)
const io = new Server(server)
const PORT = 3000

// middleware
app.use(express.static("public")) // allows the server to host static files from this endpoint ('public' folder)
app.use(express.static("src")) // allows the server to host static files from this endpoint ('src' folder)

// navigation and file hostings
app.get('/', (_, res) => {
  // redirect user to login page
  res.send("<script> window.location.href = `${window.location.protocol}//${window.location.host}/login` </script>")
})

app.get('/login', (_, res) => {
  res.sendFile(getFilePath("public", "login.html"))
})

app.get('/chat', (_, res) => {
  res.sendFile(getFilePath("public", "chat.html"))
})

// Web Socket Logic
io.on('connection', socket => {
  console.log("a user has connected")

  socket.on("chat message", msg => {
    io.emit("chat message", msg)
  })

  socket.on('disconnect', () => {
    console.log("a user has disconnected")
  })
})

// must use "server" variable as it comes from "http" (Note: WebSockets work by connecting the HTTP handshake, and then only the WebSocket protocol is established)
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
