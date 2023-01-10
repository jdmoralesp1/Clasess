import pip
pip.main(['install', 'psutil'])

import psutil

def get_taskbar_icons():
    icons = []
    for proc in psutil.process_iter():
        try:
            pinfo = proc.as_dict(attrs=['name'])
        except psutil.NoSuchProcess:
            pass
        else:
            # Verificar si el proceso es un icono de la barra de tareas
            if "ApplicationFrameHost" in pinfo['name'] or "explorer.exe" in pinfo['name']:
                # Agregar el nombre del proceso a la lista de iconos
                icons.append(pinfo['name'])
    return icons

# Obtener la lista de iconos de la barra de tareas
taskbar_icons = get_taskbar_icons()

# Imprimir la lista de iconos
print(taskbar_icons)



