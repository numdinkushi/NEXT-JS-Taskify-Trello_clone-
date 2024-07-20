import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const headingFont = localFont({
    src: "../public/font/OpenSans_Condensed-Bold.ttf"
});

export const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200", // thin,
        "300",
        "400", // normal
        "500",
        "700", // bold
        "800"
    ]
});