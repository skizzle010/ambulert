import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main(){
    const users = await prisma.user.create({data: {
        name: "Arvind",
        regno: "21bce0222",
        emergency: "Fracture"
    }})
    console.log(users)
    }
    main()
        .catch(e =>{
            console.error(e.message)
        })
        .finally(async()=>{
            await prisma.$disconnect()
        })