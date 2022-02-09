
import '../../assets/global/_variables.css';
import '../../assets/fonts/_fonts.css';
import { StyledDemoImages } from './demo-images.styles';
export interface DemoImagesProps{
  imageSrc: string;
  selected: boolean;
}

export const DemoImages = ({ imageSrc, selected }: DemoImagesProps) => {
  return (
    <StyledDemoImages className="demo-images-wrapper">
      <div className={selected ? 'image-selected' : ''} style={{backgroundImage: `url(${imageSrc})`}}></div>
    </StyledDemoImages>
  )
}

export default DemoImages;