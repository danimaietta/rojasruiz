import sliderImage1 from '@assets/aboutUs/sliderImage-1.jpg'
import sliderImage2 from '@assets/aboutUs/sliderImage-2.jpg'
import sliderImage3 from '@assets/aboutUs/sliderImage-3.jpg'
import ImageSlider from '@/imageSlider/page'

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
        <h1>Proyectos</h1>
        <p>
            Hemos participado en la construcción de proyectos 
            de infraestructura en todo el país.
        </p>
        <ImageSlider images={slideImages} />
      </>
    )
  }