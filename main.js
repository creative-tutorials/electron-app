import { app, BrowserWindow } from "electron";
import { Notification, clipboard, Menu, dialog } from "electron";
import path from "node:path";

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
    label: "View",
    submenu: [
      {
        role: "reload",
      },
      {
        role: "forceReload",
      },
      {
        role: "toggleDevTools",
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
              const notificationTitle = "My Notification 🔔";
              console.count("Start Notify");
              new Notification({
                actions: ["Action 1", "Action 2"],

                icon: "./src/assets/icon.png",
                title: notificationTitle,
                body: "This is a sample notification.",
                renotify: true,
                tag: "test",
              }).show();
            });
        },
      },
      {
        label: "About",
        click: () => {
          dialog
            .showMessageBox({
              type: "info",
              message: "About Electron App",
              detail: "Made with Electron",
              buttons: ["OK", "Cancel", "Copy"],
            })
            .then((response) => {
              if (response.response === 2) {
                try {
                  clipboard.writeText("Made with Electron");

                  console.log(clipboard.readText());
                } catch (error) {
                  console.error(error);
                }
              }
            });
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(menuTemplate);

const __dirname = path.resolve(path.dirname("./"));

const createWindow = () => {
  const win = new BrowserWindow({
    icon: path.join(__dirname, "src/assets/icon.png"),
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
};
app.whenReady().then(() => {
  createWindow();
  Menu.setApplicationMenu(menu);

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
