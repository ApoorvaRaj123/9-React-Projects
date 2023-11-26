import React from 'react';




function Btn({color,name}) {
    return (
        <>

            {/* <button className="text-white bg-black-600 mr-4">Button</button>
                <button className="text-white bg-red-600 mr-4">Button</button> */}
            <button className="text-black bg-yellow-600 rounded-3xl p-4 font-bold text-1xl" style={{backgroundColor : color}}>{name}</button>
            {/* <button className="text-white bg-green-600 mr-4">Button</button>
                <button className="text-white bg-blue-500 mr-4">Button</button>
                <button className="text-black bg-white mr-4">Button</button>
                <button className="text-white bg-red-900 mr-4">Button</button> */}

        </>
    );
}


export default Btn;