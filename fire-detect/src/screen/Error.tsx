import React from 'react';
import { Box, Typography } from '@mui/material';
import MyButton from '../components/MyButton';

export default function Error() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h1">
                404
            </Typography>
            <Typography variant="h6">
                Oops... Something went wrong!
            </Typography>
            <MyButton label='BACK HOME' />
        </Box>
    );
}