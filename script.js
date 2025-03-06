//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = document.getElementById("delay").value;
    const output = document.getElementById("output");
    
    if (!text || !delay) {
        alert("Please enter both text and delay.");
        return;
    }

    
    function delayMessage(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    
    async function showMessage() {
        await delayMessage(Number(delay));
        output.innerText = text;
    }

    showMessage();
});

