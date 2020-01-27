import React, { useEffect, useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { connect } from 'react-redux'

function ErrorHandler(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.error) {
            setOpen(true);
        }
    }, [props.error]);

    const handleClose = () => {
            setOpen(false);
    }

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                An error occurred!
            </Alert>
        </Snackbar>
    )
}

const mapStateToProps = (state) => ({
    error: state.commitReducer.error || state.searchReducer.error
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler)
