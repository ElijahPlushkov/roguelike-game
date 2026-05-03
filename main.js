const { app, ipcMain, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {

    const saveDir = path.join(app.getPath('userData'), 'saves');
    const savePath = path.join(saveDir, 'save_0.json');

    ipcMain.handle('save-game', (_, gameData) => {
        if (!fs.existsSync(saveDir)) {
            fs.mkdirSync(saveDir, { recursive: true });
        }

        const payload = {
            version: 1,
            timestamp: Date.now(),
            data: gameData
        };

        fs.writeFileSync(savePath, JSON.stringify(payload, null, 2), 'utf-8');

        return true;
    });

    ipcMain.handle('load-game', () => {
        if (!fs.existsSync(savePath)) {
            return null;
        }

        const raw = fs.readFileSync(savePath, 'utf-8');
        return JSON.parse(raw);
    });

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});