import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DataContext from "../services/DataContext";
import Spinner from "react-bootstrap/Spinner";
import CardLoader from "../components/loader/CardLoader";

export default function Radios() {
  const { setShow, setUrl } = useContext(DataContext);
  const [currentUrl, setCurrentUrl] = useState("");
  const [radioData, setRadioData] = useState();
  const [isLoding, setIsLoding] = useState(false);
  const handleClick = (url) => {
    setShow(false);
    setUrl("");
    setCurrentUrl(url);
    setTimeout(() => {
      setUrl(url);
      setShow(true);
    }, 1000);
  };

  const getRadio = async () => {
    setIsLoding(true);

    const data = await fetch("https://mp3quran.net/api/v3/radios?language=eng")
      .then((res) => res.json())
      .then((res) => {
        setIsLoding(false);
        setRadioData(res.radios);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getRadio();
  }, []);

  return (
    <>
      <div className="container container_main_content">
        <div className="container">
          <div className="row my-3">
            <div className="col-12">
              <h1 className="text-title">All Radios</h1>
            </div>
          </div>
          <div className="row pading-buttom-10">
            {isLoding ? (
              <>
                <CardLoader />
                <CardLoader />
                <CardLoader />
                <CardLoader />
              </>
            ) : (
              <>
                {radioData &&
                  radioData.map((data, index) => (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div
                        className="data_card"
                        onClick={() => handleClick(data.url)}
                      >
                        <img
                          src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0P1NtTv6wUhFcvTFbkyUA_lN7WKMta7RV-uNEM3h5O9C0MoEN46-0kix9M9jN3fLgy4&usqp=CAU"
                          }
                          className="card-img-top"
                        />
                        <p>{data.name}</p>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
