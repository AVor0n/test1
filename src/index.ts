import test from './controllers/test';
import testContent from './pages/test.html';

test();
document.querySelector('#root').innerHTML = testContent;
