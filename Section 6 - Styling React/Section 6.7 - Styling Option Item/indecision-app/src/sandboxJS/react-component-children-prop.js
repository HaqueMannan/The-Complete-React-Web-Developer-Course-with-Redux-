import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) => {
   return (
      <div>
         <p>Header</p>
         {props.content}
         {props.children}
         <p>Footer</p>
      </div>
   );
};

// const template = (
//    <div>
//       <h1>Page Title</h1>
//       <p>Page Content Goes Here.</p>
//    </div>
// );

// ReactDOM.render(<Layout content={template} />), document.getElementById('app');
// ReactDOM.render(<Layout><p>This is inline.</p></Layout>), document.getElementById('app');

// ReactDOM.render(<Layout content={template}><p>This is inline.</p></Layout>), document.getElementById('app');

// Use brackets to break the Component into multiple lines for the child props.
// ReactDOM.render((
//    <Layout content={template}>
//       <p>This is inline.</p>
//    </Layout>
// ), document.getElementById('app'));

ReactDOM.render((
   <Layout>
      <h1>Page Title</h1>
      <p>Page Content Goes Here.</p>
   </Layout>
), document.getElementById('app'));