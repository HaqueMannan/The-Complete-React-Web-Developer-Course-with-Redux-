import React from 'react';

const Option = (props) => (
   <div>
      {props.optionText}
      <button className='button button--link' onClick={ (e) => {props.handleDeleteOption(props.optionText)} }>
         Remove
      </button>
   </div>
);

export default Option;


// Implications on React DevTool if we were to use the inline export default = (props) => {...}
// We cannot use export default on variables but if we were to remove the variable name and export default the function - the component would work normally but this will display the component within the React DevTool as unknown. Therefore it is better to use export default Option variant rather than the inline for this very reason.