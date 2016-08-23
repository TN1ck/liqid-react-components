import React from 'react';
const Typography  = require('./typography/');
import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Typography', module)
    .addWithInfo(
        'Typography',
        'General select usage',
        () => (
            <Typography.Headline
                className=''
                type='max'
                tag='h2'
            >
                hdjfshjksh
            </Typography.Headline>
        ), {
            source: true,
            inline: true
        }
    )
;
