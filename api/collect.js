export default async function handler(req, res) {
  console.log("visit:", req.query);

  return res.status(200).send("");
}
