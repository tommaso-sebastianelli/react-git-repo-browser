import React, { PureComponent } from 'react'
import './start.css'
import Container from '@material-ui/core/Container';
import { AsyncComponent } from '../../components/async';
import Search from './search/search';

class Start extends PureComponent {

    render() {
        return (
            <Container maxWidth="sm" className="container m-t-xl">
                {/* <AsyncComponent component={<Search/>}></AsyncComponent> */}
                <Search/>
            </Container>
        )
    }
}

export default Start