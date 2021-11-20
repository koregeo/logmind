import React from "react";
import SideBar from "./SideBar/SideBar";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "#F0EFEF",
  },

  page: {
    backgroundColor: "#F0EFEF",
    maxWidth: "94%",
    minHeight: "100vh",
    marginLeft: '91px'
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar/>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
