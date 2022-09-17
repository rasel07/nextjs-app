import { useState } from "react"
import { HiArrowNarrowLeft, HiArrowNarrowRight  } from "react-icons/hi"
// import {BiRadioCircle} from "react-icons/bi"
import {FaCircle} from "react-icons/fa"

import style from "./style.module.css"
import Image from "next/image"
function Slider () {

  const [slide, setSlide] = useState(1);

  const handleIncrement = () => {
    if(slide >= 3){
      setSlide(1)
    }
    else setSlide(slide + 1);
  }

  const handleDecrement = () => {
    if(slide <= 1){
      setSlide(3)
    }
    else setSlide(slide - 1);
  }

  function Slide1() {
    return (
      <div className="slide1">
              <div className={style.heading}><h1>What si Lorem Ipsum?</h1>
              <div className="icons"><HiArrowNarrowLeft className={style.left} onClick={handleDecrement}/> <HiArrowNarrowRight className={style.right} onClick={handleIncrement}/></div>
              </div>
              <div className="body">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</div>

        </div>
    )
    
  }


  function Slide2 () {
    return(
      <div className="slide2">
              <div className={style.heading}><h1>What is Lorem Ipsum?</h1>
              <div className="icons"><HiArrowNarrowLeft className={style.left} onClick={handleDecrement}/> <HiArrowNarrowRight className={style.right} onClick={handleIncrement}/></div>
              </div>
              <div className="body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</div>

        </div>
    )
    
  }

  function Slide3 () {
    return(
      <div className="slide3">
              <div className={style.heading}><h1>Theory of Relativity ?</h1>
              <div className="icons"><HiArrowNarrowLeft className={style.left} onClick={handleDecrement}/> <HiArrowNarrowRight className={style.right} onClick={handleIncrement}/></div>
              </div>
              <div className="body">eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut.</div>

        </div>
    )
    
  }
  return (
    <div className={style.container}>
        <div className={style.leftContent}>
            <Image src="/img/demo.jpeg" width="400px" height="400px"></Image>
        </div>

        <div className={style.rightContent}>
            {
              slide == "1" && <Slide1 />
            }
            {
              slide == "2" && <Slide2 />
            }
            {
              slide == "3" && <Slide3 />
            }

            <div className={style.dots}>
                <FaCircle className={style.dot} style={slide == 1 && {color: "orange"}} onClick={() => setSlide(1)} /><div className={style.line}></div><FaCircle className={style.dot} style={slide == 2 && {color: "orange"}} onClick={() => setSlide(2)} /><div className={style.line}></div><FaCircle className={style.dot} style={slide == 3 && {color: "orange"}} onClick={() => setSlide(3)} />
          </div>
        </div>
    </div>
  )
}

export default Slider