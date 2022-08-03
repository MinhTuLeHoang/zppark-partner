import NavBar from 'components/navBar'
import LayoutMain from 'layouts/layoutMain'
import Welcome from 'components/welcome'
import Head from 'next/head'
import Image from 'next/image'
import homeStyles from 'styles/Home.module.css'

const Home = () => {
	return (
		<LayoutMain>
			<Welcome />
			<main className={homeStyles.main}>
				<h2>Who we are ?</h2>
				<Image src="/images/team.jpg" width={640} height={320} />
				<p>
					ZPPark is a platform that allows you to find the best places to park in your. And ZPPark partners is the most efficent tool to track data, for analysic, bussiness decision, ...

					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>

				<h2>What&lsquo;s out mission?</h2>
				<Image src="/images/dataMission.png" width={493} height={301} />
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &lsquo;Content here, content here&lsquo;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &lsquo;lorem ipsum&lsquo; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</p>

				{/* <h2>Team members</h2> */}
			</main>
		</LayoutMain>
	)
}

export default Home
