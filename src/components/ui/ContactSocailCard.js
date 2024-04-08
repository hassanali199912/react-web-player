export default function ContactSocailCard({ icon, title, link }) {
  const goTo = () => {
    window.open(link, "_blank");
  };
  return (
    <>
      <div
        className="col-lg-3 col-md-4 col-sm-12 contact_text_container"
        onClick={goTo}
      >
        <div className="card card-container">
          <i className={icon} />
          <h6>{title}</h6>
        </div>
      </div>
    </>
  );
}
