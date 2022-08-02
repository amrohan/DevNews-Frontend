const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { take } = req.query;
  const numberOfArticles = take || 2;
  await prisma.$connect();
  const covertedNumberOfArticles = parseInt(numberOfArticles);
  const articles = await prisma.articles.findMany({
    take: covertedNumberOfArticles,
    // skip: req.query.page * req.query.limit,
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(articles);
  res.status(200).json(articles);

  // console.log(articles);
}
