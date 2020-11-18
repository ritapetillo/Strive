import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Child from "./Child";
import { Container, Button, Col } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import { Book } from "@material-ui/icons";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import scifi from "./data/scifi.json";
import romance from "./data/romance.json";

let books = {
  fantasy,
  history,
  scifi,
  horror,
  romance
}

class App extends React.Component {
  state = {
    bookList: books.fantasy,
    title: 'Fantasy',
    reduced:false
  };


  changeCategory = (cat) => {
    this.setState({bookList:books[cat], title:cat})
  };
  searchBook = (e) => {
  
    let allBooks = [...fantasy, ...horror, ...history, ...romance, ...scifi]
    let research = e.target.value
    this.setState({
      bookList: allBooks.filter(book => book.title.toLocaleLowerCase().includes(research.toLocaleLowerCase())),
      title: research == "" ? "Results - All Books" : `Results for ${research}`
    })
  

  }

  reduce = (cat) => {
    if (this.state.reduced) {
      this.changeCategory(cat.toLocaleLowerCase());
      this.setState({ reduced: false })
      console.log(this.state)
    } else {
      this.setState({
        bookList: this.state.bookList.slice(0, 12),
        reduced: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar changeCategory={this.changeCategory} search={this.searchBook} />
        <Hero />
        <BookList bookList={this.state.bookList} title={this.state.title} reduce={this.reduce}/>

        <Footer />
      </div>
    );
  }
}

export default App;