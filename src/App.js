import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Container, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -drawerWidth,
}));

const AppBarStyled = styled(AppBar, { shouldForwardProp: prop => prop !== 'open' })(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard 예제 : MUI를 사용한 예제 화면입니다.
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled variant="permanent">
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Analytics', 'Reports', 'Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </DrawerStyled>
      <Main>
        <Toolbar />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Main Content</Typography>
                  <Typography variant="body1">This is the main content area.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Sidebar Content</Typography>
                  <Typography variant="body1">This is the sidebar content area.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Table</Typography>
                  <Box component="div" sx={{ overflowX: 'auto' }}>
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>30</td>
                          <td>New York</td>
                        </tr>
                        <tr>
                          <td>Jane</td>
                          <td>28</td>
                          <td>San Francisco</td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Main>
    </Box>
  );
}

export default App;
