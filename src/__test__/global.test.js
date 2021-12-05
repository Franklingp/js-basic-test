const text = "Hola Mundo";

test("La variable debe ser un string.", () => {
    expect(text).toMatch(/Mundo/);
});