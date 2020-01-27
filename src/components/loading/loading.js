import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import './loading.css';

function Loading() {
    return (
        <Box className="loading-container">
            <CircularProgress />
        </Box>
    )
}

export default Loading
