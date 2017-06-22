import React from 'react';
import Tooltips from './index.js';
import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Tooltips', module)
    .addWithInfo(
        'Default',
        () => (
            <Tooltips
                position='top'
                text='Example'
            >
            {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus animi totam, ipsam, aliquid veritatis voluptates cupiditate molestiae officia cum? Asperiores dolore tempora necessitatibus sunt nesciunt eligendi at, excepturi cumque dignissimos.'}
        </Tooltips>
    ));
