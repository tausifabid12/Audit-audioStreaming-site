const multer = require('multer');
import clientPromise from '../../utilities/mongoDb-connect/mongoDb-connect';

export default async function songsData(req, res) {
  //db connection
  const client = await clientPromise;
  const songsData = client.db('audit-songs').collection('songsData');

  //********************** posting songs data to mongoDB *******************/

  if (req.method === 'POST') {
    try {
      //infos
      const songInfo = req.body;

      const result = await songsData.insertOne(songInfo);
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.log(error);
      res.status(200).json({ success: false, result });
    }
  } else {
    try {
      //********************** getting songs data from mongoDB *******************/
      const query = {};
      const allSongData = await songsData.find(query).toArray();
      res.status(200).json({ success: true, data: allSongData });
    } catch (error) {
      console.log(error);
      res.status(200).json({ success: false, data: [] });
    }
  }
}
