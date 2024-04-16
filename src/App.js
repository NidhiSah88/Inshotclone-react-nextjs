import './App.css';
import NavInshort from "./components/NavInshorts";
import {useEffect, useState} from "react";
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';

// import apikey from "./data/config";
import axios from 'axios';

function App() {

  const [category, setCategory] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setloadmore] = useState(20);

  console.log("processenv::",process.env);



  const newsApi = async () => {
    // Your API key is: 5dfcdbabff87445bb44e9f357ddb7e4e

    try{
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      );

      // if u use apikey from data/config.js -- 
      // `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`

//      `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`

// const proxyUrl = "https://cors-anywhere.herokuapp.com/";

// const news = await axios.get(
//   `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`
// );
// console.log(news);


      console.log("news", news.data)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);


    }
    catch(error){
      console.log(error);
    }
  }

  console.log("newsArray",newsArray);
  
  // useefect should fire when newsResults, category are changing
  useEffect(()=>{

    newsApi(); 
    // eslint-disable-next-line

  },[newsResults, category, loadMore]);

  return (
    <div className="App">
     {/* inshot */}

      {/* <p>Inshot clone</p> */}
      <NavInshort 
      setCategory={setCategory}
      />
      <NewsContent newsArray={newsArray} newsResults={newsResults}
      loadMore={loadMore}
      setloadmore={setloadmore}
      />
      <Footer />

    </div>
  );
}

export default App;
