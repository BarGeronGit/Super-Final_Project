import React from "react";
import { Route } from 'react-router-dom';
import {Icon, Button } from 'semantic-ui-react'


const RouteButton = (props) => {
    return (
        <Route render={({ history }) => (
            <Button color='red' size="big" onClick={() => {
                history.push({
                    pathname: props.pathname,
                    gender: props.genderPick,
                    minAgePick: props.minAgePick,
                    maxAgePick: props.maxAgePick,
                });
            }}>
                {props.value}
                <Icon name='arrow right' size='small' />
                חזור
            
            </Button>
        )}
        />
    )
}

export default RouteButton;