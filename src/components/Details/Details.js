import React from "react";
import "chart.js/auto";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";
import useTransaction from "../../useTransaction";
import { Doughnut } from "react-chartjs-2";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransaction(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader="very cool subheader" />
      <CardContent>
        <Typography varient="h5">₹{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
