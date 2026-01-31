async function loadFile(fileName) {

    // Fetch from 'files/' folder (works on localhost & Vercel)
    const filePath = "files/" + fileName;

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error("File not found");
        }

        let data = await response.text();

        const fileTitle = document.getElementById("fileName");
        const codeBlock = document.getElementById("codeBlock");

        // Show file name: remove .txt for .ejs files
        let displayName = fileName;
        if (fileName.endsWith(".ejs.txt")) {
            displayName = fileName.replace(".txt", "");
        }
        fileTitle.innerText = displayName;

        // Detect language for Prism
        let language = "javascript";

        if (fileName.endsWith(".md")) {
            language = "markdown";
        } else if (fileName.endsWith(".html") || fileName.endsWith(".ejs.txt")) {
            language = "markup";
        } else if (fileName.endsWith(".css")) {
            language = "css";
        } else if (fileName.endsWith(".json")) {
            language = "json";
        }

        // Reset class
        codeBlock.className = "language-" + language;

        // Insert code
        codeBlock.textContent = data;

        // Highlight
        Prism.highlightElement(codeBlock);

    } catch (error) {
        alert("❌ Cannot load file. Make sure you are running via HTTP server (Live Server, Node, Python, or Vercel).");
        console.error(error);
    }
}
