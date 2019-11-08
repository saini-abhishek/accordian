import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    background: "#FFFFFF",
    boxShadow:
      "0px 1px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.16)",
    borderRadius: "2px",
    width: "720px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal"
  },
  heading: {
    flexBasis: "33.33%",
    fontsize: "16px",
    lineHeight: "24px",
    alignItems: "center",
    letterSpacing: "0.44px",
    color: "#263238"
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
    fontFamily: "Roboto",
    fontstyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    marginLeft: "-35px"
  },
  operationActions: {
    width: "496px",
    float: "right"
  },
  container: {
    width: "100%"
  }
}));

function Accordian({term, operationName,onSave,onCancel, ...props}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
        >
          <Typography className={classes.heading}>{operationName}</Typography>
          <Typography className={classes.secondaryHeading}>
            {term}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.container}>
            <div className={classes.operationActions}>
              {props.children && props.children}
            </div>
            
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" onClick={onCancel}>Cancel</Button>
          <Button size="small" color="primary" onClick={onSave} >
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

const children = (<TextField
          id="outlined-helperText"
          label="Operation name"
          defaultValue="Operation"
          margin="normal"
          variant="outlined"
          />);

function App(){
  return (
    <Accordian
    term="The operation name for singing in the mobile app"
    operationName="Operation Name"
    children={children}
    onCancel={null}
    onSave={null}
    >{children}</Accordian>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
