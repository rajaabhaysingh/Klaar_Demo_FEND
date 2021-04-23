import React from "react";
import MUIDataTable from "mui-datatables";

// styles
import { Favorite, FavoriteBorderOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import { Alert } from "@material-ui/lab";

// redux
import { useDispatch } from "react-redux";
import { addToFavList } from "../../../redux/actions/bank.actions";

const BankBranchTable = ({ displayData, searchText, city }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const columns = [
    "Fav",
    "Bank name",
    "Branch",
    "IFSC",
    "Bank ID",
    "Address",
    "District",
    "City",
    "State",
  ];

  const data = [];

  if (displayData?.length > 0) {
    for (const bankDetail of displayData) {
      data.push([
        <IconButton
          color="primary"
          style={{
            background: "rgba(0,0,0,0.1)",
          }}
          onClick={() => {
            bankDetail.fav
              ? dispatch(addToFavList(bankDetail.ifsc, "remove", city))
              : dispatch(addToFavList(bankDetail.ifsc, "add", city));
          }}
        >
          {bankDetail.fav ? <Favorite /> : <FavoriteBorderOutlined />}
        </IconButton>,
        bankDetail.bank_name,
        bankDetail.branch,
        bankDetail.ifsc,
        bankDetail.bank_id,
        bankDetail.address,
        bankDetail.district,
        bankDetail.city,
        bankDetail.state,
      ]);
    }
  }

  const options = {
    filterType: "dropdown",
    responsive: "simple",
    jumpToPage: true,
    filter: true,
    fixedHeader: true,
    onRowsDelete: () => {
      alert(
        "Data removed temporarily from local state (for demo purpose only)."
      );
    },
    rowsPerPageOptions: [10, 25, 50, 100],
    search: false,
    searchText: searchText,
    // onRowClick: (rowData) => {
    //   alert(rowData);
    // },
  };

  return data.length > 0 ? (
    <MUIDataTable
      title={"BANK branches list"}
      data={data}
      columns={columns}
      options={options}
    />
  ) : (
    <Alert severity="info">No data found for selected options...</Alert>
  );
};

export default BankBranchTable;
