export const getPlayer = () => {
  console.log('Player Services!!');
};

//Method for storage Players data
export const setPlayers = (player) => {
  let data = localStorage.getItem('Players');
  data = data ? JSON.parse(data) : [];
  data.push(player);
  localStorage.setItem('Players', JSON.stringify(data));
};
