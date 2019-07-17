import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './StepBar.css';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    useNextVariants: true,
  },
});

function getSteps() {
  return ["שלב ג' - קבצים", "שלב ב' - חלוקה לקבוצות", "שלב א' - פרטים כללים"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}


class HorizontalLabelPositionBelowStepper extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    activeStep:this.props.stepStage,
  };


  componentWillMount(){
    this.setState({activeStep: this.props.stepStage})
  }
  
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };



  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (

      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.reverse().map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);