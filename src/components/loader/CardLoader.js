export default function CardLoader() {
  return (
    <>
      <div
        className="loadin-card col-xl-3 col-lg-4 col-md-6 col-sm-12"
        aria-hidden="true"
      >
        <div className="card">
          <div className="image-loading card-img-top"></div>
          <div className="card-body">
            <p className="card-text placeholder-glow">
              <span className="placeholder col-12" />
              <span className="placeholder col-12" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
