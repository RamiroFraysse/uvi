import {
    Card,
    CardContent,
    Typography,
    Box,
    CardActionArea,
} from "@mui/material";
import {useLanguage} from "../../store/language";
import Image from "next/image";
import img from "../../../public/img/coverpage.jpg";

const ITEMS = [
    {
        key: "plan1",
        title: {
            sp: "Plan1",
            en: "Plan1",
        },
        description: {
            sp: "Lista de caracteristicas.",
            en: "List description",
        },
        price: "Precio 1",
        img: img,
    },
    {
        key: "plan2",
        title: {
            sp: "Plan2",
            en: "Plan2",
        },
        description: {
            sp: "Lista de caracteristicas 2.",
            en: "List description 2",
        },
        price: "Precio 2",
        img: img,
    },
    {
        key: "plan3",
        title: {
            sp: "Plan3",
            en: "Plan3",
        },
        description: {
            sp: "Lista de caracteristicas 3.",
            en: "List description 3",
        },
        price: "Precio 3",
        img: img,
    },
];

function SectionPlans() {
    const {language, theme} = useLanguage(state => state);

    return (
        <Box
            sx={{
                display: "flex",
                gap: "24px",
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
            {ITEMS.map(item => (
                <Card
                    sx={{
                        height: 350,
                        width: 250,
                        margin: "auto",
                        borderRadius: "16px",
                        background: theme === "dark" ? "#bd72fd" : undefined,
                        boxShadow: "0 0 10px 5px rgb(118,75,162,0.5)",
                    }}
                    key={item.key}
                >
                    <CardActionArea>
                        <Image
                            height={170}
                            src={item.img}
                            style={{
                                width: "100%",
                            }}
                            alt="imagen propia"
                            placeholder="blur"
                        />

                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end",
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {item.title[language]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description[language]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

export default SectionPlans;
