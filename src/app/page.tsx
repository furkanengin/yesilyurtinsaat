import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Temelden Geleceğe Güvenli Yapılar",
    description:
        "Yeşilyurt İnşaat ile İstanbul ve Erzurum’da güvenli, modern konut projeleri.",
};

export default function Home() {
  return (
    <HomeMain />
  );
}
