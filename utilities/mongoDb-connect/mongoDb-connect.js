const { MongoClient, ServerApiVersion } = require('mongodb');

//* mongo db connection
const uri = `mongodb+srv://${process.env.MDB_USER_NAME}:${process.env.MDB_PASSWORD}@cluster0.brxmqep.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const clientPromise = client.connect();

export default clientPromise;
