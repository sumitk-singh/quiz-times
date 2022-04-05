import "./Footer.css";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <p>© 2022 | Quiz Times</p>
                    <p>
                        Made with{" "}
                        <span className="odd-color-text">
                            <i className="fas fa-code" />
                        </span>{" "}
                        by Sumit Kr Singh
                    </p>
                    <ul className="nav-icon-center">
                        <li class-items-text="">
                            <a href="https://www.linkedin.com/in/sumit-kr-singh-a94b56228/">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </li>
                        <li class-items-text="">
                            <a href="https://twitter.com/sumitsi79994403">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li class-items-text="">
                            <a href="https://github.com/sumitk-singh">
                                <i className="fab fa-github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    );
}

