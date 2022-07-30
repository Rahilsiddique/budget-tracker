import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Grid,
  Divider,
  CardContent
} from "@material-ui/core";
import useStyle from "./style.js";
import Form from "./Form/Form.js";
import List from "./List/List.js";
import { ExpenseTrackerContext } from "../../context/context.js";
import InfoCard from "../InfoCard.js";

const Main = () => {
  const classes = useStyle();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ₹{balance && balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
