function importAll(r) {
    let images = {};
    r.keys().map((item) => {
        if (item.includes("./")) return images[item.replace('./', '')] = r(item);
     });
    
    return images;
}

const IntroImage = importAll(require.context('assets/images/Intro_Images/intro_slider', false, /\.(png|jpe?g|svg)$/));
const TeacherImage = importAll(require.context('assets/images/Teacher_Images/teacher', false, /\.(jpg|png|jpe?g|svg)$/));
const EStudentImage = importAll(require.context('assets/images/EStudent_Images', false, /\.(jpg|png|jpe?g|svg)$/));
const StudentMImage = importAll(require.context('assets/images/StudentM_Images', false, /\.(jpg|png|jpe?g|svg)$/));
export {IntroImage, TeacherImage, EStudentImage, StudentMImage};