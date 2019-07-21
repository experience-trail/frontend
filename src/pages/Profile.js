import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

export default function Profile({ user }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Avatar
            src={user.picture}
            alt={user.displayName}
            className={classes.avatar}
          />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Hello, {user.displayName}
            </Typography>
            <Typography
              variant="p"
              align="left"
              color="textSecondary"
              paragraph
            >
              This is what we know about you:
              <pre>
                <code>
                  <ul>
                    {Object.keys(user).map(key => (
                      <li key={key}>
                        {key}: {JSON.stringify(user[key])}
                      </li>
                    ))}
                  </ul>
                </code>
              </pre>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/logout">
                    Logout
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
