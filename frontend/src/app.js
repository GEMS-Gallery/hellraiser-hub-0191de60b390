import { backend } from 'declarations/backend';

async function loadGameInfo() {
    try {
        const gameInfo = await backend.getGameInfo();
        document.getElementById('game-description').textContent = gameInfo.description;
    } catch (error) {
        console.error('Error loading game info:', error);
    }
}

async function loadKeyFeatures() {
    try {
        const features = await backend.getKeyFeatures();
        const featuresList = document.getElementById('features-list');
        features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading key features:', error);
    }
}

window.addEventListener('load', () => {
    loadGameInfo();
    loadKeyFeatures();
});
