import logoGitHub from "../../assets/logo-GitHub.png";
import logoLinkedIn from "../../assets/logo-LinkedIn.png";
import "./header.css";

export default function Header() {
  return (
    <>
      <nav className="container text-center ">
        <div className="row row-cols-auto ">
          <div className="col">
            <a
              href="https://github.com/javierpelaez97"
              target="_blank"
              className="navbar-brand"
            >
              <img
                className="logo d-inline-block align-text-top"
                src={logoGitHub}
              ></img>
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.linkedin.com/in/jpelaezg/"
              target="_blank"
              className="navbar-brand"
            >
              <img
                className="logo d-inline-block align-text-top"
                src={logoLinkedIn}
              ></img>
            </a>
          </div>
          <div className="col">
            <button className="btn btn-dark">
              Descargar CV{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-big-down-lines-filled"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M9 8l-.117 .007a1 1 0 0 0 -.883 .993v1.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-1.999a1 1 0 0 0 -1 -1h-6z"
                  stroke-width="0"
                  fill="currentColor"
                />
                <path
                  d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
                  stroke-width="0"
                  fill="currentColor"
                />
                <path
                  d="M15 5a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
