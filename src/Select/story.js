import React from 'react';
import _ from 'lodash';
import {
    SelectItem,
    Select
} from '../index.js';
import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

storiesOf('Select', module)
    .addWithInfo(
        'Simple Select',
        'General select usage',
        () => (
            <Select
                defaultValue={'test'}
            >
                <SelectItem value={'test'} disabled>
                    {'Test'}
                </SelectItem>
                <SelectItem value={'test2'}>
                    {'Test2'}
                </SelectItem>
            </Select>
        ), {
            source: true,
            inline: true,
            propTables: [Select, SelectItem]
        }
    )
    .addWithInfo(
        'Simple Select with disabled value',
        'A select can have disabled items. Disabled items are not selectable (mind arrow usage)',
        () => (
            <Select
                defaultValue={'test'}
            >
                <SelectItem value={'test'} disabled>
                    {'Test'}
                </SelectItem>
                <SelectItem value={'test2'}>
                    {'Test2'}
                </SelectItem>
            </Select>
        ), {
            source: true,
            inline: true,
            propTables: [Select, SelectItem]
        }
    )
    .addWithInfo(
        'Simple Select with many values',
        'Having many values will lead to a scrollable select list. When using arrow keys, scrolling has to be triggered automatically.',
        () => (
            <Select
                defaultValue={'test'}
            >
                {
                    _.range(20).map((item, index) => {
                        return (
                            <SelectItem
                                value={'test-' + item}
                                key={'selectitem-' + index}
                            >
                                {'Test-' + item}
                            </SelectItem>
                        );
                    })
                }
            </Select>
        ), {
            source: true,
            inline: true,
            propTables: [Select, SelectItem]
        }
    )
    .addWithInfo(
        'Simple Select with Separator',
        'The select list can hold items which only are seen as a separator instead of a usual item',
        () => (
            <Select
                defaultValue={'test'}
            >
                <SelectItem value={''} />
                <SelectItem value={'test'} disabled>
                    {'Test'}
                </SelectItem>
                <SelectItem value={'test2'}>
                    {'Test2'}
                </SelectItem>
                <SelectItem
                    separator
                    disabled
                />
                <SelectItem value={'test3'}>
                    {'Test3'}
                </SelectItem>
                <SelectItem value={'aest3'}>
                    {'Aest3'}
                </SelectItem>
                <SelectItem value={'west3'}>
                    {'West3'}
                </SelectItem>
                <SelectItem value={'west4'}>
                    {'West4'}
                </SelectItem>
                <SelectItem value={'aest4'}>
                    {'Aest4'}
                </SelectItem>
                <SelectItem value={'best4'}>
                    {'Best4'}
                </SelectItem>
            </Select>
        ), {
            source: true,
            inline: true,
            propTables: [Select, SelectItem]
        }
    )
    .addWithInfo(
        'Disabled select',
        'The select is disabled and can not be used at all.',
        () => (
            <Select
                disabled
                defaultValue={'test'}
            />
        ), {
            source: true,
            inline: true,
            propTables: [Select, SelectItem]
        }
    )
;
