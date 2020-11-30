import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Header />
			<main className="py-3">
				<Container>
					<p>Trading Space coming soon!</p>
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default App;
