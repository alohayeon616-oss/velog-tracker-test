export default async function handler(req, res) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(",")[0]
    : req.socket.remoteAddress;

  const country = req.headers["x-vercel-ip-country"] || "Unknown";

  const referer = req.headers["referer"] || "Direct";

  const userAgent = req.headers["user-agent"] || "Unknown";

  const page = req.query.page || "unknown";

  console.log({
    page,
    ip,
    country,
    referer,
    userAgent,
    time: new Date().toISOString(),
  });

  return res.status(200).send("");
}
