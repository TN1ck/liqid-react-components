import React from 'react';
import {
    AnimatedPlusButton
} from './index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('AnimatedPlusButton', module)
    .addWithInfo(
        'AnimatedPlusButton: active',
        'AnimatedPlusButton',
        () => (
            <div>
                <AnimatedPlusButton
                    active
                />
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [AnimatedPlusButton]
        }
    )
    .addWithInfo(
        'AnimatedPlusButton: inactive',
        'AnimatedPlusButton',
        () => (
            <div>
                <AnimatedPlusButton />
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [AnimatedPlusButton]
        }
    )
;
