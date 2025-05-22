import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import usePostHooks from '../hooks/PostDataHooks'
import { useState } from 'react'

type OtpResponse = {
	message: string
}

type SendOtpProps = {
	open: boolean
	onOpenChange: () => void
}

export function SendOtp({ open, onOpenChange }: SendOtpProps) {
	const url = import.meta.env.VITE_API_URL
	const [email, setEmail] = useState<string>('')
	const { response, loading, error, postData } = usePostHooks<OtpResponse>()

	const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await postData(`${url}/auth/send-otp`, { email })
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				aria-describedby={undefined}
				className='sm:max-w-[400px] max-[450px]:max-w-full max-[450px]:h-screen max-[450px]:rounded-none'
			>
				<DialogHeader className='mb-6'>
					<DialogTitle className='text-center max-[450px]:text-start text-xl'>
						Email orqali OTP yuborish
					</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSendOtp} className='flex flex-col gap-4 w-full'>
					<Input
						type='email'
						placeholder='Emailingizni kiriting'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>

					<Button
						type='submit'
						className='w-full bg-[#134E9B] hover:bg-[#134e9bab]'
						disabled={loading}
					>
						{loading ? 'Yuborilmoqda...' : 'OTP yuborish'}
					</Button>

					{response?.message && (
						<p className='text-green-600 text-center'>
							{response.message}
						</p>
					)}
					{error && (
						<p className='text-red-500 text-center'>Xatolik yuz berdi!</p>
					)}
				</form>
			</DialogContent>
		</Dialog>
	)
}
