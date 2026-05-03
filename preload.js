const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    saveGame: (gameData) => ipcRenderer.invoke('save-game', gameData),
    loadGame: () => ipcRenderer.invoke('load-game')
});
