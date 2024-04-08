export default function PlayListCards({title,description}) {
    return <>
        
          <div className="playlist_content_card">
            <div className="playlist_content_card_img">
              <img
                src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
                alt="this is playlist image"
              />
            </div>
            <div className="playlist_content_card_content">
              <h6>{title}</h6>
              <p>{description}</p>
            </div>
          </div>
    </>
};
