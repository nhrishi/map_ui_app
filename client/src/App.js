
import React, { Component } from 'react';
//import Foo from './scenes/Foo';
//import Bar from './scenes/Bar';
import InventoryCaptureForm from './scenes/InventoryCaptureForm';
import InventoryDashbaord from './scenes/InventoryDashboard';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import './App.css';

const paperStyle = {
    height: '85%',
    width: '85%',
    margin: '5%',
    textAlign: 'center',
    display: 'inline-block'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: null
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    showBar = () => {
        this.setState({ show: 'bar', open: false });
    };

    showFoo = () => {
        this.setState({ show: 'foo', open: false });
    };

    render() {
        let content = null;
        let menuOption = null;

        switch (this.state.show) {
            case 'foo':
                content = <InventoryCaptureForm />;
                menuOption = "Inventory Capture";
                break;

            case 'bar':
                content = <InventoryDashbaord />;
                menuOption = "Inventory Dashboard";
                break;

            default:
                content = <h1>Welcome</h1>;
        }

        return (
            <div className="App">
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="MAP Distributed Ledger"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({ open })}
                >
                    <AppBar title="Menu" />
                    <MenuItem id="showFooId" onClick={this.showFoo}>
                        Inventory Capture
                    </MenuItem>
                    <MenuItem id="showBarId" onClick={this.showBar}>
                        Inventory Dashboard
                    </MenuItem>
                </Drawer>
                <Paper style={paperStyle} zDepth={2}>
                    <Toolbar style={{ justifyContent: 'left' }}>
                        <ToolbarTitle text={menuOption} />
                    </Toolbar>
                    {content}
                 
                </Paper>
            </div>
        );
    }
}

export default App;