numeros=[0,4,8,2,1]

num = int(input("ingrese un numero que desee registrar: "))

for i in numeros:
    if num in numeros:
        print("El numero ya se encuentra registrado")
        break
else:
    numeros.append(num) #agrega el numero al final de la lista
    print("Agregado exitosamente") #este else no es muy usado pero se puede si el else se usa debajo del if va a necesitar un break