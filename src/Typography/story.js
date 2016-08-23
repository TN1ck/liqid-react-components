import React from 'react';
const Typography  = require('./typography/');
import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Typography', module)
    .addWithInfo(
        'Typography: Headline (H1)',
        'Usecase for a first headline',
        () => (
            <Typography.Headline
                className=''
                type='max'
                tag='h1'
            >
                First Headline
            </Typography.Headline>
        ), {
            source: true,
            inline: true
        }
    )
    .addWithInfo(
        'Typography: Headline (H2)',
        'Usecase for a second headline',
        () => (
            <Typography.Headline
                className=''
                type='large'
                tag='h2'
            >
                Second Headline
            </Typography.Headline>
        ), {
            source: true,
            inline: true
        }
    )
    .addWithInfo(
        'Typography: Textblock',
        'Usecase for a textblock',
        () => (
            <Typography.Textblock
                className=''
                type='normal'
                tag='p'
            >
                This is a textblock.
            </Typography.Textblock>
        ), {
            source: true,
            inline: true
        }
    )
    .addWithInfo(
        'Typography: Textblock',
        'Usecase for a textblock with regular font size.',
        () => (
            <Typography.Textblock
                className=''
                type='regular'
                tag='p'
            >
                This is a text.
            </Typography.Textblock>
        ), {
            source: true,
            inline: true
        }
    )
    .addWithInfo(
        'Typography: Textblock muted',
        'Usecase for a muted textblock in normal font size.',
        () => (
            <Typography.Textblock
                className=''
                type='muted-normal'
                tag='p'
            >
                This is a muted text.
            </Typography.Textblock>
        ), {
            source: true,
            inline: true
        }
    )
;
