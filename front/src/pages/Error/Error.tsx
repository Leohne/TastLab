import { NavLink } from "react-router-dom"

function Error () {

    return (
        <div className="bg-white py-10">
            <div className="mx-auto w-3/4">
                <div>
                    <h2 className="p-20 text-center text-8xl">OUPS !</h2>
                    <p className="flex mx-auto w-3/5 text-center text-2xl">Perdu ? On dirait que cette page a pris la poudre d'escampette. <br/> Revenez à l'accueil et essayons de vous remettre sur la bonne voie !</p>
                    <div className="w-1/4 mt-20 mb-20 mx-auto text-center text-1xl hover:underline">                        
                    <NavLink to="/">Page d'accueil</NavLink>
                    </div>
                </div>                
            </div>
        </div>
    )

}

export default Error