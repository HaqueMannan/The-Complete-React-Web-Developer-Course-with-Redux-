import React from 'react';
import ReactDOM from 'react-dom';


// Higher Order Component (HOC) - A component (HOC) than renders another component.
// Reuse code.
// Render hijacking.
// Prop manipulation.
// Abstract State.


// Regular Generic React Component
const Info = (props) => (
   <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
   </div>
);

// Regular Function:
const withAdminWarning = (WrappedComponent) => {
   return (props) => (
      <div>
         { props.isAdmin && <p>This is private info. Please do not share!</p> }
         <WrappedComponent {...props} />
      </div>
   );
};

// HOC Component - we can wrap as many component as we want.
const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details.'/>, document.getElementById('app'));


//-----------------------------------------------
// Challenge:
//-----------------------------------------------
// Create regular stateless function requireAuthentication
// const AuthInfo = requireAuthentication(Info);  -> show the component if the user is authenticated or to show a message (Please login to see the info) when they are not authenticated.
// ReactDOM.render(<AuthInfo isAuthenticated={true} />, document.getElementById('app'));

//-----------------------------------------------
// Answer:
//-----------------------------------------------
const requireAuthentication = (WrappedComponent) => {
   return (props) => (
      <div>
         { props.isAuthenticated ? (
            <WrappedComponent {...props} />
         ) : (
            <p>Please login to view the info</p>
         )}
      </div>
   );
};

const AuthInfo = requireAuthentication(Info);

// Flip isAuthenticated prop from true to false to see the difference.
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details.' />, document.getElementById('app'));