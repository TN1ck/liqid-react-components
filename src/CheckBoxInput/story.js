import React from 'react';
import {
    CheckBoxInput
} from './index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('CheckBoxInput', module)
    .addWithInfo(
        'CheckBoxInput',
        'CheckBoxInput',
        () => (
            <div>
                <CheckBoxInput>
                </CheckBoxInput>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [CheckBoxInput]
        }
    )
;
