import { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const [profiles, setProfiles] = useState([]);

  // Fetch profiles from data.json on component mount
  useEffect(() => {
    fetch('/data.json') // Ensure the correct path to your data.json
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  // Function to calculate how long ago the user was last seen
  const calculateLastSeen = (lastSeenDate) => {
    const now = new Date();
    const lastSeen = new Date(lastSeenDate);
    const diff = Math.floor((now - lastSeen) / (1000 * 60 * 60 * 24)); // Difference in days

    if (diff < 1) return 'Last seen several hours ago';
    if (diff === 1) return 'Last seen 1 day ago';
    if (diff <= 7) return `Last seen ${diff} days ago`;
    return 'Last seen several days ago';
  };

  return (
    <div className="App">
      <h1>User Profile Cards</h1>
      <div className="cards-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.name}
            {...profile}
            lastSeen={profile.online ? '' : calculateLastSeen(profile.lastSeen)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
