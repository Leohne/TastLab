
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Header from './components/header/Header'
import Homepage from './pages/homepage/Homepage'
import Recherche from './pages/recherche/Recherche'
import Connexion from './pages/connexion/Connexion'
import Recette from './pages/recette/Recette'
import Error from './pages/Error/Error'
import Footer from './components/footer/Footer'
import Signup from './pages/signup/Signup'
import Add_recipe from './components/page/add_recipe/Add_recipe'
import Account from './components/page/account/Account'

function App() {


  return (
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="/search" element={<Recherche/>}/>
          <Route path="/login" element={<Connexion/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/account/:id" element={<Account/>}/>
          <Route path="/add-recipe" element={<Add_recipe/>}/>
          <Route path="/recipe/:id" element={<Recette/>}/>
          <Route path="/recette" element={<Recette/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
