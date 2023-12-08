export const getTableroInicial = () => {
  const filas = Array(10).fill(null);
  const tableroInicial = filas.map((fila, filaIndex) => {
    return {
      nroFila: filaIndex,
      celdas: Array(10)
        .fill(null)
        .map((celda, colIndex) => {
          return {
            nroFila: filaIndex,
            nroCol: colIndex,
            contenido: null,
          };
        }),
    };
  });
  return tableroInicial;
};

export const getTableroInicialConBarcosRandom = () => {
  const filas = Array(10).fill(null);
  const tableroInicial = filas.map((fila, filaIndex) => {
    return {
      nroFila: filaIndex,
      celdas: Array(10)
        .fill(null)
        .map((celda, colIndex) => {
          return {
            nroFila: filaIndex,
            nroCol: colIndex,
            contenido: null,
          };
        }),
    };
  });
  return tableroInicial;
};
