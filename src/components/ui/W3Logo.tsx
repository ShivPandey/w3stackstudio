import Image from "next/image";

export const W3Logo = () => (
  <Image
    src="/images/logos/w3-l.png"
    alt="W3 Stack Studio"
    layout="fill"
    objectFit="contain"
    priority={true}
  />
);
