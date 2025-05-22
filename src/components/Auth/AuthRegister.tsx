import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useStore } from '@/zustan/zustan'
import { useEffect, useState } from 'react'
import usePostHooks from '../hooks/PostDataHooks'
import { useNavigate } from 'react-router-dom'

type FormData = {
	fullname: string
	email: string
	password: string
}

type AuthResponse = {
	accessToken: string
	refreshToken: string
	message: string
}

type tokens = {
	accessToken: string
	refreshToken: string
}

export function AuthModalWithTabs() {
	const url = import.meta.env.VITE_API_URL
	const { isOpen, isOpenModal } = useStore()
	const [fullname, setFullName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { response, loading, error, postData } = usePostHooks<AuthResponse>()
	const navigate = useNavigate()

	const formData: FormData = {
		fullname,
		email,
		password,
	}

	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await postData(`${url}/auth/register`, formData)
		isOpenModal() 
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (!token) {
			navigate('/')
			isOpenModal()
		}
	}, [navigate, isOpenModal])

	useEffect(() => {
		if (response?.accessToken && response?.refreshToken) {
			const tokenAll: tokens = {
				accessToken: response.accessToken,
				refreshToken: response.refreshToken,
			}
			localStorage.setItem('token', JSON.stringify(tokenAll))
			navigate('/otp')
		}
	}, [response, isOpenModal, navigate])

	return (
		<>
			<Dialog open={isOpen} onOpenChange={isOpenModal}>
				<DialogContent
					aria-describedby={undefined}
					className='sm:max-w-[450px] max-[450px]:max-w-full max-[450px]:h-screen max-[450px]:rounded-none'
				>
					<DialogHeader className='mb-[30px]'>
						<DialogTitle className='max-[450px]:text-start'>Welcome</DialogTitle>
					</DialogHeader>

					<form
						onSubmit={handleRegister}
						className='flex flex-col gap-4 mt-4 w-full'
					>
						<Input
							type='text'
							placeholder='Name'
							value={fullname}
							onChange={e => setFullName(e.target.value)}
							required
						/>
						<Input
							type='email'
							placeholder='Email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
						<Input
							type='password'
							placeholder='Password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>

						<Button
							type='submit'
							className='w-full bg-[#134E9B] hover:bg-[#134e9bab]'
							disabled={loading}
						>
							{loading ? 'Loading...' : 'Register'}
						</Button>

						{response && (
							<div className='w-full h-auto py-[10px] bg-green-500 rounded'>
								<p className='text-center text-[#fff]'>✅ {response?.message}</p>
							</div>
						)}

						{error && (
							<div className='w-full h-auto py-[10px] bg-green-500 rounded'>
								<p className='text-center text-red-500'>❌ {error}</p>
							</div>
						)}
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
}
