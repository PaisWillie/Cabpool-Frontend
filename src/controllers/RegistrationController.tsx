const RegisterAccount = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  try {
    const response = await fetch('http://10.0.2.2:8082/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
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

export default RegisterAccount;
