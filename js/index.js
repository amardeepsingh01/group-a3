// Initial poll results
const pollResults = {
    Maxwell: 7,
    Tenley: 6,
    Mona: 4,
    Rocky: 5,
};

// Update poll results
function updatePollResults() {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';
    for (const cat in pollResults) {
        const li = document.createElement('li');
        li.textContent = `${cat}: ${pollResults[cat]}`;
        resultsList.appendChild(li);
    }
}
// Handle poll form submission
function submitPoll() {
    const userName = document.getElementById('user-name').value;
    const favoriteCat = document.getElementById('favorite-cat').value;
    if (!userName) {
        alert('Please enter your name!');
        return;
    }
    pollResults[favoriteCat]++;
    alert(`Thank you, ${userName}, for voting for ${favoriteCat}!`);
    updatePollResults();
}
// Initialize
updatePollResults();
