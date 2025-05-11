import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

const Provider = ({ children }: PropsWithChildren) => {
	return (
		<Router> 
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Router>
	)
}

export default Provider