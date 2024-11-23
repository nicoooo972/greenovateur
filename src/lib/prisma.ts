import { Prisma, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

export async function getItems (id: string, searchedString?: string) {
  const options: Prisma.ItemFindManyArgs = {
    where: {
      networkId: parseInt(id)
    }
  }

  if (searchedString && options.where) {
    options.where.name = {
      contains: searchedString
    }
  }

  return await prisma.item.findMany(options)
}
