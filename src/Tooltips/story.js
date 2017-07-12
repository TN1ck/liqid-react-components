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
            text='Example'
        >
            {'Lorem ipsum dolorelit.'}
        </Tooltips>
    ));
