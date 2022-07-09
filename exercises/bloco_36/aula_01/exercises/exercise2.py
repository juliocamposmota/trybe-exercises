def battleship(grid, line, column):
    if(grid[line][column] == 1):
        return True

    return False


"""
A complexidade de tempo O(1) pois independente do tamanho da entrada
(grid bidimensional) a lógica de execução do algoritmo sempre levará o mesmo
tempo de execução.

A complexidade de espaço O(1) pois a saída sempre será um booleano.
"""
