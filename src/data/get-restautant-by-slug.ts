import { db } from '@/lib/prisma';

export const getRestaurantByslug = async (slug: string) => {
	const restaurant = await db.restaurant.findUnique({ where: { slug } });
	return restaurant;
};
