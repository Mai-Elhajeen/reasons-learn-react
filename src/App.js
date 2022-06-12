import './App.css';

function Header () {
  return (
    <header className='header'>
      <img src="./logo192.png" className='logo' alt='logo-react' />
      <nav className='navbar'>
        <ul className='list'>
          <li className='item'>Pricing</li>
          <li className='item'>About</li>
          <li className='item'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Main () {
  return (
    <main className='main'>
      <h1>Reasons I'm excited to learn to react</h1>
      <ol className='list'>
        <li className='item'>It's a popular library. so I'll be able to fit in with the cool kids!</li>
        <li className='item'>I'm more likely to get a job as a developer I know react</li>
        <li className='item'>You’ll increase your earning power</li>
        <li className='item'>React fully embraces JavaScript</li>
        <li className='item'>React is used by huge organisations</li>
      </ol>
    </main>
  )
}

function Footer () {
  return (
    <footer className='footer'>
      <small>&#169;2022 coding with &#x2764; by Dev. Mai | all right reserved</small>
    </footer>
  )
}

function Page() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Page;
