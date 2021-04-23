import React from "react";

// components

// styling
import { IconButton, makeStyles } from "@material-ui/core";

// icons
import { Brightness3, BrightnessHigh, HelpOutline } from "@material-ui/icons";

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
    fontSize: "1.8rem",
    fontFamily: "Cedarville Cursive, Cursive",
  },
  logoBtn: {
    color: theme.palette.common.white,
    background: "rgba(255,255,255,0.1)",
    marginLeft: "8px",
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
      <div className={cls.logo}>Bank Branch Finder</div>
      <div className="fc">
        <IconButton className={cls.logoBtn} onClick={handleTheme}>
          {helper.themeName === "light" ? <BrightnessHigh /> : <Brightness3 />}
        </IconButton>
        <IconButton
          className={cls.logoBtn}
          onClick={() =>
            alert(
              "Hidden feature details:\n\n1. Click on field name to sort columns according to field.\n2. Click on bank name to open respective bank page."
            )
          }
        >
          <HelpOutline />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
