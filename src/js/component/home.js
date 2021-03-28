import React from "react";

export class Ligths extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: ""
		};
	}
	render() {
		return (
			<div>
				<br />
				<div className="container">
					<div id="box">
						<div
							className={
								"red ligth " +
								(this.state.selected == "red" ? "selected" : "")
							}
							onClick={() => {
								this.setState({ selected: "red" });
							}}
						/>
						<div
							className={
								"yelow ligth " +
								(this.state.selected == "yelow"
									? "selected"
									: "")
							}
							onClick={() => {
								this.setState({ selected: "yelow" });
							}}
						/>
						<div
							className={
								"green ligth " +
								(this.state.selected == "green"
									? "selected"
									: "")
							}
							onClick={() => {
								this.setState({ selected: "green" });
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
