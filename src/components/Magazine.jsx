import React from "react";
import "./css/Magazine.css";

const Magazine = () => {
  return (
    <main id="main" className="main-page fadeIn">
      <div id="speakers-details" className="fadeIn">
        <div className="magazine-container">
          <div className="section-header">
            <h2>MAGAZINE</h2>
          </div>

          <div className="row">
            <div className="col-md-5">
              <img
                src="img/ACES Magazine 2022-23frontpage_page-0001.jpg"
                alt={1}
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <div className="details">
                <h2>ACE THE TECH</h2>
                <div className="social">
                  <p>Download Magazine</p>
                  <a href="ACES Magazine 2022-23.pdf">
                    <i className="fa fa-download"></i>
                  </a>
                </div>

                <p>
                  From designing, writing an article, collecting insightful
                  thoughts and organizing events...Aces is Proud to Publish
                  their First magazine Ace the Tech. Let's Experience the First
                  Ever Virtual Connect.
                </p>
                <p>
                  Ace the Tech is a collection of Amazing Contributions
                  depicting the Creative & Innovative minds of PVGians. It truly
                  displays the real insight by reflecting our dreams, Thoughts,
                  Achievements, Creativity & Imagination.
                </p>
                <p>
                  It mainly focuses on Industrial & Nonindustrial Trends. The
                  main objective of this quarterly magazine is to bring out
                  collective efforts from all the teams and showcase their
                  Extraordinary efforts to create unique themes quarterly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Magazine;
