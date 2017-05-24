import React from 'react';
import {
    Grid,
    Col,
    Row
} from './index.js';
import {
    storiesOf
} from '@kadira/storybook';

storiesOf('Grid', module)
    .add(
        'Simple Grid',
        () => (
            <Grid>
                {'Simple Grid'}
                <Col displayAsFlex>
                    <div>{'Col-item-1'}</div>
                    <div>{'Col-item-2'}</div>
                </Col>
                <Row>{'Row'}</Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    .add(
        'Multiple Columns',
        () => (
            <Grid>
                {'Multiple Columns'}
                <Col displayAsFlex xs>
                    <div>{'Col-1-item-1'}</div>
                    <div>{'Col-1-item-2'}</div>
                </Col>
                <Col displayAsFlex reverse>
                    <div>{'Col-2-item-1'}</div>
                    <div>{'Col-2-item-2'}</div>
                </Col>
                <Row reverseRow={'xs'}>
                    <div>{'Row-1-item-1'}</div>
                    <div>{'Row-1-item-2'}</div>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col]
        }
    )
;
