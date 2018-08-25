import React, {
  Component
} from 'react';
import './App.css';
import { CommandBar } from 'office-ui-fabric-react';

/**
 * ### Overview 
 * This class serves as the center-point for an application's code-base.
 * React is structured into small, modular units called components.  It's 
 * a new design approach which has benefits over traditional object-oriented
 * programming in today's world of micro-services and cloud computing.
 * 
 * ### Key Concepts of React
 * There are a few key concepts to understand about react:
 * * JavaScript and HTML are combined into a single file with extension 'jsx'.
 * * Every React component has a "render" method that is expected to be included
 * * The React framework handles the re-rendering of components based on something they call "state"
 * 
 * @class App
 */
class App extends Component {

  constructor(props) {
    super(props);

    /**
     * State is an optional object defined as a property of a React component.  
     * The State contains the variables you will reference in your jsx code.
     * In order to let the React framework handle the re-rendering correctly, you never change state properties directly, but through a method called setState() which is part of the base component that every React class extends
     * 
     * @member state
     * @memberof App
     */
    this.state = {

    }
  }
  /**
   * Inside the render method, you call your return statement, embedding the jsx code to be rendered by the browser.  
   * You can references variables within the jsx code by putting the variable name inside curly braces {}
   * 
   * CSS can be applied via class/className properties on HTML tags in the jsx code, and can reference theme libraries
   * either manually defined in a .css file, or imported via a node module.
   * 
   * @method render
   * @memberof App   * 
   */
  render() {
    return (
      
      <div className="App">
        <div id="content-header" class="ms-bgColor-themePrimary App-header">
          <div class="padding">
            <span class="ms-font-su ms-fontColor-white">Header Section</span>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;