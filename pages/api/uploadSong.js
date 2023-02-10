const multer = require('multer');
import clientPromise from '../../utilities/mongoDb-connect/mongoDb-connect';
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

export default async function uploadSong(req, res) {
  if (req.method === 'POST') {
    try {
      //db connection
      const client = await clientPromise;
      const imges = client.db('audit-songs').collection('songs');

      //infos
      const songs = req.body;

      const orders = await imges.insertOne(songs);
      res.status(200).json({ name: 'John Doe', orders });
    } catch (error) {
      console.log(error);
    }
  } else {
    // Handle any other HTTP method
  }

  res.status(200).json({ name: 'John Doe' });
}
