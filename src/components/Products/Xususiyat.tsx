import { useParams } from 'react-router-dom'
import useGetHooks from '../hooks/GetDataHooks'

function Xususiyat() {
	const { id } = useParams()
	const url = import.meta.env.VITE_API_URL
	const { data, isLoading, error } = useGetHooks(`${url}/products/${id}`)
	const { data: data1, isLoading: loading1, error: error1 } = useGetHooks(`${url}/brands/${data?.brand_id}`)

	if (isLoading || loading1) {
		return (
			<div className='fixed w-full h-screen z-50 bg-[#fff]'>
				<div className='flex justify-center items-center h-screen flex-col'>
					<div className='animate-spin rounded-full border-t-4 border-blue-500 border-8 w-16 h-16 mb-4'></div>
					<p className='text-lg text-gray-700'>Loading data...</p>
				</div>
			</div>
		)
	}

	if (error || error1) {
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
		<div className='max-w-[651px] w-full bg-white p-6 rounded-2xl border border-gray-200 shadow-lg font-sans'>
			<div className='flex items-center justify-between border-b pb-4 gap-[20px]'>
				<div>
					<p className='text-xs text-neutral-500 uppercase tracking-wide'>
						Brend
					</p>
					<p className='text-base text-neutral-800 font-medium'>{data1?.name}</p>
				</div>
				<div>
					<p className='text-xs text-neutral-500 uppercase tracking-wide'>
						Kategoriya
					</p>
					<p className='text-base text-neutral-800 font-medium'>
						{data?.category?.name}
					</p>
				</div>
			</div>

			<div className='mt-5'>
				<h2 className='text-2xl font-semibold text-gray-900 mb-2 max-[400px]:text-[20px]'>
					{data?.name}
				</h2>
				<p className='text-sm text-gray-600 mb-4 leading-relaxed'>
					{data?.summary}
				</p>
				<ul className='space-y-1 text-base text-gray-700'>
					<li>
						<span className='font-semibold'>Narxi:</span> {data?.price} uzs
					</li>
					<li>
						<span className='font-semibold'>Nasiya:</span> {data?.nasiya}
					</li>
					<li>
						<span className='font-semibold'>Oyiga:</span>
						{data?.price && data?.nasiya > 0
							? ` (${(data.price / data.nasiya).toLocaleString()} so‘m/oy)`
							: ' (Maʼlumot yo‘q)'}
					</li>
					<li className='flex items-center'>
						<span className='font-semibold'>Reyting:</span>
						<span className='flex ml-2 text-yellow-500'>
							{[...Array(Math.round(data?.rating || 0))].map((_, i) => (
								<span key={i}>⭐</span>
							))}
						</span>
						<span className='ml-2 text-sm text-gray-500'>
							( {data?.rating} )
						</span>
					</li>
				</ul>
				<p className='text-sm text-gray-500 mt-4 italic leading-snug'>
					Tavsif: {data?.description}
				</p>
			</div>
		</div>
	)
}

export default Xususiyat
