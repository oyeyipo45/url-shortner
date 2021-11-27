import React, { useState } from 'react'

const Home = () => {

    const [url, setUrl] = useState('')
    return (
      <div class="container">
        <h1> URL SHORTNER </h1>
        <form action='/shortenUrl' method='POST' class="my-4 form-inline">
          <label for='fullUrl' class="sr-only"> url </label>
          <input placeholder="url" class="col" required type='url' name='fullUrl' id='fullUrl' value={url} onChange={(e) => setUrl(e.target.value)} />
          <button type='submit'>Get Url</button>
        </form>
        <table class="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Full Url</th>
              <th>Short Url</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href='www.google.com'>www.google.com</a>
                        </td>
                        <td>
                            <a href='/12222'>1233</a>
                        </td>
                        <td>
                            10
                        </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Home
