palabra = input("Ingrese una palabra: ")
if str(palabra) == "".join(reversed(palabra)):
    print("Es una palabra Palindroma")
else:
    print("No es una palabra Palindroma")
