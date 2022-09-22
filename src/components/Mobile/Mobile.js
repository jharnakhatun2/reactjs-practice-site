import React, { useState } from 'react';

const Mobile = () => {
    const [charge, setCharge] = useState(100);
    const decreaseCharge = () => setCharge(charge - 10); 
    if(charge < 0){
        return setCharge(0);
    }
    return (
        <div>
            <button onClick={decreaseCharge} className="btn btn-success mt-4">Battery Down : {charge}%</button>
        </div>
    );
};

export default Mobile;