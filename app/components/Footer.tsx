"use client";
import {AppBar, Toolbar, Box, Typography} from "@mui/material";
import Link from "next/link";
import {CONTACT} from "./main/SectionCoverPage";

function Footer() {
    return (
        <AppBar
            position="static"
            sx={{
                marginTop: "32px",
                padding: "16px",
                background:
                    "radial-gradient(circle at 50% 50%, #bd72fd, #764ba2)",
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
                <Box>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                    >
                        <image
                            href={"/icons/logo.png"}
                            width={28}
                            height={28}
                        />
                    </svg>
                    <Typography variant="subtitle2" color="white">
                        ©2023 Uvi
                    </Typography>
                    <Link
                        href="https://ramirofraysse.vercel.app/"
                        target="_blank"
                        style={{color: "#ffff", textDecoration: "none"}}
                    >
                        <Typography variant="subtitle2" color="white">
                            Design and development by Ramiro Fraysse
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <Link
                        href="mailto:info@uvi.com.ar"
                        target="_blank"
                        style={{color: "#ffff", textDecoration: "none"}}
                    >
                        info@uvi.com.ar
                    </Link>
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
                                style={{color: "#fff"}}
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
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
