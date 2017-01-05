import React from 'react';
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
                    (new Array(20)).fill().map((item, index) => {
                        return (
                            <SelectItem
                                value={'test-' + index}
                                key={'selectitem-' + index}
                            >
                                {'Test-' + index}
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
    .addWithInfo(
        'Using the value prop',
        'The select will change its value to the given value.',
        () => {
            const values = ['test1', 'test2', 'test3', 'test4'];
            class OverwriteSelect extends React.Component {
                constructor (props) {
                    super(props);
                    this.state = {
                        value: 'test3'
                    };
                    this.changeValue = this.changeValue.bind(this);
                }
                changeValue () {
                    const currentIndex = ((values.indexOf(this.state.value) + 1) % values.length);
                    this.setState({
                        value: values[currentIndex]
                    });
                }
                render () {
                    return (
                        <div>
                            <button onClick={this.changeValue}>
                                {'change the current value'}
                            </button>
                            <hr />
                            <Select value={this.state.value}>
                                {
                                    values.map(item => {
                                        return (
                                            <SelectItem value={item} key={item}>
                                                {item}
                                            </SelectItem>
                                        );
                                    })
                                }
                            </Select>
                        </div>
                    );
                }
            }
            return <OverwriteSelect />;
        }, {
            source: true,
            inline: true
        }
    )
;
