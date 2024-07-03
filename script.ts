import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({ data: { name: 'Jon' } });
  console.log(user);
}

main()
  .catch((e: { message: any; }) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })
