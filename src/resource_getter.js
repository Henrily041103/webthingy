function importAll(r) {
    let images = {};
    r.keys().map((item) => {
        if (item.includes("./")) return images[item.replace('./', '')] = r(item);
        else return null;
     });
    
    return images;
}

const IntroImage = importAll(require.context('assets/images/Intro_Images/intro_slider', false, /\.(png|jpe?g|svg)$/));
const TeacherImage = importAll(require.context('assets/images/Teacher_Images/teacher', false, /\.(jpg|png|jpe?g|svg)$/));
const EStudentImage = importAll(require.context('assets/images/EStudent_Images', false, /\.(jpg|png|jpe?g|svg)$/));
const StudentMImage = importAll(require.context('assets/images/StudentM_Images', false, /\.(jpg|png|jpe?g|svg)$/));
const Event20_11 = importAll(require.context('assets/images/Event_Images/20_11', false, /\.(jpg|JPG|png|jpe?g|svg)$/));
const EventChristmas2022 = importAll(require.context('assets/images/Event_Images/Christmas_2022', false, /\.(jpg|JPG|png|jpe?g|svg)$/));
const EventImage = [{name : "Event20_11", img : Event20_11}, {name : "EventChristmas_2022", img : EventChristmas2022}];
export {IntroImage, TeacherImage, EStudentImage, StudentMImage, EventImage};