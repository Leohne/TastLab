import imgAccount from "/asset/icone/compte.png"

function Account () {

    return (
        <div className="flex justify-between flex-row mt-10 w-full">
            <div className="flex flex-col w-2/3">
                <div className="flex flex-col items-start mt-10">
                    <h3>Recettes consultées</h3>
                </div>
                <div className="flex flex-col items-start mt-10">
                    <h3>Recettes Favoris</h3>
                </div>
                <div className="flex flex-col items-start mt-10">
                    <h3>Recettes publiées</h3>
                </div>
            </div>
            <div className="flex flex-col items-end mt-10 w-1/3">                
                <div className="w-[45%] bg-white rounded-[200px]">
                <img src={imgAccount} alt="photo de profil" className="object-cover mx-auto w-full h-[200px]"/>
                </div>
                <div className="text-center pr-14 mt-5">                    
                    <h2>Username</h2>
                    <h3>Email@mail.com</h3>
                    <h3>Recette publiée : 14</h3>
                    <h3>Allergie</h3>
                    <ul>
                        <li>Gluten</li>
                        <li>. . .</li>
                    </ul>
                    <label className="flex" htmlFor="regime_alim">Régime alimentaire:</label>
                    <select name="regime" id="regime_alim">
                    <option value=""> </option>
                    <option value="Fléxitarisme">Fléxitarisme</option>
                    <option value="Végétarisme">Végétarisme</option>
                    <option value="Véganisme">Véganisme</option>
                    <option value="Pescétarisme">Pescétarisme</option>
                    <option value="Régime paléo">Régime paléo</option>
                    <option value="Régime cétogène">Régime cétogène</option>
                    <option value="Sans gluten">Sans gluten</option>
                    <option value="Sans lactose">Sans lactose</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Account