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

import { getCommitListState, getUserState, getRepoState } from '../../../redux/selectors';

import './commit-drawer.css';

function CommitDrawer(props) {

    const formatDate = (isoDate) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(isoDate).toLocaleDateString("en-US", options);
    }

    const selectCommit = (commit) => {
        const id = commit.tree.sha
        history.push(`/browser/${props.user}/${props.repo}/${id}`);
        history.go();
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
                    {props.commits.map((commit, index) => {
                        return <ListItem key={index} onClick={id => selectCommit(commit)}>
                            <ListItemIcon className="commit-icon">
                                <Icon icon="git-commit"></Icon>
                            </ListItemIcon>
                            <ListItemText
                                primary={commit.message}
                                secondary={`${commit.author.name} on ${formatDate(commit.author.date)}`}
                            />
                        </ListItem>
                    })}
                </List>
            </List>
        </Drawer>
    )
}

const mapStateToProps = (state) => ({
    commits: getCommitListState(state.searchReducer)
        .map(c => c.commit),
    user: getUserState(state.searchReducer),
    repo: getRepoState(state.searchReducer),
})

export default connect(mapStateToProps, null)(CommitDrawer)