// Этот файл необходим файл index.html и воли
// Выполняется в процессе визуализации для этого окна.
// Все API-интерфейсы Node.js доступны в этом процессе.
// const electron = require('electron').remote
// // Module to control application life.
// const BrowserWindow = electron.BrowserWindow
// const path = require('path')
// const url = require('url')
// win = new BrowserWindow ({
// 	width: 800, 
// 	height: 600,
// 	webPreferences: {
// 		preload: path.join(__dirname, 'preload.js'),
// 		nodeIntegration: false
// 		// Для этого ты создаёшь файлик preload.js, 
// 		// в котором ты подгружаешь модули (библиотеки) для работы с чем-то вне окна
// 		// И вызываешь при старте окошка
// 		// из окошка нельзя управлять мои компьютером
// 	}
// })
// win.loadURL("https://facebook.com/vv.thunders?fref=nf")
// win.webContents.openDevTools()
// const {ipcMain} = require('electron').remote
// ipcMain.on('kaka', function(event, arg) {
// 	console.log('Мы получили', arg)
// 	ret = Math.random()
// 	console.log('Отдаём', ret)
// 	event.returnValue = ret
// })