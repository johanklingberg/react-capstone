import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(800px, 1200px) 1fr', backgroundColor: '#FFF', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#808080' }}></div>
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <Header />
        <Main />
        <Footer />
      </div>
      <div style={{ backgroundColor: '#808080' }}></div>
    </div>
     
    </>
  );
}

export default App;
