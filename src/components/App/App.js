import './App.scss';

import Heading from '../Heading/Heading';
import Profile from '../Profile/Profile';
import Cta from '../Cta/Cta';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Heading />
      <Profile />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
