import React, { PureComponent } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux'
import store from '../../redux/store';
import { searchRepo } from '../../redux/actions';

import history from '../../history';



class Browser extends PureComponent {
    // constructor(props) {
    //     super(props)

    //     // this.state = {

    //     // }
    // }

    componentDidMount() {
        const user = history.location.pathname.split('/')[2];
        const repo = history.location.pathname.split('/')[3];
        store.dispatch(searchRepo(user, repo));
    }

    render() {
        return (
            <div>
                {this.props.loading ?
                    <CircularProgress />
                    : <div>

                    </div>

                }
            </div>
        )
    }
}

export default connect(state => ({ loading: state.searchReducer.loading }), null)(Browser)
