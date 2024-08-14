import React from "react";

const Location = () => {
  return (
    <section id="venue">
      {/* <section id="venue" class="wow fadeInUp"> */}

      <div className="container-fluid">
        <div className="location-section-header">
          <h2>Spot Us On</h2>
          {/* <!-- <p>Event venue location info and gallery</p> --> */}
        </div>

        <div className="row no-gutters">
          <div className="col-lg-6 venue-map">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.8884771514604!2d73.85253167720636!3d18.49062305959726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c004bc8e1d8f%3A0x12df641707ea878e!2sPVG&#39;S%20COET!5e0!3m2!1sen!2sin!4v1682055567853!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              frameborder="0"
            ></iframe>
          </div>

          <div className="col-lg-6 venue-info">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-8">
                <h3>ACES PVGCOET,PUNE</h3>
                <p>
                  ACES is the Committee Run By The Students And for the
                  Students!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
    </div> */}
    </section>
  );
};

export default Location;
