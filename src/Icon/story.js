import React from 'react';
import {
    Icon
} from '../index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Icon', module)
    .addWithInfo(
        'Icon',
        'Icon',
        () => (
            <div>
                <Icon
                    value='arrowLeft'
                />
                <Icon
                    value='arrowRight'
                />
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Icon]
        }
   )
;
