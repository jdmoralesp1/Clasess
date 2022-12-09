numero = int(input("Ingrese numero final de la serie Fibonacci: "))

a = b = 1
while a <= numero:
    print(a)
    (a,b) = (b,a+b)

"""numero = int(input("Ingrese numero final de la serie: "))
a = 0
b = 1
c = 1
print(str(c))
while b <= numero:
    a = b + c
    print(str(a))"""



    