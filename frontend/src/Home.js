import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from './component/Message.js';
import Loader from './component/Loader.js';
import { shortenUrl } from './redux/actions.js';



const Home = () => {
    const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const urlState = useSelector((state) => state.shortenedUrl);
  const [message, setMessage] = useState(null);
  const { shortenedUrl, loading, error } = urlState;
  
  //console.log(stateUrl, 'stateUrl');

  useEffect(() => {
   // dispatch(getUrls())
    console.log(process.env.REACT_APP_BASE_URL);
    return () => {
    }
  }, [dispatch])

  const submitHandler =  (e) => {
    e.preventDefault()
    dispatch(shortenUrl({ longUrl  : url}));
    
  };

  return (
    <div className='container'>
      <h1> URL SHORTNER </h1>
      <form className='my-4 form-inline'>
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
        <button type='submit' onClick={submitHandler}>
          Get Url
        </button>
      </form>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <table className='table table-striped table-responsive'>
        <thead>
          <tr>
            <th>Full Url</th>
            <th>Short Url</th>
            <th>Clicks</th>
          </tr>
        </thead>
        {shortenedUrl}
        <tbody>
          <tr>
            <td>
              <a href={shortenedUrl?.longUrl}>{shortenedUrl?.longUrl}</a>
            </td>
            <td>
              <a href={shortenedUrl?.shortenedUrl}>{shortenedUrl?.shortenedUrl}</a>
            </td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
