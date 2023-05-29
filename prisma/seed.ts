import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
  const master = await prisma.user.upsert({
    create: {
      email: 'master@mestres.com',
      name: 'Master',
      password: hashSync('123456', 8),
      role: 'Master',
    },
    update: {},
    where: {
      email: 'master@mestres.com',
    },
  });
  console.log({ master });
};

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
  });
