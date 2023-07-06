import React from "react"
import { useRouteError } from "react-router-dom"
import "./error.css"

export const ErrorPage = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<section className="error">
			<div id="error-page">
				<div className="principal">
					<h1>Oops! :(</h1>
					<p>Desculpe, um erro inesperado aconteceu.</p>
				</div>

				<div className="status">
					<h3>Verifique sua conexão e se o endereço url está correto.</h3>
					<p>
						<span>{error.statusText || error.message}</span>
					</p>
				</div>
			</div>
		</section>
	)
}
