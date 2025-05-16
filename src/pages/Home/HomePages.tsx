import Brands from '@/components/Brands/Brands'
// import Footer from '@/components/footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero.tsx/Hero'
import Navbar from '@/components/Navbar/Navbar'

function HomePages() {
	return (
		<>
		  <Navbar/>
		  <Header/>
			<Hero/>
			<Brands/>
			{/* <Footer/> */}
		</>
	)
}

export default HomePages