import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../graphql/apolloClient';
import LayoutComponent from '../components/LayoutComponent/LayoutComponent';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<LayoutComponent>
				<Component {...pageProps} />
			</LayoutComponent>
		</ApolloProvider>
	);
}

export default MyApp;
