cont = 5

for i in range(1, cont):
    for j in range(i):
        print("* ", end="")
    print()

for i in range(cont, 0, -1): #el rango es que empieza en n que es el numero mayor, se detiene cuando sea 0 y decrementa de uno en uno
    for j in range(i):
        print("* ", end="")
    print()