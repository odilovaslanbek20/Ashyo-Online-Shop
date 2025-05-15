import { useParams } from 'react-router-dom'
import useGetHooks from '../hooks/GetDataHooks'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsShop } from 'react-icons/bs'
import { LuClock4 } from 'react-icons/lu'
import { useState } from 'react'
import Xususiyat from './Xususiyat'
import Fikrlar from './Fikrlar'

function ProductPage() {
	const { id } = useParams()
	const url = import.meta.env.VITE_API_URL
	const { data, isLoading, error } = useGetHooks(`${url}/products/${id}`)
	const [status, setStatus] = useState<boolean>(true)

	if (isLoading) {
		return (
			<div className='fixed w-full h-screen z-50 bg-[#fff]'>
				<div className='flex justify-center items-center h-screen flex-col'>
					<div className='animate-spin rounded-full border-t-4 border-blue-500 border-8 w-16 h-16 mb-4'></div>
					<p className='text-lg text-gray-700'>Loading data...</p>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='fixed w-full h-screen bg-[#fff] z-50 px-[20px]'>
				<div className='flex justify-center items-center h-[200px]'>
					<div className='bg-red-100 text-red-700 px-4 py-2 rounded-md shadow-md'>
						Malumot topilmadi iltimos keyinroq qayta urinib ko'ring...
					</div>
				</div>
			</div>
		)
	}

	return (
		<>
			<section className='max-w-[1180px] m-auto max-[1220px]:mx-[20px]'>
				<h1 className='text-[32px] max-[500px]:text-[24px] font-["Roboto"] text-[#06172D] font-bold leading-[130%] my-[25px]'>
					{data?.name}
				</h1>
				<div className=''>
					<div className='flex items-start max-[900px]:flex-col gap-[32px]'>
						<div className='w-full'>
							<div className='max-w-[530px] max-[900px]:max-w-full max-h-[430px] max-[400px]:p-[20px] p-[50px] bg-[#EBEFF3] flex items-center justify-center rounded-[10px]'>
								<img
									className='max-w-[500px] max-h-[400px] max-[500px]:w-full'
									src={data?.image}
									alt={data?.summary}
								/>
							</div>
						</div>

						<div className='w-full'>
							<div className='flex items-center max-[475px]:justify-center gap-[20px]'>
								<p className='text-[16px] font-["Roboto"] font-normal text-[#515D6C] leading-[129%]'>
									Narxi
								</p>
								<p className='text-[#06172D] font-["Roboto"] font-bold text-[32px] leading-[120%]'>
									{data?.price}
								</p>
								<p className='text-[#06172D] font-["Roboto"] font-bold text-[24px] leading-[118%] uppercase'>
									usz
								</p>
							</div>
							<div className='grid grid-cols-2 w-full mt-[36px] gap-[10px]'>
								<div className='col-span-2 w-full h-auto py-[15px] bg-[#EBEFF3] rounded-[6px] flex items-center justify-center'>
									<p className='font-["Roboto"] font-normal max-[400px]:text-[15px] text-[#545D6A] text-[16px] leading-[130%]'>
										Oyiga 456 999 uszdan muddatli to’lov
									</p>
								</div>
								<div className='border-1 border-[#134E9B] cursor-pointer hover:shadow-md transition-all duration-300 w-full h-auto py-[15px] flex items-center justify-center rounded-[6px]'>
									<p className='font-["Roboto"] max-[400px]:text-[15px] font-normal text-[#134E9B] text-[16px] leading-[130%]'>
										Savatga qo‘shish
									</p>
								</div>
								<div className='bg-[#134E9B] cursor-pointer hover:bg-[#15139b] transition-all duration-300 w-full h-auto py-[15px] flex items-center justify-center rounded-[6px]'>
									<p className='font-["Roboto"] max-[400px]:text-[15px] font-normal text-[#fff] text-[16px] leading-[130%]'>
										Xarid qilish
									</p>
								</div>
							</div>
							<div className='mt-[43px]'>
								<div className='max-[475px]:flex-col flex items-center gap-[10px]'>
									<TbTruckDelivery className='text-[#65778F] text-[25px]' />
									<p className='text-[#06172DB2] max-[475px]:text-center font-["Roboto"] text-[16px] font-normal leading-[130%]'>
										Yetkazib berish O’zbekiston bo’ylab
									</p>
								</div>
								<div className='max-[475px]:flex-col flex items-center gap-[16px] my-[21px]'>
									<BsShop className='text-[#65778F] text-[20px]' />
									<p className='text-[#06172DB2] max-[475px]:text-center font-["Roboto"] text-[16px] font-normal leading-[130%]'>
										Do’kondi o’zidan olib ketishingiz mumkin
									</p>
								</div>
								<div className='max-[475px]:flex-col flex items-center gap-[16px] my-[21px]'>
									<LuClock4 className='text-[#65778F] text-[23px]' />
									<p className='text-[#06172DB2] max-[475px]:text-center font-["Roboto"] text-[16px] font-normal leading-[130%]'>
										Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='my-[80px] max-[700px]:my-[50px]'>
						<div className='flex items-center justify-start gap-[80px] max-[385px]:gap-[20px] max-[385px]:justify-between mb-[45px]'>
							<div onClick={() => setStatus(true)} className='cursor-pointer'>
								<p
									className={`text-[18px] max-[420px]:text-[16px] max-[325px]:text-[15px] font-["Roboto"] ${
										status
											? 'text-[#06172D] font-bold'
											: 'text-[#515D6C] font-normal'
									} leading-[130%]`}
								>
									Telfon xususiyatlari
								</p>
								<div
									className={`transition-all duration-500 h-[1px] bg-black ${
										status ? 'w-full' : 'w-0'
									}`}
								></div>
							</div>

							<div onClick={() => setStatus(false)} className='cursor-pointer'>
								<p
									className={`text-[18px] max-[420px]:text-[16px] max-[325px]:text-[15px] font-["Roboto"] ${
										!status
											? 'text-[#06172D] font-bold'
											: 'text-[#515D6C] font-normal'
									} leading-[130%]`}
								>
									Mijozlarni fikrlari
								</p>
								<div
									className={`transition-all duration-500 h-[1px] bg-black ${
										!status ? 'w-full' : 'w-0'
									}`}
								></div>
							</div>
						</div>

						{status ? (
							<>
								<Xususiyat />
							</>
						) : (
							<>
								<Fikrlar />
							</>
						)}
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductPage
