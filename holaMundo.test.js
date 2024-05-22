// holaMundo.test.js
const holaMundo = require('./holaMundo');

test('debe devolver "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});
