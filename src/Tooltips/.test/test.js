import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Tooltips from '../index.js';

const props = {
    position: 'bottom',
    text: 'example text',
    children: 'hint message'
};

const container = shallow(<Tooltips {...props} />);

describe('tests for <Tooltips> container', () => {
    it('should render tooltips div', () => {
        expect(container.length).to.eql(1);
    });

    it('should render position top class name', () => {
        expect(container.find('.liq_tooltips__hint').hasClass('liq_tooltips__hint--bottom')).to.equal(true);
    });

    it('should contain the text passed as props', () => {
        expect(container.find('.liq_tooltips__text').text()).to.contain('example text');
    });

    it('should contain the hint message passed as props', () => {
        expect(container.find('.liq_tooltips__hint > div').text()).to.contain('hint message');
    });

    it('should stimulate on touch events', () => {
        container.simulate('touchStart');
        expect(container.hasClass('liq_tooltips--on-toggle')).to.equal(true);
    });
});
