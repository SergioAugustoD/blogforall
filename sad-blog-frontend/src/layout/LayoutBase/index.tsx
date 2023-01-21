import { ReactNode } from "react";
import FooterBase from "../../components/MainPosts/Footer";
import "./styles.css";

interface LayoutBaseProps {
  children?: ReactNode;
  title?: string;
}

const LayoutBase: React.FC<LayoutBaseProps> = ({ children, title }) => {
  return (
    <div className="main">
      <div className="nav">
        <div className="navbar">
          <button>Login</button>
        </div>
      </div>
      <div className="content">
        <div className="title-page">{title}</div>
        <div className="content-children">{children}</div>
      </div>
      <FooterBase />
    </div>
  );
};

export default LayoutBase;
