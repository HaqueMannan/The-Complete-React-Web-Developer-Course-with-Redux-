const appRoot = document.getElementById('app');
let visibility = false;


const toggleVisibility = (e) => {
   visibility = !visibility;
   renderApp();
};

const renderApp = () => {
   const visibilityApp = (
      <div>
         <h1>Visibility Toggle</h1>
         <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
         {visibility && <p>Hey. These are some details you can now see!</p>}
      </div>
   );
   ReactDOM.render(visibilityApp, appRoot);
};

renderApp();