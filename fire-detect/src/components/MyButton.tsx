import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#c02135',
    '&:hover': {
        backgroundColor: '#c02135',
    },
}));

interface IProps {
    label: string;
}

export default function MyButton(props: IProps) {
    return (
        <Stack spacing={2} direction="row">
            <ColorButton variant="contained">{props.label}</ColorButton>
        </Stack>
    );
}