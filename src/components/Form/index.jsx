// React framework imports
import * as React from "react";
// Redux framework imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
// Microsoft Fabric framework imports
import { Label } from "office-ui-fabric-react/lib/Label";
import { TextField } from "office-ui-fabric-react/lib/TextField";
// Custom component imports
//import Parent from '../Dropdown/Parent';

const mapStateToProps = (state, ownProps) => (
    state
)

const mapDispatchToProps = function (dispatch) {
    return (bindActionCreators(actions, dispatch));
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        //this.props.initAlertType();
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)