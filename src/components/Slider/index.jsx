import { useState, useEffect, useRef } from "react";
//Images to banner:
import prince1 from "../../assets/img/prince-dog.png";
import prince2 from "../../assets/img/prince-bird.png";
import prince3 from "../../assets/img/prince-oww.png";
import prince4 from "../../assets/img/prince-flower.png";
import prince5 from "../../assets/img/prince-fly.png";
import prince6 from "../../assets/img/prince-telescope.png";

const images = [prince5, prince1, prince2, prince4, prince6, prince3];

const Slider = () => {
    const ref = useRef()
    const [activeSlide, setActiveSlide] = useState(0)

    const handleActiveSlide = (slide) => {
        setActiveSlide(slide)
    }

    useEffect(() => {
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(() => {
            setActiveSlide(prev => prev + 1)
            if (activeSlide === parseInt(images.length) - 1) setActiveSlide(0)
        }, 9000)
    }, [activeSlide])

    return (
        <div className="slider">
            <div className="slides">
                {/* Slide images: */}
                {images.map((e, index) =>
                    <div key={index} className={activeSlide === index ? 'slide active' : 'slide'}>
                        {activeSlide === index && <img src={e} alt='prince' />}
                    </div>
                )}

                {/* Manual navigation: */}
                <div className="navigationManual">
                    {images.map((e, index) => <>
                        <input type="radio" name='radio-btn' />
                        <label onClick={() => handleActiveSlide(index)} className={activeSlide === index ? 'manualBtnActive' : 'manualBtn'} ></label>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Slider