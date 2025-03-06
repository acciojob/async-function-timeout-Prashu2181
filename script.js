//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    let text = document.getElementById("text").value.trim();
    let delay = document.getElementById("delay").value.trim();
    let outputDiv = document.getElementById("output");
    
    if (!text || !delay) {
        outputDiv.textContent = "Please enter both text and delay.";
        return;
    }
    
    delay = Number(delay);
    
    if (isNaN(delay) || delay < 0) {
        outputDiv.textContent = "Please enter a valid delay (non-negative number).";
        return;
    }
    
    outputDiv.textContent = "Waiting...";
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    outputDiv.textContent = text;
});

