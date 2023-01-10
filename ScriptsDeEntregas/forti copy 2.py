import pip
import time
pip.main(['install', 'pywinauto'])

from pywinauto.application import Application

# Iniciar la aplicación de la bandeja del sistema
app = Application().Start(cmd_line=u"explorer.exe shell:::{05d7b0f4-2121-4eff-bf6b-ed3f69b894d9}")

# Buscar el icono de Forticlient en la bandeja del sistema
window = app.window(title_re="^System Tray$")
icon = window.child_window(title_re="^Forticlient$")

# Hacer click derecho en el icono de Forticlient y escojer la opción 3
icon.RightClickInput()
icon.type_keys("Connect to \"VPN Intergrupo\"")


