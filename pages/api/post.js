const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const url = req.body.url;
  const email = req.body.email;
  try {
    const SubUrls = await prisma.CommunityUrls.create({
      data: {
        url: url,
        email: email || "",
      },
    });
    res.status(200).json({
      message:
        "I appreciate you sending this article in. It will soon be reviewed and added to the feed.😄",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
