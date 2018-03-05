import React from "react"

// Create the layout component
export class CustomLayout extends React.Component {
	render() {
		const {
			getComponent
		} = this.props

		const BaseLayout = getComponent("BaseLayout", true)

		return (
			<div>
				<div className="myCustomHeader">
					<h1>I have a custom header above Swagger-UI!</h1>
				</div>
				<BaseLayout />
			</div>
		)
	}
}
