import React from "react";
import logo from "../assets/images/Navbar_Images/logo.png";


class NavBar extends React.Component {

    render(){
        return (
            <nav className="container">
                <div className="row">
                    <div className="col-1">
                        <span className="logo_container">
                            <img src = {logo} id = "logo"></img>
                        </span>
                    </div>
    
                    <div className="col-3">
                        <div className="title_container">
                            <div>Trung Tâm<br />Anh Ngữ<br /></div>
                            
                            <div id="title_container" className="bold">
                            IELTS SCHOLAR
                            </div>
                        </div>
                    </div>
    
                    <div className="col-8">
    
                        <div className="row">
                            <div className="col-5">
                            </div>
    
                            <div className="col-7" id = "support">
                                <span className="support_container">
                                    <span>Bạn cần hỗ trợ nhanh? Gọi ngay </span>
                                    <span className="bold" id="number">0966 13 15 14<br /></span>
                                </span>
                                <div className="support_button_container">
                                    <button onClick={null} id = "support_button" className="btn btn-danger btn-lg">
                                        <span id="bold"> Đặt Lịch Test Thử</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;