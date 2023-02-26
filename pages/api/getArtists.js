import clientPromise from '../../utilities/mongoDb-connect/mongoDb-connect';

export default async function songsData(req, res) {
  //db connection
  const client = await clientPromise;

  try {
    const artistsData = client.db('audit-songs').collection('artistsData');
    const result = await artistsData.find({}).toArray();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, data: [] });
  }
}
