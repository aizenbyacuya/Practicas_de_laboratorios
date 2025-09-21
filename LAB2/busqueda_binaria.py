def busqueda_binaria(lista, objetivo):
    inicio = 0
    fin = len(lista) - 1

    while inicio <= fin:
        medio = (inicio + fin) // 2
        valor_medio = lista[medio]

        if valor_medio == objetivo:
            return medio
        elif valor_medio < objetivo:
            inicio = medio + 1
        else:
            fin = medio - 1

    return -1