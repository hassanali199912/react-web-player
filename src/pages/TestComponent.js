import { Link } from "react-router-dom";

export default function TestComponent() {
  const getData = async (url) => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <h1 className="text-title">test components</h1>
          </div>
        </div>
        <div className="row">
          <Link
            to={""}
            className="col-4"
            onClick={() =>
              getData("https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy")
            }
          >
            <div className="card">
              <p>مشاري العفاسي</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
