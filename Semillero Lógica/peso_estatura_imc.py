peso = float(input("Ingrese su peso en Kg: "))
estatura = float(input("Ingrese su estatura en metros usando '.': "))

imc = peso/((estatura)**2)

print("Tu indice de masa corporal es: " + str(imc))