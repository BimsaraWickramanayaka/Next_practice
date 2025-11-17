"use client";

import { useState } from "react";

async function makePostRequest() {
    //in a server component
    // const res = await fetch(`${process.env.NEXT_URL}/api/hello`, 
    const res = await fetch(`/api/hello`, //if in a client component
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'John' }),
    })

    const data = await res.json();
    return {data};
}

export default async function Friends() {
    const [message, setMessage] = useState("");
    const onclick = async () => {
        const {data} = await makePostRequest();
        setMessage(data.message);
    };
    
    return <h1>Heyy friends, {message} <button onClick={onclick}>Click here</button></h1>
}