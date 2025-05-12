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

	const [fullname, setFullName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [emailLogin, setEmailLogin] = useState<string>('')
	const [passwordLogin, setPasswordLogin] = useState<string>('')
	const [loginErrors, setLoginErrors] = useState({
		email: false,
		password: false,
	})
	const [registerErrors, setRegisterErrors] = useState({
		fullname: false,
		email: false,
		password: false,
	})

	const { response, loading, error, postData } = usePostHooks()
	const {
		response: response1,
		loading: loading1,
		error: error1,
		postData: post,
	} = usePostHooks()

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault()

		const errors = {
			fullname: fullname.trim() === '',
			email: email.trim() === '',
			password: password.trim() === '',
		}
		setRegisterErrors(errors)

		if (errors.fullname || errors.email || errors.password) return

		const formData = {
			fullname,
			email,
			password,
		}
		await postData(`${url}/auth/register`, formData)
	}

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()

		const errors = {
			email: emailLogin.trim() === '',
			password: passwordLogin.trim() === '',
		}
		setLoginErrors(errors)

		if (errors.email || errors.password) return

		const formData1 = {
			fullname,
			email: emailLogin.trim(),
			password: passwordLogin.trim(),
		}
		await post(`${url}/auth/login`, formData1)
	}

	console.log(response);
	

	useEffect(() => {
		const token = response?.accessToken || response1?.accessToken
		if (token) {
			localStorage.setItem('token', token)
			isOpenModal()
		}
	}, [response, response1, isOpenModal])

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
					className='w-full mt-4 max-[450px]:mt-[-300px]'
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
									onChange={e => {
										setEmailLogin(e.target.value)
										if (loginErrors.email) {
											setLoginErrors(prev => ({ ...prev, email: false }))
										}
									}}
									type='email'
									placeholder='Email'
								/>
								{loginErrors.email && (
									<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>
										Email kiriting...
									</p>
								)}
							</div>

							<div>
								<Input
									onChange={e => {
										setPasswordLogin(e.target.value)
										if (loginErrors.password) {
											setLoginErrors(prev => ({ ...prev, password: false }))
										}
									}}
									type='password'
									placeholder='Password'
								/>
								{loginErrors.password && (
									<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>
										Parol kiriting...
									</p>
								)}
							</div>

							<Button
								disabled={loading1}
								type='submit'
								className='w-full bg-[#134E9B] cursor-pointer hover:bg-[#134e9bab]'
							>
								{loading1 ? 'Tekshirilmoqda...' : 'Login'}
							</Button>
							{error1 && (
								<div className='w-full p-[10px] rounded bg-red-500'>
									<p className='text-white text-[15px] font-normal font-["Roboto"]'>
										{error1}
									</p>
								</div>
							)}
						</form>
					</TabsContent>

					<TabsContent value='register'>
						<form
							onSubmit={handleRegister}
							className='flex flex-col gap-4 mt-4'
						>
							<div>
								<Input
									onChange={e => {
										setFullName(e.target.value)
										if (registerErrors.fullname) {
											setRegisterErrors(prev => ({ ...prev, fullname: false }))
										}
									}}
									type='text'
									placeholder='Name'
									value={fullname}
								/>
								{registerErrors.fullname && (
									<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>
										Ism kiriting...
									</p>
								)}
							</div>

							<div>
								<Input
									onChange={e => {
										setEmail(e.target.value)
										if (registerErrors.email) {
											setRegisterErrors(prev => ({ ...prev, email: false }))
										}
									}}
									type='email'
									placeholder='Email'
									value={email}
								/>
								{registerErrors.email && (
									<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>
										Email kiriting...
									</p>
								)}
							</div>

							<div>
								<Input
									onChange={e => {
										setPassword(e.target.value)
										if (registerErrors.password) {
											setRegisterErrors(prev => ({ ...prev, password: false }))
										}
									}}
									type='password'
									placeholder='Password'
									value={password}
								/>
								{registerErrors.password && (
									<p className='text-[13px] font-["Roboto"] font-normal text-red-500 my-[5px]'>
										Parol kiriting...
									</p>
								)}
							</div>

							<Button
								type='submit'
								disabled={loading}
								className='w-full bg-[#134E9B] cursor-pointer hover:bg-[#134e9bab]'
							>
								{loading ? 'Yuborilmoqda...' : 'Register'}
							</Button>
							{error && (
								<div className='w-full p-[10px] rounded bg-red-500'>
									<p className='text-white text-[15px] font-normal font-["Roboto"]'>
										{error}
									</p>
								</div>
							)}
						</form>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}
