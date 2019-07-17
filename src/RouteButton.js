import React from "react";
import { Route } from 'react-router-dom';
import { Button} from "semantic-ui-react";

const RouteButton = (props) => {
    return (
        <Route render={({ history }) => (
            <Button primary id={props.id} primary onClick={() => {
                history.push({
                    pathname: props.pathname,
                    gender: props.genderPick,
                    minAgePick: props.minAgePick,
                    maxAgePick: props.maxAgePick,
                });
            }}>
                {props.value}
            </Button>
        )}
        />
    )
}

export default RouteButton;