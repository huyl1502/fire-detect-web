import { Box } from "@mui/material";
import BasicTable from "../components/MyTable";

export default function Dashboard() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <BasicTable></BasicTable>
        </Box>
    );
}