import React from 'react';
import { connect } from 'dva';

function Error({count, dispatch}) {

  return (
    <div >
      Error
    </div>
  );
}

Error.propTypes = {
};

export default connect()(Error);
