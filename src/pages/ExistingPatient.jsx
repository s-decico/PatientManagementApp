import React from "react";
import { TextField, Button, IconButton } from "@mui/material";
import "../styles.css";
import SearchIcon from "@mui/icons-material/Search";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

function ExistingPatient() {
  return (
    <>
      <div className="homepage-main-container">
        <div className="side-nav">
          <SideNav />
        </div>
        <div className="content-container">
          <div className="top-nav">
            <TopNav />
          </div>
          <div className="content">
            <div className="patient-search">
              <TextField
                variant="outlined"
                label="Seach with Name/Mobile No."
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end">
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExistingPatient;
