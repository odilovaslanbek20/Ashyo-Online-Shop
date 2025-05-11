import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useStore } from '@/zustan/zustan'

export function AuthModalWithTabs() {
	const { isOpen, isOpenModal } = useStore()

	return (
		<div>
			<Dialog open={isOpen} onOpenChange={isOpenModal}>
				<DialogContent
					aria-describedby={undefined}
					className='sm:max-w-[450px]'
				>
					<DialogHeader>
						<DialogTitle>Welcome</DialogTitle>
					</DialogHeader>
					<Tabs defaultValue='login' className='w-full mt-4'>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger value='login'>Login</TabsTrigger>
							<TabsTrigger value='register'>Register</TabsTrigger>
						</TabsList>

						<TabsContent value='login'>
							<form className='flex flex-col gap-4 mt-4'>
								<Input type='email' placeholder='Email' required />
								<Input type='password' placeholder='Password' required />
								<Button type='submit' className='w-full'>
									Login
								</Button>
							</form>
						</TabsContent>

						<TabsContent value='register'>
							<form className='flex flex-col gap-4 mt-4'>
								<Input type='text' placeholder='Name' required />
								<Input type='email' placeholder='Email' required />
								<Input type='password' placeholder='Password' required />
								<Button type='submit' className='w-full'>
									Register
								</Button>
							</form>
						</TabsContent>
					</Tabs>
				</DialogContent>
			</Dialog>
		</div>
	)
}
