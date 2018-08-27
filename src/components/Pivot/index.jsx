// React framework imports
import * as React from 'react';                 /** @member React @memberof PivotNav Standard React framework imports */
// Redux framework imports
import { connect } from 'react-redux';          /** @member connect @memberof PivotNav Standard Redux framework imports */
import { bindActionCreators } from 'redux';     /** @member bindActionCreators @memberof PivotNav Standard Redux framework imports */
import * as actions from '../../actions';       /** @member actions @memberof PivotNav Standard Redux framework imports */
// Fabric framework imports
import { Label } from 'office-ui-fabric-react/lib/Label';                               /** @member Label @memberof PivotNav Standard Redux framework imports */
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';     /** @member Pivot, PivotItem, PivotLinkSize @memberof PivotNav Standard Redux framework imports */
// Custom component imports
import MenuBar from '../CommandBar';  /** @member MenuBar @memberof App */
import ExpensesList from '../DetailsList';

const mapStateToProps = (state, ownProps) => (
  state
)

const mapDispatchToProps = function (dispatch) {
  return (bindActionCreators(actions, dispatch));
}

class PivotNav extends React.Component {
  constructor(props) {
    super(props);
  }
   render() {
    return (
      <div>
        <Pivot linkSize={PivotLinkSize.large} onLinkClick={this.props.clickPivot}>
          <PivotItem headerText="Planned" itemKey="planned">
            <br/>
            <MenuBar />
            <ExpensesList items={[{
              iconName: "xls",
              description: "Test Line Item Description",
              amount: 122.34,
              currency: "USD",
              category: "Meals & Entertainment",
              paymentTerms: "Net 30",
              paymentMethod: "Credit Card",
              dateRecorded: "8/26/2018",
              recordedBy: "Harrison Holland"
            }]}/>
          </PivotItem>
          <PivotItem headerText="Open" itemKey="open">
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem headerText="Closed" itemKey="closed">
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PivotNav)