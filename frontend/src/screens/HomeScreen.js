import { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get("/api/products");

			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products.map((p) => (
					<Col key={p._id} sm={12} md={6} lg={4} xlg={3}>
						<Product product={p} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
