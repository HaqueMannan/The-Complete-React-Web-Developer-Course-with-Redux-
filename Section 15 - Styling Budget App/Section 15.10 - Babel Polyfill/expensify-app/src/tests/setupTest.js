import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';


Enzyme.configure({
   adapter: new Adapter()
});

// require('dotenv').config({ path: '.env.test' });
DotEnv.config({ path: '.env.test' });