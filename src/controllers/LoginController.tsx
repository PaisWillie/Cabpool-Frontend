const Login = async (email: string, password: string) => {
  try {
    const response = await fetch('http://10.0.2.2:8082/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status >= 200 && response.status < 300) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export default Login;
