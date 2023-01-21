import { useNavigate } from "react-router-dom";
import "./styles.css";

interface MainPostProps {
  id: number;
  nameUser: string;
  postName: string;
  category: string;
  date: string;
  contentPost: string;
}

const MainPosts: React.FC<MainPostProps> = ({
  id,
  nameUser,
  postName,
  category,
  date,
  contentPost,
}) => {
  const navigate = useNavigate();
  const state = { id, nameUser, postName, category, date, contentPost };
  return (
    <>
      <div
        className="posts"
        onClick={() => navigate(`/post-detail/${id}`, { state })}
      >
        <div className="post-name">
          <h2>{postName}</h2>
        </div>
        <div className="info-post">
          <h5>{category}</h5>
          <h5>{date}</h5>
        </div>
        <div className="content-post">
          <p>{contentPost}</p>
        </div>
        <div className="footbar-posts">
          <strong>Autor: {nameUser}</strong>
        </div>
      </div>
    </>
  );
};

export default MainPosts;
