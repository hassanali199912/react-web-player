import {
  Link,
  useNavigate,
  useHistory,
  useParams,
  useLocation,
} from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react";
import ButtonCardSura from "../components/ui/ButonCardSura";
import ContainerNav from "../components/ui/ContainerNav";
import Player from "../components/player/Player";

const suras = [
  { name: "Al-Faatiha" },
  { name: "Al-Baqara" },
  { name: "Aal-i-Imraan" },
  { name: "An-Nisaa" },
  { name: "Al-Maaida" },
  { name: "Al-An'aam" },
  { name: "Al-A'raaf" },
  { name: "Al-Anfaal" },
  { name: "At-Tawba" },
  { name: "Yunus" },
  { name: "Hud" },
  { name: "Yusuf" },
  { name: "Ar-Ra'd" },
  { name: "Ibrahim" },
  { name: "Al-Hijr" },
  { name: "An-Nahl" },
  { name: "Al-Israa" },
  { name: "Al-Kahf" },
  { name: "Maryam" },
  { name: "Taa-Haa" },
  { name: "Al-Anbiyaa" },
  { name: "Al-Hajj" },
  { name: "Al-Muminoon" },
  { name: "An-Noor" },
  { name: "Al-Furqaan" },
  { name: "Ash-Shu'araa" },
  { name: "An-Naml" },
  { name: "Al-Qasas" },
  { name: "Al-Ankaboot" },
  { name: "Ar-Room" },
  { name: "Luqman" },
  { name: "As-Sajda" },
  { name: "Al-Ahzaab" },
  { name: "Saba" },
  { name: "Faatir" },
  { name: "Yaseen" },
  { name: "As-Saaffaat" },
  { name: "Saad" },
  { name: "Az-Zumar" },
  { name: "Ghafir" },
  { name: "Fussilat" },
  { name: "Ash-Shura" },
  { name: "Az-Zukhruf" },
  { name: "Ad-Dukhaan" },
  { name: "Al-Jaathiya" },
  { name: "Al-Ahqaf" },
  { name: "Muhammad" },
  { name: "Al-Fath" },
  { name: "Al-Hujuraat" },
  { name: "Qaaf" },
  { name: "Adh-Dhaariyat" },
  { name: "At-Tur" },
  { name: "An-Najm" },
  { name: "Al-Qamar" },
  { name: "Ar-Rahmaan" },
  { name: "Al-Waaqia" },
  { name: "Al-Hadid" },
  { name: "Al-Mujaadila" },
  { name: "Al-Hashr" },
  { name: "Al-Mumtahana" },
  { name: "As-Saff" },
  { name: "Al-Jumu'a" },
  { name: "Al-Munaafiqoon" },
  { name: "At-Taghaabun" },
  { name: "At-Talaaq" },
  { name: "At-Tahrim" },
  { name: "Al-Mulk" },
  { name: "Al-Qalam" },
  { name: "Al-Haaqqa" },
  { name: "Al-Ma'aarij" },
  { name: "Nooh" },
  { name: "Al-Jinn" },
  { name: "Al-Muzzammil" },
  { name: "Al-Muddaththir" },
  { name: "Al-Qiyaama" },
  { name: "Al-Insaan" },
  { name: "Al-Mursalaat" },
  { name: "An-Naba" },
  { name: "An-Naazi'aat" },
  { name: "Abasa" },
  { name: "At-Takwir" },
  { name: "Al-Infitaar" },
  { name: "Al-Mutaffifin" },
  { name: "Al-Inshiqaaq" },
  { name: "Al-Burooj" },
  { name: "At-Taariq" },
  { name: "Al-A'laa" },
  { name: "Al-Ghaashiya" },
  { name: "Al-Fajr" },
  { name: "Al-Balad" },
  { name: "Ash-Shams" },
  { name: "Al-Lail" },
  { name: "Ad-Dhuhaa" },
  { name: "Ash-Sharh" },
  { name: "At-Tin" },
  { name: "Al-Alaq" },
  { name: "Al-Qadr" },
  { name: "Al-Bayyina" },
  { name: "Az-Zalzala" },
  { name: "Al-Aadiyaat" },
  { name: "Al-Qaari'a" },
  { name: "At-Takaathur" },
  { name: "Al-Asr" },
  { name: "Al-Humaza" },
  { name: "Al-Fil" },
  { name: "Quraish" },
  { name: "Al-Maa'un" },
  { name: "Al-Kawthar" },
  { name: "Al-Kaafiroon" },
  { name: "An-Nasr" },
  { name: "Al-Masad" },
  { name: "Al-Ikhlaas" },
  { name: "Al-Falaq" },
  { name: "An-Naas" },
];

export default function SingleReader() {
  const { state } = useLocation();
  const [show, setShow] = useState(false);
  const [url, setURL] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setShow(false);
    setURL("");
    if (state.api) {
      const url = `${state.api}/${
        index < 10
          ? `00${index}.mp3`
          : index < 100
          ? `0${index}.mp3`
          : `${index}.mp3`
      }`;
      setCurrentIndex(index);
      setTimeout(() => {
        setURL(url);
        setShow(true);
      }, 500);
    }
  };

  const onClickNext = () => {
    if (currentIndex + 1 != 113) {
      handleClick(currentIndex + 1);
    } else {
      handleClick(0);
    }
  };
  const onClickPrive = () => {
    if (currentIndex - 1 != 0) {
      handleClick(currentIndex - 1);
    } else {
      handleClick(113);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setShow(false);
    setURL("");

    const requist = async () => {
      const x = await fetch("http://api.alquran.cloud/v1/surah")
        .then((res) => res.json())
        .then((res) => {
          res.data.forEach((element) => {
            console.log(`{name:"${element.englishName}"}`);
          });
        });
      return x;
    };
    requist();
  }, []);
  return (
    <>
      <div className="container container_main_content">
        <div className="container">
          <div className="row my-3">
            <div className="col-12">
              <h1 className="text-title">All Reciters</h1>
            </div>
          </div>
          <div className="row">
            {suras.map((suwar, index) => (
              <ButtonCardSura
                title={suwar.name}
                index={index + 1}
                key={index}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
      {show && (
        <Player
          url={url}
          onClickNext={onClickNext}
          onClickPrive={onClickPrive}
        />
      )}
    </>
  );
}
