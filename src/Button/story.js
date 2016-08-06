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
        'General button with type secondary',
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
        'Button Ghost Primary',
        'General button with ghost and primary style',
        () => (
            <Button
                type='primary'
                style='ghost'
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
        'Primary button with link tag',
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
    .addWithInfo(
        'Button Primary deactivated',
        'Deactivated button',
        () => (
            <Button
                type='primary'
                deactivated
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
