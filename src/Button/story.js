import React from 'react';
import {
    Button
} from '../index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Button', module)
    .addWithInfo(
        'Button Primary',
        'General button without specific properties',
        () => (
            <Button>
                {'Abschicken'}
            </Button>
        ), {
            source: true,
            inline: true,
            propTables: [Button]
        }
    )
    .addWithInfo(
        'Button Secondary',
        'General button without specific properties',
        () => (
            <Button
                type='secondary'
            >
                {'Abschicken'}
            </Button>
        ), {
            source: true,
            inline: true,
            propTables: [Button]
        }
    )
    .addWithInfo(
        'Button Primary as usual link',
        'General button without specific properties',
        () => (
            <Button
                type='primary'
                tag='a'
            >
                {'Abschicken'}
            </Button>
        ), {
            source: true,
            inline: true,
            propTables: [Button]
        }
    )
;
