#Solicitar al usuario que ingrese una frase y luego imprimir las vocales que se encuentran en dicha frase y contar las veces que se repita cada vocal.
frase = str(input("Ingrese una frase: "))
vocales = ["a","e","i","o","u"]
conta = 0
conte = 0
conti = 0
conto = 0
contu = 0

for i in frase:
    if i in vocales:
        print(i)
        if i == "a":
            conta += 1    
        elif i == "e":
            conte += 1
        elif i == "i":
            conti += 1
        elif i == "o":
            conto += 1
        elif i == "u":
            contu += 1  
print("La cantidad de letra a son: " +str(conta))
print("La cantidad de letra e son: " +str(conte))
print("La cantidad de letra i son: " +str(conti))
print("La cantidad de letra o son: " +str(conto))
print("La cantidad de letra u son: " +str(contu))