direccion = input("Ingrese su correo: ")

def validar(correo):
    caracterbuscado = "@"
    for i in correo:
        if i == caracterbuscado:
            return True
    return False

if validar(direccion) == True:
    print("El correo es valido")
else:
    print("El correo no es valido")