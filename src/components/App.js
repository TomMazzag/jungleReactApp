import logo from "../logo.svg";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import { handleSubmit } from "./clickScript";
import QuestionForm from "./questionForm";

function App() {
    return (
        <div className="App">
            <Banner />
            <div className="jh-layout">
                <Cart />
                <ShoppingList />
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="my_input"
                    defaultValue="Type your text here"
                />
                <button type="submit">Enter</button>
            </form>
            {/* <QuestionForm /> */}
        </div>
    );
}

export default App;
