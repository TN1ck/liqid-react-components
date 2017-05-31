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
        'Column',
        () => (
            <Grid>
                <Row center={'xs'}>
                    <Col xs={6}>
                        <div>{'Col-item-1'}</div>
                        <div>{'Col-item-2'}</div>
                        <div>{'Col-item-3'}</div>
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    .add(
        'Comlumn – Reversed',
        () => (
            <Grid>
                <Row center={'xs'}>
                    <Col xs={6} reverse>
                        <div>{'Col-item-1'}</div>
                        <div>{'Col-item-2'}</div>
                        <div>{'Col-item-3'}</div>
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    .add(
        'Column – Horizontal offset',
        () => (
            <Grid>
                <Row>
                    <Col xsOffset={11} xs={1}>
                        {'Col-1'}
                    </Col>
                    <Col xsOffset={10} xs={2}>
                        {'Col-2'}
                    </Col>
                    <Col xsOffset={9} xs={3}>
                        {'Col-3'}
                    </Col>
                    <Col xsOffset={8} xs={4}>
                        {'Col-4'}
                    </Col>
                    <Col xsOffset={7} xs={5}>
                        {'Col-5'}
                    </Col>
                    <Col xsOffset={6} xs={6}>
                        {'Col-6'}
                    </Col>
                    <Col xsOffset={5} xs={7}>
                        {'Col-7'}
                    </Col>
                    <Col xsOffset={4} xs={8}>
                        {'Col-8'}
                    </Col>
                    <Col xsOffset={3} xs={9}>
                        {'Col-9'}
                    </Col>
                    <Col xsOffset={2} xs={10}>
                        {'Col-10'}
                    </Col>
                    <Col xsOffset={1} xs={11}>
                        {'Col-11'}
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    /** TODO:  stuff like around, between, … do not require xs*/
    .add(
        'Columns – Distributed',
        () => (
            <Grid>
                <Row around={'xs'} between={'md'}>
                    <Col xs={4} md={2}>
                        {'Col-1'}
                    </Col>
                    <Col xs={4} md={2}>
                        {'Col-2'}
                    </Col>
                    <Col xs={4} md={2}>
                        {'Col-3'}
                    </Col>
                </Row>
                <Row between={'xs'} around={'md'}>
                    <Col xs={3}>
                        {'Col-1'}
                    </Col>
                    <Col xs={3}>
                        {'Col-2'}
                    </Col>
                    <Col xs={3}>
                        {'Col-3'}
                    </Col>
                </Row>
                <Row stretch={'xs'}>
                    <Col>
                        {'Col-1'}
                    </Col>
                    <Col>
                        {'Col-2'}
                    </Col>
                    <Col>
                        {'Col-3'}
                    </Col>
                </Row>
                <Row end={'xs'} start={'md'}>
                    <Col xs={2}>
                        {'Col-1'}
                    </Col>
                    <Col xs={2}>
                        {'Col-2'}
                    </Col>
                    <Col xs={2}>
                        {'Col-3'}
                    </Col>
                </Row>
                <Row center={'xs'} end={'md'}>
                    <Col xs={2}>
                        {'Col-1'}
                    </Col>
                    <Col xs={2}>
                        {'Col-2'}
                    </Col>
                    <Col xs={2}>
                        {'Col-3'}
                    </Col>
                </Row>
                <Row start={'xs'} center={'md'}>
                    <Col xs={2}>
                        {'Col-1'}
                    </Col>
                    <Col xs={2}>
                        {'Col-2'}
                    </Col>
                    <Col xs={2}>
                        {'Col-3'}
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
    .add(
        'Columns – Hey',
        () => (
            <Grid>
                <Row around={'xs'} start={'sm'}>
                    <Col xs={1} sm={1} md={1}>
                        {'Col-1'}
                    </Col>
                    <Col xs={1} sm={2} md={1} smOffset={3} mdOffset={1}>
                        {'Col-2'}
                    </Col>
                    <Col xs={1} sm={1} md={2} smOffset={0} mdOffset={2}>
                        {'Col-3'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={2}>
                        {'Col-4'}
                    </Col>
                </Row>
                <Row around={'xs'} start={'sm'}>
                    <Col xs={1} sm={1} md={1}>
                        {'Col-1'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={3} mdOffset={1}>
                        {'Col-2'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={1} mdOffset={2}>
                        {'Col-3'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={2} mdOffset={5}>
                        {'Col-4'}
                    </Col>
                </Row>
                <Row around={'xs'} start={'sm'}>
                    <Col xs={1} sm={1} md={2}>
                        {'Col-1'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={3} mdOffset={0}>
                        {'Col-2'}
                    </Col>
                    <Col xs={1} sm={1} md={2} smOffset={1} mdOffset={2}>
                        {'Col-3'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={2} mdOffset={3}>
                        {'Col-4'}
                    </Col>
                </Row>
                <Row around={'xs'} start={'sm'}>
                    <Col xs={1} sm={1} md={1}>
                        {'Col-1'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={3} mdOffset={1}>
                        {'Col-2'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={1} mdOffset={2}>
                        {'Col-3'}
                    </Col>
                    <Col xs={1} sm={1} md={1} smOffset={2} mdOffset={4}>
                        {'Col-4'}
                    </Col>
                </Row>
                <Row around={'xs'} start={'sm'}>
                    <Col xs={1} sm={2} md={1}>
                        {'Col-1'}
                    </Col>
                    <Col xs={1} sm={2} md={1} smOffset={2} mdOffset={1}>
                        {'Col-2'}
                    </Col>
                    <Col xs={1} sm={1} md={2} smOffset={0} mdOffset={2}>
                        {'Col-3'}
                    </Col>
                    <Col xs={1} sm={2} md={1} smOffset={2} mdOffset={3}>
                        {'Col-4'}
                    </Col>
                </Row>
            </Grid>
        ), {
            propTables: [Grid, Col, Row]
        }
    )
;
