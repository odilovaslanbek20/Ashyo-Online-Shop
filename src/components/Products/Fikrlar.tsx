function Fikrlar() {
	const data = [
		{
			image: '',
			name: 'Odilov Aslanbek',
			body: 'The most inconvenient application written with the left heel. The interface is awkward. Putting something up for sale is as difficult as possible. You need to go in the tab in the masonry in the hidden tabs in the buttons. Kick-ass',
      date: 'September 3, 2022',

		}
	]
	return (
		<>
		 {data?.map((data) => (
			<div className="max-w-[673px] mb-[50px]">
			 <div className="">
				 <img src="" alt="user photos" />
			 </div>
			 <div className="">
				 <div className="">
					 <h2 className='font-["Roboto"] font-normal text-[18px] text-[#06172D] leading-[130%]'>{data?.name}</h2>
					 <p></p>
				 </div>
				 <p className='font-["Roboto"] mt-[15px] mb-[9px] font-normal text-[12px] text-[#00000066] leading-[130%]'>{data?.date}</p>
				 <p className='font-["Roboto"] font-normal text-[16px] text-[#515D6C] leading-[130%]'>{data?.body}</p>
			 </div>
		 </div>
		 ))}
		</>
	)
}

export default Fikrlar