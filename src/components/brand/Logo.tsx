import Image from 'next/image';

type Props = {
  width?: number;
  height?: number;
  dimensions?: number;
  forceClass?: string;
};

const Logo = ({
  width = 62,
  height = 62,
  dimensions,
  forceClass = '',
}: Props) => (
  <Image
    src="/gov-jobs-logo.jpg"
    alt=""
    width={dimensions ? dimensions : width}
    height={dimensions ? dimensions : height}
    className={`${forceClass}`}
  />
);

export default Logo;
