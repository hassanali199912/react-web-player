export default function ContactCard({ icon, title, text }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 contact_text_container">
        <div className="card card-container">
          <i className={icon} />
          <h1>{title}</h1>
          <h6>{text}</h6>
        </div>
      </div>
    </>
  );
}
