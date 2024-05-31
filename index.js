document.addEventListener('DOMContentLoaded', () => {
  const characterList = document.getElementById('character-list');
  const characterName = document.getElementById('character-name');
  const characterImage = document.getElementById('character-image');
  const characterVotes = document.getElementById('character-votes');
  const voteButton = document.getElementById('vote-button');
  

  // Fetch character list
  fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(characters => {
      characters.forEach(character => {
        const div = document.createElement('div');
        div.className = 'character';
        div.textContent = character.name;
        div.addEventListener('click', () => showCharacterDetails(character));
        characterList.appendChild(div);
      });
    })
    .catch(error => console.error('Error fetching character list:', error));

  // Show character details
  function showCharacterDetails(character) {
    currentCharacter = character;
    characterName.textContent = character.name;
    characterImage.src = character.image;
    characterVotes.textContent = character.votes;
  }

  // Add vote
  voteButton.addEventListener('click', () => {
    if (currentCharacter) {
      currentCharacter.votes++;
      characterVotes.textContent = currentCharacter.votes;
    }
  });
});


