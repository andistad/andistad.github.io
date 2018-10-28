//Change the code, so it only greets, if it's not you (why greet yourself? :)
let neighbours = ['Michal', 'Jirka', 'Jana', 'Andrea'];
neighbours.forEach (neighbour => {
  if (neighbour !== 'Andrea')
  {
    console.log(`Ahoj, ` + neighbour); 
  }
});