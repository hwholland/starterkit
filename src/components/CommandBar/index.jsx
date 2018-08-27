import React, { PropTypes as T } from 'react';
import { CommandBar, ICommandBarProps } from 'office-ui-fabric-react';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => (
    state
)

const mapDispatchToProps = function (dispatch) {
    return (bindActionCreators(actions, dispatch));
}

export class MenuBar extends React.Component {
    constructor(props, ICommandBarProps) {
        super(props);
        this.props.initMenu();

    }
    render() {
        var that = this;
        const { items, overflowItems, farItems } = this.props;
        return (
            <CommandBar
            iconOnly={this.props.components.menu.iconOnly}
                items={
                    [{
                    key: 'new',
                    name: 'New',
                    iconProps: { iconName: 'Add' },
                    onClick: function() {
                        that.props.showPanel(that.props.components.pivot.selected, "Add");
                    }
                },
                {
                    key: 'edit',
                    name: 'Edit',
                    iconProps: { iconName: 'Edit' },
                    //onClick: this.props.showEditObjectPanel
                }, {
                    key: 'delete',
                    name: 'Delete',
                    iconProps: { iconName: 'Delete' }
                }]
            }
                overflowItems={[
                    {
                        key: 'move',
                        name: 'Move to...',
                        iconProps: {
                            iconName: 'MoveToFolder'
                        }
                    },
                    {
                        key: 'copy',
                        name: 'Copy to...',
                        iconProps: {
                            iconName: 'Copy'
                        }
                    },
                    {
                        key: 'rename',
                        name: 'Rename...',
                        iconProps: {
                            iconName: 'Edit'
                        }
                    }
                ]}
                farItems={[
                    {
                        key: 'sort',
                        name: 'Sort',
                        iconProps: {
                            iconName: 'SortLines'
                        },
                        onClick: function () { return console.log('Sort'); }
                    },
                    {
                        key: 'tile',
                        name: 'Grid view',
                        iconProps: {
                            iconName: 'Tiles'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Tiles'); }
                    },
                    {
                        key: 'info',
                        name: 'Info',
                        iconProps: {
                            iconName: 'Info'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Info'); }
                    }
                ]}
            />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuBar)