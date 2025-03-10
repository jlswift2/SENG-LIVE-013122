const pokemon = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector('#poke-form')

pokeForm.addEventListener('submit', function(event){
  event.preventDefault();
  const name = document.querySelector('#name-input').value.toLowerCase()
  const img = document.querySelector('#img-input').value

  let newChar = {
  id: 6, //must change
  name: name,
  img: img,
  likes: 0,
  }

  renderPokemon(newChar)
  pokeForm.requestFullscreen()
})

pokemon.forEach(function (char) {
  renderPokemon(char);
});

function renderPokemon(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.classList.add('likes-num');
  likesNum.textContent = pokemon.likes;

  const likesBttn = document.createElement("button")
  likesBttn.className = "likes-bttn";
  likesBttn.textContent = "♥";
  likesBttn.addEventListener('click', function() {
    ++pokemon.likes
    likesNum.textContent = pokemon.likes
  });

  const deleteBttn = document.createElement("button");
  deleteBttn.className = 'delete-bttn';
  deleteBttn.textContent = "Delete"
  deleteBttn.addEventListener('click', (e) => e.target.parentNode.remove())

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}


function increaseLike(e) {
  pokemon.likes++

}