import React, { useState } from 'react';
import { setSessionPassword } from '../../../utils/utils';

import Layout from '../../../components/layout';

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [buttonHover] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload();
  };

  return (
    <Layout location={this.props.location}>
      <div>
        <form method="post" onSubmit={onSubmit}>
          <label>
            Password
            <input
              type="password"
              placeholder="enter password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <input
            type="button"
            value="submit"
            onMouseEnter={() => buttonHover(true)}
            onMouseLeave={() => buttonHover(false)}
          />
        </form>
      </div>

      <form onSubmit={onSubmit}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
    </Layout>
  );
};

export default PasswordProtect;
