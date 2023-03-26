const inputE1 = document.getElementById("input");

const fetchAPI = async (word) => {
    console.log(word);
    try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((response) => response.json());

    } catch (error) {
        console.log(error);
    }
}

inputE1.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
});