import { useEffect, useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom'
import { FaXmark } from 'react-icons/fa6'
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui/select'
import { useStore } from '@/zustan/zustan'


function Navbar() {
	const [activeLink, setActiveLink] = useState<string>('')
	const [selectText, setSelectText] = useState<string>("UZ")
	const {isModal, toggleModal} = useStore()

	const handleLink = (link: string) => {
		setActiveLink(link)
	}

	const location = useLocation()

useEffect(() => {
  const path = location.pathname
  if (path.includes('products')) {
    setActiveLink('products')
  } else if (path.includes('contacts')) {
    setActiveLink('contacts')
  } else if (path.includes('about')) {
    setActiveLink('about')
  } else {
    setActiveLink('')
  }
}, [location.pathname])


	const linkClass = (name: string) =>
		`group ${activeLink === name ? 'text-black' : ''}`

	return (
		<section className='bg-[#EBEFF3] py-[11px]'>
			<div className='max-w-[1180px] m-auto max-[1220px]:mx-[20px] flex items-center justify-between'>
				<div className='flex items-center gap-[28px]'>
					<Link to='#' className='flex items-center gap-[12px]'>
						<GrLocation className='text-[20px]' />
						<p className='text-[14px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
							Tashkent
						</p>
					</Link>

					<div
						className={`flex items-center gap-[15px] max-[620px]:fixed max-[620px]:top-0 ${
							isModal ? 'max-[620px]:right-0' : 'max-[620px]:right-[-100%]'
						} max-[620px]:w-[280px] max-[620px]:h-screen max-[620px]:bg-[#EBEFF3] max-[620px]:z-50 max-[620px]:shadow max-[570px]:flex max-[620px]:items-center max-[620px]:justify-start max-[620px]:flex-col max-[620px]:pt-[40px] transition-all duration-500`}
					>
						<FaXmark
							onClick={toggleModal}
							className='min-[620px]:hidden absolute top-[10px] left-[15px] text-[25px] cursor-pointer'
						/>
						<Link
							onClick={() => handleLink('about')}
							className={linkClass('about')}
							tabIndex={0}
							to='#'
						>
							<p className='text-[14px] max-[620px]:text-[18px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
								About Us
							</p>
							<div
								className={`h-[1px] ${
									activeLink === 'about' ? 'w-full' : 'w-0'
								} transition-all bg-[#545D6A]`}
							></div>
						</Link>
						<Link
							onClick={() => handleLink('products')}
							className={linkClass('products')}
							tabIndex={0}
							to='/products'
						>
							<p className='text-[14px] max-[620px]:text-[18px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
								Products
							</p>
							<div
								className={`h-[1px] ${
									activeLink === 'products' ? 'w-full' : 'w-0'
								} transition-all bg-[#545D6A]`}
							></div>
						</Link>
						<Link
							onClick={() => handleLink('contacts')}
							className={linkClass('contacts')}
							tabIndex={0}
							to='#'
						>
							<p className='text-[14px] max-[620px]:text-[18px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
								Contacts
							</p>
							<div
								className={`h-[1px] ${
									activeLink === 'contacts' ? 'w-full' : 'w-0'
								} transition-all bg-[#545D6A]`}
							></div>
						</Link>
						<a
						className='text-[14px] min-[451px]:hidden font-["Roboto"] font-semibold text-[#545D6A] leading-[130%]'
						href='tel:+998711234567'
					>
						+998 (71) 123-45-67
					</a>
					</div>
				</div>

				<div className='flex items-center gap-[20px]'>
					<a
						className='text-[14px] max-[451px]:hidden font-["Roboto"] font-semibold text-[#545D6A] leading-[130%]'
						href='tel:+998711234567'
					>
						+998 (71) 123-45-67
					</a>
					<div className=''>
						<Select onValueChange={value => console.log(value)}>
							<SelectTrigger className='w-[80px]'>
								<SelectValue placeholder={selectText} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem onClick={() => setSelectText('UZ')} value='uz'>UZ</SelectItem>
								<SelectItem onClick={() => setSelectText('ING')} value='ing'>ING</SelectItem>
								<SelectItem onClick={() => setSelectText('RU')} value='ru'>RU</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navbar
