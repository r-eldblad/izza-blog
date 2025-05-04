import headerImage from '../../../public/images/bloggheader.jpg';

const Header = () => {
    return (
        <header className="header">
            <img src={headerImage} alt="header" />
        </header>
    )
}

export default Header;