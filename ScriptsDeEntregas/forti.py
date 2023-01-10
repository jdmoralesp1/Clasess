# import pip
# pip.main(['install', 'pywin32'])

import win32api
import win32gui

# Obtener el identificador de la ventana de la bandeja del sistema
taskbar = win32gui.FindWindowEx(0, None, 'Shell_TrayWnd', None)

# Buscar la ventana del programa en la bandeja del sistema
window = win32gui.FindWindowEx(taskbar, None, 'Button', 'ForticlientVPN')

# Simular un click derecho en la ventana del programa
win32api.SendMessage(window, win32api.WM_CONTEXTMENU, 0, 0)

# Enviar un mensaje a la ventana del programa para que ejecute una acción
win32api.SendMessage(window, win32api.WM_COMMAND, 0x00000111, 0)




