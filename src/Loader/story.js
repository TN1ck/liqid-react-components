import React from 'react';
import _ from 'lodash';
import {
    Spinner,
    Loader
} from '../index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Loader', module)
    .addWithInfo(
        'Loader: Non-loading',
        'Non-loading loader',
        () => (
            <div>
                <Loader />
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'Loader: Loading',
        'Loader in loading state',
        () => (
            <div>
                <Loader
                    loading
                />
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [Spinner]
        }
    )
    .addWithInfo(
        'Loader: Inline Loader',
        'Inline Loader in loading state',
        () => (
            <div>
                <Loader
                    inline
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
