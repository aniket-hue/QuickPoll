import {
  AppBar,
  Tabs,
  Tab,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import styles from "./Header.styles";

const Header = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography noWrap variant="h5" style={styles.headerTitle}>
            QuikPoll
          </Typography>
          <div style={{ display: "flex", flexGrow: 1 }}></div>
          <Tabs value={tabValue} onChange={handleChange}>
            <Tab label="Create a Poll" />
            <Tab label="Open Polls" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div style={{ marginBottom: "20px" }} />
    </>
  );
};
export default Header;
