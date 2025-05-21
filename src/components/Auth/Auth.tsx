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
import usePostHooks from '../hooks/PostDataHooks'
import { useState } from 'react'

type FormData = {
	fullname: string
	email: string
	password: string
}

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export function AuthModalWithTabs() {
	const url = import.meta.env.VITE_API_URL
	const { isOpen, isOpenModal } = useStore()
	const [fullname, setFullName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { response, loading, error, postData } = usePostHooks()

	const formData: FormData = {
		fullname,
		email,
		password,
	}

	if (loading) {
		<p className='text-center'>Loading</p>
	}

	if (error) {
		<p className='text-center'>Error</p>
	}

	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await postData(`${url}/auth/register`, formData)
		
		JSON.stringify(localStorage.setItem("token", response?.accessToken))
		JSON.stringify(localStorage.setItem("refreshToken", response?.refreshToken))
	}

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const sendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const verifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<Dialog open={isOpen} onOpenChange={isOpenModal}>
			<DialogContent
				aria-describedby={undefined}
				className='sm:max-w-[450px] max-[450px]:max-w-full max-[450px]:h-screen max-[450px]:rounded-none'
			>
				<DialogHeader className='mb-[30px]'>
					<DialogTitle className='max-[450px]:text-start'>Welcome</DialogTitle>
				</DialogHeader>

				<Tabs
					defaultValue='login'
					className='w-full mt-4 max-[450px]:mt-[-300px]'
				>
					<TabsList className='grid w-full grid-cols-4'>
						<TabsTrigger value='register'>Register</TabsTrigger>
						<TabsTrigger value='login'>Login</TabsTrigger>
						<TabsTrigger value='send-otp'>Send-Otp</TabsTrigger>
						<TabsTrigger value='verify-otp'>Verify-Otp</TabsTrigger>
					</TabsList>

					<TabsContent value='send-otp'>
						<form onSubmit={sendOtp} className='flex flex-col gap-4 mt-4'>
							<Input
								type='email'
								placeholder="Ro'yxatdan o'tgan emailingizni kiriting..."
							/>
							<Button
								type='submit'
								className='w-full bg-[#134E9B] hover:bg-[#134e9bab]'
							>
								Send-Otp
							</Button>
						</form>
					</TabsContent>

					<TabsContent value='verify-otp'>
						<form onSubmit={verifyOtp} className='flex flex-col gap-4 mt-4'>
							<Input
								type='email'
								placeholder="Ro'yxatdan o'tgan emailingizni kiriting..."
							/>
							<Input type='text' placeholder='Tasdiqlash kodini kiriting...' />
							<Button
								type='submit'
								className='w-full bg-[#134E9B] hover:bg-[#134e9bab]'
							>
								Verify
							</Button>
						</form>
					</TabsContent>

					<TabsContent value='login'>
						<form onSubmit={handleLogin} className='flex flex-col gap-4 mt-4'>
							<Input type='email' placeholder='Email' />
							<Input type='password' placeholder='Password' />
							<Button
								type='submit'
								className='w-full bg-[#134E9B] hover:bg-[#134e9bab]'
							>
								Login
							</Button>
						</form>
					</TabsContent>

					<TabsContent value='register'>
						<form
							onSubmit={handleRegister}
							className='flex flex-col gap-4 mt-4'
						>
							<Input
								type='text'
								placeholder='Name'
								onChange={e => setFullName(e.target.value)}
							/>
							<Input
								type='email'
								placeholder='Email'
								onChange={e => setEmail(e.target.value)}
							/>
							<Input
								type='password'
								placeholder='Password'
								onChange={e => setPassword(e.target.value)}
							/>
							<Button
								type='submit'
								className='w-full bg-[#134E9B] hover:bg-[#134e9bab]'
							>
								Register
							</Button>
						</form>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}
