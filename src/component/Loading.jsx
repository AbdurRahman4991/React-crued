import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
function Loading() {
    return (
        <>
            <div className='container mt-5'>
            <Placeholder xs={6} />
            <Placeholder className="w-25" /> <Placeholder style={{ width: '25%' }} />
            </div>
        </>
    );
}

export default Loading;