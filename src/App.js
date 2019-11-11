import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBarComponent } from './components/NavBarComponent'
import {ArticleOverviewComponent} from "./components/ArticleOverviewComponent";
import {ArticleOverviewWrapperComponent} from './components/ArticleOverviewWrapperComponent'
const articles = [{
  title: 'meow',
  content: 'content',
  userName:'Vasya',
  createdAt: '11-04-97',
  imageURL: 'https://tripmydream.cc/travelhub/travel/block_gallery/93/338/default_93338.png?1234'
}, {
  title: 'asdasd',
  content: 'afjiwpojfpiaw',
  userName: 'Slavik',
  createdAt: 'segodnya',
  imageURL: 'https://bipbap.ru/wp-content/uploads/2017/05/6c223ded2d0882ebd05b462fcd97222177cb5638.jpg'
}, {
  title: 'afowiajfilajwof',
  content: 'afowjajwfjaw[fjaw',
  userName: 'Dasha',
  createdAt: 'vchera',
  imageURL: 'https://cdn.iz.ru/sites/default/files' +
      '/styles/900x506/public/news-2019-02/51308528_18628' +
      '13063827399_492899135607799808_n.jpg?itok=GhGYOTRl'
}

];

const fetchUser = ()=> {
  return {
    username: 'Slava'
  }
};

function App() {
  const [user,setUser] = React.useState({username: 'asdasd'});
  const [timer,setTimer] = React.useState(Date.now());


  React.useEffect(()=>{
    setUser(()=>fetchUser())
  },[]);

  React.useEffect(()=>{
    const interval = setInterval(()=> {
      setTimer(() => new Date());
    }, 2000);
    return ()=>clearInterval(interval);
  }, []);

  React.useEffect(()=>{
    console.log(timer);
    setUser((user)=>({username:user.username+1}));
  }, [timer]);


  return (<>
    <NavBarComponent name={user.username}/>
    <ArticleOverviewWrapperComponent>
      {articles.map((article) => <ArticleOverviewComponent key={article.title} {...article}/>)}
    </ArticleOverviewWrapperComponent>
  </>);
}

export default App;
