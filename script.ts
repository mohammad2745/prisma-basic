import { PrismaClient } from '@prisma/client/edge';
const prisma = new PrismaClient();

async function main() {

}

main()
  .catch((e: { message: any; }) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })
