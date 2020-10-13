import express from 'express'

const app = express()
const PORT = 3333

app.get('/', (req, res) => res.json({ message: 'Everyone calls me handsome' }))

app.listen(PORT, () => {
  console.log(`🛸[server]: Server is running at https://localhost:${PORT}`)
})
