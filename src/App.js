import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';



function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
    console.log(data.results);
  }
  return (
    <>
    <BrowserRouter>
    <div className="App" style={{backgroundImage:"url('../ques1.png')"}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions }/>}></Route>
        <Route path="/quiz" element={<Quiz name={name} 
          questions={questions}
          setQuestions={setQuestions}
          score={score}
          setScore={setScore}
        />}></Route>
        <Route path="/result" element={<Result name={name} score={score}/>} > </Route>
      </Routes>
      
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
