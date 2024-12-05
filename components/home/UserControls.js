import { useState } from 'react';

export default function UserControls({ topics = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTopics, setFilteredTopics] = useState(topics);
  const [showMissingMessage, setShowMissingMessage] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term === '') {
      setFilteredTopics(topics);
      return;
    }

    setFilteredTopics(
      topics.filter(topic =>
        topic.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleFocus = () => {
    if (topics.length === 0) {
      setShowMissingMessage(true);
    }
  };

  const handleBlur = () => {
    setShowMissingMessage(false);
  };

  return (
    <div className="user-controls">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search topics..."
          className="search-input"
        />
        <button className="icon search-icon">🔍</button>
      </div>
      <button className="icon user-icon">👤</button>
      <ul>
        {showMissingMessage ? (
          <li>Something is missing</li>
        ) : filteredTopics && filteredTopics.length > 0 ? (
          filteredTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}