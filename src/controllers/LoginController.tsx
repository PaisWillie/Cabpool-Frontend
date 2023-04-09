const Login = async (email: string, password: string) => {
  try {
    console.log(email, password);
    const response = await fetch('http://localhost:8082/user/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({email: email, password: password}),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    console.log(JSON.stringify({email: email, password: password}));
    //throw error;
    return false;
  }
};

export default Login;
