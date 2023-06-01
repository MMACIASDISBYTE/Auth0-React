import React from 'react';
import { useState } from 'react';

export const LayOut = () => {

    function Cup({ guest }) {
        return <h2>Tea cup for guest #{guest}</h2>;
    }

    const [guest, setGuest] = useState(0);

    const incrementGuest = () => {
        setGuest(guest + 1);
    };

    return (
        <>
            <Cup guest={1} />
            <Cup guest={guest} />
            <Cup guest={guest + 2} />
            <h2>Tea cup for guest #{guest}</h2>
            <button onClick={incrementGuest}>Add Guest</button>
        </>
    )
}
