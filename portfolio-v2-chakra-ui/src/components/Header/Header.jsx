import React from "react";
import { Box } from "@chakra-ui/react";

import MainMenu from "./MainMenu";
import Presentation from "./Presentation";

function Header(){
    return(
        <Box
            as="header"
            style={{                
                backgroundSize: "cover",
                backgroundPosition: "20% 30%",
                backgroundImage: "url(/images/apresentation-banner.jpg)",
            }}
        >
            <MainMenu />
            <Presentation />
        </Box>
    );
};

export default Header;