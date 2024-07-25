import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">TaskRabbit</h1>
          <p className="lead">
            Create tasks and manage your to-do list with ease.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">component={Register}</Link>
            <Link to="/login" className="btn btn-light">component={Login}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
