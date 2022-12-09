monto_f = 0
ahorro = float(input("Ingrese valor o 0 para salir: "))

while ahorro != 0:
    monto_f += ahorro
    ahorro = float(input("Ingrese valor o 0 para salir: "))

print("Su ahorro final es: " + str(monto_f))
