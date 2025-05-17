function executeFL(code) {
    const outputElement = document.getElementById("output");
    
    if (code.startsWith("display.text(") || code.startsWith("display.Text(")) {
        // Displaying text
        const textMatch = code.match(/display\.(?:text|Text)\(['"](.+?)['"]\)/);
        if (textMatch) {
            outputElement.innerHTML += textMatch[1] + "<br>";
        } else {
            outputElement.innerHTML += "Syntax Error: Invalid text format.<br>";
        }
    } 
    else if (code.startsWith("display.img(")) {
        // Displaying image
        const imgMatch = code.match(/display\.img\(['"](.+?)['"]\)/);
        if (imgMatch) {
            const imgSrc = imgMatch[1];
            outputElement.innerHTML += `<img src="${imgSrc}" style="max-width: 100%; max-height: 200px;"><br>`;
        } else {
            outputElement.innerHTML += "Syntax Error: Invalid image format.<br>";
        }
    } 
    else if (code) {
        outputElement.innerHTML += "Syntax Error: Unrecognized command.<br>";
    }
}