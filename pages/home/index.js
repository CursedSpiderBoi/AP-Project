import Header from '@/components/home/header';
import Section from '@/components/home/Section';

export default function Home() {
  const topics = Array(4).fill({
    imageUrl: '/example-image.jpg', // Replace with actual image URL
    topicName: 'Topic-Name',
    rating: '4.6'
  });

  return (
    <div className="container">
      <Header />
      <main>
        <h2>Welcome,</h2>
        <Section title="Based on your Interest" topics={topics} />
        <Section title="Continue from where you left" topics={topics} />
        <Section title="Try something new" topics={topics} />
      </main>
    </div>
  );
}