import React from 'react';
import { navigate } from '@reach/router';

import styles from './form.module.scss';

export default (props, { handleSubmit, handleUpdate }) => (
  <div>
    <form
      className={styles.form}
      method="post"
      onSubmit={(event) => {
        handleSubmit(event);
        // need to figure out how to dynamically navigate
        // this.props.sluglink
        navigate(props.sluglink);
      }}
    >
      <label>
        Password
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      <input type="button" value="submit" />
    </form>
  </div>
);
