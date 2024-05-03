"use client";

import Image from "next/image";
import Link from "next/link";
import ktc from "/public/gallery/Popup.png";
import Popup from "./shared/pop-up";
import { AspectRatio } from "./ui/aspect-ratio";

export default function KtcPopup() {
  return (
    <Popup delay={3000}>
      <Link
        href="https://ktc.likelion.edu.vn/"
        target="_blank"
        className="relative"
      >
        <AspectRatio ratio={1 / 1}>
          <Image src={ktc} alt="KTC" fill />
        </AspectRatio>
      </Link>
    </Popup>
  );
}
