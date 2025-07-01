import reactImage from "./assets/react.svg"

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <img src={reactImage} alt="react" className='nav-logo' />
                <h3 className="logoName">ReactFacts</h3>
            </nav>
        </header>
    )
}

export default Header
