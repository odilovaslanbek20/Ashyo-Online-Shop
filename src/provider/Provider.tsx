import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

export default function Provider({ children }) {
	return (
		<Router>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</Router>
	)
}
