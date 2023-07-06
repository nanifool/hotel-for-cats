import React from "react"
import "./button.css"
import PropTypes from "prop-types"

export const Button = ({ type = "button", onClick, children }) => {
	Button.propTypes = {
		children: PropTypes.node.isRequired,
		type: PropTypes.node.isRequired,
		onClick: PropTypes.node.isRequired,
	}
	return (
		<>
			<button type={type} onClick={onClick}>
				{children}
			</button>
		</>
	)
}
