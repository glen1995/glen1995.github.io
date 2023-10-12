import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="App-header">
      <nav className="flex justify-between text-md pt-4">
        <Link to="/">Glen Thomas</Link>
        <Link
          to="#"
          onClick={(e) => {
            window.location.href = "mailto:glenkt2@gmail.com";
            e.preventDefault();
          }}
        >
          Email
        </Link>
      </nav>
    </header>
  );
};


