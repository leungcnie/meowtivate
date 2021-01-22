import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ActionList from "./ActionList";
import CatPlant from "./CatPlant";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Progress from "./Progress";
import UnlockBadge from "./UnlockBadge";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "10vw",
    minHeight: "25vh",
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "8px",
  },
  plantbox: {
    position: "relative",
    alignText: "center",
    margins: "auto",
    top: "0px",
    left: "0px",
    zIndex: 1,
  },
  lists: {
    minWidth: "10vw",
    minHeight: "25vh",
  },
}));

export default function ListContainer(props) {
  const { actionFunctions } = props;
  const classes = useStyles();

  return (
    <>
      <UnlockBadge />
      <div className={classes.root}>
        <h2 className={classes.header}>LET'S GET LOTS DONE TODAY</h2>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Card className={classes.lists}>
              <CardContent>
                <h3>Daily Habits</h3>
                <ActionList
                  items={props.habits}
                  category={2}
                  actionFunctions={actionFunctions}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.lists}>
              <CardContent>
                <h3>To-Do Today</h3>
                <ActionList
                  items={props.todos}
                  category={1}
                  actionFunctions={actionFunctions}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardContent>
                {/* <div>
                <h3>Today's Progress</h3>
              </div> */}
                <div className={classes.plantbox}>
                  <CatPlant />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Progress
        // actions={props.actions}
        // streaks={props.streaks}
        // logDatas={props.logDatas}
        />
      </div>
    </>
  );
}
