import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img src="#" className={classes.curvyLines} alt="" /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="#" alt="icon1" />
              <Typography variant="h6" className={classes.title}>
                Feature 1
              </Typography>
              <Typography variant="h5">
                {/* {
                  "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                }
                {
                  ", go for a mini-vacation just a few subway stops away from your home."
                } */}
                Minim mollit sint consequat ipsum reprehenderit commodo officia occaecat fugiat ut pariatur reprehenderit magna cillum.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="#" alt="icon2" />
              <Typography variant="h6" className={classes.title}>
                Feature 2
              </Typography>
              <Typography variant="h5">
                {/* {
                  "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                }
                {"your Sundays will not be alike."} */}
                Ullamco laborum duis nisi dolore velit officia culpa Lorem occaecat fugiat dolor irure ex ex.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src="#" alt="icon3" />
              <Typography variant="h6" className={classes.title}>
                Feature 3
              </Typography>
              <Typography variant="h5">
                {/* {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."} */}
                Sint est exercitation magna qui non magna consequat laboris magna et.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
