import React, { PureComponent } from 'react'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHub from '@material-ui/icons/GitHub';
import Icon from '../../components/icon/icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'
import store from '../../redux/store';
import { searchRepo } from '../../redux/actions';
import { getCommitListState, getLoadingState, getUserState, getRepoState } from '../../redux/selectors';

import history from '../../history';

import './browser.css';

import Loading from '../../components/loading/loading';
import CommitDetail from './commit-details/commit-details';
import CommitPlaceholder from '../browser/commit-placeholder/commit-placeholder';


class Browser extends PureComponent {

    componentDidMount() {
        const user = history.location.pathname.split('/')[2];
        const repo = history.location.pathname.split('/')[3];
        store.dispatch(searchRepo(user, repo));
    }

    // componentDidUpdate(){
    //     if(this.props.error !== null){
    //         history.push('/start');
    //         history.go();
    //     }
    // }

    formatDate(isoDate) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(isoDate).toLocaleDateString("en-US", options);
    }

    goToStart() {
        history.push('/start');
        history.go();
    }

    selectCommit(commit) {
        const id = commit.tree.sha
        history.push(`/browser/${this.props.user}/${this.props.repo}/${id}`);
        history.go();
    }

    render() {
        return (
            <div className="browser">
                {this.props.loading ?
                    <Loading/>
                    : <div>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" className="app-bar-title">
                                    React Git Repo Browser
                                </Typography>
                                <Button color="inherit" onClick={this.goToStart}>New Search</Button>
                            </Toolbar>
                        </AppBar>
                        <Drawer className="drawer" variant="permanent" anchor="left" open={true} >
                            <List dense={true}>
                                <ListItem divider={true}>
                                    <ListItemIcon>
                                        <GitHub />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={this.props.repo}
                                        secondary={this.props.commits.length + ' commits'}
                                    />
                                </ListItem>
                                <List className="commits-list" >
                                    {this.props.commits.map((commit, index) => {
                                        return <ListItem key={index} onClick={id => this.selectCommit(commit)}>
                                            <ListItemIcon className="commit-icon">
                                                <Icon icon="git-commit"></Icon>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={commit.message}
                                                secondary={`${commit.author.name} on ${this.formatDate(commit.author.date)}`}
                                            />
                                        </ListItem>
                                    })}
                                </List>
                            </List>
                        </Drawer>
                        {(this.props.commitSelected) ? <CommitDetail></CommitDetail> : <CommitPlaceholder></CommitPlaceholder>}
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: getLoadingState(state.searchReducer),
        commits: getCommitListState(state.searchReducer)
            .map(c => c.commit),
        user: getUserState(state.searchReducer),
        repo: getRepoState(state.searchReducer),
        error: state.searchReducer.error
    }
};

export default connect(mapStateToProps, null)(Browser)
