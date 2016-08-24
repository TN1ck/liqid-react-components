import React from 'react';
import {
    Loader,
    Button
} from '../index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Loader', module)
    .addWithInfo(
        'Loader: Big',
        'Big loading indicator standing alone',
        () => (
                <Loader loading />
        ), {
            source: true,
            inline: true,
            propTables: [Loader]
        }
    )
    .addWithInfo(
        'Loader: Big as wrapper',
        'Big loading indicator used as wrapper.',
        () => (
            <Loader
                loading
            >
                {'Content'}
            </Loader>
        ), {
            source: true,
            inline: true,
            propTables: [Loader]
        }
    )
    .addWithInfo(
        'Loader: Small',
        'Small loading indicator standing alone',
        () => (
            <Loader
                loading
                type="small"
            />
        ), {
            source: true,
            inline: true,
            propTables: [Loader]
        }
    )
    .addWithInfo(
        'Loader: Small as wrapper',
        'Small loading indicator standing alone',
        () => (
            <Loader
                loading
                type="small"
            >
                {'Content'}
            </Loader>
        ), {
            source: true,
            inline: true,
            propTables: [Loader]
        }
    )
    .addWithInfo(
        'Loader: Inline',
        'Small loading indicator for using inline.',
        () => (
            <Loader
                loading
                type="inline"
            >
                {'Content'}
            </Loader>
        ), {
            source: true,
            inline: true,
            propTables: [Loader]
        }
    )
    .addWithInfo(
        'Loader: Inline in button',
        'Small loading indicator used in a button.',
        () => (
            <Button>
                <Loader
                    loading
                    type="inline"
                >
                    {'Content'}
                </Loader>
            </Button>
        ), {
            source: true,
            inline: true,
            propTables: [Loader]
        }
    )
;
