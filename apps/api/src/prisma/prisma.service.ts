import { config } from 'dotenv';
import { resolve } from 'path';
// Load this service's .env explicitly to ensure DATABASE_URL is correct at runtime
config({ path: resolve(__dirname, '../../.env'), override: true });
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Log the effective DATABASE_URL to verify the port and credentials in use
    // This helps diagnose P1001 when Prisma appears to target 5432 instead of 5433
    console.log('[Prisma] DATABASE_URL:', process.env.DATABASE_URL);
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
