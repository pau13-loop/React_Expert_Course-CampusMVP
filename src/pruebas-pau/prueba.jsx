import { TextField } from "@mui/material";
import { useState } from "react";

const PruebaPau = () => {
    const [firstState, setFirstState] = useState("First State");
    const [secondState, setSecondState] = useState("Second State");
    const [thirdState, setThirdState] = useState("Third State");

    const handleState = (set) => (value) => set(value.target.value);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 20 }}>
                <p>{`1.- ${firstState}`}</p>
                <p>{`2.- ${secondState}`}</p>
                <p>{`3.- ${thirdState}`}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 20 }}>
                <TextField label={"Input first state"} value={firstState} onChange={handleState(setFirstState)} />
                <TextField label={"Input second state"} value={secondState} onChange={handleState(setSecondState)} />
                <TextField label={"Input third state"} value={thirdState} onChange={(e) => handleState(setThirdState(e.target.value))} />
            </div>
        </>
    );
};

export default PruebaPau;