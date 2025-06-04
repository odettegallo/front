# Programa para calcular el promedio de 4 notas y determinar si el estudiante aprueba

# Solicitar las 4 notas al usuario
print("Ingrese las 4 notas separadas por comas:")
notas = input().split(',')

# Verificar que se hayan ingresado exactamente 4 notas
if len(notas) != 4:
    print("Debe ingresar exactamente 4 notas.")
    exit()

# Verificar que todas las notas sean números
try:
    nota1 = float(notas[0])
    nota2 = float(notas[1])
    nota3 = float(notas[2])
    nota4 = float(notas[3])
except ValueError:
    print("Todas las notas deben ser números.")
    exit()

# Calcular el promedio
promedio = (nota1 + nota2 + nota3 + nota4) / 4

# Determinar si aprueba o reprueba
if promedio >= 4.0:
    print("Aprobado")
else:
    print("Reprobado")