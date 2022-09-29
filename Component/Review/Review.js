import React, { useState } from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight  } from "react-icons/hi"
import style from "./style.module.css"

const Review = () => {
    const [slide, setSlide] = useState([0, 1, 2, 3]);

    const handleIncrement = () => {
        var TempArray = [];
        slide.map((e, index) => {
            if(e > 6){
                e=-1;
                TempArray[index] = e+1;
            }
            TempArray[index] = e+1;
        })
        // for(let i=slide[0]; i < slide.length; i++){
        //     TempArray.push(i+1);
        // }
        setSlide(TempArray);
        console.log(slide);
    }

    const handleDecrement = () => {
        var TempArray = [];
        slide.map((e, index, array) => {
            if( e <= 0){
                e = 8;
                TempArray[index] = e-1;
            }
            TempArray[index] = e-1;
        })
        setSlide(TempArray);
        console.log(slide);
    }
    const Slide1 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 1</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }

    const Slide2 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 2</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }

    const Slide3 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 3</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }

    const Slide4 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 4</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }

    const Slide5 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 5</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }

    const Slide6 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 6</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }

    const Slide7 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 7</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }

    const Slide8 = () => {
        return (
            <div className={style.slide}>
                <h1>Heding 8</h1>
                <p>The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>
            </div>
        )
    }
    
  return (
    <div className={style.main}>
        <div className={style.sec1}></div>
        <div className={style.sec2}></div>
        <div className={style.wrapper}>
            <div className={style.iconWrapper}><HiArrowNarrowLeft className={style.left} onClick={handleDecrement}/> <HiArrowNarrowRight className={style.right} onClick={handleIncrement}/></div>
            <div className={style.container}>
                {

                    slide.map((e, index) => {
                        console.log(e);
                        return(
                            <>
                            {
                                e == 0 && <Slide1 key={index}/>
                            }
                            {
                                e == 1 && <Slide2 key={index}/>
                            }
                            {
                                e == 2 && <Slide3 key={index}/>
                            }
                            {
                                e == 3 && <Slide4 key={index}/>
                            }
                            {
                                e == 4 && <Slide5 key={index}/>
                            }
                            {
                                e == 5 && <Slide6 key={index}/>                          
                            }
                            {
                                e == 6 && <Slide7 key={index}/>
                            }
                            {
                                e == 7 && <Slide8 key={index}/>
                            }
                            </>
                        )
                    })
                }
            </div>
    </div>
    </div>
  )
}

export default Review