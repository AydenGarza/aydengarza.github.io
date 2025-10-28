import FooterStyling from './Footer.module.css';

function Footer({ className }) {
    return (
        <footer className={FooterStyling.footer}>
            <div className={FooterStyling.container}>
                <div className={FooterStyling.links}>
                    <a 
                        href="https://linkedin.com/in/ayden-garza" 
                        target="_blank" 
                        rel="noreferrer"
                        className={FooterStyling.link}
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/AydenGarza" 
                        target="_blank" 
                        rel="noreferrer"
                        className={FooterStyling.link}
                    >
                        GitHub
                    </a>
                    <a 
                        href="mailto:aydenjgarza@gmail.com"
                        className={FooterStyling.link}
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
