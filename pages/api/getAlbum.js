import clientPromise from '../../utilities/mongoDb-connect/mongoDb-connect';

export default async function songsData(req, res) {
  //db connection
  const client = await clientPromise;

  try {
    const albumData = client.db('audit-songs').collection('albumData');
    const result = await albumData.find({}).toArray();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, data: [] });
  }
}
