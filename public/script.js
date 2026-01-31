async function loadFile(fileName) {

    const filePath = "../files/" + fileName;

    try {

        const res = await fetch(filePath);

        const data = await res.text();

        document.getElementById("fileName").innerText = fileName;

        const codeBlock = document.getElementById("codeBlock");

        codeBlock.textContent = data;

        Prism.highlightElement(codeBlock);

    } catch (error) {

        alert("Cannot load file");

        console.log(error);
    }
}
