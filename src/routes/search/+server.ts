import { getItems } from "$lib/prisma";

export async function GET(event) {
  console.log(event)
  const items = await getItems('1')

	return new Response(JSON.stringify(items), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}