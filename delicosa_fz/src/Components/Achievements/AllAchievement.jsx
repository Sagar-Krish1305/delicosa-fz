import Achievement from './Achievement';

const achievements = [
  { title: 'Projects Completed', value: 89 },
  { title: 'Happy Clients', value: 120 },
  { title: 'Countries Served', value: 25 },
];

const AllAchievement = () => {
  return (
    <div className='w-auto m-4'>
      <h2 className="text-4xl font-bold mb-4 text-center text-white ">Our Achievements</h2>
      <div className='flex flex-wrap justify-center gap-10 px-10 p-5 text-2xl  '>
        {achievements.map((achievement) => (
          <Achievement key={achievement.title} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default AllAchievement;