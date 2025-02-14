import React, { useState } from 'react';
import Child from './Child';


function Dummy() {

    const [Pop, setpop] = useState(false);
    console.log(Pop);



    return (

        <div>
            <button className='btn' onClick={() => {setpop(Pop)}}>Clickme</button>
            <Child />
        </div>

    )

}

export default Dummy;