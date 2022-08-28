import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function LayoutComponent({ children }: { children: JSX.Element }) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}
