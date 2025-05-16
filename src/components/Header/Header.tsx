import { ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'
import { BiCategory } from 'react-icons/bi'
import {
	FaBalanceScaleRight,
	FaBars,
	FaHeart,
	FaShopify,
	FaUser,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useGetHooks from '../hooks/GetDataHooks'
import { useStore } from '@/zustan/zustan'
import { AuthModalWithTabs } from '../Auth/Auth'

function Header() {
	const url = import.meta.env.VITE_API_URL
	const { data, isLoading, error } = useGetHooks(`${url}/categories/all`)
	const [isOpens, setIsOpen] = useState<boolean>(false)
	const { toggleModal, isOpenModal } = useStore()

	type Category = {
		id: number
		name: string
	}

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
			<header className='max-w-[1180px] m-auto max-[1220px]:mx-[20px] py-4 flex justify-between items-center gap-[20px] flex-wrap'>
				<div className='flex items-center justify-between max-[620px]:w-full'>
					<Link to='/' className='flex items-center gap-0'>
						<img className='w-[150px]' src='/logotip.png' alt='web logo' />
					</Link>

					<FaBars
						onClick={toggleModal}
						className='text-[25px] cursor-pointer min-[620px]:hidden'
					/>
				</div>

				<div className='flex max-[1170px]:w-full items-center gap-[10px] max-[1170px]:order-2'>
					<div className='relative'>
						<button
							onClick={() => setIsOpen(prev => !prev)}
							className='px-5 max-[500px]:px-[15px] max-[500px]:py-[15px] py-[12px] flex items-center hover:cursor-pointer gap-2 bg-[#134E9B] text-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out'
						>
							<span className='hidden max-[500px]:block'>
								<BiCategory />
							</span>

							<span className='max-[500px]:hidden'>Kategoriyalar</span>

							<ChevronDown
								className={`w-4 h-4 transform max-[500px]:hidden transition-transform ${
									isOpens ? 'rotate-180' : ''
								}`}
							/>
						</button>

						{isOpens && (
							<div className='absolute  hover:cursor-pointer mt-3 w-60 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn z-50'>
								<ul className='divide-y divide-gray-100'>
									{data?.map((category: Category) => (
										<li key={category?.id}>
											<div
												onClick={() => setIsOpen(false)}
												className='block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium'
											>
												{category?.name}
											</div>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					<form className='bg-[#EBEFF3] max-[1170px]:w-full w-[518px] h-[48px] rounded-[6px] flex'>
						<input
							className='w-full h-full outline-none pl-[26px] text-[14px] font-["Roboto"] font-normal text-[#000000ae]'
							type='text'
							placeholder='What are you looking for?'
						/>
						<div className='w-[60px] max-[372px]:hidden hover:cursor-pointer h-full bg-[#134E9B] rounded-[6px] flex items-center justify-center'>
							<Search className='text-[20px] text-[#fff]' />
						</div>
					</form>
				</div>

				<div className='flex items-center gap-[15px] max-[620px]:w-full max-[620px]:justify-around max-[1170px]:order-1'>
					<div className='bg-[#EBEFF3] cursor-pointer w-[50px] h-[48px] rounded-[6px] flex items-center justify-center relative'>
						<FaBalanceScaleRight className='text-[20px]' />
						<div className='absolute px-[7px] h-[20px] top-[-8px] right-[-8px] text-[#fff] rounded-full flex items-center justify-center font-["Roboto"] font-bold text-[10px] bg-[#E81504]'>
							2
						</div>
					</div>
					<div className='bg-[#EBEFF3] cursor-pointer w-[50px] h-[48px] rounded-[6px] flex items-center justify-center relative'>
						<FaHeart className='text-[20px]' />
						<div className='absolute px-[7px] h-[20px] top-[-8px] right-[-8px] text-[#fff] rounded-full flex items-center justify-center font-["Roboto"] font-bold text-[10px] bg-[#E81504]'>
							2
						</div>
					</div>
					<Link to="/addToCards">
						<div className='bg-[#EBEFF3] cursor-pointer w-[50px] h-[48px] rounded-[6px] flex items-center justify-center relative'>
							<FaShopify className='text-[20px]' />
							<div className='absolute px-[7px] h-[20px] top-[-8px] right-[-8px] text-[#fff] rounded-full flex items-center justify-center font-["Roboto"] font-bold text-[10px] bg-[#E81504]'>
								2
							</div>
						</div>
					</Link>
					<div
						onClick={isOpenModal}
						className='bg-[#EBEFF3] cursor-pointer w-[50px] h-[48px] rounded-[6px] flex items-center justify-center'
					>
						<FaUser className='text-[20px]' />
					</div>
				</div>
			</header>
			<AuthModalWithTabs />
		</>
	)
}

export default Header
