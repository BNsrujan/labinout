import { PrismaClient } from "@prisma/client";

 const prisma = new PrismaClient()


async function main() {
    const user = await prisma.user.upsert({

    })
    console.log({user})
}

main()