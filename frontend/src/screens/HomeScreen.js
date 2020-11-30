import products from "../products";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products.map((p) => (
					<Col sm={12} md={6} lg={4} xlg={3}>
						<Product product={p} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
