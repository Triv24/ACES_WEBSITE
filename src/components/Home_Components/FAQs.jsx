import React from "react";
const FAQs = () => {
  return (
    <section
      id="faq"
      className=""
      style={{ backgroundColor: "rgb(184, 177, 177)" }}
    >
      <div className="faq-container">
        <div className="faq-section-header">
          <h2>FAQ's</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <ul id="faq-list">
              <li>
                <a data-toggle="collapse" className="collapsed" href="#faq1">
                  What do we do? <i className="fa fa-minus-circle"></i>
                </a>
                <div id="faq1" className="collapse" data-parent="#faq-list">
                  ACES looks forward to the welfare of its students by
                  conducting ambitious conferences and workshops. Events are
                  held to broaden the skill set of our students and assist them
                  in their domain. At ACES, we encourage participation in
                  academics as well as extra-curricular activities.
                  <br />
                  <ul>
                    <li>
                      We provide technical as well as non technical support to
                      the students by organizing different workshops, events &
                      Hackathons.
                    </li>
                    <li>
                      We hone the talents at the right time and help them grow
                      by providing them a platform to showcase their skills in
                      different domains
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a data-toggle="collapse" href="#faq2" className="collapsed">
                  What Opportunities ACES provides?{" "}
                  <i className="fa fa-minus-circle"></i>
                </a>
                <div id="faq2" className="collapse" data-parent="#faq-list">
                  <p>
                    ACES promotes participation and exploration of
                    self-interests. Each event aims at the expansion of the
                    skill sets of the students. We provide them with a platform
                    to showcase their talent. With our faculty and committee, we
                    strive to provide an ocean of opportunities for them to dive
                    in
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
