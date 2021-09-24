import { Route } from "react-router-dom";
import Layout from "./container/layout/Layout";
import Cart from "./page/cart/Cart";
import Home from "./page/home/Home";
import ProductDetail from "./page/productDetail/ProductDetail";
import SignIn from "./page/signIn/SignIn";

function App() {
	return (
		<div className="App">
			<Layout>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/product">
					<ProductDetail />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/signIn">
					<SignIn />
				</Route>
			</Layout>
		</div>
	);
}

export default App;
