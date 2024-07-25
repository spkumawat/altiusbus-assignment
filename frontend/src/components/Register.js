import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    // best form to use the usestate as object when have multi dependency get this idea while workign with an project 
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error("ERROR IS COMING",err)
    }
  };

  return (
    <form onSubmit={onSubmit}>
        {/* basic validation on froentned side we can add mpore like on particualr alophamueric numbers and mopre on password what to accept or what to not */}
      <input type="text" name="username" value={username} onChange={onChange} required />
      <input type="email" name="email" value={email} onChange={onChange} required />
      <input type="password" name="password" value={password} onChange={onChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
