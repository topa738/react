
const mensaje1='string';

const mensaje2=mensaje1.trim();

test('mensaje1,mensaje2 ', () => {
    expect(mensaje1).toBe(mensaje2);
  });