export default function ContainerNav() {
  const showMinue = (e) => {
    const minue = document.querySelector(".container_nav");
    minue.classList.toggle("show");
  };
  return (
    <>
      <div className="container_main_nav">
        <div className=" container_main_nav_content">
          <div className="manue_btn">
            <button className="menue_btns btn" onClick={showMinue}>
              <i className="fa-solid fa-bars" />
            </button>
          </div>
          <div className="container_main_nav_content_search">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="container_main_nav_content_profile">
            <img
              src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
              alt="this is playlist image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
