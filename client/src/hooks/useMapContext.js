import { useContext } from 'react';
import { MapContext } from "../MapContext";

const useMapContext = () => {

    const [state, setStates] = useContext(MapContext);

    function setInventoryDashboard(val) {
        if (val === "yes") {
            setStates(state => ({...state, testStateVal: true}));
        }
    }

    return {
        setInventoryDashboard,
        testStateVal: state.testStateVal
    }
};


export default useMapContext;