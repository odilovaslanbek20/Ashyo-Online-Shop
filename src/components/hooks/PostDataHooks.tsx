import { useState } from 'react'
import axios from 'axios'

type FormData = {
	fullname: string,
	email: string,
	password: string,
}

export default function usePostHooks() {
	const [response, setResponse] = useState<null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	const postData = async (url: string, formData: FormData) => {
		setLoading(true)
		try {
			const res = await axios.post(url, formData)
			setResponse(res.data)
			setError(null)
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message)
			}
     } finally {
			setLoading(false)
		}
	}

	return { response, loading, error, postData }
}
