import { createRoot } from "react-dom/client";
import CustomBreak from "./components/CustomBreak";
import "./assets/main.css";

function App() {
	return (
		<div className="App">
			<header>
				<img src="/assets/logo.png" width="60" height="50" />
				<h1>The Miners Kitchen</h1>
			</header>
			<main>
				<CustomBreak height={5} />
				<h1>Menu</h1>
			</main>
			<footer></footer>
		</div>
	);
}

createRoot(document.getElementById("root")!).render(<App />);
