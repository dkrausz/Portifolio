import img from "../../../public/404.png";
import style from "./notFound.module.css";

export function NotFound() {
  return (
    <div className={style.notFound__container}>
      <h1 className={style.title}>404 - Pagina não encontrada!</h1>
      <img src={img} alt="" className={style.imgBanner} />
    </div>
  );
}
