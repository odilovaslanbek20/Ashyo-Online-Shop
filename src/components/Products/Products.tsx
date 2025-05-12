import { FaBalanceScaleRight, FaShopify } from 'react-icons/fa'
import useGetHooks from '../hooks/GetDataHooks'
import { useState } from 'react'
import { IoIosColorFilter } from 'react-icons/io'
import { FaXmark } from 'react-icons/fa6'
import { GoHeart } from 'react-icons/go'

type Product = {
	id: string
	summary: string
	image: string
	nasiya: string
	price: number
	description: string
}

function Products() {
	const url = import.meta.env.VITE_API_URL
	const { data, isLoading, error } = useGetHooks(`${url}/products`)
	const [modal, setModal] = useState<boolean>(false)

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
			<section className='max-w-[1180px] m-auto max-[1220px]:mx-[20px] flex items-start gap-[21px]'>
				<div
					className={`bg-[#EBEFF3] min-w-[280px] max-w-[280px] p-[18px] rounded-[8px] max-[850px]:fixed max-[850px]:top-0 max-[850px]:rounded-[0px] shadow-md transition-all duration-700 z-40 ${
						modal ? 'left-0' : 'left-[-100%]'
					}`}
				>
					<FaXmark
						onClick={() => setModal(!modal)}
						className='min-[850px]:hidden cursor-pointer text-[25px] absolute top-[10px] right-[10px]'
					/>
					<div className='max-[850px]:mt-[20px]'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea,
						consequatur reiciendis sit saepe eius repudiandae veritatis totam.
						Corrupti, hic a, ab repudiandae optio praesentium voluptatum
						blanditiis tenetur veniam, nisi officiis veritatis beatae est?
						Suscipit distinctio in pariatur vitae, voluptatum dolorem officia
						inventore nisi perspiciatis? Libero explicabo obcaecati consequatur
						tempore non, deserunt quod consequuntur architecto, ducimus
						voluptatem reprehenderit. Rerum quisquam iusto debitis et
						exercitationem tempora nesciunt ipsam atque beatae, culpa eaque
						adipisci a ducimus recusandae, voluptates natus voluptatem repellat
						est ipsa ex molestias? Voluptatem nostrum nihil in voluptate impedit
						veritatis enim dicta incidunt mollitia saepe numquam ipsum pariatur
						harum, delectus culpa nemo velit est laudantium! Mollitia qui, fugit
						cupiditate deserunt tempora obcaecati nesciunt pariatur, officia,
						reprehenderit molestias aspernatur dignissimos dolor officiis
						quisquam at saepe natus totam dolorem? Nulla voluptas sed atque
						similique odit cum maxime repudiandae minima voluptatem eius quas
						corporis illo assumenda dignissimos quo ex aliquam recusandae
						maiores animi, autem excepturi. Nemo impedit aliquam earum id
						quibusdam exercitationem ipsum vitae reiciendis minus, explicabo
						ullam culpa quam nobis dolorum totam, maiores perspiciatis
						voluptates molestiae quas pariatur aperiam! Ex aspernatur, eveniet
						possimus eos beatae totam illo eligendi maiores optio fuga ratione.
						Ea, in eos? Sint iure possimus deserunt hic cumque et.
					</div>
				</div>
				<div className='w-full'>
					<div className='min-[850px]:hidden my-[27px] flex items-center justify-between'>
						<div className=''>
							<p className='text-[20px] font-["Roboto"] font-bold '>Filter</p>
						</div>
						<div
							onClick={() => setModal(!modal)}
							className='w-[45px] h-[38px] rounded bg-[#15509E] flex items-center justify-center cursor-pointer'
						>
							<IoIosColorFilter className='text-[#fff] text-[25px]' />
						</div>
					</div>
					<div className='grid grid-cols-2 gap-[30px] w-full max-[1100px]:grid-cols-2 max-[850px]:grid-cols-3 max-[690px]:grid-cols-2 max-[500px]:grid-cols-2 max-[500px]:gap-[20px] max-[400px]:grid-cols-1'>
						{data?.items?.map((product: Product) => (
							<div
								key={product?.id}
								className='max-w-full max-[450px]:mb-[20px] max-[415px]:mb-[30px]'
							>
								<div className='bg-[#EBEFF3] rounded-[8px] p-[30px] m[30px] max-w-full max-h-[270px] max-[730px]:max-h-[250px] max-[500px]:max-h-[200px] h-full relative flex items-center justify-center'>
									<div className='max-[800px]:w-[50px] max-[800px]:h-[50px] w-[60px] h-[60px] top-[20px] right-[20px] absolute cursor-pointer rounded-full shadow-lg p-[5px] backdrop-blur-md transition-all duration-300 bg-gradient-to-br from-pink-100 flex items-center justify-center hover:scale-110 active:scale-95 hover:shadow-xl'>
										<GoHeart className='text-[28px] text-red-500 hover:text-red-600 transition-colors duration-300' />
									</div>
									<img
										className='max-w-[200px] max-[500px]:max-w-full max-[500px]:max-h-[150px] max-h-[200px]'
										src={product?.image}
										alt={product?.description}
									/>
								</div>
								<h2 className='text-[#545D6A] max-[400px]:mb-[8px] mx-[5px] line-clamp-2 text-[14px] mt-[16px] font-normal font-["Roboto"] leading-[19px]'>
									{product?.description}
								</h2>
								<p className='max-[400px]:hidden mt-[28px] mb-[10px] text-[#0A1729] font-["Roboto"] font-bold text-[20px] leading-[26px]'>
									{product?.price} <span>usz</span>
								</p>
								<div className='flex items-end gap-[9px] w-full max-[915px]:flex-col'>
									<div className='px-[10px] py-[7px] bg-[#F02C961A] rounded w-full'>
										<p className='text-[#F02C96] text-[14px] font-["Roboto"] font-normal leading-[95%]'>
											{product?.nasiya} / 1 200 000 usz
										</p>
									</div>
									<div className='flex items-center max-[400px]:justify-between max-[400px]:w-full gap-[9px]'>
										<div className='border border-[#EBEFF3] cursor-pointer min-w-[50px] h-[48px] rounded-[6px] flex items-center justify-center relative'>
											<FaBalanceScaleRight className='text-[20px]' />
										</div>

										<p className='min-[400px]:hidden mt-[28px] mb-[10px] text-[#0A1729] font-["Roboto"] font-bold text-[20px] leading-[26px]'>
											{product?.price} <span>usz</span>
										</p>

										<div className='bg-[#134E9B] cursor-pointer min-w-[50px] h-[48px] rounded-[6px] flex items-center justify-center relative'>
											<FaShopify className='text-[20px] text-[#fff]' />
										</div>
									</div>
								</div>
								<hr />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Products
