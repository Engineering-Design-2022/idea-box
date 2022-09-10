//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Article } from "./Article";
import { Comment } from "./Comment";


function App() {
  const content_data = [
    { title: "test1", id: "1", description: "これはテストです", deadline: "2020 - 01 - 07T00:00: 00Z", created_at: "2020-01-01T00:00:00Z" },
    { title: "test2", id: "2", description: "これはテストです", deadline: "2020 - 01 - 07T00:00: 00Z", created_at: "2020-01-01T00:00:00Z" },
    { title: "test3", id: "3", description: "これはテストです", deadline: "2020 - 01 - 07T00:00: 00Z", created_at: "2020-01-01T00:00:00Z" }
  ]
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <h1>hello world</h1>
      {
        content_data.map((content) =>
          <Article content={content} key={content.id} />
        )
      }
      <Article content={content_data[0]} />
      <Article content={content_data[1]} />
      <Article content={content_data[2]} />
      <h3>コメント</h3>
      <Comment content={"内容"} id={"1"} created_at={"2020-01-01T00:00:00Z"} />
    </div>
  );
}

export default App;
