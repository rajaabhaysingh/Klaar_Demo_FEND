import React from "react";
import clsx from "clsx";

// components
import Loader from "../../components/loader";
import BankTable from "./sections/BankBranchTable";

// styling
import { Button, Grid, makeStyles, MenuItem, Select } from "@material-ui/core";
import useGlobalStyles from "../../styles/globalStyles";
import { Favorite } from "@material-ui/icons";

// redux
import { getBankBranches } from "../../redux/actions/bank.actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.bg,
    marginTop: "60px",
    width: "100%",
    height: "calc(100% - 60px)",
    padding: "32px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    padding: "16px",
    boxSizing: "border-box",
    borderRadius: "8px",
    border: `1px solid ${theme.palette.divider}`,
  },
  reactSelect: {
    marginTop: "4px",
  },
  btn: {
    marginTop: "19px",
    height: "38px",
  },
  gridItem: {
    padding: "16px",
    boxSizing: "border-box",
    borderRadius: "8px",
    border: `1px solid ${theme.palette.divider}`,
  },
}));

const Home = () => {
  const cls = useStyles();
  const globalCls = useGlobalStyles();
  const dispatch = useDispatch();
  const bank = useSelector((state) => state.bank);

  const [selectedCity, setSelectedCity] = React.useState("MUMBAI");
  const [searchText, setSearchText] = React.useState("");

  // dispatch action on city change
  React.useEffect(() => {
    dispatch(getBankBranches(selectedCity));
  }, [selectedCity]);

  // handleSearchTextChange
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={cls.root}>
      <Grid className={cls.gridContainer} container spacing={3}>
        <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
          <div className="fcol">
            <div className={globalCls.txtSmSec}>Select city</div>
            <Select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              variant="outlined"
              placeholder="Eg: Mumbai"
              className={clsx(globalCls.formInputSelect, "mar_t-4")}
            >
              <MenuItem value="MUMBAI">Mumbai</MenuItem>
              <MenuItem value="DELHI">Delhi</MenuItem>
              <MenuItem value="KOLKATA">Kolkata</MenuItem>
              <MenuItem value="CHENNAI">Chennai</MenuItem>
              <MenuItem value="LUCKNOW">Lucknow</MenuItem>
            </Select>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
          <Button
            variant="contained"
            startIcon={<Favorite />}
            color="primary"
            className={cls.btn}
            fullWidth
          >
            Favourites
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
          <div className="fcol">
            <div className={globalCls.txtSmSec}>
              Search here{" "}
              <span className={clsx(globalCls.txtErr, "fwb")}>*</span>
            </div>
            <input
              className={clsx(globalCls.formInput, "mar_t-4")}
              type="text"
              placeholder="Type here to search..."
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {bank.getBankBranchesLoading ? (
            <Loader />
          ) : bank.getBankBranchesSuccess ? (
            bank.getBankBranchesData?.length > 0 ? (
              <BankTable
                displayData={bank.getBankBranchesData}
                searchText={searchText}
              />
            ) : (
              <Alert severity="warning">
                No record found for selected criteria/serach keyword
              </Alert>
            )
          ) : (
            <Alert severity="error">{bank.getBankBranchesError}</Alert>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
