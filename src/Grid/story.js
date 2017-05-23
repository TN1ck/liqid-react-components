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
    .add('Simple Grid', () => (
        <Grid>
            {'Simple Grid'}
            <Col sm reverse xsOffset>{'Column'}</Col>
            <Row row={'sdfkj'} center>{'Row'}</Row>
        </Grid>
    ));
