import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/button/Button"

export const Home = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		return navigate("/index/hotel")
	}

	return (
		<>
			<div className="body-home">
				<div className="card-home">
					<div>imagem do gatinho</div>
					<div>
						<p>informaçoes:</p>
						<ul>
							<li>lista1</li>
							<li>info</li>
							<li>info</li>
						</ul>
						<Button onClick={handleClick}>Entrar</Button>
					</div>
				</div>
			</div>
		</>
	)
}
