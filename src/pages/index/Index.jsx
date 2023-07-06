import React from "react"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { Outlet } from "react-router-dom"

export const Index = () => {
	return (
		<div className="index">
			<Header />
			<Outlet />
      map component
			<Footer />
		</div>
	)
}
