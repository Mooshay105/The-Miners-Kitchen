import { createRoot } from "react-dom/client";
import CustomBreak from "./components/CustomBreak";
import logo from "./assets/logo.png";
import menu1 from "./assets/Menu1.png";
import menu2 from "./assets/Menu2.png";
import "./assets/main.css";
function App() {
	return (
		<div className="App">
			<header>
				<img src={logo} width="75" height="50" />
				<h1>The Miners Kitchen</h1>
			</header>
			<main>
				<div className="menu">
					<CustomBreak height={5} />
					<h1>Menu</h1>
					<CustomBreak height={1} paddBothSides={true} />
					<img src={menu1} className="menuImage" />
					<CustomBreak height={1} paddBothSides={true} />
					<img src={menu2} className="menuImage" />
					<CustomBreak height={1} paddBothSides={true} />
				</div>
				<h2>Open Hours:</h2>
				<p>Wednesday - Friday: 12-2pm Lunch, 5:30-8pm Dinner</p>
				<p>Saturday: 12-8pm</p>
				<p>Sunday: 11-2pm</p>
				<h2>Just Good Food</h2>
				<p className="blurb">Here at The Miners Kitchen we make good, honest food using local and fresh ingredients. We are proud to support Howard Butcher and Terra Tribe Farm.</p>
				<h3>Located in the Miners Arms Hotel</h3>
				<p>The Miners Kitchen 24 Robertson Street, Torbanlea</p>
				<p>07 4129 4707</p>
				<p>@theminerskitchen</p>
			</main>
			<footer></footer>
		</div>
	);
}

createRoot(document.getElementById("root")!).render(<App />);
