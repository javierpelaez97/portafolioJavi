import logoGitHub from "../../assets/logo-GitHub.png"
import logoLinkedIn from "../../assets/logo-LinkedIn.png"
import "./header.css"

export default function Header(){
    return(
        <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a href="https://github.com/javierpelaez97" target="_blank" className="navbar-brand"><img className="logo d-inline-block align-text-top" src={logoGitHub}></img></a>
            </div>
            <div className="container-fluid">
                <a href="https://www.linkedin.com/in/jpelaezg/" target="_blank" className="navbar-brand"><img className="logo d-inline-block align-text-top" src={logoLinkedIn} ></img></a>
            </div>
            
        </nav>
            
        </>
    )
}