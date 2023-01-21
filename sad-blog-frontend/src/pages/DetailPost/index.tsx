import { useLocation, useNavigate } from "react-router-dom";
import LayoutBase from "../../layout/LayoutBase";
import "./styles.css";

const DetailPost = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <LayoutBase>
        <div className="posts">
          <div className="post-name">
            <h2>{state.postName}</h2>
          </div>
          <div className="info-post">
            <h5>{state.category}</h5>
            <h5>{state.date}</h5>
          </div>
          <div className="content-post-detail">
            <p>{state.contentPost}</p>
          </div>
          <div className="footbar-posts">
            <strong>Autor: {state.nameUser}</strong>
            <button onClick={() => navigate(-1)}>Voltar</button>
          </div>
        </div>
      </LayoutBase>
    </>
  );
};

export default DetailPost;
