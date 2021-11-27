import React, { useState } from 'react'

const Home = () => {

    const [Url, setUrl] = useState('')
    return (
        <div>
            HOME SWEET HOME
            <form action="" method="POST">
                <label for="fullUrl"> url </label>
                <input type="url" name="fullUrl" id="fullUrl"{onChange=((e.value.target) => url(e.value.target))} />
                <button type="submit">Get Url</button>
            </form>
        </div>
    )
}

export default Home
