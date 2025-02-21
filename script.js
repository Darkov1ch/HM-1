
let currentPage = 1;

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(`page-${page}`).style.display = 'flex';
}

function nextPage() {
    if (currentPage < 3) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function restart() {
    currentPage = 1;
    showPage(currentPage);
}

window.onload = () => showPage(currentPage);
