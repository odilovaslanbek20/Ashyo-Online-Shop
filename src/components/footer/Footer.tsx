// import { Link } from 'react-router-dom'
// import useGetHooks from '../hooks/GetDataHooks'
// import { GoHeart } from 'react-icons/go'
// import { FaBalanceScaleRight, FaShopify } from 'react-icons/fa'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// import 'swiper/css'

// type Product = {
// 	variationOption: any
// 	id: string
// 	image: string
// 	nasiya: string
// 	price: number
// 	description: string
// 	category: string
// 	name: string
// 	brand_id: string
// }

// function Footer() {
// 	const url = import.meta.env.VITE_API_URL
// 	const { data, isLoading, error } = useGetHooks(`${url}/products`)

// 	if (isLoading) {
// 		return (
// 			<div className='fixed w-full h-screen z-50 bg-[#fff]'>
// 				<div className='flex justify-center items-center h-screen flex-col'>
// 					<div className='animate-spin rounded-full border-t-4 border-blue-500 border-8 w-16 h-16 mb-4'></div>
// 					<p className='text-lg text-gray-700'>Loading data...</p>
// 				</div>
// 			</div>
// 		)
// 	}

// 	if (error) {
// 		return (
// 			<div className='fixed w-full h-screen bg-[#fff] z-50 px-[20px]'>
// 				<div className='flex justify-center items-center h-[200px]'>
// 					<div className='bg-red-100 text-red-700 px-4 py-2 rounded-md shadow-md'>
// 						Malumot topilmadi iltimos keyinroq qayta urinib ko'ring...
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}

// 	return (
// 		<footer className='max-w-full'>
// 			<h1 className='max-w-[1200px] m-auto font-["Roboto"] text-[30px] font-bold text-black leading-[130%] mb-[30px]'>
// 				Most popular product
// 			</h1>

// 			<Swiper
//   modules={[Navigation, Pagination, Autoplay]}
//   spaceBetween={10}
//   slidesPerView={1.2}
//   navigation
//   pagination={{ clickable: false }}
//   breakpoints={{
//     320: { slidesPerView: 1, spaceBetween: 10 },
//     480: { slidesPerView: 1.6, spaceBetween: 10 },
//     640: { slidesPerView: 2, spaceBetween: 10 },
//     768: { slidesPerView: 2.5 },
//     1024: { slidesPerView: 3.5 },
//     1250: { slidesPerView: 4.5 }
//   }}
//   autoplay={{
//     delay: 3000,
//     disableOnInteraction: false
//   }}
// >
// 				{data?.items?.map((product: Product) => (
// 					<SwiperSlide key={product.id}>
// 						<div className='max-w-full p-[20px] mb-[30px]'>
// 							<Link className='w-full h-full' to={`/products/${product.id}`}>
// 								<div className='bg-[#EBEFF3] rounded-[8px] p-[30px] h-full relative flex items-center justify-center'>
// 									<div
// 										onClick={e => {
// 											e.stopPropagation()
// 											e.preventDefault()
// 											console.log('Liked!')
// 										}}
// 										className='w-[60px] h-[60px] top-[20px] right-[20px] absolute cursor-pointer rounded-full shadow-lg p-[5px] backdrop-blur-md transition-all duration-300 bg-gradient-to-br from-pink-100 flex items-center justify-center hover:scale-110 active:scale-95 hover:shadow-xl'
// 									>
// 										<GoHeart className='text-[28px] text-red-500 hover:text-red-600 transition-colors duration-300' />
// 									</div>

// 									<img
// 										className='max-w-[200px] max-h-[200px]'
// 										src={product.image}
// 										alt={product.description}
// 									/>
// 								</div>
// 							</Link>
// 							<h2 className='text-[#545D6A] mx-[5px] line-clamp-2 text-[14px] mt-[16px] font-normal font-["Roboto"] leading-[19px]'>
// 								{product.description}
// 							</h2>
// 							<p className='mt-[10px] text-[#0A1729] font-["Roboto"] font-bold text-[20px] leading-[26px]'>
// 								{product.price} <span>usz</span>
// 							</p>
// 							<div className='flex items-end gap-[9px] w-full max-[915px]:flex-col mt-[10px]'>
// 								<div className='px-[10px] py-[7px] bg-[#F02C961A] rounded w-full'>
// 									<p className='text-[#F02C96] text-[14px] font-["Roboto"] font-normal leading-[95%]'>
// 										{product.nasiya} / 1 200 000 usz
// 									</p>
// 								</div>
// 								<div className='flex items-center gap-[9px] mt-[10px]'>
// 									<div className='border border-[#EBEFF3] cursor-pointer min-w-[50px] h-[48px] rounded-[6px] flex items-center justify-center'>
// 										<FaBalanceScaleRight className='text-[20px]' />
// 									</div>
// 									<div className='bg-[#134E9B] cursor-pointer min-w-[50px] h-[48px] rounded-[6px] flex items-center justify-center'>
// 										<FaShopify className='text-[20px] text-[#fff]' />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 		</footer>
// 	)
// }

// export default Footer
