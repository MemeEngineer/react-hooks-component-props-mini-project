import React from "react";
import blogData, {posts} from "../data/blog";


console.log(blogData);

function App({name, about, image ='https://via.placeholder.com/215'}) {
  return (
    <h1>{name}</h1>
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>

    <aside>
      <img src= {image} alt= 'blog logo'/>
      <p>{about}</p>
    </aside>

    <main>
      <ArticleList key={posts.id} posts={posts}/>
      <Article h3={posts.title} small={posts.date? null:"January 1, 1970"} 
   </main>
  );
}

export default App;
