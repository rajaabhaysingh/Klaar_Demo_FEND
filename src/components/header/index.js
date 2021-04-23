import React from "react";

// components

// styling
import { IconButton, makeStyles } from "@material-ui/core";

// icons
import { Brightness1, Brightness3 } from "@material-ui/icons";

// redux
import { useSelector, useDispatch } from "react-redux";
import { themeAction } from "../../redux/actions/helper.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: "60px",
    width: "100vw",
    padding: "0 16px",
    boxSizing: "border-box",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: "2000",
    boxShadow: theme.shadows[8],
  },
  logo: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  logoBtn: {
    color: theme.palette.common.white,
    background: "rgba(255,255,255,0.1)",
  },
}));

const Header = () => {
  const cls = useStyles();
  const helper = useSelector((state) => state.helper);
  const dispatch = useDispatch();

  // handleTheme
  const handleTheme = () => {
    dispatch(themeAction(helper.themeName === "light" ? "dark" : "light"));
  };

  return (
    <div className={cls.root}>
      <div className={cls.logo}>BankBranches</div>
      <IconButton className={cls.logoBtn} onClick={handleTheme}>
        {helper.themeName === "light" ? <Brightness1 /> : <Brightness3 />}
      </IconButton>
    </div>
  );
};

export default Header;
