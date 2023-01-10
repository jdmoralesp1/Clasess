# import pywinauto
# import pip
# pip.main(['install', 'pywinauto'])

from pywinauto import application

# Buscar el icono del programa en la bandeja del sistema
app = application.Application().connect(title_re="(?i)forti", class_name="Shell_TrayWnd", visible_only=True)

print(app)

# Simular un click derecho en el icono del programa
app.forti.right_click()

app.forti.menu_select("Connect to \"VPN Intergrupo\"")




