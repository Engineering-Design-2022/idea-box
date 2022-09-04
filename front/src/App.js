//import logo from './logo.svg';
//import './App.css';
import { Article } from "./Article";
import { Comment } from "./Comment";


function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Article title={"test"} id={"1"} description={"これはテストです"} deadline={"2020 - 01 - 07T00:00: 00Z"} created_at={"2020-01-01T00:00:00Z"} />
      <h3>コメント</h3>
      <Comment content={"内容"} id={"1"} created_at={"2020-01-01T00:00:00Z"} />
    </div>
  );
}

export default App;
