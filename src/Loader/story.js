import React from 'react';
import _ from 'lodash';
import {
    Spinner,
    Loader,
    BigLoader,
    SmallLoader,
    InlineLoader,
    NewLoader,
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
        'BigLoader',
        'BigLoader in loading state',
        () => (
            <BigLoader
                loading
            />
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'Loader',
        'Loader in loading state',
        () => (
            <Loader
                loading
            >
                <div>
                    Content
                </div>
            </Loader>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'SmallLoader',
        'SmallLoader in loading state',
        () => (
            <SmallLoader
                loading
            />
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'Spinner',
        'Spinner standing alone',
        () => (
                <Spinner
                    loading
                />
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'InlineLoader',
        'InlineLoader',
        () => (
                <InlineLoader loading />
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'NewLoader: Small - Alone',
        'NewLoader standing alone',
        () => (
                <NewLoader
                    loading
                    small
                />
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'NewLoader: Big - Alone',
        'NewLoader standing alone',
        () => (
                <NewLoader loading />
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'NewLoader: Big - Wrapper',
        'NewLoader as Wrapper',
        () => (
            <NewLoader
                loading
            >
                <div>Content</div>
            </NewLoader>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'NewLoader: Inline - Wrapper',
        'Inline Loader standing alone',
        () => (
            <NewLoader
                loading
                inline
            >
                {'Abschicken'}
            </NewLoader>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'NewLoader: Inline - BUTTON',
        'Inline Loader standing alone',
        () => (
            <Button>
                <NewLoader
                    loading
                    inline
                >
                    {'Abschicken'}
                </NewLoader>
            </Button>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
;
