import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 ">
              <img
                src="img/ACES Logo White Transparent.png"
                alt="TheEvenet"
                className="aces-logo"
              />
              <p>
                {" "}
                ACES promotes participation and exploration of self-interests.
                Each event aims at the expansion of skill sets of students. We
                provide them with a platform to showcase their talent. With our
                faculty and committee, we strive to provide an ocean of
                opportunities for them to dive in.
              </p>
            </div>

            <div class="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i> <Link to="/team">Team</Link>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <Link to="/magazine">Magazine</Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                44, Shiv Darshan Rd, Parvati
                <br />
                Nirmal Baug Colony, Vidya Nagari
                <br />
                Parvati Paytha, Pune, Maharashtra 411009 <br />
                <strong>Phone:</strong> +91 75071 46021
                <br />
                <strong>Email:</strong> aces@pvgcoet.ac.in
                <br />
              </p>

              <div class="social-links">
                <a
                  href="https://www.youtube.com/@acespvgcoet5962"
                  target="_blank"
                  class="youtube"
                >
                  <i class="fa fa-youtube"></i>
                </a>
                {/* <!-- <a href="" class="facebook"><i class="fa fa-facebook"></i></a> --> */}
                <a
                  href="https://instagram.com/acespvg?igshid=NDk5N2NlZjQ="
                  target="_blank"
                  class="instagram"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                {/* <!-- <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a> --> */}
                <a
                  href="https://www.linkedin.com/school/acespvg/"
                  target="_blank"
                  class="linkedin"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>ACES</strong>. All Rights Reserved
        </div>
        <div class="credits"></div>
      </div>
    </footer>
  );
};

export default Footer;
