import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import ShowEvent from "./components/showEvents/showEvent";
import CreateEvent from "./components/createEvent/createEvent";
import useStyles from "./styles";
import "./App.css";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static">
          <Typography className={classes.heading} variant="h2" align="center">
            Add event
          </Typography>
        </AppBar>

        <Container style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            marginTop="40px"
            style={{ paddingLeft: 0, paddingRight: 0 }}
            spacing={1}
          >
            <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static">
                <CreateEvent />
              </AppBar>
            </Grid>
            <Grid item xs={12} sm={8} color="inherit">
              <AppBar className={classes.appBar} position="static">
                <ShowEvent />
              </AppBar>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default App;
