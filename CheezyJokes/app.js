$(function(){
 
 requestJokes() 
})

async function requestJokes() {
  let jokesURL = `https://icanhazdadjoke.com/search?limit=10`;
  let response = await axios.get(jokesURL, {headers: {'Accept': 'application/json'}});
  let jokes = response.data.results;
  for(let joke of jokes){
    $('#jokecontainer').append(joke.joke+'<br>');
  }
}