import React, { useState } from 'react';
import { setSessionPassword } from '../../../utils/utils';
import { Link } from 'gatsby';

import styling from './password.module.scss';

const styles = {
  buttonHover: {
    background: '#fff',
    color: '#000000',
  },
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload();
  };

  return (
    <div className={styling.container}>
      <header>
        <Link className={styling.footlink} to="/">
          &#8592; Back to mainpage
        </Link>
      </header>
      <div className={styling.wrapper}>
        <form onSubmit={onSubmit} style={{ width: '320px' }}>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="enter password"
            onChange={(event) => setPassword(event.target.value)}
            style={styling.input}
          />

          <button
            type="submit"
            style={{
              ...styling.button,
              ...(isButtonHovered ? styles.buttonHover : null),
            }}
            onMouseEnter={() => buttonHover(true)}
            onMouseLeave={() => buttonHover(false)}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtect;
