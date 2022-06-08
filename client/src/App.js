import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './components/showStudent/showStudent.js';
import CreateStudent from './components/createStudent/createStudent.js'
import Course from './components/showCourse/showCourse.js'
import CreateCourse from './components/createCourse/createCourse.js'
import Material from './components/showMaterials/showMaterials.js'
import CreateMaterial from './components/createMaterials/createMaterials';
import Assessment from './components/showAssessment/showAssessment.js'
import CreateAssessment from './components/createAssessment/createAssessment';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit" >
          <Typography className={classes.heading} variant="h2" align="center"> Admin Dashboard </Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Student/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                  <CreateStudent/>
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Course/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                  <CreateCourse/>
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Material/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                  <CreateMaterial/>
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Assessment/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                  <CreateAssessment/>
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
