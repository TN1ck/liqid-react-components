import React from 'react';
import {
    PanelAccordion
} from './index.js';

import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('PanelAccordion', module)
    .addWithInfo(
        'PanelAccordion: AnimatedPlusButton',
        'PanelAccordion',
        () => (
            <div>
                <PanelAccordion
                    header={'Header'}
                    headerAdditionalContent={'extra content'}
                    buttonLeft
                    border
                >
                    {'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                </PanelAccordion>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [PanelAccordion]
        }
    )
    .addWithInfo(
        'PanelAccordion: FancyButton',
        'PanelAccordion',
        () => (
            <div>
                <PanelAccordion
                    header={'Header'}
                    type={'fancy'}
                    animate
                >
                    {'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                </PanelAccordion>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [PanelAccordion]
        }
    )
    .addWithInfo(
        'PanelAccordion: Checkbox',
        'PanelAccordion',
        () => (
            <div>
                <PanelAccordion
                    header={'Header'}
                    type={'checkbox'}
                >
                    {'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                </PanelAccordion>
            </div>
        ), {
            source: true,
            inline: true,
            propTables: [PanelAccordion]
        }
    )
;
