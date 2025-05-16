import { GoHeart } from 'react-icons/go'
import { MdDelete } from 'react-icons/md'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Savatcha() {
	const [count, setCount] = useState<number>(1) 

	const increment = () => {
		setCount(prev => prev + 1)
	}

	const decrement = () => {
		if (count > 1) {
			setCount(prev => prev - 1)
		}
	}

	return (
		<>
			<section className='max-w-[1180px] m-auto max-[1220px]:mx-[20px]'>
				<h1 className='text-[32px] font-["Roboto"] font-black text-[#06172D] leading-[130%] my-[20px]'>
					Savat
				</h1>
				<div className='flex items-start gap-[50px] max-[1000px]:flex-col'>
					<div className='w-full flex gap-[30px] max-[625px]:flex-col border-b pb-[10px]'>
						<div className='flex items-center justify-center min-w-[180px] max-[1040px]:min-w-[150px] h-full rounded-[7px] bg-[#EBEFF3]'>
							<img
								className='w-[140px] h-[130px] max-[625px]:w-[250px] max-[625px]:h-[250px] max-[370px]:h-[200px] max-[370px]:w-[200px]'
								src='/macbookprom2.png'
								alt='cards photo'
							/>
						</div>

						<div className='w-full'>
							<div className='flex items-center justify-between w-full gap-[20px] max-[410px]:flex-col'>
								<p className='text-[#545D6A] max-[500px]:text-[17px] text-[18px] font-["Roboto"] max-[410px]:text-center font-normal leading-[24px]'>
									Смартфон Xiaomi 12 Lite 8/128Gb qora
								</p>
								<p className='text-[24px] max-[500px]:text-[20px] text-right min-w-[150px] font-bold text-[#06172D] font-["Roboto"] leading-[118%]'>
									2 470 000
									<span className='ml-[5px] text-[14px] font-normal text-[#06172D] font-["Roboto"] leading-[130%]'>
										uzs
									</span>
								</p>
							</div>

							<div className='flex items-center justify-between py-[20px]'>
								<div className='flex items-center gap-[10px]'>
									<div className='w-[40px] h-[40px] max-[500px]:w-[35px] max-[500px]:h-[35px] flex items-center justify-center rounded-[6px] bg-[#EBEFF3]'>
										<GoHeart className='text-[20px]' />
									</div>
									<div className='w-[40px] h-[40px] max-[500px]:w-[35px] max-[500px]:h-[35px] flex items-center justify-center rounded-[6px] bg-[#EBEFF3]'>
										<MdDelete className='text-[20px]' />
									</div>
								</div>

								<div className='flex items-center gap-[10px]'>
									<div
										onClick={decrement}
										className='w-[40px] h-[40px] max-[500px]:w-[35px] max-[500px]:h-[35px] flex items-center justify-center rounded-[6px] bg-[#EBEFF3] cursor-pointer'
									>
										<FaMinus className='text-[20px] text-[#545D6A]' />
									</div>
									<p className='text-[#697B92] max-[500px]:text-[20px] font-["Roboto"] font-normal text-[24px] leading-[130%]'>
										{count}
									</p>
									<div
										onClick={increment}
										className='w-[40px] h-[40px] max-[500px]:w-[35px] max-[500px]:h-[35px] flex items-center justify-center rounded-[6px] bg-[#EBEFF3] cursor-pointer'
									>
										<FaPlus className='text-[20px] text-[#545D6A]' />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="max-[1000px]:flex max-[1000px]:justify-center max-[1000px]:w-full">
						<div className='min-w-[340px] max-w-[340px] max-[1000px]:min-w-full max-[1000px]:max-w-full bg-[#EBEFF3] py-10 px-6 rounded-xl shadow-md'>
						<p className='font-["Roboto"] font-semibold text-[#000000] text-[18px] text-center mb-6'>
							Sizning xaridingiz
						</p>

						<div className='flex justify-between mb-4 text-[14px] text-[#333]'>
							<p>Yetkazib berish:</p>
							<p className='font-medium'>BEPUL</p>
						</div>

						<div className='flex justify-between items-center mb-8 max-[500px]:flex-col w-full'>
							<p className='text-[16px] text-[#333] max-[500px]:text-left w-full'>Jami summa:</p>
							<p className='text-[#000000] font-["Roboto"] w-full max-[500px]:text-right font-bold text-[22px] max-[500px]:text-[19px]'>
								{(2470000 * count).toLocaleString('ru-RU')}
								<span className='text-[14px] font-medium text-[#666]'> UZS</span>
							</p>
						</div>

						<Link to='#'>
							<div className='w-full h-[56px] max-[500px]:h-[45px] bg-[#134E9B] flex items-center justify-center rounded-[8px] hover:bg-[#0f3f7e] transition duration-200'>
								<p className='text-white font-["Roboto"] text-[16px] font-medium'>
									Hoziroq sotib olish
								</p>
							</div>
						</Link>
					</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Savatcha
