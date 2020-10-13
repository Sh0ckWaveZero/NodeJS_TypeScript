import express from 'express'

const app = express()

app.get('/', (req, res) => res.json({ hell0: 'world' }))

app.listen(3333, () => {
  console.log('Server start: listening at http://localhost:3333')
})
