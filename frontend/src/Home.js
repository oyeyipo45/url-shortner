import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shortenUrl, selectUrl } from './urlSlice';



const Home = () => {
    const [url, setUrl] = useState('');
    const stateUrl = useSelector(selectUrl);
    const dispatch = useDispatch();

  console.log(url, 'url');
  const submitHandler = async (url) => {
    const data = {
      longUrl: url,
    };

    
  };

  return (
    <div className='container'>
      <h1> URL SHORTNER </h1>
      <form onSubmit={submitHandler} className='my-4 form-inline'>
        <label htmlFor='fullUrl' className='sr-only'>
          {' '}
          url{' '}
        </label>
        <input
          placeholder='url'
          className='col'
          required
          type='url'
          name='fullUrl'
          id='fullUrl'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type='submit'>Get Url</button>
      </form>
      <table className='table table-striped table-responsive'>
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
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
