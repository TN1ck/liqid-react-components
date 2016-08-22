import React from 'react';
import {
    Card
} from './index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Card', module)
    .addWithInfo(
        'Card:',
        'Card component',
        () => (
            <Card>{'Card'}</Card>
        ), {
            source: true,
            inline: true,
            propTables: [Card]
        }
    )
;
