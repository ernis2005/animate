import React from 'react'
import s from './content.module.scss'
import { motion, AnimatePresence } from "framer-motion"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { WiDirectionUpRight } from "react-icons/wi";
//IoCheckmarkCircleSharp
//WiDirectionUpRight
function Content_blog_5() {
  const right = {
    initial: {
      opacity: 0,

      y: -100
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1
      },
      y: 0
    },
  }
  return (
    <>
      <div className={s.sl}>
        <h1>
          Keep calm and buy
        </h1>
        <p>With lowering the price to even a slight extent one can achieve exponential growth.</p>
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        exit="initial"
        variants={right}

        className={s.Content_blog_5}>

        <div className={s.bg5_1}>
          <div className={s.bg5_1_1}>
            <h1>
              STUDENT
            </h1>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing.</p>

            <h2 className={s.pre}>15$</h2>
          </div>
          <div className={s.Rectangl}>
            <p className={s.Rectangl_p}>Monthiy</p>
          </div>
          <div className={s.bg5_1_2} >
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Consulting with experts <br />20 times for I yea</p>
            </div>
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Add friends for free <br /> for 1month</p>
            </div>
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Free 5 fonts</p>
            </div>

            <button className={s.button}>buy now</button>
          </div>
        </div>
        <div className={s.bg5_1}>
          <div className={s.bg5_1_1}>
            <h1>
              PRO
            </h1>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing.</p>

            <h2 className={s.pre}>30$</h2>
          </div>
          <div className={s.Rectangl}>
            <p className={s.Rectangl_p}>Monthiy</p>
          </div>
          <div className={s.bg5_1_2} >
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Consulting with experts <br />20 times for I yea</p>
            </div>
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Add friends for free <br /> for 1month</p>
            </div>
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Free 5 fonts</p>
            </div>

            <button className={s.button}>buy now</button>
          </div>
        </div>
        <div className={s.bg5_1}>
          <div className={s.bg5_1_1}>
            <h1>
              COMPANY
            </h1>
            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing.</p>

            <h2 className={s.pre}>75$</h2>
          </div>
          <div className={s.Rectangl}>
            <p className={s.Rectangl_p}>Monthiy</p>
          </div>
          <div className={s.bg5_1_2} >
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Consulting with experts <br />20 times for I yea</p>
            </div>
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Add friends for free <br /> for 1month</p>
            </div>
            <div className={s.bg5_1_3}>
              <div>
                <IoIosCheckmarkCircleOutline />
              </div>
              <p>Free 5 fonts</p>
            </div>

            <button className={s.button}>buy now</button>
          </div>
        </div>
      </motion.div>

      <motion.div
          initial="initial"
          whileInView="animate"
          exit="initial"
          variants={right}
      className={s.Content_blog_6}>
        <div className={s.blog_8_1}>
          <h1>Lorem Ipsum is simply dummy</h1>
          <p>Contrary to popular belief, Lorem Ipsum is <br /> not simply random text. It has roots</p>
        </div>
        
        <div>
<div className={s.input}>
  <input type="text" placeholder='Eenter Email Address' /> <button><WiDirectionUpRight/></button>
</div>

        </div>
      </motion.div>
    </>

  )
}

export default Content_blog_5