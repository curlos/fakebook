import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar';
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'
import styled from 'styled-components'
import './App.css';

const MainBody = styled.div`
  display: flex;
`

function App() {
  return (
    <div className="App">
      <Header />

      <MainBody>
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </MainBody>
    </div>
  );
}

export default App;
