import { Link, useNavigate } from "react-router-dom";

export default function ButtonCard({ title, imgUrl, url }) {
  const navegator = useNavigate();

  const handleClick = async () => {
    navegator("/readers/sura", { state: { api: url } });
  };

  return (
    <>
      <div
        className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
        onClick={handleClick}
      >
        <div className="data_card">
          <img src={imgUrl} className="card-img-top" alt={title} />
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
