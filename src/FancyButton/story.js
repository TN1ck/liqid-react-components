import React from 'react';
import {
    FancyButton
} from './index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('FancyButton', module)
    .addWithInfo(
        'FancyButton',
        'FancyButton',
        () => (
            <div>
                <FancyButton>
                    {'so crazy fancy'}
                </FancyButton>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [FancyButton]
        }
    )
;
