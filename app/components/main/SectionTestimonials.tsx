import {Box, Card, CardContent, Typography} from "@mui/material";
import {useLanguage} from "../../store/language";

function SectionTestimonials() {
    const {language, theme} = useLanguage(state => state);

    const testimonials = [
        {
            name: "John Doe",
            company: "ABC Company",
            text: "La experiencia de trabajar con esta empresa de recursos humanos ha sido excepcional. Nos ayudaron a encontrar el candidato perfecto para nuestra posición de liderazgo y hemos visto un impacto positivo en nuestro negocio gracias a su asesoramiento en desarrollo de carrera.",
        },
        {
            name: "Jane Smith",
            company: "XYZ Corporation",
            text: "Recomendaría esta empresa de recursos humanos a cualquier empresa que busque mejorar su estrategia de compensación y beneficios.",
        },
        {
            name: "Bob Johnson",
            company: "123 Inc.",
            text: "He trabajado con esta empresa de recursos humanos durante varios años y siempre han sido un socio confiable y valioso para mi negocio. Han ayudado a mi equipo a identificar y desarrollar habilidades de liderazgo y han sido fundamentales en nuestro éxito.",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                gap: "24px",
                padding: "0px",
                justifyContent: "space-between",
                flexDirection: {
                    sm: "column",
                    xs: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                },
            }}
        >
            {testimonials.map((testimonial, index) => (
                <Card
                    sx={{
                        height: 350,
                        width: 250,
                        margin: "auto",
                        borderRadius: "16px",
                        background: theme === "dark" ? "#bd72fd" : undefined,
                        boxShadow: "0 0 10px 5px rgb(118,75,162,0.5)",
                    }}
                    key={testimonial.name}
                >
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {testimonial.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            gutterBottom
                        >
                            {testimonial.company}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {testimonial.text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}
export default SectionTestimonials;
