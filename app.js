const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');
const explanationText = document.getElementById('explanation-text').innerText;

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(explanationText);
        showToast();
    } catch (err) {
        console.error('Failed to copy text: ', err);
        // Fallback for some browsers if needed, though secure contexts usually support this
        alert("Copy failed, please select the text manually.");
    }
});

function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}