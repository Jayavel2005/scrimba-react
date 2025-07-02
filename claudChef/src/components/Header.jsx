import claudeChefLogo from "../images/chef-claude-icon.png"

const Header = () => {
  return (
    <header>
      <nav className='flex justify-center items-center gap-4 shadow-md py-4 bg-white'>
        <img src={claudeChefLogo} alt="chef claude logo" className='w-[44px]' />
        <p className='text-3xl font-doto font-extrabold '>Chef Claude</p>
      </nav>
    </header>
  )
}

export default Header
