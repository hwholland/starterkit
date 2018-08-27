// React framework imports
import * as React from "react";
// Redux framework imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
// Microsoft Fabric framework imports
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Panel } from "office-ui-fabric-react/lib/Panel";
// Custom component imports
import Form from '../Form';

const components = {
     form: Form
};

const mapStateToProps = (state, ownProps) => (
  state
)

const mapDispatchToProps = function (dispatch) {
  return (bindActionCreators(actions, dispatch));
}

/**
 * @class SidePanel
 * @param  {Object}  Map of properties
 * @return {type} {description}
 */
class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.props.initPanel();
    this.onRenderFooterContent = this.onRenderFooterContent.bind(this);
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  render() {
    var type = 'form';
    var Form = components[type];
    const props = this.props.components.panel;
    const isOpen = props.isOpen;
    const isLightDismiss = props.isLightDismiss;
    const isFooterAtBottom = props.isFooterAtBottom;
    const closeButtonAriaLabel = props.closeButtonAriaLabel;
    const headerText = props.headerText;
    return (
      <Panel
        isOpen={isOpen}
        isLightDismiss={isLightDismiss}
        headerText={headerText}
        isFooterAtBottom={isFooterAtBottom}
        closeButtonAriaLabel={closeButtonAriaLabel}
        onRenderFooterContent={this.onRenderFooterContent}
      >
        <Form />
      </Panel>
    );
  }

  /**
   * @function onRenderFooterContent
   * @memberof EntityPanel
   * @return {type} {description}
   */
  onRenderFooterContent = () => {
    return (
      <div>
        <PrimaryButton onClick={this.onPressSubmit} style={{ marginRight: '8px' }}>Save</PrimaryButton>
        <DefaultButton onClick={this.onPressCancel}>Cancel</DefaultButton>
      </div>
    );
  };

  /**
   * @function onPressSubmit
   * @memberof EntityPanel
   * @return {type} {description}
   */
  onPressSubmit = () => {
    var that = this;
    var fnCallback = function(msg) {
      that.props.saveEntity(msg, {});
      that.props.hidePanel();
    }
  };

  onPressCancel = () => {
    this.props.hidePanel();
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel)