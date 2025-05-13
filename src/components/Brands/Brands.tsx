import { useEffect, useState } from 'react'
import useGetHooks from '../hooks/GetDataHooks'

type BrandsType = {
	id: string
	name: string
	image: string
}

function Brands() {
	const url = import.meta.env.VITE_API_URL
	const [isData, setData] = useState<[]>([])
	const { data, isLoading, isError } = useGetHooks(`${url}/brands/all`)

	useEffect(() => {
		setData(data)
	}, [data])

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

	if (isError) {
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
		<section className='max-w-[1180px] mx-auto px-5 my-[100px]'>
			<h2 className='font-["Roboto"] font-bold text-[40px] mb-[10px] text-center'>Brands</h2>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
				{isData?.map((item: BrandsType) => (
					<div
						key={item?.id}
						className='flex items-center cursor-pointer justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6'
					>
						<img
							src={item?.image}
							alt={item?.name}
							className='max-h-[80px] max-w-[100%] object-contain'
						/>
					</div>
				))}

				<div className='flex items-center justify-center bg-blue-50 text-blue-600 font-semibold rounded-xl shadow-md hover:bg-blue-100 transition duration-300 cursor-pointer p-6'>
					Ko‘proq
				</div>
			</div>
		</section>
	)
}

export default Brands
