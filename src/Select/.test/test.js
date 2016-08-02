import React from 'react';
import {
    SelectItem,
    Select
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
    it('should show default value', () => {
        // check http://cheeriojs.github.io/cheerio/ for API
        const wrapper = render(
            <Select
                defaultValue={defaultValue}
            >
                <SelectItem value={defaultValue}>
                    {defaultValueText}
                </SelectItem>
                <SelectItem value={'test2'}>
                    Test2
                </SelectItem>
            </Select>
        );
        expect(wrapper.find('input').val()).to.equal(defaultValueText);
    });

    it('should hide list on default', () => {
        const wrapper = render(
            <Select
                defaultValue={defaultValue}
            >
                <SelectItem value={defaultValue}>
                    {defaultValueText}
                </SelectItem>
                <SelectItem value={'test2'}>
                    Test2
                </SelectItem>
            </Select>
        );
        expect(wrapper.hasClass('selectSimpleOpen')).to.equal(false);
    });

    it('should add list items', () => {
        const wrapper = render(
            <Select
                defaultValue={defaultValue}
            >
                <SelectItem value={defaultValue}>
                    {defaultValueText}
                </SelectItem>
                <SelectItem value={'test2'}>
                    Test2
                </SelectItem>
            </Select>
        );
        expect(wrapper.find('li').length).to.equal(2);
    });

    it('should never show list without items', () => {
        const wrapper = render(
            <Select></Select>
        );
        expect(wrapper.find('li').length).to.equal(0);
    });
});
