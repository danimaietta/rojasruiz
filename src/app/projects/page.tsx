import sliderImage1 from '@assets/aboutUs/sliderImage-1.jpg'
import sliderImage2 from '@assets/aboutUs/sliderImage-2.jpg'
import sliderImage3 from '@assets/aboutUs/sliderImage-3.jpg'
import ImageSlider from '@app/imageSlider/page'

export default function Projects() {

  const slideImages = [
    {
      path: sliderImage1,
      caption: 'Slide 1'
    },
    {
      path: sliderImage2,
      caption: 'Slide 2'
    },
    {
      path: sliderImage3,
      caption: 'Slide 3'
    },
  ];

    return (
      <>
        <ImageSlider images={slideImages} />
      </>
    )
  }