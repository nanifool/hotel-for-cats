import React from "react"
import "./header.css"
import header from "../../assets/images/logo-gato.png"
import { NavLink } from "react-router-dom"

export const Header = () => {
	return (
		<>
			<div className="header-components">
				<div className="logo">
					<img
						src={header}
						alt="logo com desenho de um gato amarelo de perfil"
					/>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink
								to="/porque-nos"
								style={({ isActive }) => ({
									color: isActive ? "red" : "black",
								})}
							>
                Por que nós
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/quartos"
								style={({ isActive }) => ({
									color: isActive ? "red" : "black",
								})}
							>
                Quartos
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/avaliacoes"
								style={({ isActive }) => ({
									color: isActive ? "red" : "black",
								})}
							>
                Avaliacoes
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/mapa"
								style={({ isActive }) => ({
									color: isActive ? "red" : "black",
								})}
							>
                Como nos encontrar
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}
