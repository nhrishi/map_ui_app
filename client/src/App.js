
import React, { Component } from 'react';
//import Foo from './scenes/Foo';
//import Bar from './scenes/Bar';
import InventoryCaptureForm from './scenes/InventoryCaptureForm';
import InventoryDashboard from './scenes/InventoryDashboard';
import MapCaptureForm from './scenes/MapCaptureForm';
import MapDashboard from './scenes/MapDashboard';
import AppBar from 'material-ui/AppBar';
//import AppBar from './components/AppBar/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import './App.css';
import { MapProvider } from "./MapContext";


const paperStyle = {
    height: '85%',
    width: '90%',
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

    showInventoryDashboard = () => {
        this.setState({ show: 'inventoryDashboard', open: false });
    };

    showInventoryCapture = () => {
        this.setState({ show: 'inventoryCapture', open: false });
    };

    showMapCapture = () => {
        this.setState({ show: 'mapCapture', open: false });
    };

    showMapDashboard = () => {
        this.setState({ show: 'mapDashboard', open: false });
    };


    render() {
        let content = null;
        let menuOption = null;

        switch (this.state.show) {
            case 'inventoryCapture':
                content = <InventoryCaptureForm />;
                menuOption = "Inventory Capture";
                break;

            case 'inventoryDashboard':
                content = <InventoryDashboard />;
                menuOption = "Inventory Dashboard";
                break;

            case 'mapCapture':
                content = <MapCaptureForm />;
                menuOption = "MAP Request";
                break;

            case 'mapDashboard':
                content = <MapDashboard />;
                menuOption = "MAP Dashboard";
                break;

            default:
                content = <h1>Welcome</h1>;
        }

        return (
             <MapProvider>

                <div className="App">
                    <AppBar
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        title="MAP Distributed Ledger"
                        onLeftIconButtonClick={this.handleToggle}
                    />
                    {/* <AppBar /> */}
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={open => this.setState({ open })}
                    >
                        <AppBar title="Menu" />
                        <MenuItem id="showInventoryCaptureId" onClick={this.showInventoryCapture}>
                            Inventory Capture
                    </MenuItem>
                        <MenuItem id="showInventoryDashboardId" onClick={this.showInventoryDashboard}>
                            Inventory Dashboard
                    </MenuItem>
                        <MenuItem id="showMapCaptureId" onClick={this.showMapCapture}>
                            MAP Request
                    </MenuItem>
                        <MenuItem id="showMapDashboardId" onClick={this.showMapDashboard}>
                            MAP Dashboard
                    </MenuItem>
                    </Drawer>
                    {/* <Paper style={paperStyle} zDepth={2}>
                        <Toolbar style={{ justifyContent: 'center' }}>
                            <ToolbarTitle text={menuOption} />
                        </Toolbar>
                        {content}

                    </Paper> */}
                </div>
             </MapProvider>
        );
    }
}

export default App;