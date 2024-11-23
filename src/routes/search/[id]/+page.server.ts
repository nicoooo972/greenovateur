import { getItems } from "$lib/prisma";
import type * as Kit from '@sveltejs/kit'



export const load: Kit.ServerLoad<{id: string}> = (async ({ params, url }) => {
  const searchedString = url.searchParams.get('search')
 
  const items = await getItems(params.id, searchedString || undefined)

  return { items }
})