import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getRestaurantByslug } from '@/data/get-restautant-by-slug';

import ConsumptionMethodOption from './components/consumption-method-option';

interface RestaurantPageProps {
	params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
	const { slug } = await params;
	const restaurant = await getRestaurantByslug(slug);
	if (!restaurant) return notFound();
	return (
		<div className='h-screen flex flex-col items-center justify-center px-6 pt-24'>
			{/* LOGO E TITULO */}
			<div className='flex flex-col items-center gap-2'>
				<Image
					src={restaurant.avatarImageUrl}
					alt={restaurant.name}
					width={82}
					height={82}
				/>
				<h2 className='font-semibold'>{restaurant.name}</h2>
			</div>
			{/* BEM VINDO */}
			<div className='pt-24 text-center space-y-2'>
				<h3 className='text-2xl font-semibold'>Seja bem-vindo</h3>
				<p className='opacity-55'>
					Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada
					detalhe!
				</p>
			</div>
			<div className='pt-14 grid grid-cols-2 gap-4'>
				<ConsumptionMethodOption
					slug={slug}
					option='DINE_IN'
					imageUrl='/dine_in.png'
					imageAlt='Para comer aqui'
					buttonText='Para comer aqui'
				/>
				<ConsumptionMethodOption
					slug={slug}
					option='TAKEAWAY'
					imageUrl='/takeaway.png'
					imageAlt='Para levar'
					buttonText='Para levar'
				/>
			</div>
		</div>
	);
};

export default RestaurantPage;
