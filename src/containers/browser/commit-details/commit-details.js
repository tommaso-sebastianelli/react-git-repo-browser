import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { selectCommit } from '../../../redux/actions';
import { getSelectedCommitState } from '../../../redux/selectors';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '../../../components/icon/icon';

import {useLocation} from 'react-router-dom';
import history from '../../../history';

import Moment from 'react-moment';

import './commit-details.css';

function CommitDetails(props) {

    let location = useLocation();

    const getUser = (path) => path.split('/')[2];
    const getRepo = (path) => path.split('/')[3];
    const getId = (path) => path.split('/')[4];

    useEffect(() => {
        const user = getUser(location.pathname);
        const repo = getRepo(location.pathname);
        const id = getId(location.pathname);
        props.onMount(user, repo, id);
        console.log(location.pathname);
    }, [location]);

    return props.data ? (
        <Container maxWidth="xs" className="commit-details">
            <Grid container={true} direction="column">
                <Grid item={true} className="row">
                    <Typography variant="h4" >
                        {props.data.commit.message}
                    </Typography>
                </Grid>
                <Grid item={true} className="row">
                    <Grid container={true} direction="row" justify="space-between" alignItems="center" spacing={2}>
                        <Grid className="author" item={true}>
                            <Grid container={true} alignItems="center" spacing={2}>
                                <Grid item={true}>
                                    <Avatar alt="author avatar" src="/static/images/avatar/1.jpg" />
                                </Grid>
                                <Grid item={true}>
                                    <Typography variant="h6">
                                        {props.data.commit.author.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="date" item={true}>
                            <Typography variant="h6">on&nbsp;
                                <Moment>
                                    {props.data.commit.author.date}
                                </Moment>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item={true} className="row detail">
                    <Grid container={true} direction="row" alignItems="flex-end" spacing={2} justify="space-between">
                        <Grid item={true}>
                            <Grid className="hash" container={true} direction="row" alignItems="flex-end" spacing={2}>
                                <Grid item={true}>
                                    <Icon icon="git-commit"></Icon>
                                </Grid>
                                <Grid item={true}>
                                    <Typography variant="h6" >
                                        {props.data.sha}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item={true} className="changes">
                            <Grid container={true} spacing={2}>
                                <Grid item={true}>
                                    <Grid container={true} alignItems="center">
                                        <Icon icon="file-plus"></Icon>
                                        <Typography variant="h6" >
                                            {props.data.stats.additions}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item={true}>
                                    <Grid container={true} alignItems="center">
                                        <Icon icon="file-minus"></Icon>
                                        <Typography variant="h6" >
                                            {props.data.stats.deletions}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={6} item={true} className="file-list">
                            <Typography variant="h6" >
                                File changed:&nbsp;{props.data.files.length}
                            </Typography>
                            <div className="file-list-container" >
                                <List dense={true}>
                                    {props.data.files.map((f, key) => {
                                        return <ListItem key={key}>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={f.filename}
                                                secondary={f.status}
                                            />
                                            <div className="file-change">
                                                <Icon icon="file-plus"></Icon>
                                                {f.additions}
                                            </div>
                                            <div className="file-change">
                                                <Icon icon="file-minus"></Icon>
                                                {f.deletions}
                                            </div>
                                        </ListItem>
                                    })
                                    }
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    ) : <span />
}

const mapStateToProps = (state) => ({
    data: getSelectedCommitState(state.commitReducer)
})

const mapDispatchToProps = (dispatch) => ({
    onMount: (user, repo, id) => dispatch(selectCommit(user, repo, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CommitDetails))
