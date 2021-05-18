test('simple addition', () => {
  const a = 5;
  const b = 5;
  expect(a + b).toBe(10);
});

test('async/await', async () => {
  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  const result = await resolveAfter2Seconds();
  expect(result).toBe('resolved');
});
