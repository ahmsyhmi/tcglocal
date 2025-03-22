const getPlayer = async () => {
  const res = await fetch("https://ahmsyhmi.github.io/playerapi/player.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default getPlayer;