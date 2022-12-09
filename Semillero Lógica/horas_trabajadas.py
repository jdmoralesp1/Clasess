horas = int(input("Ingrese horas laboradas: "))

if horas <= 48:
    total= horas * 4300
    print("Trabajo " + str(horas) + " horas y su pago es: " + str(total))
elif horas > 48:
    total= horas * 4300
    extras = horas - 48
    print("Trabajo " + str(horas) + " horas, de las cuales "+ str(extras) +" fueron extras y su pago es: " + str(total))
