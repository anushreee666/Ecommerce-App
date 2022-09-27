import "./App.scss";
import "./Components/categories-container/categories-container.component";
import CategoriesContainer from "./Components/categories-container/categories-container.component";

const App = () => {
	return (
		<div className='App'>
			<div className='title'> Ecommerce App</div>
			<CategoriesContainer></CategoriesContainer>
		</div>
	);
};

export default App;
