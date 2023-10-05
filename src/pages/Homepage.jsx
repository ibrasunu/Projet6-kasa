import * as React from "react";
import Banner from "../components/Banner";

import HomepageBannerURL from "../assets/HOMEPAGE-BANNER.png"

function Homepage(){
    return(
        <div className="Homepage">
            <Banner bannerUrl={HomepageBannerURL} content="Chez vous, partout et ailleurs"/>
        </div>
    )
}

export default Homepage;