import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import 'office-ui-fabric-react/lib/components/Nav/examples/Nav.Basic.Example.scss';

export class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render() {
        return (
            <div className="ms-NavExample-LeftPane">
        <Nav
          groups={[
            {
              links: [
                {
                  name: 'Home'
                },
                { 
                    name: 'Companies',  
                    links: [
                        {
                            name: "Suppliers"
                        },
                        {
                            name: "Customers"
                        },
                        {
                            name: "Prospects"
                        },
                        {
                            name: "Partners"
                        },
                        {
                            name: "General / Other"
                        }
                    ],
                    onClick: () => { this.onClickHandler("Companies") }, 
                    key: 'Companies', 
                    icon: 'VisioDiagram',
                    isExpanded: true
                },
                { 
                    name: 'People',  
                    links: [
                        {
                            name: "Employees"
                        },
                        {
                            name: "Contractors"
                        },
                        {
                            name: "Leads"
                        },
                        {
                            name: "Customers"
                        },
                        {
                            name: "Suppliers"
                        },
                        {
                            name: "General / Other"
                        }
                    ],
                    onClick: () => { this.onClickHandler("People") }, 
                    key: 'People', 
                    icon: 'People',
                    isExpanded: false
                },
              ]
            }
          ]}
          expandedStateText={'expanded'}
          collapsedStateText={'collapsed'}
          selectedKey={'key3'}
        />
      </div>
        );
    }

    onClickHandler(e) {
        console.log(e);
    }
}