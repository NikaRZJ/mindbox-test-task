import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const Header: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        Todos
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
