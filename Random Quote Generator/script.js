async function getRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = `"${data.content}" - ${data.author}`;
}

// Load a random quote on page load
getRandomQuote();