import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ['query'] }); // show query

async function main() {
  // await prisma.user.deleteMany();

  // create many users
  // const users = await prisma.user.createMany({
  //   data: [{
  //     name: 'Jon Doe',
  //     email: "jon@gmail.com",
  //     age: 27,
  //   }, {
  //     name: 'Jon cena',
  //     email: "cena@gmail.com",
  //     age: 27,
  //   },
  //   ]
  // });

  // Find unique 
  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 32,
        name: "Jon Doe"
      }
    }
  })

  console.log(user);
}

main()
  .catch((e: { message: any; }) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })
