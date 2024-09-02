import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import InputFild from "./inputfild/InputFild";
import PostList from "./postList/PostList";
import Nolist from "./postList/Nolist";
import TotalCount from "./totalcount/TotalCount";

function App() {
	// const data = [
	// 	"송도센터럴파크",
	// 	"파주 프로방스 / 헤이리 마을",
	// 	"춘천 소양강 스카이워크",
	// 	"포천 가평 레일바이크",
	// 	"용인 에버랜드",
	// ];

	const data = JSON.parse(localStorage.getItem("tripLists")) || [];
	let [lists, setList] = useState(data);

	return (
		<>
			<Header />
			<InputFild setList={setList} />
			<TotalCount lists={lists} />
			{lists.length === 0 ? (
				<Nolist />
			) : (
				<PostList lists={lists} setList={setList} />
			)}
		</>
	);
}

export default App;
