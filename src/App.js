import logo from './logo.svg';
import './App.css';
import BaseLayout  from './features/base-layout/base-layout'
import Signin from './features/sign-in/sign-in';
function App() {
  return (
    <BaseLayout>
      <Signin/>
    </BaseLayout>
  );
}

export default App;
