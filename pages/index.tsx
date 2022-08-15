import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
const Home: NextPage = () => {
	return (
		<>
			<NavBar />
			<div className='h-screen'>
				Tu coś będzie
			</div>
			<Footer />
		</>
	);
};

export default Home;
