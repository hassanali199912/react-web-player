import { useDispatch } from "react-redux";
import { getFullData, setSura } from "../../store/audioSlicer";

export default function ButtonCardSura({ title, index,handleClick }) {
  return (
    <>
      <div
        className="sura_div col-xl-3 col-lg-4 col-md-6 col-sm-12"
        onClick={() => handleClick(index)}
      >
        <div className="data_card">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
