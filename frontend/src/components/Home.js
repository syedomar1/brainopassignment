// rafc
import PostList from "./PostList";

export const Home = (props) => {
  const {showAlert} = props
  return (
    <div>      
      <PostList showAlert={showAlert}/>
    </div>
  );
};

export default Home;
