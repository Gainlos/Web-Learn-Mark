import React from "react";
import './css/App.css';
// import './css/HomePage.css'
import Fly from './img/Fly.jpg'
import HomePage from './HomePage';
import BookIndex from './BookIndex'
import TopMenu from "./TopMenu";
import BookSearch from "./BookSearch";

// const element =(
//     <div className="topmenu">
//       <div id="homepagebutton">
//         <a href="homepage.html"><h2>思源书屋</h2></a>
//       </div>
//       <div className="searchdiv">
//         <input id="searchline" value="Search books here" type="text"></input>
//           <a href="booksearch.html">
//             <button id="searchbutton"> Search</button>
//           </a>
//       </div>
//       <div id="loginbutton">
//         <a href="loginpagepink.html"><h3>登录/注册</h3></a>
//       </div>
//       <div className="personalbutton">
//         <a id="PersonalCenter" href="personalcenter.html">
//           <i className="fa fa-user-circle-o"></i>
//         </a>
//       </div>
//       <div className="personalbutton">
//         <a id="shoppingcenter" href="shoppingcenter.html">
//           <i className="fa fa-shopping-cart"></i>
//         </a>
//       </div>
//
//       <div className="clear"></div>
//     </div>
// );

function App() {
    const ROWS = [
        {category: "novel",price:"19",name:"Gone with the Wind",author:"Michel",introduce: "Love Story",Company:"译林出版社"},
        {category : "textbook",price : "25",name : "Introduce for Computer Science",author : "MIT",introduce : "For CS-APP",Company : "译林出版社"},
        {category : "textbook",price : "30",name : "Introduce for Algorithms",author : "MIT",introduce : "For Algorithms",Company : "译林出版社"},
        {category : "novel",price : "15",name : "Norway's Forest",author : "Santa",Introduce : "Love Story",Company : "译林出版社"},
        {category : "novel",price : "99",name : "Love",author: "GainLos",Introduce : "The best one for my girl",Company:"上海交通大学出版社"},
        {category : "novel",price : "111",name : "1984",author: "Mike",Introduce : "Strict Country",Company:"译林出版社"}
    ];
  return (
      <div>
          <TopMenu/>
          {/*<BookSearch  category="novel" rows={ROWS}/>*/}
      </div>

  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
