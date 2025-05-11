import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useStore } from '@/zustan/zustan'
import { useEffect, useState } from 'react'
import usePostHooks from '../hooks/PostDataHooks'

export function AuthModalWithTabs() {
	const url = import.meta.env.VITE_API_URL
	const { isOpen, isOpenModal } = useStore()

	const [fullname, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailLogin, setEmailLogin] = useState('')
	const [passwordLogin, setPasswordLogin] = useState('')
	const { response, loading, error, postData } = usePostHooks()

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault()
		const formData = {
			fullname: fullname.trim(),
			email: email.trim(),
			password: password.trim(),
		}
		await postData(`${url}/auth/register`, formData)
	}

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		const formData1 = {
			email: emailLogin.trim(),
			password: passwordLogin.trim(),
		}
		await postData(`${url}/auth/login`, formData1)
	}

	useEffect(() => {
		if (response && response.accessToken) {
			localStorage.setItem('token', response.accessToken)
			isOpenModal(false)
		}
	}, [response, isOpenModal])

	if (loading) {
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

	return (
		<Dialog open={isOpen} onOpenChange={isOpenModal}>
			<DialogContent
				aria-describedby={undefined}
				className='sm:max-w-[450px] max-[450px]:max-w-full max-[450px]:h-screen'
			>
				<DialogHeader>
					<DialogTitle className='max-[450px]:text-start'>Welcome</DialogTitle>
				</DialogHeader>

				<Tabs
					defaultValue='login'
					className='w-full mt-4 max-[450px]:mt-[-350px]'
				>
					<TabsList className='grid w-full grid-cols-2'>
						<TabsTrigger className='cursor-pointer' value='login'>
							Login
						</TabsTrigger>
						<TabsTrigger className='cursor-pointer' value='register'>
							Register
						</TabsTrigger>
					</TabsList>

					<TabsContent value='login'>
						<form onSubmit={handleLogin} className='flex flex-col gap-4 mt-4'>
							<div>
								<Input
								onChange={e => setEmailLogin(e.target.value)}
								type='email'
								placeholder='Email'
								required
							/>
								<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>Malumot kiriting...</p>
							</div>

							<div>
							<Input
								onChange={e => setPasswordLogin(e.target.value)}
								type='password'
								placeholder='Password'
								required
							/>
							<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>Malumot kiriting...</p>
							</div>
							<Button
								disabled={loading}
								type='submit'
								className='w-full bg-[#134E9B] cursor-pointer hover:bg-[#134e9bab]'
							>
								{loading ? 'Tekshirilmoqda...' : 'Login'}
							</Button>
						</form>
					</TabsContent>

					<TabsContent value='register'>
						<form
							onSubmit={handleRegister}
							className='flex flex-col gap-4 mt-4'
						>
							<div className="">
								<Input
								onChange={e => setFullName(e.target.value)}
								type='text'
								placeholder='Name'
								value={fullname}
								required
							/>
							<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>Malumot kiriting...</p>
							</div>
							<div className="">
								<Input
								onChange={e => setEmail(e.target.value)}
								type='email'
								placeholder='Email'
								value={email}
								required
							/>
							<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>Malumot kiriting...</p>
							</div>
							<div className="">
								<Input
								onChange={e => setPassword(e.target.value)}
								type='password'
								placeholder='Password'
								value={password}
								required
							/>
							<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>Malumot kiriting...</p>
							</div>

							<Button
								type='submit'
								disabled={loading}
								className='w-full bg-[#134E9B] cursor-pointer hover:bg-[#134e9bab]'
							>
								{loading ? 'Yuborilmoqda...' : 'Register'}
							</Button>
						</form>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}
