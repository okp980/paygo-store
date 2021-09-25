import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { IconContext } from "react-icons/lib";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./globalStyles/GlobalStyles";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<IconContext.Provider value={{ className: "react--icons" }}>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<QueryClientProvider client={queryClient}>
							<App />
							<ReactQueryDevtools initialIsOpen={false} />
						</QueryClientProvider>
					</ThemeProvider>
				</IconContext.Provider>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
