import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const TopicPage = ({ topicData }) => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div style={styles.container}>
            {/* Back Button */}
            <Link href="/">
                <button style={styles.backButton}>←</button>
            </Link>

            {/* Title */}
            <h1 style={styles.title}>{topicData.title || slug}</h1>

            {/* Content Section */}
            <div style={styles.content}>
                {/* Text Content */}
                <div style={styles.text}>
                    <p>{topicData.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie sagittis purus sit amet iaculis. Aliquam quis tellus in lacus.'}</p>
                    <p>{topicData.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie sagittis purus sit amet iaculis. Aliquam quis tellus in lacus.'}</p>
                </div>

                {/* Image Content */}
                <div style={styles.imageWrapper}>
                    <Image
                        src={topicData.image || '/default-image.jpg'} // Add a default image in your public folder
                        alt={topicData.title || slug}
                        width={300}
                        height={400}
                        style={styles.image}
                    />
                </div>
            </div>

            {/* Take Test Button */}
            <button style={styles.takeTestButton}>Take The Test</button>
        </div>
    );
};

export async function getStaticPaths() {
    // Define topics for dynamic routing
    const topics = ['science', 'history', 'mathematics'];
    const paths = topics.map((topic) => ({ params: { slug: topic } }));

    return {
        paths,
        fallback: true, // Enables fallback for non-predefined topics
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    // Simulate fetching data for a specific topic
    const topicData = {
        title: slug.charAt(0).toUpperCase() + slug.slice(1),
        description: `This is a detailed description of the ${slug} topic. It contains multiple paragraphs to provide context.`,
        image: '/library-image.jpg', // Replace with a valid path from your public folder
    };

    return {
        props: {
            topicData,
        },
    };
}

export default TopicPage;