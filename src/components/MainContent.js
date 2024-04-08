import { Route, Routes } from "react-router-dom";
import Reciters from "../pages/Reciters";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SingleReader from "../pages/SingleReader";
import ButtonCard from "./ui/ButtonCard";
import Radios from "../pages/Radios";
import ContainerNav from "./ui/ContainerNav";

export default function MainContent() {
  const showMinue = (e) => {
    const minue = document.querySelector(".container_nav");
    minue.classList.toggle("show");
  };
  const showPlayList = () => {
    const playlist = document.querySelector(".playlist_container");

    playlist.classList.toggle("show");
  };

  return (
    <>
      <div className="container_main">
       
        <ContainerNav />
        <Routes>
          <Route path={"/"} Component={Reciters} />
          <Route path={"/radios"} Component={Radios} />
          <Route path={"/readers"} Component={Reciters} />
          <Route path={"/readers/sura"} Component={SingleReader} />
          <Route path={"/about"} Component={About} />
          <Route path={"/contact"} Component={Contact} />
        </Routes>
      </div>
    </>
  );
}
