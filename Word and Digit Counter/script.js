function countWordsAndDigits() {
    var textInput = document.getElementById('text-input').value;

    // Split the text into words
    var words = textInput.match(/[^\s]+/g) || [];

    // Separate words into two categories: words and digits
    var wordsArray = [];
    var digitsArray = [];

    words.forEach(function (word) {
        if (/^\d+$/.test(word)) {
            digitsArray.push(word);
        } else {
            // If there's a comma after a digit, count it as a digit
            var match = word.match(/^(\d+),$/);
            if (match) {
                digitsArray.push(match[1]);
            } else {
                wordsArray.push(word);
            }
        }
    });

    // Display the word count
    var wordCountElement = document.getElementById('word-count');
    wordCountElement.textContent = 'Word count: ' + wordsArray.length;

    // Display the digit count
    var digitCountElement = document.getElementById('digit-count');
    digitCountElement.textContent = 'Digit count: ' + digitsArray.length;
}
