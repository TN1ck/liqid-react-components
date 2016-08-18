import React from 'react';
import _ from 'lodash';
import {
    Spinner,
    Loader,
    BigLoader
} from '../index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Loader', module)
    .addWithInfo(
        'Loader: Loader Wrapper Loading',
        'Loader in loading state',
        () => (
            <div>
                <Loader
                    loading
                >
                    WrapperBigLoader
                </Loader>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'Loader: InlineLoader Wrapper Loading',
        'InlineLoader in loading state',
        () => (
            <div>
                <Loader
                    loading
                    small
                >
                    Wrapper: Inline Loader
                </Loader>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'Loader: Big Loader Alone',
        'Big Loader standing alone',
        () => (
            <div>
                <Loader
                    loading
                    alone
                />
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'Loader: Small Loader Alone',
        'Small standing alone',
        () => (
                <div>
                    <Loader
                        loading
                        small
                        alone
                    />
                </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'BigLoader: BigLoader',
        'BigLoader standing alone',
        () => (
                <div>
                    <BigLoader
                        loading
                    />
                </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
;
