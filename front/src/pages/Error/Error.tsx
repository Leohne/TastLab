import { NavLink } from "react-router-dom"

function Error () {

    return (
        <>
        <h1>OUPS !</h1>
        <p>Perdu ? On dirait que cette page a pris la poudre d'escampette. Revenez à l'accueil et essayons de vous remettre sur la bonne voie !</p>
        <NavLink to="/">Page d'accueil</NavLink>
        </>
    )

}

export default Error