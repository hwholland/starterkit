import * as React from "react";
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { FontClassNames } from 'office-ui-fabric-react/lib/Styling';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import {
    DetailsList,
    DetailsListLayoutMode,
    DetailsRowCheck,
    Selection,
    SelectionMode,
    DetailsRow,
    IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { lorem } from 'office-ui-fabric-react/lib/utilities/exampleData';
//import { FaReact } from 'react-icons/fa';
//import { IconContext } from "react-icons";
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import * as actions from '../../actions';
const path = require('path');
var request = require('request');

const _items = [];

const fileIcons = [
    { name: 'accdb' },
    { name: 'csv' },
    { name: 'docx' },
    { name: 'dotx' },
    { name: 'mpp' },
    { name: 'mpt' },
    { name: 'odp' },
    { name: 'ods' },
    { name: 'odt' },
    { name: 'one' },
    { name: 'onepkg' },
    { name: 'onetoc' },
    { name: 'potx' },
    { name: 'ppsx' },
    { name: 'pptx' },
    { name: 'pub' },
    { name: 'vsdx' },
    { name: 'vssx' },
    { name: 'vstx' },
    { name: 'xls' },
    { name: 'xlsx' },
    { name: 'xltx' },
    { name: 'xsn' }
];

const _columns = [
  {
      key: 'column1',
      name: 'File Type',
      headerClassName: 'DetailsListExample-header--FileIcon',
      className: 'DetailsListExample-cell--FileIcon',
      iconClassName: 'DetailsListExample-Header-FileTypeIcon',
      iconName: 'Page',
      isIconOnly: true,
      fieldName: 'name',
      minWidth: 16,
      maxWidth: 16,
      //onColumnClick: this._onColumnClick,
      onRender: (item) => {

          return (
               <img src={item.iconName} className={'DetailsListExample-documentIconImage'} />
          );
      }
  },
  {
      key: 'description',
      name: 'Description',
      fieldName: 'description',
      minWidth: 100,
      maxWidth: 300,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      //onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true
  },
  {
      key: 'amount',
      name: 'Amount',
      fieldName: 'amount',
      minWidth: 55,
      maxWidth: 55,
      isResizable: true,
      isCollapsable: true,
      data: 'number',
     // onColumnClick: this._onColumnClick,
      onRender: (item) => {
          return <span>{item.amount}</span>;
      }
  },
  {
    key: 'currency',
    name: 'Currency',
    fieldName: 'currency',
    minWidth: 55,
    maxWidth: 55,
    isResizable: true,
    isCollapsable: true,
    data: 'string',
   // onColumnClick: this._onColumnClick,
    onRender: (item) => {
        return <span>{item.currency}</span>;
    }
},
{
  key: 'category',
  name: 'Category',
  fieldName: 'category',
  minWidth: 100,
  maxWidth: 125,
  isResizable: true,
  isCollapsable: true,
  data: 'string',
 // onColumnClick: this._onColumnClick,
  onRender: (item) => {
      return <span>{item.category}</span>;
  }
},
{
  key: 'paymentTerms',
  name: 'Payment Terms',
  fieldName: 'paymentTerms',
  
  maxWidth: 85,
  isResizable: true,
  isCollapsable: true,
  data: 'string',
 // onColumnClick: this._onColumnClick,
  onRender: (item) => {
      return <span>{item.paymentTerms}</span>;
  }
},
{
  key: 'paymentMethod',
  name: 'Payment Method',
  fieldName: 'paymepaymentMethodntTerms',
  
  maxWidth: 100,
  isResizable: true,
  isCollapsable: true,
  data: 'string',
 // onColumnClick: this._onColumnClick,
  onRender: (item) => {
      return <span>{item.paymentMethod}</span>;
  }
},
{
  key: 'recordedBy',
  name: 'Recorded By',
  fieldName: 'recordedBy',
  minWidth: 80,
  maxWidth: 100,
  isResizable: true,
  isCollapsable: true,
  data: 'string',
  onColumnClick: this._onColumnClick,
  onRender: (item) => {
    return <span>{item.recordedBy}</span>;
  },
  isPadded: true
},
{
  key: 'dateRecorded',
  name: 'Date Recorded',
  fieldName: 'dateRecorded',
  minWidth: 70,
  maxWidth: 90,
  isResizable: true,
  onColumnClick: this._onColumnClick,
  data: 'number',
  onRender: (item) => {
    return <span>{item.dateRecorded}</span>;
  },
  isPadded: true
}
];

const _selection = null;

const mapStateToProps = (state, ownProps) => (
    state
)

const mapDispatchToProps = function (dispatch) {
    return (bindActionCreators(actions, dispatch));
}

class ExpensesList extends React.Component {
    constructor(props) {
        super(props);
        var that = this;
        var items = [];
        
        /*
        this.props.instantiateSelection(new Selection({
            onSelectionChanged: () => {
                //that.props.onSelectControl('control', that.props.panel.control.getSelection()[0])
            }
        }));
        */
        this.state = {
            items: this.props.items,
            columns: _columns,
            isCompactMode: false,
            selection: null
        };
    }

    render() {
        const { columns, isCompactMode, items, selectionDetails } = this.state;
        return (
            <div>
      
                <MarqueeSelection selection={this.state.selection}>
                    <DetailsList
                        items={items}
                        compact={isCompactMode}
                        columns={columns}
                        selectionMode={this.state.isModalSelection ? SelectionMode.multiple : SelectionMode.none}
                        setKey="set"
                        layoutMode={DetailsListLayoutMode.justified}
                        isHeaderVisible={true}
                        selection={this.state.selection}
                        selectionPreservedOnEmptyClick={true}
                        onItemInvoked={this._onItemInvoked}
                        enterModalSelectionOnTouch={true}
                        onRenderDetailsFooter={this._onRenderDetailsFooter}
                    />
                </MarqueeSelection>
            </div>
        );
    }

    _onRenderDetailsFooter() {
      return (
        <div className={css('ms-GroupedListExample-footer', FontClassNames.large)}>
        This is a custom footer
      </div>
      );
    }
  
    componentDidUpdate(previousProps, previousState) {
        if (previousState.isModalSelection !== this.state.isModalSelection) {
          this.props.panel.control.setModal(this.state.isModalSelection);
        }
      }
    
      _onChangeCompactMode(checked) {
        this.setState({ isCompactMode: checked });
      };
    
      _onChangeModalSelection(checked) {
        this.setState({ isModalSelection: checked });
      };
    
      _onChangeText(text) {
        this.setState({ items: text ? _items.filter(i => i.name.toLowerCase().indexOf(text) > -1) : _items });
      };
    
      _onItemInvoked(item) {
        alert(`Item invoked: ${item.name}`);
      }
    
      _randomDate(start, end) {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const dateData = {
          value: date.valueOf(),
          dateFormatted: date.toLocaleDateString()
        };
        return dateData;
      }
    
      _randomFileIcon() {
        const docType = fileIcons[Math.floor(Math.random() * fileIcons.length) + 0].name;
        return {
          docType,
          url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
        };
      }
    
      _randomFileSize() {
        const fileSize = Math.floor(Math.random() * 100) + 30;
        return {
          value: `${fileSize} KB`,
          rawSize: fileSize
        };
      }
    /*
      _getSelectionDetails() {
        //const selectionCount = this.props.panel.control.getSelectedCount();
        console.log(this.props.panel.control);
        switch (selectionCount) {
          case 0:
            return 'No items selected';
          case 1:
            return '1 item selected: ' + (this.props.panel.control.getSelection()[0]).name;
          default:
            return `${selectionCount} items selected`;
        }
      }
    */
      _onColumnClick(ev, column) {
        const { columns, items } = this.state;
        let newItems = items.slice();
        const newColumns = columns.slice();
        const currColumn = newColumns.filter((currCol, idx) => {
          return column.key === currCol.key;
        })[0];
        newColumns.forEach((newCol) => {
          if (newCol === currColumn) {
            currColumn.isSortedDescending = !currColumn.isSortedDescending;
            currColumn.isSorted = true;
          } else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
          }
        });
        newItems = this._sortItems(newItems, currColumn.fieldName || '', currColumn.isSortedDescending);
        this.setState({
          columns: newColumns,
          items: newItems
        });
      };
    
      _sortItems = (items, sortBy, descending = false) => {
        if (descending) {
          return items.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) {
              return 1;
            }
            if (a[sortBy] > b[sortBy]) {
              return -1;
            }
            return 0;
          });
        } else {
          return items.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) {
              return -1;
            }
            if (a[sortBy] > b[sortBy]) {
              return 1;
            }
            return 0;
          });
        }
      };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesList)