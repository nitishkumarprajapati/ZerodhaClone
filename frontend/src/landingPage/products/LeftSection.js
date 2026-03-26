function LeftSection({ title, imgLink, content, links = [], storeLinks = [] }) {
  return (
    <section className="products-showcase">
      <div className="container">
      <div className="row align-items-center products-row">
        <div className="col-lg-7 text-center">
          <img src={imgLink} alt={title} className="img-fluid products-image"></img>
        </div>
        <div className="col-lg-5">
          <div className="products-content">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
          <div className="products-links">
            {links.map((link, index) => (
              <a href="/" key={index} className="products-link">
                {link} <i className="fa-solid fa-arrow-right"></i>
              </a>
            ))}
          </div>
          <div className="products-store-badges">
            {storeLinks.map((image, index) => (
              <img
                src={image}
                key={index}
                alt="Store badge"
                className="products-store-badge"
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default LeftSection;
