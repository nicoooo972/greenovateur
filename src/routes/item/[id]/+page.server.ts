import { getItems, prisma } from "$lib/prisma";
import type * as Kit from '@sveltejs/kit'

export const load: Kit.ServerLoad<{id: string}> = (async ({ params }) => {

  const item = await prisma.item.findUnique({ where: { id :parseInt(params.id) } })
  const owner = await prisma.user.findUnique({ where: { id: item?.ownerId }})
  const items = await getItems('1')
  return { item , owner, items }
})