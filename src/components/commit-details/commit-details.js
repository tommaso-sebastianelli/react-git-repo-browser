import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { selectCommit } from '../../redux/actions';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Icon from '../icon/icon';

import history from '../../history';

function CommitDetails(props) {

    useEffect(() => {
        const user = history.location.pathname.split('/')[2];
        const repo = history.location.pathname.split('/')[3];
        const id = history.location.pathname.split('/')[4];
        props.onRender(user, repo, id);
    },[]);

    return (
        <Container maxWidth="xs">
            <Grid container={true} direction="column">
                <Grid item={true}>
                    <Typography variant="h4">
                        Commit message
                    </Typography>
                </Grid>
                <Grid item={true}>
                    <Grid container={true} direction="row" alignItems="center" spacing={2}>
                        <Grid item={true}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Grid>
                        <Grid item={true}>
                            <Typography variant="h5">
                                Commit author
                            </Typography>
                        </Grid>
                        <Grid item={true}>
                            <Typography variant="h5">
                                on 35/10/2019 12:00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item={true}>
                    <Grid container={true} direction="row" alignItems="flex-end" spacing={2} justify="space-between">
                        <Grid item={true}>
                            <Grid container={true} direction="row" alignItems="flex-end" spacing={2}>
                                <Grid item={true}>
                                    <Icon icon="git-commit"></Icon>
                                </Grid>
                                <Grid item={true}>
                                    <Typography variant="h6" >
                                        adhdgu3rbx3rkjgh4ohlvigh4
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item={true}>
                            <Grid container={true} spacing={2}>
                                <Grid item={true}>
                                    <Grid container={true} alignItems="center">
                                        <Icon icon="file-plus"></Icon>
                                        <Typography variant="h6" >
                                            6
                                    </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item={true}>
                                    <Grid container={true} alignItems="center">
                                        <Icon icon="file-minus"></Icon>
                                        <Typography variant="h6" >
                                            6
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    commit: state.commitReducer.commit
})

const mapDispatchToProps = (dispatch) => ({
    onRender: (user, repo, id) => dispatch(selectCommit(user, repo, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CommitDetails))
