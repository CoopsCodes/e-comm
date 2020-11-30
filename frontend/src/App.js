import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Header />
			<main className="py-3">
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default App;
