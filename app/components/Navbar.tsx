"use client";
import {useState, useEffect} from "react";
import {ElementType} from "react";
import SectionCoverPage from "./main/SectionCoverPage";

import {
    AppBar,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    IconButton,
    Button,
} from "@mui/material";

import {
    LightMode as LightModeIcon,
    Bedtime as BedtimeIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import {useLanguage} from "../store/language";
import Link from "next/link";
import {Link as Scroll} from "react-scroll";

interface Props {
    window?: () => Window;
    scrolling: boolean;
}

const drawerWidth = 240;

type LanguageStrings = {
    [key: string]: string;
};

interface NavItemsProps {
    text: LanguageStrings | undefined;
    icon?: {
        dark: ElementType;
        light: ElementType;
    };
    key: string;
}

const navItems: NavItemsProps[] = [
    {
        text: {
            sp: "Servicios",
            en: "Services",
        },
        key: "Services",
    },
    {
        text: {
            sp: "Recomendaciones",
            en: "Recommendations",
        },
        key: "Recommendations",
    },

    {
        text: {
            sp: "Planes",
            en: "Plans",
        },
        key: "Plans",
    },

    {
        text: {
            sp: "Contacto",
            en: "Contact",
        },
        key: "Contact",
    },
];
const navItemsActions: NavItemsProps[] = [
    {
        text: {sp: "INGLÉS", en: "SPANISH"},
        key: "lanAction",
    },
    {
        icon: {
            dark: LightModeIcon,
            light: BedtimeIcon,
        },
        key: "themeAction",
        text: undefined,
    },
];

export default function Navbar(props: Props) {
    const {window, scrolling} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const {theme, language, toggleLanguage, toggleTheme} = useLanguage(
        state => state,
    );

    const handleClickAction = (key: string) => {
        switch (key) {
            case "lanAction":
                toggleLanguage();
                break;
            case "themeAction":
                toggleTheme();
                break;
            default:
                break;
        }
    };

    const handleClickNavItem = (key: string) => {
        const targetSection = document.getElementById(key);
        if (targetSection !== null) {
            targetSection.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: "center",
                height: "100vh",
                background:
                    "linear-gradient(to bottom right, #bd72fd, #3d235a)!important",
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28}>
                <image href={"/icons/logo.png"} width={28} height={28} />
            </svg>
            <Divider />
            <List sx={{display: "flex", flexDirection: "column"}}>
                {navItems.map(item => (
                    <Scroll
                        to={item.key}
                        duration={400}
                        smooth={true}
                        offset={-100}
                        key={item.key}
                    >
                        <ListItem disablePadding>
                            <ListItemButton sx={{textAlign: "center"}}>
                                <ListItemText
                                    primary={
                                        item?.text ? item.text[language] : ""
                                    }
                                    sx={{color: "#fff"}}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Scroll>
                ))}
                {navItemsActions.map(action => (
                    <ListItem key={action.key} disablePadding>
                        <ListItemButton
                            sx={{textAlign: "center"}}
                            onClick={() => {
                                handleClickAction(action.key);
                            }}
                        >
                            {action.key === "cvAction" ? (
                                <Link
                                    href="/docs/cv.pdf"
                                    target="_blank"
                                    download
                                    style={{
                                        color: "#ffff",
                                        textDecoration: "none",
                                        textAlign: "center",
                                        margin: "auto",
                                    }}
                                >
                                    CV
                                </Link>
                            ) : (
                                <ListItemText
                                    primary={
                                        action.key === "themeAction" &&
                                        action.icon ? (
                                            theme === "dark" ? (
                                                <action.icon.dark />
                                            ) : (
                                                <action.icon.light />
                                            )
                                        ) : (
                                            (action?.text &&
                                                action?.text[language]) ||
                                            ""
                                        )
                                    }
                                    sx={{color: "#fff"}}
                                />
                            )}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            sx={{
                display: "flex",
                background: scrolling
                    ? theme === "dark"
                        ? "#121212"
                        : "radial-gradient(circle at 50% 50%, #bd72fd, #764ba2)"
                    : "radial-gradient(circle at 50% 50%, #bd72fd, #3d235a)",
                paddingBottom: "70px",
                transition: "background ease 2s",
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    marginBottom: "100px",
                    paddingRight: {xs: "0px", sm: "0px", md: "100px"},
                    paddingLeft: {xs: "0px", sm: "0px", md: "100px"},
                    background: scrolling
                        ? "radial-gradient(circle at 50% 50%, #bd72fd, #3d235a)"
                        : "none",
                    boxShadow: scrolling ? undefined : "none",
                    border: scrolling ? undefined : "none",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: {
                            xs: "space-between",
                            sm: "space-between",
                            md: "space-evenly",
                        },
                        width: "100%",
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{display: {sm: "none"}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button
                        sx={{
                            color: "#fff",
                            display: {xs: "flex", sm: "flex"},
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: {md: "300px"},
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={45}
                            height={45}
                        >
                            <image
                                href={"/icons/logo.png"}
                                width={45}
                                height={45}
                            />
                        </svg>
                    </Button>
                    <Box
                        sx={{margin: "auto", display: {xs: "none", sm: "flex"}}}
                    >
                        {navItems.map(item => (
                            <Button
                                key={item.key}
                                sx={{color: "#fff"}}
                                onClick={() => {
                                    handleClickNavItem(item.key);
                                }}
                            >
                                {item.key === "themeAction" &&
                                    item.icon &&
                                    (theme === "dark" ? (
                                        <item.icon.dark />
                                    ) : (
                                        <item.icon.light />
                                    ))}
                                {item?.text ? item.text[language] : ""}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: {xs: "none", sm: "flex"},
                            width: "300px",
                            justifyContent: "end",
                        }}
                    >
                        {navItemsActions.map(item => (
                            <Button
                                key={item.key}
                                sx={{color: "#fff"}}
                                onClick={() => handleClickAction(item.key)}
                            >
                                {item.key === "themeAction" &&
                                    item.icon &&
                                    (theme === "dark" ? (
                                        <item.icon.dark />
                                    ) : (
                                        <item.icon.light />
                                    ))}
                                {(item?.text && item?.text[language]) || ""}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                className="este"
                sx={{display: "flex", justifyContent: "space-between"}}
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        "display": {xs: "block", sm: "none"},
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <SectionCoverPage />
        </Box>
    );
}
