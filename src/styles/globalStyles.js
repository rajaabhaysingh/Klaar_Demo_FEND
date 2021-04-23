import { makeStyles } from "@material-ui/core";

const useGlobalStyles = makeStyles((theme) => ({
  txtSmPri: {
    fontSize: "0.8rem",
    color: theme.palette.text.primary,
  },
  txtLgPri: {
    fontSize: "1.2rem",
    color: theme.palette.text.primary,
  },
  txtMdPri: {
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  },
  txtSmSec: {
    fontSize: "0.8rem",
    color: theme.palette.text.secondary,
  },
  txtMdSec: {
    fontSize: "0.9rem",
    color: theme.palette.text.secondary,
  },
  txtLgSec: {
    fontSize: "1.2rem",
    color: theme.palette.text.secondary,
  },
  txtSmPriCol: {
    color: theme.palette.primary.main,
    fontSize: "0.8rem",
  },
  txtMdPriCol: {
    color: theme.palette.primary.main,
    fontSize: "0.9rem",
  },
  txtLgPriCol: {
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
  },
  txtLgErr: {
    color: theme.palette.error.main,
    fontSize: "1.2rem",
  },
  txtSmWhite: {
    color: theme.palette.common.white,
    fontSize: "0.8rem",
  },
  txtMdWhite: {
    color: theme.palette.common.white,
    fontSize: "0.9rem",
  },
  txtLgWhite: {
    fontSize: "1.2rem",
    color: theme.palette.common.white,
  },
  formInput: {
    borderRadius: "4px",
    outline: "none",
    border: `1px solid ${theme.palette.divider}`,
    height: "38px",
    boxSizing: "border-box",
    padding: "0 8px",
    color: theme.palette.text.primary,
    fontSize: "0.9rem",
    background: theme.palette.background.bg,
    "&:hover": {
      borderColor: "rgba(0,0,0,0.2)",
    },
    "&:focus": {
      boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "&:disabled": {
      background: theme.palette.divider,
      color: theme.palette.divider,
    },
  },
  textInput: {
    borderRadius: "4px",
    outline: "none",
    border: `1px solid ${theme.palette.divider}`,
    height: "116px",
    maxHeight: "116px",
    boxSizing: "border-box",
    padding: "8px",
    color: theme.palette.text.primary,
    fontSize: "1rem",
    background: theme.palette.background.bg,
    fontFamily: "Arial",
    "&:hover": {
      borderColor: "rgba(0,0,0,0.2)",
    },
    "&:focus": {
      boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "&:disabled": {
      background: theme.palette.divider,
      color: theme.palette.divider,
    },
  },
  formInputSelect: {
    maxHeight: "38px",
    overflow: "hidden",
    display: "flex",
    flex: "1",
    "&:hover": {
      borderColor: "rgba(0,0,0,0.2)",
    },
    "&:focus": {
      boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    "&:disabled": {
      background: theme.palette.divider,
      color: theme.palette.divider,
    },
  },
}));

export default useGlobalStyles;
