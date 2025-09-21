import timeit
from busqueda_lineal import busqueda_lineal
from busqueda_binaria import busqueda_binaria

# Creamos la lista grande
datos = list(range(1_000_000))
objetivo = 999_999  # Ultimo elemento (peor caso)

# Definimos funciones envoltorio para timeit
def prueba_lineal():
    busqueda_lineal(datos, objetivo)

def prueba_binaria():
    busqueda_binaria(datos, objetivo)

# Medimos el tiempo promedio ejecutando 5 veces cada búsqueda
tiempo_lineal = timeit.timeit(prueba_lineal, number=5)
tiempo_binaria = timeit.timeit(prueba_binaria, number=5)

# Mostramos resultados
print("Comparación de algoritmos usando timeit:\n")
print(f"Búsqueda Lineal -> tiempo promedio: {tiempo_lineal / 5:.8f} segundos")
print(f"Búsqueda Binaria -> tiempo promedio: {tiempo_binaria / 5:.8f} segundos")