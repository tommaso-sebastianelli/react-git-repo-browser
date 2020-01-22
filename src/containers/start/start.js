import React, { PureComponent } from 'react'
import './start.css'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

import Search from './search/search';

class Start extends PureComponent {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="app-bar-title">
                            React Git Repo Browser
                        </Typography>

                        {/* <IconButton aria-label="delete">
                            <InfoIcon/>
                        </IconButton> */}
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm" className="container m-t-xl">
                    <Search />
                </Container>
            </div>
        )
    }
}

export default Start