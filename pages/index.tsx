import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import design from '../img/Design.jpg';
import shopping from '../img/shopping.jpg';
const Home: NextPage = () => {
	return (
		<>
			<NavBar />
			<div className="flex h-screen w-full border-spacing-x-2 gap-8 py-16 px-16 mb-5">
				<a className="relative block bg-black group" href="">
					<img
						className="absolute inset-0 object-cover w-full h-screen transition-opacity opacity-75  group-hover:opacity-50"
						src={design.src}
						alt=""
					/>
					<div className="relative p-8">
						<p className=" flex text-4xl font-bold text-white justify-center">
							Usługi
						</p>

						<div className="mt-64">
							<div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
								<p className="text-sm text-white">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Omnis perferendis hic asperiores quibusdam quidem voluptates
									doloremque reiciendis nostrum harum. Repudiandae?
								</p>
							</div>
						</div>
					</div>
				</a>
				<a className="relative block bg-black group" href="">
					<img
						className="absolute inset-0 object-cover w-full h-screen transition-opacity opacity-75  group-hover:opacity-50"
						src={shopping.src}
						alt=""
					/>
					<div className="relative p-8">
						<p className=" flex text-4xl font-bold text-white justify-center">
							Sklep
						</p>

						<div className="mt-64">
							<div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
								<p className="text-sm text-white">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Omnis perferendis hic asperiores quibusdam quidem voluptates
									doloremque reiciendis nostrum harum. Repudiandae?
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>
			<Footer />
		</>
	);
};

export default Home;
