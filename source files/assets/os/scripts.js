let trashIsEmpty = true;

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').textContent = time;
}
setInterval(updateTime, 1000);
updateTime();

document.addEventListener('click', function () {
    document.getElementById('contextMenu').style.display = 'none';
    document.getElementById('wallpaperContextMenu').style.display = 'none';
    document.getElementById('startMenu').style.display = 'none';
});

function showContextMenu(event, itemName) {
    event.preventDefault();
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
}

function showWallpaperContextMenu(event) {
    event.preventDefault();
    const wallpaperContextMenu = document.getElementById('wallpaperContextMenu');
    wallpaperContextMenu.style.display = 'block';
    wallpaperContextMenu.style.left = `${event.pageX}px`;
    wallpaperContextMenu.style.top = `${event.pageY}px`;
}

function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    if (startMenu.style.display === 'block') {
        startMenu.style.display = 'none';
    } else {
        startMenu.style.display = 'block';
    }
}

function openWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.style.display = 'flex';
    }
}

function openConsole(consoleId) {
    const consoleElement = document.getElementById(consoleId);
    if (consoleElement) {
        consoleElement.style.display = 'flex';
    }
}

function closeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    if (windowElement) {
        windowElement.style.display = 'none';
    }
}

function createFile(fileName) {
    const desktop = document.getElementById('desktop');
    const newIcon = document.createElement('div');
    newIcon.className = 'icon';
    newIcon.innerHTML = `
        <img src="https://via.placeholder.com/64" alt="File Icon">
        <span>${fileName}</span>
    `;
    newIcon.oncontextmenu = (event) => showContextMenu(event, fileName);
    desktop.appendChild(newIcon);
}

function openItem() {
    alert('Open item');
}

function pinToTaskbar() {
    alert('Pin to taskbar');
}

function renameItem() {
    alert('Rename item');
}

function deleteItem() {
    alert('Delete item');
}

function properties() {
    alert('Properties');
}

function deleteItemToTrash(fileName) {
    const trashContent = document.getElementById('trashContent');
    const newTrashItem = document.createElement('li');
    newTrashItem.textContent = fileName;
    trashContent.appendChild(newTrashItem);
    trashIsEmpty = false;
    updateTrashIcon();
}

function updateTrashIcon() {
    const trashIcon = document.getElementById('trashIcon').querySelector('img');
    if (trashIsEmpty) {
        trashIcon.src = 'assets/trash.png';
    } else {
        trashIcon.src = 'assets/trash_2.png';
    }
}

function emptyTrash() {
    const trashContent = document.getElementById('trashContent');
    trashContent.innerHTML = '';
    trashIsEmpty = true;
    updateTrashIcon();
}
function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = startMenu.style.display === 'none' || startMenu.style.display === '' ? 'flex' : 'none';
}
