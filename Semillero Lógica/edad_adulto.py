nombre = input("Ingrese su nombre: ")
edad = int(input("Ingrese su edad: "))
sexo = input("Ingrese su sexo: ")

if sexo == "masculino" and edad >= 18:
    print("Bienvenido " + nombre)