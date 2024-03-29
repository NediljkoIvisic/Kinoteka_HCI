import React from "react"

import HeaderFooterLayout from "../layouts/HeaderFooterLayout"
import CathegoryPool from "../components/CathegoryPool"
import MovieCardRowExpanded from "../modules/MovieCardRowExpanded"
 
const KategorijePage = () => (
    <HeaderFooterLayout activeTab="Kategorije">
        <CathegoryPool textForIntro="Odabrana Kategorija:"/>
        <MovieCardRowExpanded
            quoteText = "Happines can be found even in the darkest of times, if one only remembers to turn on the light."
            quoteBy = "- Dumbledore"
        />
        <MovieCardRowExpanded
            quoteText = "Frankly my dear, I don't give a damn."
            quoteBy = "- Rhett Butler"
        />
    </HeaderFooterLayout>
)
 
export default KategorijePage