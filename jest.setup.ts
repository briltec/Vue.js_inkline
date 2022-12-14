import '@testing-library/jest-dom';
import { inklineGlobals, defaultOptions as defaultPrototypeOptions, createPrototype } from './src/plugin';
import { localStorageMock } from './src/__mocks__/localStorageMock';
import { matchMediaMock } from './src/__mocks__/matchMediaMock';

inklineGlobals.prototype = createPrototype(defaultPrototypeOptions);

Object.defineProperty(global.window, 'localStorage', { value: localStorageMock });

Object.defineProperty(global.window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(matchMediaMock)
});
