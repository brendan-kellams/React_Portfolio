import ReactDOM from 'react-dom';
import  routes  from './routes';

import './theme/globalStyle';

ReactDOM.render(routes, document.getElementById('root'));

if(module.hot) {
  module.hot.accept();
}