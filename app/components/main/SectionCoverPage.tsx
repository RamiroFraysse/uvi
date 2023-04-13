"use client";

import {useLanguage} from "@/app/store/language";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import coverimage from "../../../public/img/coverpage.jpg";

const DESCRIPTION = {
    sp: "Construyendo equipos sólidos y exitosos: Soluciones de Recursos Humanos para tu empresa",
    en: "Building Solid and Successful Teams: HR Solutions for Your Company",
};

export const CONTACT = [
    {
        icon: "https://icongr.am/entypo/linkedin-with-circle.svg?size=28&color=ffffff",
        url: "https://www.linkedin.com/company/universo-i/",
    },
    {
        icon: "https://icongr.am/entypo/instagram.svg?size=20&color=ffffff",
        url: "https://www.instagram.com/uvi/",
    },
];

function SectionCoverPage() {
    const {language} = useLanguage(state => state);

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: {xs: "column", sm: "column", md: "row"},
                width: "700px",
                margin: "auto",
                marginTop: "100px",
                background: "none",
                boxShadow: "none",
                border: "none",
                color: "white",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "auto",
                        gridTemplateAreas: {
                            md: `
                                    "info img"
                                    "desc img"
                        `,
                            sm: `"info info"
                        "img img"
                        "desc desc"`,
                            xs: `"info info"
                        "img img"
                        "desc desc"`,
                        },
                    }}
                >
                    <Box
                        sx={{
                            gridArea: "info",
                            padding: "1em",

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={45}
                            height={45}
                        >
                            <image
                                href={"/icons/logo2.png"}
                                width={45}
                                height={45}
                            />
                        </svg>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "6px",
                            }}
                        >
                            {CONTACT.map(con => (
                                <Link
                                    href={con.url}
                                    key={con.url}
                                    target="_blank"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={28}
                                        height={28}
                                        key={con.url}
                                    >
                                        <image
                                            href={con.icon}
                                            width={28}
                                            height={28}
                                        />
                                    </svg>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gridArea: "desc",
                            padding: "1em",
                        }}
                    >
                        <Typography>{DESCRIPTION[language]}</Typography>
                    </Box>
                    <Box sx={{gridArea: "img", padding: "1em"}}>
                        <Image
                            src={coverimage}
                            alt="descripcion"
                            style={{
                                borderRadius: "30px",
                                margin: "auto",
                            }}
                            layout="responsive"
                            placeholder="blur"
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SectionCoverPage;
