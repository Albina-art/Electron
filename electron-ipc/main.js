// API (интерфейс программирования приложений, интерфейс прикладного программирования) 
// (англ. application programming interface, API [эй-пи-ай][1]) — 
// набор готовых классов, процедур, функций, структур и констант, 
// предоставляемых приложением (библиотекой, сервисом) или операционной 
// системой для использования во внешних программных продуктах. 
// Используется программистами при написании всевозможных приложений.
// 
// У тебя сначала вызывается electron .
// Эта штука ищет файл main.js
// Когда находит, создаёт процесс и в этом процессе выполняет код из main.js
// const electron = require('electron')
// В этом main.js или ещё где-нибудь ты создаёшь окошки
// на каждое окошко выделяется свой процесс
// Который можно убить, не вредя другим
// Они работают совершенно независимо
// и независимо от main.js
// И по идее если ты закрываешь все окна, поведение основного процесса можно написать по разному
// например, ты хочешь сделать, как это делает skype
// Если закрыть его окно, он продолжает работать, просто без окна
// И если тебе звонят, он заводить новое окно и ты можешь продолжать им пользоваться
// 
// Module to control application life.
const electron = require('electron')
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Этот метод будет вызываться, когда Electron закончил
// Инициализация и готова создать окна браузера.
// Некоторые API можно использовать только после того, как это событие происходит.
app.on('ready', createWindow)

function createWindow () {
  //новое окно в браузере
  mainWindow = new BrowserWindow({width: 360, height: 680})
  // и загрузить index.html приложения.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // открыть командное окно DevTools.
  // mainWindow.webContents.openDevTools()

  // Генерируется когда окно закрыто.
  mainWindow.on('closed', function () {
    // Разыменования объекта окна, как правило, вы бы хранить окна
    // В массиве, если ваше приложение поддерживает мульти окна, это время
    // Когда вы должны удалить соответствующий элемент.
    mainWindow = null
  })
}


// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // На OS X он является общим для приложений и их меню
   // Чтобы оставаться активным, пока пользователь не завершит работу явно с помощью Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
    // Завершает основной процесс
// который стартует вообще вне всех окон
  }
})

app.on('activate', function () {
// На OS X это общее, чтобы заново создать окно в приложении, когда
   // Значок дока щелкнуло, и нет никаких других открытых окон.
  if (mainWindow === null) {
    createWindow()
  }
})