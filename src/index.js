import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Reducer } from './reducer/index';
import registerServiceWorker from './registerServiceWorker';

/**
 * ### Overview 
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
 * ### Embedded Components
 * In React, we can break apart our application into small, lightweight, components
 * that typically are organized based on the user-interface control hierarchy.
 * For instance, The MenuBar component is one that we have built and placed 
 * in our "components" folder.  Therefore, we can import any "exported" class 
 * from the index.jsx file within that folder.
 * 
 * To render one of the included components on the screen, you have to add an HTML 
 * tag with the name of that component (as defined by the import statement above), 
 * like so: 
 * <MenuBar/>
 * 
 * ### State
 * Unlike traditional user-interface development, the values that are displayed on the screen
 * are not updated directly by changing a variable or property.  
 * 
 * There is nothing wrong with this approach, but when the application gets large it can be 
 * difficult to manage all of the different things that have to change frequently on the screen
 * based on certain events.  If you have an event that occurs in five different places of an
 * application, and the result of that event is for the header of every page to update it's 
 * text value - then you need to manually change the headers in five different places of your code.
 * Alternatively, you have to build a small library that updates the text, and reference that 
 * library in each of the five places.
 * 
 * React introdues something called "state".  Basically, what this means is that each component
 * (or UI object) manages it's own properties and values.  And instead of you physically updating
 * those values, you define the conditions by which they will change "state".  Then all you have to do
 * is trigger those conditions, and each of the objects will automatically update their own state; thus
 * changing their values.
 * 
 * @example 
 * // Traditional method of changing a value
 * var page = new Page();
 * var header = new Header();
 * header.text = "Header Text";
 * page.setHeader(header);
 * header.text = "Updated Header Text";
 * @example
 * // React method of changing a value
 * class Header {
 *   constructor () {
 *     this.state = {
 *       color: 'blue',
 *       change: false
 *     }
 *   }
 *   return (
 *     if(change === true) {
 *       this.changeColor();
 *       this.setState({ change: false });
 *     }
 *     render (
 *       {this.state.color}
 *     )
 *   )
 *   changeColor() {
 *     this.setState({ color: 'red' })
 *   }
 * }
 * 
 * @module Documentation
 */

const store = createStore(Reducer);
ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>    
    </Provider>, document.getElementById('root'));
    registerServiceWorker();
