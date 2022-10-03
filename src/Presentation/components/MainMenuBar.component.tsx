import GroupsIcon from "@mui/icons-material/Groups"
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const MainMenuBar = (props : MainMenuBarProps) => {
    return <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <GroupsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    GRUPY
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {
                        props.pages.map((page : Page) => {
                            return <Button key={page.label}
                                component={Link}
                                to={page.route}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                {page.label}
                            </Button>
                        })
                    }
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}

interface MainMenuBarProps {
    pages : Page[]
}

interface Page {
    label : string;
    route : string;
}

export default MainMenuBar