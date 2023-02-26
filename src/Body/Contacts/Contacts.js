import React from "react";
import logo from "../../assets/images/Footer_Images/footer_logo.png";
import fb from "../../assets/images/Footer_Images/footer_fb.png";
import yt from "../../assets/images/Footer_Images/footer_yt.png";
import seperator from "../../assets/images/Footer_Images/seperator.png";
import email from "../../assets/images/Footer_Images/email.svg";
import phone from "../../assets/images/Footer_Images/phone.svg";
import location from "../../assets/images/Footer_Images/location.svg";
import "./contacts_styles.css";

class Contacts extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 col-12" id="links">
            <div>
              <img src={logo} alt="logo" id="footer_logo"></img>
            </div>
            <div id="footer_title">
              Trung Tâm Anh Ngữ
              <br />
              <span id="footer_name">IELTS SCHOLAR</span>
            </div>
            <div id="footer_links">
              <a href="https://www.facebook.com/ieltsscholar.center">
                <img src={fb} alt="đến facebook của chúng tôi" className="footer_link_icon"></img>
              </a>
              <a href="https://www.youtube.com/@ieltsscholar7948">
                <img src={yt} alt="đến youtube của chúng tôi" className="footer_link_icon"></img>
              </a>
            </div>
          </div>
          <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7 col-12" id="contacts">
            <div id="contacts_title">THÔNG TIN LIÊN HỆ</div>
            <div className="footer_contact">
              <a href="mailto:ieltsscholar.center@gmail.com">
                <img src={email} className="footer_icon" alt=""></img>
                <span className="link">ieltsscholar.center@gmail.com</span>
              </a>
            </div>
            <div className="footer_contact">
              <a href="tel:+84966 13 15 14">
                <img src={phone} className="footer_icon" alt=""></img>
                <span className="link">0966 13 15 14</span>
              </a>
            </div>
            <div className="footer_contact">
              <a href = "https://goo.gl/maps/dHcNwi28GMCXBEjs8">
                <img src={location} className="footer_icon" alt=""></img>
                <span className="link">Số 1, Đường số 4, phường Linh Chiểu, Thành phố Thủ Đức</span>
              </a>
            </div>
            <div id="return">
              <a href="#header">Về đầu trang</a>
            </div>
          </div>
        </div>
        <img src={seperator} alt="" id = "seperator"></img>
        <div id="copyright">
          (C) Coryright 2022 IELTS SCHOLAR. All rights reserved
        </div>
      </footer>
    );
  }
}

export default Contacts;
