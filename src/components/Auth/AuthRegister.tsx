import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useStore } from '@/zustan/zustan'
import usePostHooks from '../hooks/PostDataHooks'
import { useState } from 'react'

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

export function AuthModalWithTabs() {
	const url = import.meta.env.VITE_API_URL
	const { isOpen, isOpenModal } = useStore()
	const [fullname, setFullName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { response, loading, error, postData } = usePostHooks<AuthResponse>()

	const formData: FormData = {
		fullname,
		email,
		password,
	}

	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await postData(`${url}/auth/register`, formData)

		if (response) {
			localStorage.setItem('token', response.accessToken)
			localStorage.setItem('refreshToken', response.refreshToken)
			isOpenModal()
		}
	}

	return (
		<>
			<Dialog open={isOpen} onOpenChange={isOpenModal}>
				<DialogContent
					aria-describedby={undefined}
					className='sm:max-w-[450px] max-[450px]:max-w-full max-[450px]:h-screen max-[450px]:rounded-none'
				>
					<DialogHeader className='mb-[30px]'>
						<DialogTitle className='max-[450px]:text-start'>
							Welcome
						</DialogTitle>
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
								<p className='text-center text-[#fff]'>
									✅ {response?.message}
								</p>
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
