import React from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import { TextField, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import "../styles.css";

function NewPatient() {
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
            <div className="new-patient-form">
              Please Enter Patient Details
              <form action="">
                <div className="form-container">
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Patient Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Relation with patient"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Sex"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Blood Group"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Consulting"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Rx Upload"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Next Appointment"
                    variant="outlined"
                  />
                </div>
                <div className="form-buttons">
                  <Button variant="contained" startIcon={<SaveIcon />}>
                    Save
                  </Button>
                  <Button variant="outlined" endIcon={<LocalPrintshopIcon />}>
                    Print
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPatient;
