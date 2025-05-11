import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../ui/button'

function Hero() {
	const data = [
		{
			id: 1,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 2,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 3,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 4,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 5,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
	]

	return (
		<section className='w-full bg-[#F3F0F0]'>
			<div className='max-w-[1180px] mx-auto max-[630px]:max-w-full'>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					slidesPerView={1}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
				>
					{data.map(item => (
						<SwiperSlide key={item?.id}>
							<div className='w-full flex items-center justify-between'>
								<div className='max-[630px]:w-full max-[630px]:h-full max-[630px]:bg-[#000]/50 max-[1220px]:px-[20px]'>
									<div className='w-full min-w-[500px] my-[30px] max-[1030px]:min-w-[400px] max-[740px]:min-w-[300px] max-w-[300px] max-[630px]:min-w-full'>
										<h2 className='text-[44px] max-[948px]:text-[30px] font-["Roboto"] font-black leading-[120%] text-[#0A1729] mb-[6px] max-[630px]:text-[#fff]'>
											{item?.title}
										</h2>
										<p className='text-[16px] max-[948px]:text-[14px] font-["Roboto"] text-[#545D6A] leading-[120%] max-[630px]:text-[#fff]'>
											{item?.description}
										</p>
										<Link to='#'>
											<Button className='bg-[#0F4A97] my-[10px] w-[120px] h-[50px] cursor-pointer hover:bg-[#0f4a97d1]'>
												Batafsil
											</Button>
										</Link>
									</div>
								</div>

								<img
									src={item?.image}
									alt={item?.alt}
									className='max-w-[500px] max-[948px]:max-w-[300px] mt-[20px] max-[630px]:max-w-[200px] max-[630px]:absolute max-[630px]:bottom-0 max-[630px]:right-0 max-[630px]:z-[-50] rounded-xl object-contain'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Hero
