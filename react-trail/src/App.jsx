import './App.css'
//import useState and useEffect
import { useState, useEffect } from 'react';

//import useGoogleLogin and googleLogout
import { useGoogleLogin, googleLogout } from '@react-oauth/google';

//import axios
import axios from 'axios';

const App = () => {

  // state access token
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  // state profile
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));

  // function to handle login success
  const handleLoginSuccess = (response) => {

    // get access token from response
    const token = response.access_token;

    //set token in state
    setAccessToken(token);

    // set token in localStorage
    localStorage.setItem('accessToken', token);
  };

  // function to handle login error
  const handleLoginError = (error) => {
    console.error('Login Failed:', error);
  };

  // function to login with google
  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  // function to fetch user profile
  const fetchUserProfile = async (token) => {
    try {

      // call google api to fetch user profile
      const res = await axios.get(
        'https://www.googleapis.com/oauth2/v1/userinfo',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
          params: {
            access_token: token,
          },
        }
      );

      // set profile in state
      setProfile(res.data);

      // set profile in localStorage
      localStorage.setItem('profile', JSON.stringify(res.data));

    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };

  // useEffect to fetch profile when token exists
  useEffect(() => {
    if (accessToken && !profile) {
      fetchUserProfile(accessToken); // fetch profile only if it's not already set
    }
  }, [accessToken, profile]);

  // function to logout
  const handleLogout = () => {

    //call googleLogout
    googleLogout();

    //set state to null
    setAccessToken(null);
    setProfile(null);

    //remove token and profile from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('profile');
  };

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-header">
              <h5 className="card-title mb-0">Google Login with React</h5>
            </div>
            <div className="card-body">
              <div className='text-center'>
                {profile ? (
                  <div>
                    <div className='text-center mb-3'>
                      <img src={profile.picture} className='rounded-circle bg-dark p-2 shadow' alt="User profile" />
                    </div>
                    <table className="table table-striped table-bordered">
                      <tbody>
                        <tr>
                          <td className='fw-bold'>Full Name</td>
                          <td>{profile.name}</td>
                        </tr>
                        <tr>
                          <td className='fw-bold'>Email Address</td>
                          <td>{profile.email}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
                  </div>
                ) : (
                  <div className='text-center'>
                    <button className="btn btn-primary" onClick={() => login()}>Login with Google</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
