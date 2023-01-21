import { BsGithub } from "react-icons/bs";
import "./styles.css";

const FooterBase = () => {
  return (
    <div className="footer-main">
      <h5>Desenvolvido por @SergioAugustoD </h5>
      <a
        href="https://github.com/SergioAugustoD"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub color="white" size="1.2em" />
      </a>
    </div>
  );
};
export default FooterBase;
