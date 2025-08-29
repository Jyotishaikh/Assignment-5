let coins = 100, likes = 0, copies = 0, history = [];
const cost = 20;

function updateNav() {
    document.getElementById('coinCount').textContent = coins;
    document.getElementById('likesCount').textContent = likes;
    document.getElementById('copyCount').textContent = copies;
}

function renderHistory() {
    const list = document.getElementById('historyList');
    list.innerHTML = '';
    if (history.length === 0) {
        list.innerHTML = '<li class="text-sm text-slate-500">No calls yet.</li>';
        return;
    }
    for (const item of history) {
        const li = document.createElement('li');
        li.className = 'text-sm flex items-start justify-between gap-3 bg-slate-50 rounded-lg p-2';
        li.innerHTML = `<div><div class="font-medium">${item.name}</div><div class="text-slate-500">${item.number}</div></div><time class="text-xs text-slate-500">${item.time}</time>`;
        list.appendChild(li);
    }
}

function addLike() { likes++; updateNav(); }

function copyNumber(num) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(num).then(() => {
            copies++;
            updateNav();
            alert('Number copied: ' + num);
        });
    }
    else { alert('Copy failed'); }
}

function makeCall(name, number) {
    if (coins < cost) {
        alert('Not enough coins to make a call!');
        return;
    }
    coins -= cost;
    alert('Calling ' + name + ' (' + number + ')');
    history.unshift({ name: name, number: number, time: new Date().toLocaleTimeString() });
    updateNav();
    renderHistory();
}

function addEventListeners() {
    const likeBtns = document.getElementsByClassName('like-btn');
    for (const btn of likeBtns) btn.addEventListener('click', addLike);

    const copyBtns = document.getElementsByClassName('copy-btn');
    for (const btn of copyBtns) {
        btn.addEventListener('click', function () {
            copyNumber(btn.getAttribute('data-number'));
        });
    }

    const callBtns = document.getElementsByClassName('call-btn');
    for (const btn of callBtns) {
        btn.addEventListener('click', function () {
            makeCall(btn.getAttribute('data-name'), btn.getAttribute('data-number'));
        });
    }

    document.getElementById('clearHistory').addEventListener('click', function () {
        history = [];
        renderHistory();
    });

}
addEventListeners();
updateNav();
renderHistory();