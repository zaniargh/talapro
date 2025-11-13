"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, '../.env') });
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    const email = process.env.SUPERADMIN_EMAIL || 'zanyar.gh@gmail.com';
    const password = process.env.SUPERADMIN_PASSWORD || 'Zanyar12345*';
    const passwordHash = await bcrypt_1.default.hash(password, 10);
    await prisma.user.upsert({
        where: { email },
        update: { passwordHash, role: 'SUPER_ADMIN' },
        create: {
            email,
            name: 'Super Admin',
            role: 'SUPER_ADMIN',
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
//# sourceMappingURL=seed.js.map