menu=""""
Bienvenido al conversor de monedas
1. Pesos Mexicanos
2. Pesos Colombianos
3. Pesos argentinos

Elija una opción: 
    """
opcion=int(input(menu))

if opcion == 1:
    pesos = float(input("Ingrese la cantidad de pesos mexicanos a convertir: "))
    dolar = 3500
elif opcion == 2:
    pesos = float(input("Ingrese la cantidad de pesos colombianos a convertir: "))
    dolar = 3800
elif opcion == 3:
    pesos = float(input("Ingrese la cantidad de pesos argentinos a convertir: "))
    dolar = 3200
else:
    print("Digite un valor correcto")

conversion = round(pesos / dolar, 2)

print(str(pesos) + "$ es igual a: " + str(conversion))