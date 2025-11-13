import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../.env') });

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SUPERADMIN_EMAIL || 'zanyar.gh@gmail.com';
  const password = process.env.SUPERADMIN_PASSWORD || 'Zanyar12345*';

  const passwordHash = await bcrypt.hash(password, 10);

  // Ensure default tenant exists (optional; super admin may be global)
  // We keep super admin without tenantId

  // Upsert super admin
  await prisma.user.upsert({
    where: { email },
    update: { passwordHash, role: 'SUPER_ADMIN' as any },
    create: {
      email,
      name: 'Super Admin',
      role: 'SUPER_ADMIN' as any,
      passwordHash,
    },
  });

  console.log('✅ Super admin ensured:', email);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
