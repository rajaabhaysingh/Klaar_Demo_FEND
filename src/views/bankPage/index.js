import React from "react";
import { useParams } from "react-router";

// components

// styling
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.bg,
    marginTop: "60px",
    padding: "24px",
    boxSizing: "border-box",
  },
  dataBox: {
    borderRadius: "8px",
    padding: "16px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${theme.palette.divider}`,
    fontSize: "0.9rem",
    color: theme.palette.text.secondary,
  },
  heading: {
    marginBottom: "16px",
    fontSize: "1.2rem",
    color: theme.palette.text.primary,
  },
}));

const BankPage = () => {
  const cls = useStyles();
  const { bankID } = useParams();

  // finding data in url params
  const urlParams = new URLSearchParams(bankID);
  const params = {};

  const entries = urlParams.entries();

  for (const entry of entries) {
    params[entry[0]] = entry[1];
  }

  return (
    <div className={cls.root}>
      <div className={cls.dataBox}>
        <div className={cls.heading}>BANK DETAILS</div>
        <div>IFSC: {params.ifsc}</div>
        <div>Branch Name: {params.branch}</div>
        <div>Address: {params.address}</div>
        <div>Dist: {params.district}</div>
        <div>City: {params.city}</div>
        <div>State: {params.state}</div>
      </div>
    </div>
  );
};

export default BankPage;
