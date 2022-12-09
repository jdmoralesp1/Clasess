numero = int(input("Digite un numero: "))
var = int(numero)

if numero >= 1:
    for numero in range(numero, 0, -1):
        if var % numero == 0:
            print(str(numero) + " Es divisor")
        #else:
         #   print(str(numero) + " No es divisor")
else:
    print("Numero no valido")
