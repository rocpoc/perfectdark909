// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';
import { vi } from 'vitest';

Object.assign(globalThis, {
  TextDecoder,
  TextEncoder,
});

Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.assign(globalThis, {
  IntersectionObserver: MockIntersectionObserver,
});
