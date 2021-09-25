import { Route, Switch } from "react-router-dom";
import Layout from "./container/layout/Layout";
import Cart from "./page/cart/Cart";
import Home from "./page/home/Home";
import NotFoundPage from "./page/notFound/NotFoundPage";
import ProductDetail from "./page/productDetail/ProductDetail";
import SignIn from "./page/signIn/SignIn";

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/signIn">
						<SignIn />
					</Route>
					<Route path="/:productId">
						<ProductDetail />
					</Route>
					<Route path="*">
						<NotFoundPage />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
