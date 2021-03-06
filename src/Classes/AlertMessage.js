import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
        direction: "rtl"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>

                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});
//<CloseIcon />
const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
    state = {
        open: false,
    };

     Transition(props) {
        return <Slide direction="up" {...props} />;
      }
    render() {
        var title = this.props.title !== undefined ? this.props.title : "שגיאה!";
        return (
            <div>
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.props.errorStatus}
                    TransitionComponent={this.Transition}
                >
                
                    <DialogTitle id="customized-dialog-title" onClose={this.props.handleErrorsToFalse}>
                        {title}
          </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            {this.props.message}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleErrorsToFalse} color="primary">
                            סגירה
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default CustomizedDialogDemo;