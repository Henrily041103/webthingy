import React from "react";
import logo from "../assets/images/Navbar_Images/logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="container">
        <div className="row">
          <div className="col-2">
            <span className="logo_container">
              <img src={logo} id="logo" alt=""></img>
            </span>
          </div>

          <div className="col-4">
            <div className="title_container">
              <div>
                Trung Tâm
                <br />
                Anh Ngữ
                <br />
              </div>

              <div id="title_container" className="bold">
                IELTS SCHOLAR
              </div>
            </div>
          </div>

          <div className="col-6 contacts_header">
            <div className="support_container">
              <span>Bạn cần hỗ trợ nhanh? Gọi ngay </span>
              <div className="bold" id="number">
                0966 13 15 14
              </div>
              <div>
                <a
                  id="support_button"
                  className="btn btn-danger btn-lg"
                  href="https://forms.gle/fJea7Qk72wgKwLA97"
                >
                  <span id="bold"> Đặt Lịch Test Thử</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
