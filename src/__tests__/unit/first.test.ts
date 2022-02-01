describe("Teste para rodar teste", () => {
  it("retorna a soma de 2 numeros", () => {
    const x: number = 4;
    const y: number = 3;

    const sum = (x, y): number => x + y;

    expect(sum(x, y)).toBe(7);
  });
});
