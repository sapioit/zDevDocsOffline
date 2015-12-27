 var app = require('app');
 var BrowserWindow = require('browser-window');
 require('crash-reporter').start();

 var mainWindow = null;

 app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
   app.quit();
 });

app.setPath("userData", __dirname + "/zDevDocsOffline");

 app.on('ready', function() {
  mainWindow = new BrowserWindow({
   width: 1200,
   height: 860,
   resizable: true,
   title: "zDevDocsOffline",
   icon: "/zDevDocsOffline.icns",
   icon: "/zDevDocsOffline.ico",
   icon: "/zDevDocsOffline.png"
  });
  mainWindow.setOverlayIcon(
   __dirname + "/zDevDocsOffline.png",
   "Test?");
  mainWindow.setTitle("zDevDocsOffline");
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();
  mainWindow.on('closed', function() {
   mainWindow = null;
  });
  //mainWindow.toggleDevTools();
 });
