import React from 'react'
import { connect } from 'react-redux'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHub from '@material-ui/icons/GitHub';
import Icon from '../../../components/icon/icon';

import history from '../../../history';

import { getCommitListState, getUserState, getRepoState } from '../../../redux/repository/selectors';

import './commit-drawer.css';
import { APP_ROUTER_BASENAME } from '../../..';

function CommitDrawer(props) {

    const formatDate = (isoDate) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(isoDate).toLocaleDateString("en-US", options);
    }

    const selectCommit = (commit) => {
        const id = commit.sha
        history.push(`${APP_ROUTER_BASENAME}/browser/${props.user}/${props.repo}/${id}`);
        history.go();
    }

    const isSelected = (commit) => {
        return props.selectedCommitId === commit.sha;
    }

    return (
        <Drawer className="drawer" variant="permanent" anchor="left" open={true} >
            <List dense={true}>
                <ListItem divider={true}>
                    <ListItemIcon>
                        <GitHub />
                    </ListItemIcon>
                    <ListItemText
                        primary={props.repo}
                        secondary={props.commits.length + ' commits'}
                    />
                </ListItem>
                <List className="commits-list" >
                    {props.commits.map((commitData, index) => {
                        return <ListItem className={'commit ' + (isSelected(commitData) ? 'selected' : '')} key={index} onClick={id => selectCommit(commitData)}>
                            <ListItemIcon className="commit-icon">
                                <Icon icon="git-commit"></Icon>
                            </ListItemIcon>
                            <ListItemText
                                primary={commitData.commit.message}
                                secondary={`${commitData.commit.author.name} on ${formatDate(commitData.commit.author.date)}`}
                            />
                        </ListItem>
                    })}
                </List>
            </List>
        </Drawer>
    )
}

const mapStateToProps = (state) => ({
    commits: getCommitListState(state),
    user: getUserState(state),
    repo: getRepoState(state),
    selectedCommitId: state.commitReducer.selectedCommitId
})

export default connect(mapStateToProps, null)(CommitDrawer)