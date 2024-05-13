import { app, BrowserWindow } from "electron";
import { Menu } from "electron";
import { dialog } from "electron";

const menuTemplate = [
  {
    label: "&File", // '&' indicates the shortcut key (Alt+F on Windows/Linux)
    submenu: [
      {
        label: "Quit",
        click: () => {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Check for updates",
        click: () => {
          // check for updates, wait 5 second and log update check complete using promise
          dialog
            .showMessageBox({
              type: "info",
              message: "Checking for updates",
              buttons: ["OK"],
            })
            .then(() => {
              const p = new Promise((resolve, reject) => {
                setTimeout(() => {
                  dialog.showMessageBox({
                    type: "info",
                    message: "No updates available",
                    buttons: ["OK"],
                  });
                  resolve();
                }, 5000);
              });
            });
        },
      },
    ],
  },
];
const menu = Menu.buildFromTemplate(menuTemplate);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
  Menu.setApplicationMenu(menu);
});
