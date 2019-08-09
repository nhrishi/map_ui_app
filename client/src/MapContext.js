import React, { useState } from 'react';

const MapContext = React.createContext([{}, () => {}]);

const MapProvider = (props) => {

    const [state, setStates] = useState({
        testStateVal: false        
    });

    return (
        <MapContext.Provider value={[state, setStates]}>
            {props.children}
        </MapContext.Provider>
    );

};

export {MapContext, MapProvider};