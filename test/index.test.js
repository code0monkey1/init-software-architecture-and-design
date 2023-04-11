test('should output "Hello, world!"', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  require('../src/index');
  expect(consoleSpy).toHaveBeenCalledWith('Hello, world!');
});
