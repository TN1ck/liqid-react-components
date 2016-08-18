import React from 'react';
import _ from 'lodash';
import {
    Spinner,
    Loader,
    BigLoader,
    SmallLoader,
    InlineLoader,
    NewLoader
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
        'NewSpinner: Small',
        'NewSpinner standing alone',
        () => (
                <NewLoader
                    loading
                    small
                >
                </NewLoader>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'NewSpinner: Inline',
        'NewSpinner standing alone',
        () => (
                <NewLoader
                    loading
                    inline
                >
                </NewLoader>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'NewSpinner: Big as Wrapper',
        'NewSpinner standing alone',
        () => (
                <NewLoader
                    loading
                >
                </NewLoader>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
;
