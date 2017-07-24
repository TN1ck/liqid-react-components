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
            position='left'
            text='Example blah blah blah'
        >
            {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eveniet consectetur deleniti provident ullam cupiditate. Natus, inventore ab! Porro saepe inventore laborum id fugiat amet quos aliquam, dolorum reiciendis ipsam!'}
        </Tooltips>
    ));
