def fibonacci(n):
    a = 1
    b = 1
    while a <= n:
        print(a)
        (a,b) = (b,a+b)

numero = int(input("Ingrese numero final de la serie Fibonacci: "))
fibonacci(numero)