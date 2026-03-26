const { JSDOM } = require('jsdom');
const { afterEach } = require('bun:test');
const { cleanup } = require('@testing-library/react');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
});

const { window } = dom;

global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.Node = window.Node;
global.HTMLElement = window.HTMLElement;
global.HTMLSelectElement = window.HTMLSelectElement;
global.HTMLInputElement = window.HTMLInputElement;
global.CustomEvent = window.CustomEvent;

afterEach(() => {
  cleanup();
});
