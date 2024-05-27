import styles from './page.module.css'
import Image from 'next/image'
import { StaticImageData } from "next/image";

export default function ImageSlider(images: { path: StaticImageData, caption: string }[]){

const carousel = document.querySelector('.carousel')
const slider = carousel.querySelector('.carousel_track')
let slides = [...slider.children]

// Initial slides position, so user can go from first to last slide (click to the left first)
slider.prepend(slides[slides.length - 1])

// Creating dot for each slide
const createDots = (carousel, initSlides) => {
  const dotsContainer = document.createElement('div')
  dotsContainer.classList.add('carousel_nav')

  initSlides.forEach((slide, index) => {
    const dot = document.createElement('button')
    dot.type = 'button'
    dot.classList.add('carousel_dot')
    dot.setAttribute('aria-label', `Slide number ${index + 1}`)
    slide.dataset.position = index
    slide.classList.contains('is-selected') && dot.classList.add('is-selected')
    dotsContainer.appendChild(dot)
  })

  carousel.appendChild(dotsContainer)

  return dotsContainer
}

// Updating relevant dot
const updateDot = slide => {
  const currDot = dotNav.querySelector('.is-selected')
  const targetDot = slide.dataset.position

  currDot.classList.remove('is-selected')
  dots[targetDot].classList.add('is-selected')
}

// Handling arrow buttons
const handleArrowClick = arrow => {
  arrow.addEventListener('click', () => {
    slides = [...slider.children]
    const currSlide = slider.querySelector('.is-selected')
    currSlide.classList.remove('is-selected')
    let targetSlide

    if (arrow.classList.contains('jsPrev')) {
      targetSlide = currSlide.previousElementSibling
      slider.prepend(slides[slides.length - 1])
    }

    if (arrow.classList.contains('jsNext')) {
      targetSlide = currSlide.nextElementSibling
      slider.append(slides[0])
    }

    targetSlide.classList.add('is-selected')
    updateDot(targetSlide)
  })
}

const buttons = carousel.querySelectorAll('.carousel_btn')
buttons.forEach(handleArrowClick)

// Handling dot buttons
const handleDotClick = dot => {
  const dotIndex = dots.indexOf(dot)
  const currSlidePos = slider.querySelector('.is-selected').dataset.position
  const targetSlidePos = slider.querySelector(`[data-position='${dotIndex}']`).dataset.position

  if (currSlidePos < targetSlidePos) {
    const count = targetSlidePos - currSlidePos
    for (let i = count; i > 0; i--) nextBtn.click()
  }

  if (currSlidePos > targetSlidePos) {
    const count = currSlidePos - targetSlidePos
    for (let i = count; i > 0; i--) prevBtn.click()
  }
}

const dotNav = createDots(carousel, slides)
const dots = [...dotNav.children]
const prevBtn = buttons[0]
const nextBtn = buttons[1]

dotNav.addEventListener('click', e => {
  const dot = e.target.closest('button')
  if (!dot) return
  handleDotClick(dot)
})

// Auto sliding
const slideTiming = 5000
let interval
const slideInterval = () => interval = setInterval(() => nextBtn.click(), slideTiming)

carousel.addEventListener('mouseover', () => clearInterval(interval))
carousel.addEventListener('mouseleave', slideInterval)
slideInterval()
    
    return (
        <div className={styles["main"]}>
            <div className={styles["carousel"]}>
                <button type="button" className={styles["carousel_btn jsPrev"]} aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
                </button>

                <div className={styles["carousel_track-container"]}>
                <ul className={styles["carousel_track"]}>
                    <li className={styles["carousel_slide is-selected"]}>
                    <div className={styles["carousel_image"]}>
                        <Image src={images[0].path} alt={images[0].caption}/>
                    </div>
                    <h2 className={styles["carousel_title"]}>Slide 1</h2>
                    </li>
                    <li className={styles["carousel_slide"]}>
                    <div className={styles["carousel_image"]}>
                        <Image src={images[1].path} alt={images[1].caption}/>
                    </div>
                    <h2 className={styles["carousel_title"]}>Slide 2</h2>
                    </li>
                    <li className={styles["carousel_slide"]}>
                    <div className={styles["carousel_image"]}>
                        <Image src={images[2].path} alt={images[2].caption}/>
                    </div>
                    <h2 className={styles["carousel_title"]}>Slide 3</h2>
                    </li>
                    <li className={styles["carousel_slide"]}>
                    <div className={styles["carousel_image"]}>
                        <Image src={images[3].path} alt={images[3].caption}/>
                    </div>
                    <h2 className={styles["carousel_title"]}>Slide 4</h2>
                    </li>
                </ul>
                </div>

                <button type="button" className={styles["carousel_btn jsNext"]} aria-label="Next slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
                </button>
            </div>
        </div>
    )
}