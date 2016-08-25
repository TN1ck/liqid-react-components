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
} from './Card/index.js';
import {
    InlineCard,
    InlineCardHeader,
    InlineCardSubHeader,
    InlineCardBody,
    InlineCardFooter
} from './InlineCard/index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Card', module)
    .addWithInfo(
        'Card: Simple',
        'A simple Card with header, content and footer.',
        () => (
            <Card borderLight>
                <CardHeader>
                    {'Header'}
                </CardHeader>
                <CardContent>
                    {'Content'}
                </CardContent>
                <CardFooter>
                    {'Footer'}
                </CardFooter>
            </Card>
        ), {
            source: true,
            inline: true,
            propTables: [Card]
        }
    )
    .addWithInfo(
        'Card: With a sidebar',
        'A simple Card with a sidebar.',
        () => (
            <Card borderLight>
                <CardHeader>
                    {'Header'}
                </CardHeader>
                <CardContentRight>
                    {'ContentRight'}
                </CardContentRight>
                <CardSidebar isResponsiveNavigation>
                    {'Sidebar'}
                </CardSidebar>
                <CardFooter>
                    {'Footer'}
                </CardFooter>
            </Card>
        ), {
            source: true,
            inline: true,
            propTables: [Card, CardSidebar]
        }
    )
    .addWithInfo(
        'Card: Loading',
        'A simple Card in loading state.',
        () => (
            <Card loading borderLight>
                <CardHeader>
                    {'Header'}
                </CardHeader>
                <CardContent>
                    {'Content'}
                </CardContent>
                <CardFooter>
                    {'Footer'}
                </CardFooter>
            </Card>
        ), {
            source: true,
            inline: true,
            propTables: [Card, CardSidebar]
        }
    )
    .addWithInfo(
        'WrappedCard',
        'A Card wrapped in a container.',
        () => (
            <WrappedCard>
                <CardHeader lowMargin>
                    {'Header'}
                </CardHeader>
                <CardContent>
                    {'Content'}
                </CardContent>
                <CardFooter noTopMargin>
                    {'Footer'}
                </CardFooter>
            </WrappedCard>
        ), {
            source: true,
            inline: true,
            propTables: [WrappedCard]
        }
    )
    .addWithInfo(
        'ModalCard',
        'A Card wrapped in a modal.',
        () => (
            <ModalCard>
                <CardHeader lowMargin>
                    {'Header'}
                </CardHeader>
                <CardContent>
                    {'Content'}
                </CardContent>
                <CardFooter noTopMargin>
                    {'Footer'}
                </CardFooter>
            </ModalCard>
        ), {
            source: true,
            inline: true,
            propTables: [ModalCard]
        }
    )
    .addWithInfo(
        'InlineCard',
        'A simple InlineCard.',
        () => (
            <InlineCard>
                <InlineCardHeader>
                    {'Header'}
                </InlineCardHeader>
                <InlineCardBody>
                    {'Body'}
                </InlineCardBody>
                <InlineCardFooter>
                    {'Footer'}
                </InlineCardFooter>
            </InlineCard>
        ), {
            source: true,
            inline: true,
            propTables: [InlineCard]
        }
    )
    .addWithInfo(
        'InlineCard: Subheader',
        'A simple InlineCard.',
        () => (
            <InlineCard warning>
                <InlineCardHeader inHeader>
                    {'Header'}
                </InlineCardHeader>
                <InlineCardSubHeader>
                    {'SubHeader'}
                </InlineCardSubHeader>
                <InlineCardBody verticalPaddingRegular>
                    {'Body'}
                </InlineCardBody>
                <InlineCardFooter hasBorder>
                    {'Footer'}
                </InlineCardFooter>
            </InlineCard>
        ), {
            source: true,
            inline: true,
            propTables: [InlineCard]
        }
    )
;
