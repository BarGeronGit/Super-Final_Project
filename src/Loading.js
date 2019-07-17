// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import CircularProgress from "@material-ui/core/CircularProgress";

// const styles = theme => ({
//   progress: {
//     margin: theme.spacing.unit * 0,
//   }
// });

// function CircularIndeterminate(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <CircularProgress className={classes.progress} size={100} thickness={2}/>
//     </div>
//   );
// }

// CircularIndeterminate.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(CircularIndeterminate);

import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderExampleSizesInverted = (props) => (
  <div>
      <Dimmer active inverted>
        <Loader size='massive'>{props.Loading}</Loader>
      </Dimmer>
    
  </div>
)

export default LoaderExampleSizesInverted
