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
        'Simple Card component',
        'Card component with header, content and footer.',
        () => (
            <Card borderLight>
                <CardHeader>
                    {'CardHeader'}
                </CardHeader>
                <CardContent>
                    {'CardContent'}
                </CardContent>
                <CardFooter>
                    {'CardFooter'}
                </CardFooter>
            </Card>
        ), {
            source: true,
            inline: true,
            propTables: [Card]
        }
    )
;
