// import logo from './logo.svg';
import React, { useEffect, useState } from "react";

import './App.css';
import { Switch, Route } from "react-router-dom"
import Registration from "./Registration"
import Signup from "./Signup"
import Login from "./Login"
import Categories from "./Categories"
import Navbar from "./Navbar"
import Question from "./Question"
// import CssInJs from "./CssInJs"
// import Stats from "./Stats"




function App() {
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const listOfCategories = ["General Knowledge", "Books", "Film", "Music", "Musicals & Theater", "Television", "Video Games",
  "Board Games", "Science & Nature", "Computers", "Mathematics", "Mythology", "Sports", "Geography", "History", "Politics",
  "Art", "Celebrities", "Animals", "Vehicles", "Comics", "Gadgets", "Japanese Anime & Manga", "Cartoon & Animations"]

  function handleCatAndDiff(difficulty, specificCategory) {
    // e.preventDefault()
    for(var i = 0; i < listOfCategories.length; i++){
      if (listOfCategories[i] === specificCategory) {
        console.log("category number is ", i + 9)
        // if its a category taht comes after gadgets, do i + 10 (bc im removing gadgets bc theres no api)
        setCategory(i + 9)
      }
      // setCategory(listOfCategories[i + 8])
    }
    // console.log("speccie", specificCategory)
    // setCategory("aloha")
    setDifficulty(difficulty)
    // console.log("the value ", e.target.value)
    console.log("the category is: ", category)
    console.log("the difficulty is: ", difficulty)
    console.log(listOfCategories)
  }



  function handleLogin(user) {
    console.log("working")
    setUser(user);
    console.log("this is the user in handleLogin", user)
  }


  return (
<div className="app">
    <Navbar user={user} setUser={setUser}/>
    {/* <CssInJs /> */}

    <Switch>

        <Route path="/Registration">
              <Registration />
        </Route>

        <Route path="/Signup">
              <Signup handleLogin={handleLogin}/>
        </Route>

        <Route path="/Login">
              <Login handleLogin={handleLogin} user={user} setUser={setUser}/>
        </Route>

        <Route path="/Categories">
              <Categories user={user} handleCatAndDiff={handleCatAndDiff} listOfCategories={listOfCategories}/>
        </Route>

        <Route path="/Question">
              <Question category={category} difficulty={difficulty} user={user}/>
        </Route>

        {/* <Route path="/Stats">
              <Stats category={category} difficulty={difficulty} user={user}/>
        </Route> */}

    </Switch>
    </div>

  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
