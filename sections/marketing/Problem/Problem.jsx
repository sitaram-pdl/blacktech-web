import React, { useEffect, useRef, useState }  from 'react'
import styles from './Problem.module.css'

import cx from 'classnames'
const Problem =()=>{

    const [indexStat,setIndex] = useState(1)
    const scrolHandle=(index)=>{
        setIndex(index)
        var element = document.getElementById(`box2${index}`)
        element.scrollIntoView({behavior: "smooth",block: "center" ,inline: "center"});
      }
    return(
        <div className={styles.container}>
            <div className={styles.title}>

            <div className={styles.problem}>
                Problem
            </div>
            <div className={styles.heading}>
                 Solved by RestroX
            </div>

            </div>
            <div className={styles.slider} id='slider2' >
                <div className={styles.sliderBox}>
         { [0,1,3,4,5,0,1,3,4,5].map((dat,index)=>          <div id={`box2${index}`} className={cx(styles.box,index===indexStat?styles.active:styles.opacity)} onClick={()=>{scrolHandle(index)}}>
                      
                        <div className={styles.row}>
                            <div>
                                <div className={styles.boxTitle}>
                                    {parseInt(index + 1 ).toLocaleString('en-US', {
                                        minimumIntegerDigits: 2,
                                        useGrouping: false
                                    })}
                                </div>
                                <div className={styles.subBoxTitle}>
                                that keeping track of orders 
                                and requests in restaurant are
                                tiring task.
                                </div>
                            </div>
                          
                        </div>
                       {indexStat===index?
                       <div className={styles.button}>
                        <div className={styles.source}>
                        RestroX facilitates you with recording of all the orders, bills and every other records inside restaurant safely for current and future assistance and analysis.
                        </div>
                       
                        </div>:null}
                        
                       {indexStat===index?<div className={styles.absolute}>
                           <div className={styles.letter}>
                                 Solution
                                </div>
                            <div className={styles.line}/>
                            
                        </div>:null}
                        
                       {indexStat===index?<div className={styles.leftAbsolute}>

                        </div>:null}
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default Problem