import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from './component/Message.js';
import Loader from './component/Loader.js';
import { redirectUrl, shortenUrl } from './redux/actions.js';



const Home = ({ match}) => {
  const [url, setUrl] = useState('');
   const [shortUrl, setShortUrl] = useState('');
  const dispatch = useDispatch();
  const urlState = useSelector((state) => state.shortenedUrl);
  const redirectState = useSelector((state) => state.redirect);
  const [message, setMessage] = useState(null);
  const { shortenedUrl, loading, error } = urlState;
  const { redirect : redirectRes, loading : redirectLoading, error : redirectError } = redirectState;
  console.log(redirectRes, 'redirectRes');

  const origin = window.location.origin;
  
  useEffect(() => {
   
   
    console.log(origin, "origin");
    
    if (redirectRes) {
      window.location = redirectRes
    }
    return () => {};
  }, [redirectRes]);

  const submitHandler =  (e) => {
    e.preventDefault()
    dispatch(shortenUrl({ longUrl  : url}));
    
  };

  const redirect = (shortUrl) => {
    dispatch(redirectUrl(shortUrl));
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
            <th>Shortened Url</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href={shortenedUrl?.data?.longUrl}>{shortenedUrl?.data?.longUrl}</a>
            </td>
            <td>
              <a onClick={() => redirect(shortenedUrl?.data?.shortenedUrl)} href={shortenedUrl?.data?.longUrl}>
                { shortenedUrl?.data?.shortenedUrl ? `${origin}/${shortenedUrl?.data?.shortenedUrl}` : ""}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
