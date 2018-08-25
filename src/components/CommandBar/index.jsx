import React, { PropTypes as T } from 'react';
import { CommandBar, ICommandBarProps } from 'office-ui-fabric-react';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        var that = this;
        return (
            <CommandBar
                items={
                    [{
                    key: 'new',
                    name: 'New',
                    iconProps: { iconName: 'Add' },
                    subMenuProps: {
                        items: [{
                            key: 'object',
                            name: 'Object',
                            onClick: function() {
                                //that.props.showPanel('Object');
                            }
                        }, {
                            key: 'action',
                            name: 'Action',
                            onClick: function() {
                                //that.props.showPanel('Action');
                            }
                        }, {
                            key: 'attribute',
                            name: 'Attribute',
                            onClick: function() {
                                //that.props.showPanel('Attribute');
                            }
                        }, {
                            key: 'group',
                            name: 'Group'
                        }, {
                            key: 'resource',
                            name: 'Resource'
                        }]
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
                overflowItems={this.overflowData}
                farItems={
                    [
                        {
                            key: 'charts',
                            name: 'Select Chart',
                            iconProps: { iconName: 'BarChart4' },
                            subMenuProps: {
                                items: [{
                                    key: 'treemap',
                                    name: 'Treemap',
                                    onClick: function() {
                                        //that.props.toggleTreemap();   
                                    }
                                }
                                , {
                                    key: 'sunburst',
                                    name: 'Sunburst',
                                    onClick: function() {
                                        //that.props.toggleSunburst();                                        
                                    }
                                
                                },{
                                    key: 'tree',
                                    name: 'Tree',
                                    onClick: function() {
                                        //that.props.toggleTree();                                        
                                    }
                                
                                },{
                                    key: 'InvertedSunburst',
                                    name: 'Inverted Sunburst',
                                    onClick: function() {
                                        //that.props.toggleInvertedSunburst();                                        
                                    }
                                
                                },{
                                    key: 'AlternateTreemap',
                                    name: 'Alternate Treemap',
                                    onClick: function() {
                                        //that.props.toggleAltTreemap();                                        
                                    }
                                
                                }]
                            }
                        }
                    ]
                }
            />
        )
    }
}
