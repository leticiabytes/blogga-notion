import localFont from "next/font/local";

export const graphik = localFont({
  src: [
    {
      path: "./GraphikLight.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./GraphikSemibold.otf",
      weight: "500",
      style: "semibold",
    },
    {
      path: "./GraphikMedium.otf",
      weight: "600",
      style: "medium",
    },
    {
      path: "./GraphikBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});
