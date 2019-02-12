import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardBody from "./components/CardBody";
import Footer from "./components/Footer";
import fruit from "./fruit.json";
import "./App.css";

class App extends Component {
  state = {
    fruit,
    clickedFruit: [],
    score: 0
  };

  imageClick = event => {
    const currentFruit = event.target.alt;
    const FruitAlreadyClicked =
      this.state.clickedFruit.indexOf(currentFruit) > -1;

    if (FruitAlreadyClicked) {
      this.setState({
        fruit: this.state.fruit.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedFruit: [],
        score: 0
      });
      alert("Oops, you already chose that fruit! Play again?");

    } else {
      this.setState(
        {
          fruit: this.state.fruit.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedFruit: this.state.clickedFruit.concat(
            currentFruit
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 11) {
            alert("Yay! You chose all the fruits.");
            this.setState({
              fruit: this.state.fruit.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedFruit: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div>
          <Navbar
            score={this.state.score}
          />
        </div>
        <div>
          <Header />
        </div>
        <div className="wrapper">
          {this.state.fruit.map(fruit => (
            <CardBody
              imageClick={this.imageClick}
              id={fruit.id}
              key={fruit.id}
              image={fruit.image}
            />
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </div >
    );
  }
}
export default App;