const { app, BrowserWindow,screen  } = require('electron')

function createWindow () {
  // Create the browser window.
  let display = screen.getPrimaryDisplay();
  let width = display.bounds.width;
  let height = display.bounds.height;
  const win = new BrowserWindow({
    // width: 240,
    // height: 310,
    // transparent:true,
    // x: width - 240,
    // y: height -315,
    // frame: false,
    // alwaysOnTop: true,
    // skipTaskbar: true
    
    // width: 1080,
    // minWidth: 680,
    // height: 840,
    backgroundColor: '#ffffdd',
    title: app.getName(),
    center: true,
    autoHideMenuBar: true,
    icon: __dirname + 'me.ico',
    fullscreen: true
    // webPreferences: {
    //   nodeIntegration: true
    // }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  // win.getPosition()
  // win.setIgnoreMouseEvents(true)

  // Open the DevTools.
//   win.webContents.openDevTools()

}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
exit()
function exit() {
  var t = setTimeout(function() {
      process.exit(1);
  }, 10000);
  // allow process to exist naturally before the timer if it is ready to
  t.unref();
}
function toggleFullscreen() {
  if (mainWindow.isFullScreen()) {
      mainWindow.setFullScreen(false);
  } else {
      mainWindow.setFullScreen(true);
  }
}
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
