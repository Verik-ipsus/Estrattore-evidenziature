function extractAndCopy() {
    var inputText = document.getElementById("inputText").value;
    var extractedText = extractHighlightedText(inputText);
    copyText(extractedText);
}

function extractHighlightedText(inputText) {
    // Trova le parti evidenziate e costruisci il testo RTF
    var highlightedText = inputText.replace(/<mark>(.*?)<\/mark>/g, function(match, p1) {
        return '{\\b ' + p1 + '\\b0 }'; // Utilizza il formato RTF per evidenziare il testo
    });

    return highlightedText;
}

function copyText(text) {
    // Crea un elemento textarea temporaneo per copiare il testo negli appunti
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;

    // Aggiungi l'elemento textarea al DOM
    document.body.appendChild(tempTextArea);

    // Seleziona e copia il testo
    tempTextArea.select();
    document.execCommand("copy");

    // Rimuovi l'elemento textarea temporaneo
    document.body.removeChild(tempTextArea);

    alert("Parti evidenziate copiate nella clipboard!");
}