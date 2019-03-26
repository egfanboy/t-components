import React from 'react';
import { mount } from 'enzyme';
import App from '../index';

describe('App', () => {
    it('should not throw an error', () => {
        expect(() => mount(<App />)).not.toThrow();
    });
});
