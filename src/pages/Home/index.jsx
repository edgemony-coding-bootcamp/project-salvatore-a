import { Header } from "../../Components/Header";
import { ConversationBlock } from "../../Components/ConversationBlock";
import { MessageBlock } from "../../Components/MessageBlock";


const Home = () => {
    return (
          <div className="flex-container">
            <Header/>
      
            <div className="main"> 
              <ConversationBlock/>
              <MessageBlock/>
            </div>
          </div>
    )
};

export default Home;