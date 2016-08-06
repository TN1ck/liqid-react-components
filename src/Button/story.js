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
        'Button outlined',
        'General buttons with outline',
        () => (
            <div>
                <Button
                    type='primaryOutlined'
                >
                    {'Abschicken'}
                </Button>
                <Button
                    type='secondaryOutlined'
                >
                    {'Abschicken'}
                </Button>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Button]
        }
    )
    .addWithInfo(
        'Button Primary with different tags',
        'Primary button with link tag',
        () => (
            <div>
                <Button
                    type='primary'
                    tag='a'
                >
                    {'Abschicken'}
                </Button>
                <Button
                    type='primary'
                    tag='button'
                >
                    {'Abschicken'}
                </Button>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Button]
        }
    )
    .addWithInfo(
        'Button deactivated',
        'Deactivated buttons',
        () => (
            <div>
            <Button
                type='primary'
                deactivated
            >
                {'Abschicken'}
            </Button>
            <Button
                type='primaryOutlined'
                deactivated
            >
                {'Abschicken'}
            </Button>
            <Button
                type='secondary'
                deactivated
            >
                {'Abschicken'}
            </Button>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Button]
        }
    )
;
