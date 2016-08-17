import React from 'react';
import _ from 'lodash';
import {
    Spinner,
    Loader
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
                <Spinner />
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
;
