import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const warehouses = ['Warehouse 1', 'Warehouse 2', 'Warehouse 3']

  await Promise.all(
    warehouses.map(warehouse =>
      prisma.warehouse.create({
        data: {
          name: warehouse,
        },
      })
    )
  )
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
