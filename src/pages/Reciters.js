import { useEffect, useState } from "react";
import ButtonCard from "../components/ui/ButtonCard";
import ContainerNav from "../components/ui/ContainerNav";

const readersData = [
  {
    title: "Mishari Al-afasi",
    imgUrl: "https://i1.sndcdn.com/artworks-000088975436-n33pt8-t500x500.jpg",
    url: "https://server8.mp3quran.net/afs",
  },
  {
    title: "Mahmoud Khalil Al-Hussary",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhQ49x7TAILCnGTnVlHzM-AyMLGB5Ve4Hb_G_mdTWmg&s",
    url: "https://server13.mp3quran.net/husr/Rewayat-Qalon-A-n-Nafi",
  },
  {
    title: "Mohammed Siddiq Al-Minshawi",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSlljVjPGtYn1ovlvy1iKLeD07DapsIDKTg1EUwiPdA&s",
    url: "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mo-lim",
  },
];

export default function Reciters() {
  return (
    <>
     
      <div className="container container_main_content">
        <div className="container">
          <div className="row my-3">
            <div className="col-12">
              <h1 className="text-title">All Reciters</h1>
            </div>
          </div>
          <div className="row pading-buttom-10">
            {readersData.map((reader, index) => (
              <ButtonCard
                title={reader.title}
                imgUrl={reader.imgUrl}
                url={reader.url}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
