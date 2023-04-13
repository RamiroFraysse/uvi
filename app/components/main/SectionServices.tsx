import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useLanguage} from "@/app/store/language";

function SectionServices() {
    const {theme} = useLanguage(state => state);

    const services = [
        {
            title: "Reclutamiento y selección",
            description:
                "Ayudamos a encontrar y contratar el talento adecuado para su empresa.",
        },
        {
            title: "Desarrollo de carrera",
            description:
                "Trabajamos con su equipo para identificar y desarrollar el potencial de liderazgo y habilidades de sus empleados.",
        },
        {
            title: "Compensación y beneficios",
            description:
                "Ayudamos a diseñar y administrar paquetes de compensación y beneficios competitivos para atraer y retener el mejor talento.",
        },
    ];

    return (
        <Grid container>
            {services.map(service => (
                <Accordion
                    key={service.title}
                    sx={{
                        width: "100%",
                        background:
                            theme === "dark"
                                ? "radial-gradient(circle at 50% 50%, #bd72fd, #764ba2)"
                                : "white",
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">{service.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{service.description}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Grid>
    );
}
export default SectionServices;
