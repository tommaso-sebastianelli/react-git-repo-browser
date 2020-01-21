import React, { PureComponent } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import GitHub from '@material-ui/icons/GitHub';

import { connect } from 'react-redux'
import store from '../../redux/store';
import { searchRepo } from '../../redux/actions';

import history from '../../history';

import './browser.css';


class Browser extends PureComponent {

    componentDidMount() {
        const user = history.location.pathname.split('/')[2];
        const repo = history.location.pathname.split('/')[3];
        store.dispatch(searchRepo(user, repo));
    }

    render() {
        return (
            <div className="browser">
                {this.props.loading ?
                    <CircularProgress />
                    : <div>
                        <Drawer className="drawer" variant="permanent" anchor="left" open={true} >
                            <List dense={true}>
                                <ListItem divider={true}>
                                    <ListItemIcon>
                                        <GitHub />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Repo Name"
                                        secondary="Total commits"
                                    />
                                </ListItem>
                                <List className="commitsList" >
                                    {this.props.commits.map((commit, index) => {
                                        return <ListItem key={index}>
                                            <ListItemIcon>
                                                <FolderIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={`${commit.author.name} on ${commit.author.date}`}
                                                secondary={commit.message}
                                            />
                                        </ListItem>
                                    })}
                                </List>
                            </List>
                        </Drawer>
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
        .map(c => c.commit)
    }
};

export default connect(mapStateToProps, null)(Browser)
