nota1=float(input("Digite la nota 1: "))
nota2=float(input("Digite la nota 2: "))
nota3=float(input("Digite la nota 3: "))

promedio = (nota1+nota2+nota3)/3

if promedio < 3:
    print("El alumno ha reprobado con promedio: " + str(promedio))
elif promedio >= 3:
    print("El alumno ha aprobado")
    if promedio < 4:
        print("Regular con promedio: " + str(promedio))
    elif promedio >= 4:
        print("Muy bien con promedio: " + str(promedio))
else:
    print("Los datos no dan un promedio con rango de 0-5")