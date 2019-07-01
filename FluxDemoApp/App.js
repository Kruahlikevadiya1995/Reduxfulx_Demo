import React, {Component} from "react";
import Routes from "./Screen/Routes";
export default class App extends React.Component {
    render() {
      console.disableYellowBox = true;
      return (
        <Routes/>
      );
    }
   }