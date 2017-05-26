import React from 'react';
import {
    Grid,
    Col,
    Row
} from './index.js';
import {
    storiesOf
} from '@kadira/storybook';

 /** TODO:  if breakpoint xs in this example 'xs={6}' has a value */
storiesOf('Grid', module)
    .add(
        'Column',
        () => (
            <Grid>
                <Row center={'xs'}>
                    {'Row'}
                    <Col xs={6}>
                        <div>{'Col-item-1'}</div>
                        <div>{'Col-item-2'}</div>
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    .add(
        'Comlumn – reverse',
        () => (
            <Grid>
                <Row center={'xs'}>
                    {'Row'}
                    <Col xs={6} reverse>
                        <div>{'Col-item-1'}</div>
                        <div>{'Col-item-2'}</div>
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    .add(
        'Column – horizontal offset',
        () => (
            <Grid>
                <Row>
                    <Col xsOffset={11} xs={1}>
                        <div>{'Col-1'}</div>
                    </Col>
                    <Col xsOffset={10} xs={2}>
                        <div>{'Col-2'}</div>
                    </Col>
                    <Col xsOffset={9} xs={3}>
                        <div>{'Col-3'}</div>
                    </Col>
                    <Col xsOffset={8} xs={4}>
                        <div>{'Col-4'}</div>
                    </Col>
                    <Col xsOffset={7} xs={5}>
                        <div>{'Col-5'}</div>
                    </Col>
                    <Col xsOffset={6} xs={6}>
                        <div>{'Col-6'}</div>
                    </Col>
                    <Col xsOffset={5} xs={7}>
                        <div>{'Col-7'}</div>
                    </Col>
                    <Col xsOffset={4} xs={8}>
                        <div>{'Col-8'}</div>
                    </Col>
                    <Col xsOffset={3} xs={9}>
                        <div>{'Col-9'}</div>
                    </Col>
                    <Col xsOffset={2} xs={10}>
                        <div>{'Col-10'}</div>
                    </Col>
                    <Col xsOffset={1} xs={11}>
                        <div>{'Col-11'}</div>
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    /** TODO:  stuff like around, between, … do not require xs*/
    .add(
        'Column – distributed',
        () => (
            <Grid>
                <Row around={'xs'}>
                    <Col xs={2}>
                        <div>{'Col-1'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-2'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-3'}</div>
                    </Col>
                </Row>
                <Row between={'xs'}>
                    <Col xs={2}>
                        <div>{'Col-1'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-2'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-3'}</div>
                    </Col>
                </Row>
                <Row stretch={'xs'}>
                    <Col>
                        <div>{'Col-1'}</div>
                    </Col>
                    <Col>
                        <div>{'Col-2'}</div>
                    </Col>
                    <Col>
                        <div>{'Col-3'}</div>
                    </Col>
                </Row>
                <Row end={'xs'}>
                    <Col xs={2}>
                        <div>{'Col-1'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-2'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-3'}</div>
                    </Col>
                </Row>
                <Row center={'xs'}>
                    <Col xs={2}>
                        <div>{'Col-1'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-2'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-3'}</div>
                    </Col>
                </Row>
                <Row start={'xs'}>
                    <Col xs={2}>
                        <div>{'Col-1'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-2'}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{'Col-3'}</div>
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    .add(
        'Test',
        () => (
            <Grid>
                {'Multiple Columns'}
                <Col onClick={() => console.log('yolo')}>
                    <div>{'Col-1-item-1'}</div>
                    <div>{'Col-1-item-2'}</div>
                </Col>
                <Col>
                    <div>{'Col-2-item-1'}</div>
                    <div>{'Col-2-item-2'}</div>
                </Col>
                <Col reverse>
                    <div>{'Col-3-item-1'}</div>
                    <div>{'Col-3-item-2'}</div>
                </Col>
                <Row reverseRow={'xs'}>
                    <div>{'Row-1-item-1'}</div>
                    <div>{'Row-1-item-2'}</div>
                </Row>
                <Row reverseRow>
                    <div>{'Row-1-item-1'}</div>
                    <div>{'Row-1-item-2'}</div>
                </Row>
                <Row reverseCol={'xs'}>
                    <div>{'Row-2-item-1'}</div>
                    <div>{'Row-2-item-2'}</div>
                </Row>
                <Row>
                    <div>{'Row-3-item-1'}</div>
                    <div>{'Row-3-item-2'}</div>
                </Row>
                <Row>
                    <Col>
                        <div>{'Col-4-item-1'}</div>
                        <div>{'Col-4-item-2'}</div>
                    </Col>
                    <Col xsOffset={9}>
                        <div>{'Col-5-item-1'}</div>
                        <div>{'Col-5-item-2'}</div>
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col]
        }
    )
;
