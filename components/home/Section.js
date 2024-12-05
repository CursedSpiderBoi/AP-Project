import TopicCard from './TopicCard';

export default function Section({ title, topics }) {
  return (
    <section>
      <h3>{title}</h3>
      <div className="topics">
        {topics.map((topic, i) => (
          <TopicCard
            key={i}
            imageUrl={topic.imageUrl}
            topicName={topic.topicName}
            rating={topic.rating}
          />
        ))}
      </div>
    </section>
  );
}