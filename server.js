import express from 'express'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server)

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = 3000

// middleware
app.use(express.static(join(__dirname, "src"))) // allows the server to host static files from this endpoint ('src' folder)

app.get('/', (_, res) => {
  const fileToSend = join(__dirname, "src", "index.html")
  res.sendFile(fileToSend)
})

io.on('connection', socket => {
  socket.on("chat message", msg => {
    // socket.broadcast.emit("chat message", msg)
    io.emit("chat message", msg)
  })

  socket.on('disconnect', () => {
    console.log("user has disconnected")
  })
})

// must use "server" variable as it comes from "http" (Note: WebSockets work by connecting the HTTP handshake, and then only the WebSocket protocol is established)
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
