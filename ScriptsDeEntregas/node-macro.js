const { tray } = require("node-macro");

const icons = tray.getIcons();

console.log(icons);

/* const icon = icons.find(i => i.text === "Mi Aplicación");

if (icon) {
  tray.rightClick(icon.id);
  tray.selectOption(3);
}
 */