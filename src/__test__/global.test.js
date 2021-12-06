const text = "Hola Mundo";
const fruits = ["manzana", "mango", "naranja"]


//Comprobar si esta el string
test("La variable debe ser un string.", () => {
    expect(text).toMatch(/Mundo/);
});

//Comprobar si hay un elemento en el arreglo
test("Verificar frutas en arreglo", () => {
    expect(fruits).toContain("mango");
})

//Comprobar si es un booleano verdadero
test("Tiene que ser booleano verdadero", () => {
    expect(true).toBeTruthy()
})

//Probar numeros, si uno es mayor que otro
test("El numero es mayor que", () => {
    expect(10).toBeGreaterThan(9);
})

//Probar un callback
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

test('Probar un callback', () => {
    reverseString("hola", (str) => {
        expect(str).toBe("aloh")
    })
})