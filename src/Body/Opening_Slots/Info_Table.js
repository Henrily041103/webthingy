import React from 'react';

class Info_Table extends React.Component {
    render() {
        return (
            <div className='col'>
                <div className='info_entry'>
                    <div className='name'>{this.props.name}</div>
                    <div className='info'>
                        Khai giảng dự kiến
                        <br />
                        <span className='table_date'>{this.props.date}</span>
                        <br />
                        Thời gian dự kiến
                        <br />
                        <span className='table_time'>{this.props.time}</span>
                        <br />
                        Hình thức học
                        <br />
                        <span className='table_place'>{this.props.place}</span>
                    </div>
                    {provide_link(this.props.status, this.props.link)}
                </div>
            </div>
        )
    }
}

function provide_link(status, link) {
    if (status === "open") return (
        <div className='enroll'>
            <a href={link}>Đăng ký</a>
        </div>
    )
    else return (
        <div className='enroll'>
            <span>Hết chỗ</span>
        </div>)
}

export default Info_Table;