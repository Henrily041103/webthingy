import React from 'react';

class InfoTable extends React.Component {
    render() {
        return (
            <div className='col-md-3 col-sm-6'>
                <div className='info_entry'>
                    <div className='name'>{this.props.name}</div>
                    <div className='intro_box'>
                        <div className='table_title'>Đối tượng</div>
                        <div className='info intro'>
                            {this.props.introduction}
                        </div>
                    </div>
                    <div className='target_box'>
                        <div className='table_title'>Mục tiêu</div>
                        <div className='info target'>
                            {this.props.target}
                        </div>
                    </div>
                    <div className='link_box'>{getSyllabus(this.props.link)}</div>    
                </div>
            </div>
        )
    }
}

function getSyllabus(link) {
    if (link === "") {
        return <a className='enroll' href="https://www.facebook.com/ieltsscholar.center">Liên hệ chúng tôi</a>;
    }
    else {
        return <a className='enroll' href={link}>Syllabus</a>;
    }
}


export default InfoTable;