import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/loading/loading';
import history from '../../history';
import { searchRepoStart } from '../../redux/repository/actions';
import { getLoadingState } from '../../redux/repository/selectors';
import CommitDrawer from '../browser/commit-drawer/commit-drawer';
import CommitPlaceholder from '../browser/commit-placeholder/commit-placeholder';
import './browser.css';
import CommitDetail from './commit-details/commit-details';

class Browser extends PureComponent {

    componentDidMount() {
        const user = history.location.pathname.split('/')[2];
        const repo = history.location.pathname.split('/')[3];
        this.props.doSearch(user, repo);
    }

    goToStart() {
        history.push('/start');
        history.go();
    }

    render() {
        return (
            <div className="browser">
                {this.props.loading ?
                    <Loading />
                    : <div>
                        <AppBar position="static">
                            <Toolbar className="toolbar">
                                <Typography variant="h6" className="app-bar-title">
                                    React Git Repo Browser
                                </Typography>
                                <Button color="inherit" onClick={this.goToStart}>New Search</Button>
                            </Toolbar>
                        </AppBar>
                        <CommitDrawer></CommitDrawer>
                        <Box className="detail-container">
                            {(this.props.commitSelected) ? <CommitDetail className="detail"></CommitDetail> : <CommitPlaceholder className="detail"></CommitPlaceholder>}
                        </Box>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: getLoadingState(state)
});

const mapDispatchToProps = dispatch => ({
    doSearch: (user, repo) => dispatch(searchRepoStart(user, repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser)
