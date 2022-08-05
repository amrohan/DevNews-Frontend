const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { take, skip } = req.query;
  const numberOfArticles = take || 2;
  const covertedNumberOfArticles = parseInt(numberOfArticles);

  const skipArticles = skip || 0;
  const convertedSkipArticles = parseInt(skipArticles);

  await prisma.$connect();
  const articles = await prisma.articles.findMany({
    skip: convertedSkipArticles,
    take: covertedNumberOfArticles,
    orderBy: {
      createdAt: "desc",
    },
  });
  // console.log(articles);
  prisma.$disconnect();
  res.status(200).json(articles);
}
