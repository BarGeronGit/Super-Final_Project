import React, { Component } from "react";
import "./App.1.css";
import StepBar from './Components/StepBar'
import MainHeader from './Header'
import Placeholder from './Placeholder'

class Files extends React.Component {
    render() {
        return (
            <div id="MainFiles">
                <div id="FilesHeader">
                    <StepBar stepStage={2} />
                    <MainHeader text={"בחירת קבצים למשחק"} />
                </div>
                <div id="FilesMainDiv">
                    <Placeholder />
                </div>
            </div>
        )
    }
}

export default Files;