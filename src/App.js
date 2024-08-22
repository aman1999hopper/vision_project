import './App.css';
import Discover from './screens/discover';
import Main from './screens/main';

function App() {
  return (
    <div className='py-3 md:px-10 px-5 bg-stone-200'>
      <div className='text-3xl text-center'>Find out how many Asia Miles reward you can earn.</div>
      <div className='text-center my-4'>With the Asia Miles Time Deposite Calculator</div>
      <Main/>
      <Discover/>
    </div>
  );
}

export default App;
