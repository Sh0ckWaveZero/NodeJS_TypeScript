import { MongoClient } from 'mongodb'

test('Connect to database Cluster0', async () => {
  let ms = ''
  const uri = 'mongodb+srv://<username>:<password>@<server>/<db>'
  await MongoClient.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then((client) => {
      ms = 'successfully'
      return client.db('Alter').collection('users')
    })
    .catch((err) => {
      console.log(`Error occurred while connecting to mongodb: ${err}`)
    })
  expect(ms).toEqual('successfully')
})
