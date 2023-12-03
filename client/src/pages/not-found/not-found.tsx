import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="page_404">
      <div className="">
        <div className="">
          <div className="">
            <div className="conainter_404">
              <div className="four_zero_four_bg">
                <h1 className="">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Похоже, вы потерялись...</h3>
                <p>
                  Страница, которую вы пытаетесь открыть недоступна или удалена.
                </p>
                <p>Войдите в систему или попробуйте позднее!</p>
                <Link to="/" className="link_404">
                  Вернуться на главную
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
