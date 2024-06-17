import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';

let consoleSpy: jest.SpyInstance;
beforeAll(() => {
  consoleSpy = jest
    .spyOn(global.console, 'error')
    .mockImplementation((message) => {
      if (!message?.message?.includes('Could not parse CSS stylesheet')) {
        global.console.warn(message);
      }
    });
});

afterAll(() => consoleSpy.mockRestore());
