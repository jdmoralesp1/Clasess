acum=0
for i in range(3):
    nota = float(input("Ingrese nota " + str(i+1) + " : "))
    #nota = float(input("Ingrese nota {}{}: ").format(i+1)
    acum += nota

nota_final = round(acum / 3,2) #el round redonde y el 2 que veo son las decimales que veo

print("Su nota final es: " + str(nota_final))