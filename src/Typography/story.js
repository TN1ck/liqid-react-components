import React from 'react';
import {
    Headline
} from '../index.js';
import {
    storiesOf
} from '@kadira/storybook';

storiesOf('Typography', module)
    .add('Headline', () => (
        <Headline
            tag='h1'
            type='large'
        >
            {'Test'}
        </Headline>
    ));
