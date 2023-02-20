
import serie from './serieN';

test('La función serie(0) debe retornar el valor esperado 5', () => {
    const n = 0;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(5);
  });

test('La función serie(1) debe retornar el valor esperado 14', () => {
    const n = 1;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(14);
  });

test('La función serie(2) debe retornar el valor esperado 22', () => {
    const n = 2;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(22);
  });

test('La función serie(3) debe retornar el valor esperado 37', () => {
    const n = 3;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(37);
  });

test('La función serie(4) debe retornar el valor esperado 68', () => {
    const n = 4;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(68);
  });

test('La función serie(5) debe retornar el valor esperado 78', () => {
    const n = 5;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(78);
  });
  
test('La función serie(6) debe retornar el valor esperado 120', () => {
const n = 6;
const resultadoObtenido = serie(n);
expect(resultadoObtenido).toBe(120);
});

test('La función serie(7) debe retornar el valor esperado 126', () => {
    const n = 7;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(126);
  });

  test('La función serie(8) debe retornar el valor esperado 171', () => {
    const n = 8;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(171);
  });

  test('La función serie(9) debe retornar el valor esperado 187', () => {
    const n = 9;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(187);
  });

  test('La función serie(10) debe retornar el valor esperado 187', () => {
    const n = 10;
    const resultadoObtenido = serie(n);
    expect(resultadoObtenido).toBe(187);
  });