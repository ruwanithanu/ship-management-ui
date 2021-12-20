// import { SVGProps } from 'react';
import svgpaths from './svgpaths.json';

interface Props {
  icon: string;
  [x: string]: any;
  // props?: SVGProps<SVGSVGElement>;
}

const Icon = ({icon, ...rest}: Props) => {
  const paths  = svgpaths as any;
  const {path, viewBox} = paths[icon];

  return (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...rest}>
      <path d={path}/>
    </svg>
  )
};

export default Icon;
