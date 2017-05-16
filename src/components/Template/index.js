import React, { Component } from 'react';
import './Template.css';

class Template extends Component {
  render() {
    return (
      <div className="Template">
        <h1>Template</h1>
      </div>
    );
  }
}

export default Template;

// stateless
// import React from 'react';
// import { Helmet } from 'react-helmet';

// import { Header } from 'components/Common';
// // import './Default.css';

// const Default = (props) => {
//   // const someFunc = () => {}
//   return (
//     <div className="Default">
//       <Helmet>
//         <title>Server Side Rendering - Create React App</title>
//         <meta charSet="utf-8" />
//         <meta name="description" content="Helmet application" />
//       </Helmet>
//       <Header />
//       { props.children }
//     </div>
//   );
// };

// export default Default;
