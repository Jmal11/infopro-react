import React from 'react';

const PeopleLeadershipProgramAudience = () => {
  return (
    <section className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Who Is This Program For</h2>
        <p>Leaders who want to:</p>
        <ul className="list-disc list-inside mb-8">
          <li className="mb-2">Cultivate a culture of accountability</li>
          <li className="mb-2">Enhance delegation and prioritization skills</li>
          <li className="mb-2">Navigate complex conversations with confidence</li>
          <li className="mb-2">Boost team engagement and morale</li>
          <li className="mb-2">Lead cross-functional project teams</li>
          <li>Develop coaching and mentoring abilities</li>
        </ul>
        <blockquote className="border-l-4 border-purple-600 pl-4 italic">
          <p>
            "The People Leadership Development Program transformed the way I lead my team. It equipped me with the tools to foster accountability, drive engagement, and mentor with purpose. As a result, our team's performance has reached new heights."
          </p>
          <footer className="mt-4">— Alex M., Senior Operations Manager</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default PeopleLeadershipProgramAudience;
