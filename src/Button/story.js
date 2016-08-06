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
        'Button: General types',
        'General button with different types',
        () => (
            <div>
                <Button>
                    {'Abschicken'}
                </Button>
                <Button
                    type='secondary'
                >
                    {'Abschicken'}
                </Button>
                <Button
                    type='link'
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
        'Button: Outlined',
        'Buttons with outline instead of being filled',
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
        'Button: Tags',
        'The button can be used with different tags to use it in different situations.',
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
                <Button
                    type='primary'
                    tag='submit'
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
        'Button: Deactivated',
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
                <Button
                    type='secondaryOutlined'
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
    .addWithInfo(
        'Button: Sizes',
        'Three sizes are available - small, regular, large',
        () => (
            <div>
                <Button>
                    {'Abschicken'}
                </Button>
                <Button
                    small
                >
                    {'Abschicken'}
                </Button>
                <Button
                    large
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
