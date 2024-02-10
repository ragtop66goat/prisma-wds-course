import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      name: "Jason",
      email: "jason@test.com",
      age: 44,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
  });
  await prisma.user.createMany({
    data: [
      {
        name: "Jenn",
        email: "jenn@test.com",
        age: 40,
      },
      {
        name: "Kyle",
        email: "kyle@test.com",
        age: 23,
      },
      {
        name: "Jenn",
        email: "jenn@test1.com",
        age: 20,
      },
      {
        name: "Jenn",
        email: "jenn@test2.com",
        age: 23,
      },
    ],
  });

  await prisma.user.update({
    where: {
      email: "jason@test.com",
    },
    data: {
      userPreference: { create: { emailUpdates: true } },
    },
  });
  const user = await prisma.user.findUnique({
    where: {
      email: "jason@test.com",
    },
    include: { userPreference: true },
  });

  const jennUsers = await prisma.user.findMany({
    where: { name: "Jenn" },
    orderBy: { age: "desc" },
    take: 2,
  });

  console.log(user);
  console.log(jennUsers);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
