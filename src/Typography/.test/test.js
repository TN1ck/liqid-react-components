import React from 'react';
import {
    Headline
} from '../index.js';
import {
    shallow,
    mount,
    render
} from 'enzyme';
import {
    expect
} from 'chai';
import sinon from 'sinon';

const { describe, it } = global;
const defaultValue = 'myValue';
const defaultValueText = 'Value Default Text';

describe('Select', () => {
    it('should show headline', () => {
        // check http://cheeriojs.github.io/cheerio/ for API
        const wrapper = render(
            <Headline
                type={'uppercase'}
                tag={'h1'}
            >
                My headline
            </Headline>
        );
        expect(wrapper.is('h1'));
    });
});
