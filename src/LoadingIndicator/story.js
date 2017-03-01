import React from 'react';
import {
    InlineLoader
} from '../index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('LoadingIndicator', module)
    .addWithInfo(
        'LoadingIndicator regular',
        'LoadingIndicator',
        () => (
            <InlineLoader />
        ), {
            source: true,
            inline: false,
            propTables: [InlineLoader]
        }
   )
    .addWithInfo(
        'LoadingIndicator small',
        'LoadingIndicator',
        () => (
            <InlineLoader size={'small'} />
        ), {
            source: true,
            inline: false,
            propTables: [InlineLoader]
        }
   )
;
