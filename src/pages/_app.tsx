// pages/_app.tsx

import RootLayout from '@/app/layout';
import { AppProps } from 'next/app';
import 'src/app/globals.css';
import Head from 'next/head';  // Import the Head component

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <RootLayout>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Mrs+Sheppards&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default MyApp;
