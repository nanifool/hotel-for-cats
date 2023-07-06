import React from "react"
import { Button } from "../../components/button/Button"

export const Catalogue = () => {
	const openModal = () => {
		console.log("abriu modal")
	}

	const handleClick = () => {
		openModal()
	}

	return (
		<>
			<div>Imagem do gatinho</div>
			<div>
        Descrição do quartinho
				<Button type="button" onClick={handleClick}>
          Agendar
				</Button>
			</div>

			<div>component discount</div>
		</>
	)
}
