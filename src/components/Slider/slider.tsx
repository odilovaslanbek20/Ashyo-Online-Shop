import * as Slider from '@radix-ui/react-slider'
import * as React from 'react'

interface PriceRangeSliderProps {
	value: [number, number]
	onChange: (value: [number, number]) => void
	min?: number
	max?: number
	step?: number
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
	value,
	onChange,
	min = 0,
	max = 1000000,
	step = 10000,
}) => {
	return (
		<div className='w-full space-y-2'>
			<Slider.Root
				className='relative flex items-center select-none touch-none h-6'
				min={min}
				max={max}
				step={step}
				value={value}
				onValueChange={(val: number[]) => onChange([val[0], val[1]])}
			>
				<Slider.Track className='bg-muted relative grow rounded-full h-2'>
					<Slider.Range className='absolute bg-primary rounded-full h-full' />
				</Slider.Track>
				<Slider.Thumb
					className='block w-5 h-5 bg-white border-2 border-primary rounded-full shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
					aria-label='Minimum price'
				/>
				<Slider.Thumb
					className='block w-5 h-5 bg-white border-2 border-primary rounded-full shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
					aria-label='Maximum price'
				/>
			</Slider.Root>
		</div>
	)
}
