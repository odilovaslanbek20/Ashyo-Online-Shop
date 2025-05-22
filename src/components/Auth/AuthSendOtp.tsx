import { useState, useEffect } from 'react'
import usePostHooks from '../hooks/PostDataHooks'

type OtpResponse = {
	message: string
	status: string
}

type VerifyResponse = {
	message: string
	token?: string
}

export default function OtpForm() {
	const url = import.meta.env.VITE_API_URL

	const [email, setEmail] = useState('')
	const [otp, setOtp] = useState('')
	const [showMessage, setShowMessage] = useState<string | null>(null)
	const [step, setStep] = useState<'send' | 'verify'>('send')

	const {
		response: sendResponse,
		loading: sending,
		error: sendError,
		status: sendStatus,
		postData: sendOtp,
	} = usePostHooks<OtpResponse>()

	const {
		response: verifyResponse,
		loading: verifying,
		error: verifyError,
		postData: verifyOtp,
	} = usePostHooks<VerifyResponse>()

	useEffect(() => {
		const savedEmail = localStorage.getItem('email')
		if (savedEmail) setEmail(savedEmail)

		const storedRes = localStorage.getItem('res')
		if (storedRes) {
			const parsed = JSON.parse(storedRes)
			if (parsed?.message) {
				setShowMessage(parsed.message)
			}
		}
	}, [])

	const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await sendOtp(`${url}/auth/send-otp`, { email })

		if (sendResponse?.message) {
			localStorage.setItem('res', JSON.stringify(sendResponse))
			localStorage.setItem('email', email)
			setShowMessage(sendResponse.message)
			setStep('verify')
		}
	}

	const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await verifyOtp(`${url}/auth/verify-otp`, { email, otp })

		if (verifyResponse?.message) {
			setShowMessage(verifyResponse.message)
			if (verifyResponse.token) {
				localStorage.setItem('token', verifyResponse.token)
			}
		}
	}

	useEffect(() => {
		if (showMessage) {
			const timer = setTimeout(() => {
				setShowMessage(null)
				localStorage.removeItem('res')
			}, 2000)
			return () => clearTimeout(timer)
		}
	}, [showMessage])

	useEffect(() => {
		if (sendStatus === '200') {
			setStep('verify')
		}
	}, [sendStatus])

	return (
		<section className='flex justify-center px-4 py-10'>
			<div className='max-w-[400px] w-full bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-[450px]:rounded-none'>
				<h2 className='text-xl font-semibold text-center mb-6'>
					{step === 'send' ? 'Email orqali OTP yuborish' : 'OTP ni tasdiqlash'}
				</h2>

				{step === 'send' ? (
					<form onSubmit={handleSendOtp} className='flex flex-col gap-4'>
						<input
							type='email'
							placeholder='Emailingizni kiriting'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
							className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white'
						/>

						<button
							type='submit'
							className='w-full bg-[#134E9B] text-white py-2 rounded hover:bg-[#134e9bab] transition-colors'
							disabled={sending}
						>
							{sending ? 'Yuborilmoqda...' : 'OTP yuborish'}
						</button>

						{showMessage && <p className='text-green-600 text-center'>{showMessage}</p>}
						{sendError && <p className='text-red-500 text-center'>Xatolik yuz berdi!</p>}
					</form>
				) : (
					<form onSubmit={handleVerifyOtp} className='flex flex-col gap-4'>
						<input
							type='text'
							placeholder='OTP kodini kiriting'
							value={otp}
							onChange={e => setOtp(e.target.value)}
							required
							className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white'
						/>

						<button
							type='submit'
							className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition-colors'
							disabled={verifying}
						>
							{verifying ? 'Tekshirilmoqda...' : 'Tasdiqlash'}
						</button>

						{showMessage && <p className='text-green-600 text-center'>{showMessage}</p>}
						{verifyError && <p className='text-red-500 text-center'>Xatolik yuz berdi!</p>}

						<button
							type='button'
							onClick={() => setStep('send')}
							className='text-blue-500 underline text-sm mt-2'
						>
							Emailni o‘zgartirish
						</button>
					</form>
				)}
			</div>
		</section>
	)
}
