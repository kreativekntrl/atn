import './App.scss';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="page-wrap">
    <header className="page-header">
      <Header />
    </header>
    <main className="page-main">
      <Main />
    </main>
    <footer className="page-footer">
      <Footer />
    </footer>
  </div>
  );
}

export default App;
