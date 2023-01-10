# import pywinauto
import pip
pip.main(['install', 'ctypes'])

""" from pywinauto import application

# Buscar el icono del programa en la bandeja del sistema
app = application.Application().connect(title_re="(?i)forti", class_name="Shell_TrayWnd")
print(app)

# Simular un click derecho en el icono del programa
app.forti.right_click()

app.forti.menu_select("Connect to \"VPN Intergrupo\"")
 """

import ctypes

# Crear una estructura de datos para almacenar los datos del icono
class NOTIFYICONIDENTIFIER(ctypes.Structure):
    _fields_ = [
        ('cbSize', ctypes.c_ulong),
        ('hWnd', ctypes.c_void_p),
        ('uID', ctypes.c_uint),
        ('guidItem', ctypes.c_char * 16)
    ]

# Cargar la librería shell32.dll
shell32 = ctypes.WinDLL('shell32')

# Obtener la lista de iconos de la bandeja del sistema
def get_tray_icons():
    icons = []

    # Iterar sobre todos los iconos de la bandeja del sistema
    for uID in range(1, 100):
        # Crear una estructura de datos para almacenar los datos del icono
        nii = NOTIFYICONIDENTIFIER()
        nii.cbSize = ctypes.sizeof(nii)
        nii.hWnd = 0
        nii.uID = uID

        # Obtener el rectángulo que ocupa el icono en la bandeja del sistema
        rect = ctypes.wintypes.RECT()
        if shell32.Shell_NotifyIconGetRect(ctypes.byref(nii), ctypes.byref(rect)) == 0:
            # Si el icono existe, agregarlo a la lista
            icons.append((nii.hWnd, uID))

    return icons

# Imprimir la lista de iconos de la bandeja del sistema
for icon in get_tray_icons():
    print(icon)


