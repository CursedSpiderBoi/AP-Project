import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/TopicCard.module.css';

export default function TopicCard({ imageUrl, topicName, rating }) {
  return (
    <Link href={`/topics/${topicName}`} passHref>
      <div className={styles.topicCard}>
        <Image
          src={imageUrl}
          alt={topicName}
          width={200}
          height={120}
          className={styles.topicImage}
        />
        <div className={styles.topicFooter}>
          <p>{topicName}</p>
          <span>{rating} ⭐</span>
        </div>
      </div>
    </Link>
  );
}