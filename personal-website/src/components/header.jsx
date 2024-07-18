function Header( {className}){
    return<div className={className}>
            <ul>
                <a href="https://amazon.com">
                    <li>
                        Home
                    </li>
                </a>
                <a href="https://apple.com">
                    <li>
                        About
                    </li>
                </a>
                <a href="https://google.com">
                    <li>
                        Projects
                    </li>
                </a>
            </ul>
        </div>
}

export default Header;