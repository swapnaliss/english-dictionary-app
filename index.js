const inputE1 = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");

const fetchAPI = async (word) => {
    console.log(word);
    try {
        infoTextEl.style.display = "block";
       
        infoTextEl.innerText = `Searching the meaning of "${word}"`;

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((response) => response.json());

        infoTextEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        titleEl.innerText = result[0].word;
        
    } catch (error) {
        console.log(error);
    }
}

inputE1.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
});