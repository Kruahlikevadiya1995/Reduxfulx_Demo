import React, {Component} from "react";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import { Router, Scene } from 'react-native-router-flux';

 const Routes = () => (
    <Router>
      <Scene key="root">
        <Scene key="firstscreen" component={FirstScreen} title="Home"
        initial/>
        <Scene key="secondscreen" component={SecondScreen} title="Profile"/>
        </Scene>
    </Router>
  );
  export default Routes;