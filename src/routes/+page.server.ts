import prisma from "$lib/prisma";

export const load = async ({ locals }: { locals: { user?: { userId?: string } } }) => {
    try {
        console.log('User ID:', locals.user?.userId);

        if (!locals.user?.userId) {
            return {
                favoriteItems: [],
                mostUsedItems: []
            };
        }

        // Utilise favoritedBy au lieu de favoriteItem
        const favoriteItems = await prisma.item.findMany({
            where: {
                favoritedBy: {
                    some: {
                        userId: parseInt(locals.user.userId)                    }
                }
            }
        });

        console.log('Items favoris trouvés:', favoriteItems);

        return {
            favoriteItems,
            mostUsedItems: []
        };
    } catch (error) {
        console.error('Erreur détaillée:', error);
        return {
            favoriteItems: [],
            mostUsedItems: []
        };
    }
};