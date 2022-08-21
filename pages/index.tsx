import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import design from '../img/Design.jpg';
import shopping from '../img/shopping.jpg';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();
	console.log(router);
	return (
		<>
			<div className="flex justify-center bg-gray-50">
				<div className="w-full lg:w-2/3 md:w-2/3">
					<div className="px-8 py-8">
						<Link href="products">
							<a className="relative block bg-black group" href="">
								<Image
									layout="fill"
									className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
									src={shopping.src}
									alt=""
								/>
								<div className="relative p-8">
									<p className="text-sm font-bold tracking-widest text-white uppercase">
										PG Projekty
									</p>

									<p className="text-4xl font-bold text-white">Sklep</p>

									<div className="mt-64">
										<div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
											<p className="text-sm text-white">
												Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. Omnis perferendis hic asperiores quibusdam quidem
												voluptates doloremque reiciendis nostrum harum.
												Repudiandae?
											</p>
										</div>
									</div>
								</div>
							</a>
						</Link>
					</div>
					<div className="py-8 px-8">
						<a className="relative block bg-black group" href="">
							<Image
								layout="fill"
								className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
								src={design.src}
								alt=""
							/>
							<div className="relative p-8">
								<p className="text-sm font-bold tracking-widest text-white uppercase">
									PG Projekty
								</p>

								<p className="text-4xl font-bold text-white">Usługi</p>

								<div className="mt-64">
									<div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
										<p className="text-sm text-white">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Omnis perferendis hic asperiores quibusdam quidem
											voluptates doloremque reiciendis nostrum harum.
											Repudiandae?
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
