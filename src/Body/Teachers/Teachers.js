import React from "react";
import items from "./teachers.json";
import { TeacherImage } from "resource_getter";
import "./teachers_styles.css";
import bar from "../../assets/images/Teacher_Images/bar.png";
var loadData = JSON.parse(JSON.stringify(items)).items;

class Teachers extends React.Component {
  render() {
    return <section id="teachers">{renderAll()}</section>;
  }
}

function renderPic(url) {
  return <img src={url} alt="về giáo viên" className="teacher_images"></img>;
}
function renderText(title, comment) {
  var index = 0;
  var list = [];
  for (const c of comment) {
    list.push(<li key={index}>{c["text"]}</li>);
    index++;
  }
  return (
    <aside>
      <div>{title}</div>
      <img src={bar} alt =""></img>
      <ul>{list}</ul>
    </aside>
  );
}

function renderArticle(index) {
  var image = TeacherImage[loadData[index]["img"]];
  var text = loadData[index]["comments"];
  var title = loadData[index]["title"];
  if (index % 2 === 0) {
    return (
      <article className="row gx-0 left" key = {index}>
        <div className="col-4">{renderPic(image)}</div>
        <div className="col-8">{renderText(title, text)}</div>
      </article>
    );
  } else {
    return (
      <article className="row gx-0 right" key = {index}>
        <div className="col-8">{renderText(title, text)}</div>
        <div className="col-4">{renderPic(image)}</div>
      </article>
    );
  }
}

function renderAll() {
  var article_list = [];
  for (var i = 0; i < loadData.length; i++) {
    article_list.push(renderArticle(i));
  }
  return article_list;
}

export default Teachers;
