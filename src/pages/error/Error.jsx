import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "./error.css"

/**
 * Represents the 404 Page Not Found component.
 * This component is displayed when a user tries to access a non-existent page.
 *
 * @component
 */

const PageNotFound = () => {
  return (
    <main className="error">
      {/* Display the page header */}
      <PageHeader title="404 Page Not Found" description="Uh oh!" />
      <img className="error-gif" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWN2YWsxeTIzajBiODE3ejlwczZ2eTVkeTh4MGcyaWw5ZXd6OTRleSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KpACNEh8jXK2Q/giphy.gif" alt="" />
      <div className="error-description">
        <div className="row">
          <div className="col">
            {/* Display a message indicating the page was not found */}
            <p>Désolé, la page que vous recherchez n&apos;existe pas.</p>
            <p className="line-break">Veillez à bien vérifier l&apos;url</p>
            <p> ou naviguer vers une autre section du site.</p>
            {/* Provide a link back to the home page */}
            <Link to="/" className="home">
              <button className="errorBtn">Acceuil</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
