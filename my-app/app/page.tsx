import React from 'react';
import MyTeamMenu from '@/components/TeamMenu';
import LearnMessage from '@/components/LearnMessage';
import UniversityCard from '@/components/UniversityCard';
import MentorAvatar from '@/components/MentorAvatar';

const Home = () => {
  return (
    <div className="px-4 py-8">
      <MyTeamMenu />

      <div className="mt-8">
        <LearnMessage />
      </div>

      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
        <UniversityCard name="Harvard University" />
        <UniversityCard name="MIT" />
        <UniversityCard name="IIT" />
        {/* Add more university cards as needed */}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Meet Your Mentor</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <MentorAvatar name="Mentor Name 1" university="Harvard University" />
          <MentorAvatar name="Mentor Name 2" university="MIT" />
          <MentorAvatar name="Mentor Name 3" university="IIT" />
          {/* Add more mentor avatars as needed */}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Message Him/Her Now</button>
      </div>
    </div>
  );
};

export default Home;
