import React from 'react';
import {
    Container,
    Card,
    CardHeader,
    CardContent,
    CardTextBlock,
    CardFooter,
    CardSidebar,
    CardContentLeft,
    CardContentRight,
    WrappedCard,
    ModalCard
} from './index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Card', module)
    .addWithInfo(
        'Card',
        'Card component',
        () => (
            <WrappedCard>
                <CardContent>
                    {'CardContent'}
                </CardContent>
                <CardFooter>
                    {'CardFooter'}
                </CardFooter>
            </WrappedCard>
        ), {
            source: true,
            inline: true,
            propTables: [Card]
        }
    )
;
