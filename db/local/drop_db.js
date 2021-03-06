const MongoClient = require('mongodb').MongoClient
const url = process.env.MONGODB_URL || 'mongodb://localhost:27017'

const drop = async () => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
    const db = client.db('proofdex')
    const response = await db.dropDatabase()

    client.close()
    console.log(response)
  } catch (e) {
    console.log(e.message)
  }
}

drop()