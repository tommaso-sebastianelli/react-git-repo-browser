import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Icon from '../icon/icon';

import './commit-placeholder.css';

function CommitPlaceholder() {
    return (
        <Container maxWidth="xs" className="commit-placeholder">
            <Grid className="container" container={true} direction="column" alignItems="center">
                <Grid item={true}>
                <Icon icon="git-commit" size={33}></Icon>
                </Grid>
                <Grid item={true}>
                    <Typography variant="h5">Select a commit</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CommitPlaceholder
