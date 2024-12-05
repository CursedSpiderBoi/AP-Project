import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();

    const handleGoBack = () => {
        if (router.asPath !== '/') {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <div style={styles.container}>
            <Head>
                <title>Something is missing</title>
            </Head>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}>
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <button style={styles.homeButton} onClick={handleGoBack}>Go Back to Home</button>
        </div>
    );
}

// Inline styles for simplicity
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#1a1a2e',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    title: {
        fontSize: '48px',
        marginBottom: '20px',
    },
    message: {
        fontSize: '18px',
        marginBottom: '30px',
    },
    homeButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};
