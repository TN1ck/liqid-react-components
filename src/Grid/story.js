import React from 'react';
import {
    Grid,
    Col
} from './index.js';
import {
    storiesOf
} from '@kadira/storybook';

storiesOf('Grid', module)
    .add('Simple Grid', () => (
        <Grid>
            {'Simple Grid'}
            <Col sm reverse xsOffset>{'Column'}</Col>
        </Grid>
    ));
