import React from 'react';
import {
    Spinner
} from '../index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Spinner', module)
    .addWithInfo(
        'Spinner',
        'Spinner description',
        () => (
            <div>
                <Spinner
                    type='color'
                    color
                >
                </Spinner>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
;
