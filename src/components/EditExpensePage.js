import React from 'react';

const EditExpense = (props) =>(
  <div>
    This is from my EditExpense component of {props.match.params.id}
  </div>
)

export default EditExpense