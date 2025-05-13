import { useState } from 'react'
import { FaBalanceScaleRight, FaShopify } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { GoHeart } from 'react-icons/go'
import { IoIosColorFilter } from 'react-icons/io'
import { useSearchParams } from 'react-router-dom'
import useGetHooks from '../hooks/GetDataHooks'
import { PriceRangeSlider } from '../Slider/slider'

type Product = {
	variationOption: any
	id: string
	image: string
	nasiya: string
	price: number
	description: string
	category: string
	name: string
	brand_id: string
}

type Category = {
	id: string
	name: string
	product_item: Product[]
	configurations: Product[]
	category: string
}

function Products() {
	const url = import.meta.env.VITE_API_URL
	const { data, isLoading, error } = useGetHooks(`${url}/products`)
	const {
		data: data1,
		isLoading: loading1,
		error: error1,
	} = useGetHooks(`${url}/categories/all?limit=10`)
	const {
		data: data2,
		isLoading: loading2,
		error: error2,
	} = useGetHooks(`${url}/brands/all`)
	const [modal, setModal] = useState<boolean>(false)
	const [range, setRange] = useState<[number, number]>([0, 1000000])

	const [searchParams, setSearchParams] = useSearchParams()
	const [searchParams1, setSearchParams1] = useSearchParams()
	const currentCategory = searchParams.get('category')
	const currentBrand = searchParams1.get('brand')

	const filteredProducts =
		currentCategory && currentCategory !== 'all'
			? data?.items?.filter(
					(item: any) => item?.category?.name === currentCategory
			  )
			: data?.items

	const filteredProductsBrands =
		currentBrand && currentBrand !== 'all'
			? filteredProducts?.filter(
					(item: Product) => String(item?.brand_id) === currentBrand
			  )
			: filteredProducts

	const filteredByPrice = filteredProductsBrands?.filter(
		(product: Product) => product.price >= range[0] && product.price <= range[1]
	)

	if (isLoading || loading1 || loading2) {
		return (
			<div className='fixed w-full h-screen z-50 bg-[#fff]'>
				<div className='flex justify-center items-center h-screen flex-col'>
					<div className='animate-spin rounded-full border-t-4 border-blue-500 border-8 w-16 h-16 mb-4'></div>
					<p className='text-lg text-gray-700'>Loading data...</p>
				</div>
			</div>
		)
	}

	if (error || error1 || error2) {
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

	console.log(data?.items)

	const handleCategoryClick = (category: string) => {
		setSearchParams({ category })
	}

	const handleBrandsClick = (brand: string) => {
		setSearchParams1({ brand })
	}

	return (
		<>
			<section className='max-w-[1180px] m-auto max-[1220px]:mx-[20px] flex items-start gap-[21px]'>
				<div
					className={`bg-[#EBEFF3] min-w-[280px] max-w-[300px] p-[18px] rounded-[8px] max-[850px]:fixed max-[850px]:top-0 max-[850px]:rounded-[0px] shadow-md transition-all duration-700 max-[850px]:z-[9999] max-[850px]:h-screen ${
						modal ? 'left-0' : 'left-[-100%]'
					}`}
				>
					<FaXmark
						onClick={() => setModal(!modal)}
						className='min-[850px]:hidden cursor-pointer text-[25px] absolute top-[10px] right-[10px]'
					/>
					<div className='max-[850px]:mt-[20px]'>
						<div className='flex gap-[4px] items-center'>
							<h1 className='font-medium font-["Roboto"] text-[#000000] text-[16px] leading-[34px]'>
								Narx
							</h1>
							<p className='font-normal font-["Roboto"] text-[#000000] text-[14px] leading-[34px]'>
								[so'm]
							</p>
						</div>

						<div className='w-full flex items-center gap-[4px]'>
							<div className='w-full'>
								<p className='text-[14px] text-[#00000066] font-["Roboto"] font-normal leading-[20px]'>
									...dan
								</p>
								<div className='w-full h-[48px] bg-[#FFFFFF] flex items-center justify-center rounded'>
									<p className='text-[#00000099]'>
										{range[0].toLocaleString()}
									</p>
								</div>
							</div>
							<div className='w-full'>
								<p className='text-[14px] text-[#00000066] font-["Roboto"] font-normal leading-[20px]'>
									...gacha
								</p>
								<div className='w-full h-[48px] bg-[#FFFFFF] flex items-center justify-center rounded'>
									<p className='text-[#00000099]'>
										{range[1].toLocaleString()}
									</p>
								</div>
							</div>
						</div>

						<div className='max-w-xl mx-auto p-4'>
							<PriceRangeSlider
								value={range}
								onChange={newRange => setRange(newRange)}
								min={0}
								max={1000000}
								step={10000}
							/>
						</div>

						<div className='w-full mb-[30px]'>
							<h2 className='font-medium mb-[5px] font-["Roboto"] text-[#000000] text-[16px] leading-[34px]'>
								Kategoriya
							</h2>
							<div className='flex flex-wrap gap-[5px]'>
								{data1?.map((brand: Category) => {
									const isActive = currentCategory !== brand?.name
									return (
										<div
											onClick={() => handleCategoryClick(brand?.name)}
											key={brand?.id}
											className={`py-[8px] cursor-pointer px-[18px] rounded-[30px] ${
												isActive
													? 'bg-[#fff] text-[#0A1729]'
													: 'bg-[#15509E] text-white'
											}`}
										>
											<p className='font-["Roboto"] font-normal text-[12px]'>
												{brand?.name}
											</p>
										</div>
									)
								})}
								<div
									onClick={() => setSearchParams({})}
									className={`py-[8px] cursor-pointer px-[18px] rounded-[30px] ${
										!currentCategory
											? 'bg-[#15509E] text-white'
											: 'bg-[#fff] text-[#0A1729]'
									}`}
								>
									<p className='font-["Roboto"] font-normal text-[12px]'>All</p>
								</div>
							</div>
						</div>

						<div className=''>
							<h2 className='font-medium mb-[5px] font-["Roboto"] text-[#000000] text-[16px] leading-[34px]'>
								Brand
							</h2>
							<div className='flex flex-wrap gap-[5px]'>
								{data2?.map((brand: Category) => {
									const isBrandActive = currentBrand === brand?.id 

									return (
										<div
											onClick={() => handleBrandsClick(brand?.id)}
											key={brand?.id}
											className={`py-[8px] cursor-pointer px-[18px] rounded-[30px] ${
												isBrandActive
													? 'bg-[#fff] text-[#0A1729]' 
													: 'bg-[#15509E] text-white'
											}`}
										>
											<p className='font-["Roboto"] font-normal text-[12px]'>
												{brand?.name}
											</p>
										</div>
									)
								})}

								<div
									onClick={() => setSearchParams({})}
									className='py-[8px] cursor-pointer px-[18px] rounded-[30px]  bg-[#fff] text-[#0A1729]'
								>
									<p className='font-["Roboto"] font-normal text-[12px]'>All</p>
								</div>
							</div>
						</div>
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
					<div className='grid grid-cols-3 gap-[30px] w-full max-[1100px]:grid-cols-2 max-[850px]:grid-cols-3 max-[690px]:grid-cols-2 max-[500px]:grid-cols-2 max-[500px]:gap-[20px] max-[400px]:grid-cols-1'>
						{filteredByPrice?.map((product: Product) => (
							<div
								key={product?.id}
								className='max-w-full max-[450px]:mb-[20px] max-[415px]:mb-[30px] max-[400px]:mt-[-10px] mb-[10px]'
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
								<hr className='min-[400px]:hidden' />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Products
