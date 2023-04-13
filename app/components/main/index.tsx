"use client";
import {Box, Typography} from "@mui/material";
import SectionPlans from "./SectionPlans";
import SectionServices from "./SectionServices";
import SectionTestimonials from "./SectionTestimonials";
import {useLanguage} from "@/app/store/language";

import SectionContact from "./SectionContact";

function Main() {
    const {language, theme} = useLanguage(state => state);

    return (
        <Box
            sx={{
                maxWidth: "750px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                marginTop: "32px",
            }}
        >
            <Typography
                variant="h5"
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Plans"
                sx={{
                    paddingLeft: {xs: "32px", sm: "32px", md: "0px"},
                }}
            >
                {language === "sp" ? "Planes" : "Plans"}
            </Typography>
            <SectionPlans />
            <Typography
                variant="h5"
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Services"
                sx={{paddingLeft: {xs: "32px", sm: "32px", md: "0px"}}}
            >
                {language === "sp" ? "Servicios" : "Services"}
            </Typography>
            <SectionServices />
            <Typography
                variant="h5"
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Recommendations"
                sx={{paddingLeft: {xs: "32px", sm: "32px", md: "0px"}}}
            >
                {language === "sp" ? "Recomendaciones" : "Recommendations"}
            </Typography>
            <SectionTestimonials />
            <Typography
                variant="h5"
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Contact"
                sx={{paddingLeft: {xs: "32px", sm: "32px", md: "0px"}}}
            >
                {language === "sp" ? "Solicitar Servicio" : "Request Service"}
            </Typography>
            <SectionContact />
        </Box>
    );
}

export default Main;
