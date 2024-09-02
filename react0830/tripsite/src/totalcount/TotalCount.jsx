import "./totalCount.css";
export default function TotalCount({ lists }) {
	return (
		<div className="count mw">
			<strong>count</strong>
			<span>{lists.length}</span>
		</div>
	);
}
