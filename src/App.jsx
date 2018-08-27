import React, {
  Component
} from 'react';
// Redux framework imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
/**
 * In order to import everything from a file, without assigning the contents to a variable, just use a plain
 * import statement as shown here for the App.css file.
 * 
 * @external App.css
 * @memberof App
 */
import './App.css';
// Custom component imports
import PivotNav from './components/Pivot';          /** @member PivitNav @memberof App */
import NavMenu from './components/Nav';         /** @member NavMenu @memberof App */
import SidePanel from './components/Panel';     /** @member SidePanel @memberof App */
// Microsoft Fabric framework imports
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

/**
 * This class serves as the center-point for an application's code-base.  Anything that will be rendered
 * on the screen will be first included here, and added to the render() method using the HTML tag notation.
 * 
 * @class App
 * @extends Component
 */
class App extends Component {

  constructor(props) {
    super(props);

    /**
     * State is an optional object defined as a property of a React component.  The State contains the variables 
     * you will reference in your jsx code. In order to let the React framework handle the re-rendering correctly,
     * you never change state properties directly, but through a method called setState() which is part of the base 
     * component that every React class extends.
     
     * @namespace
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
   * @memberof App 
   */
  render() {
    return (

      <div className="App">
        
        <div className="ms-textAlignLeft">
          <PivotNav />
          <SidePanel />
        </div>

      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => (
  state
)

const mapDispatchToProps = function (dispatch) {
  return (bindActionCreators(actions, dispatch));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)