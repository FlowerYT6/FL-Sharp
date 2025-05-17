document.addEventListener("DOMContentLoaded", () => {
    switchTab("editor");
});

function switchTab(tab) {
    document.getElementById("editor").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("tutorial").style.display = "none";
    document.querySelectorAll("#tabs button").forEach(btn => btn.classList.remove("active"));
    
    document.getElementById(tab).style.display = "block";
    document.querySelector(`#tabs button[onclick="switchTab('${tab}')"]`).classList.add("active");
}

function runFL() {
    const outputElement = document.getElementById("output");
    const code = document.getElementById("editor").innerText.trim();
    outputElement.innerHTML = ""; // Clear previous output

    const lines = code.split("\n");
    lines.forEach(line => executeFL(line.trim()));
    switchTab('output');
}

function clearEditorAndOutput() {
    if (confirm("Are you sure you want to clear the code and output? This cannot be undone.")) {
        document.getElementById("editor").innerText = "// Write your FL# code here...";
        document.getElementById("output").innerHTML = "";
    }
}

function saveCode() {
    const code = document.getElementById("editor").innerText.trim();
    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "flsharp_code.fls";
    link.click();
}