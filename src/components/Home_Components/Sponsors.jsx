import React from "react";

const Sponsors = () => {
  return (
    <section id="sponsors" className="section-with-bg ">
      <div className="container">
        <div className="location-section-header">
          <h2>Sponsors</h2>
        </div>

        <div className="row no-gutters sponsors-wrap clearfix">
          <div className="col-lg-4 col-md-4 col-xs-4">
            <div className="sponsor-logo">
              <img
                src="Assets/sponsors/Sponsor_Pictel_AI.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <div className="sponsor-logo">
              <img
                src="Assets/sponsors/Sponsor_Budhani.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <div className="sponsor-logo">
              <img
                src="Assets/sponsors/Sponsor_Star_Copiers.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
