import React, { PureComponent } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHub from '@material-ui/icons/GitHub';
import Icon from '../../components/icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'
import store from '../../redux/store';
import { searchRepo } from '../../redux/actions';
import { getUserState, getRepoState } from '../../redux/selectors';

import history from '../../history';

import './browser.css';

import CommitDetail from '../../components/commit-details';


class Browser extends PureComponent {

    componentDidMount() {
        const user = history.location.pathname.split('/')[2];
        const repo = history.location.pathname.split('/')[3];
        store.dispatch(searchRepo(user, repo));
    }

    formatDate(isoDate) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(isoDate).toLocaleDateString("en-US", options);
    }

    render() {
        return (
            <div className="browser">
                {this.props.loading ?
                    <CircularProgress />
                    : <div>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" className="app-bar-title">
                                    {`${this.props.user} - ${this.props.repo}`}
                                </Typography>

                                <Button color="inherit">New Search</Button>
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
                                <List className="commitsList" >
                                    {this.props.commits.map((commit, index) => {
                                        return <ListItem key={index}>
                                            <ListItemIcon>
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
                        <CommitDetail></CommitDetail>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.searchReducer.loading,
        commits: state.searchReducer.commits
            .map(c => c.commit),
        user: getUserState(state.searchReducer),
        repo: getRepoState(state.searchReducer)
    }
};

export default connect(mapStateToProps, null)(Browser)
