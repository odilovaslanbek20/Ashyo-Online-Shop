import { useParams } from 'react-router-dom'
import useGetHooks from '../hooks/GetDataHooks'

function ProductPage() {
	const {id} = useParams()
	const url = import.meta.env.VITE_API_URL
	const {data, isLoading, error} = useGetHooks(`${url}/products/${id}`)

	if (isLoading) {
		return (
			<div className="fixed w-full h-screen z-50 bg-[#fff]">
				<div className='flex justify-center items-center h-screen flex-col'>
				<div className='animate-spin rounded-full border-t-4 border-blue-500 border-8 w-16 h-16 mb-4'></div>
				<p className='text-lg text-gray-700'>Loading data...</p>
			</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="fixed w-full h-screen bg-[#fff] z-50 px-[20px]">
				<div className='flex justify-center items-center h-[200px]'>
				<div className='bg-red-100 text-red-700 px-4 py-2 rounded-md shadow-md'>
					Malumot topilmadi iltimos keyinroq qayta urinib ko'ring...
				</div>
			</div>
			</div>
		)
	}

	console.log(data);
	
	
	return (
		<>
		 <section className='max-w-[1180px] m-auto max-[1220px]:mx-[20px]'>
			 <div className="">
				 <div className="">
					 
				 </div>
			 </div>
		 </section>
		</>
	)
}

export default ProductPage