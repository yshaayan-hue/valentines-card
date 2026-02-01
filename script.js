const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES → go to second page
if (yesBtn) {
    yesBtn.onclick = () => {
        window.location.href = "/yes";
    };
}

// NO → runs away
if (noBtn) {
    noBtn.onmouseover = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    };
}
