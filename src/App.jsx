import React from 'react'
import Header from './components/Header'
import './App.css'
import PopularChoices from './components/PopularChoices'
import BuyOnPhone from './components/BuyOnPhone'
import HouseOfMaterials from './components/HouseOfMaterials'
import TileGallery from './components/TileGallery'
import DesignersChoice from './components/DesignersChoice'
import ExclusiveMaterial from './components/ExclusiveMaterial'
import TrendingNow from './components/TrendingNow'
import WallPanel from './components/WallPanel'
import EssentialBasics from './components/EssentialBasics'
import StyleSpectrum from './components/StyleSpectrum'
import MaterialDepotExclusives from './components/MaterialDepotExclusives'
import GetOnPhone from './components/GetOnPhone'
import ShopWithConfidence from './components/ShopWithConfidence'
import TailoredToYou from './components/TailoredToYou'
import CarouselFooter from './components/CarouselFooter'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import 'react-multi-carousel/lib/styles.css';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Header />
                <PopularChoices />
                <HouseOfMaterials />
                <TileGallery />
                <DesignersChoice />
                <ExclusiveMaterial />
                <TrendingNow />
                <WallPanel />
                <EssentialBasics />
                <StyleSpectrum />
                <MaterialDepotExclusives />
                <GetOnPhone />
                <ShopWithConfidence />
                <TailoredToYou />
                <CarouselFooter />
                <Footer />
            </div>
            <BuyOnPhone />
        </BrowserRouter>
    )
}

export default App