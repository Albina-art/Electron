// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron').remote
// Module to control application life.
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
win = new BrowserWindow ({
	width: 800, 
	height: 600,
	webPreferences: {
		preload: path.join(__dirname, 'preload.js'),
		nodeIntegration: false
	}
})
win.loadURL("https://facebook.com/vv.thunders?fref=nf")
win.webContents.openDevTools()
const {ipcMain} = require('electron').remote
ipcMain.on('kaka', function(event, arg) {
	console.log('Мы получили', arg)
	ret = Math.random()
	console.log('Отдаём', ret)
	event.returnValue = ret
})