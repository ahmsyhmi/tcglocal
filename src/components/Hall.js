import getPlayer from "./getPlayer";

const Hall = async () => {
  const data = await getPlayer();

  // Sort players by points in descending order
  const sortedData = [...data].sort((a, b) => b.points - a.points);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-anonymous text-3xl font-bold p-24">🏆 Hall of Fame</h1>
      
      {/* 5-column grid */}
      <div className="grid grid-cols-5 gap-4 w-full max-w-5xl">
        {sortedData.map((player, index) => (
          <div 
            key={player.uuid} 
            className="flex flex-col items-center p-4 border rounded-lg shadow-md blur-[4px] hover:blur-none bg-amber-400 text-center"
          >
            <p className="text-lg font-anonymous font-bold text-black">{index + 1}. {player.player}</p>
            <p className="font-anonymous font-semibold text-black"><span className="text-green-600">{player.points}</span> pts</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hall;
