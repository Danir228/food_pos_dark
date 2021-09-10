import image_1 from "../../images/1.svg";
import image_2 from "../../images/2.svg";
import image_3 from "../../images/3.svg";
import image_4 from "../../images/4.svg";
import image_5 from "../../images/5.svg";
import image_6 from "../../images/6.svg";
import image_7 from "../../images/7.svg";
import image_8 from "../../images/8.svg";
import image_9 from "../../images/9.svg";

export interface ImagesArr {
    src: string;
    name: string;
}

export const images: ImagesArr[] = [
    {
        src: `${image_1}`,
        name: "image_1"
    },
    {
        src: `${image_2}`,
        name: "image_2"
    },
    {
        src: `${image_3}`,
        name: "image_3"
    },
    {
        src: `${image_4}`,
        name: "image_4"
    },
    {
        src: `${image_5}`,
        name: "image_5"
    },
    {
        src: `${image_6}`,
        name: "image_6"
    },
    {
        src: `${image_7}`,
        name: "image_7"
    },
    {
        src: `${image_8}`,
        name: "image_8"
    },
    {
        src: `${image_9}`,
        name: "image_9"
    },
];