import React from 'react'
import s from './Header.module.scss'
import G from 'next/link'

import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"
function Haader() {
    const left = {
        initial: {
          opacity: 0,
          x: -100
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 1
          },
          x: 0
        },
    
      }
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
    <AnimatePresence>

<div>
<div className={s.hello} >

<header className={s.header}>
  <div className={s.menu}>
    <div className={s.logo}>
      <div className={s.logo_img}></div>
      <h1 className={s.logo_h1}>Base</h1>
    </div>
    <div className={s.links}>
      <a className={s.a} href="#">
        Home
      </a>
      <a className={s.a} href="#">
        Features
      </a>
      <a className={s.a} href="#">
        Testimonial
      </a >
      <a className={s.a} href="#">
        Pricing
      </a >
      <a className={s.a} href="#">
        CTA
      </a >
    </div>
    <button className={s.menu_button}>Try Demo</button>

  </div>
  <div className={s.header_content}>
    <motion.div
      initial="initial"
      whileInView="animate"
      exit="initial"
      variants={left}
      className={s.header_content_blog_1}>
      <p className={s.container_p}>Lorem ipsum dolor</p>
      <h2 className={s.container_blog1_h2}>
        Always the  <span className={s.blog1_h2_span}>real
    
        </span>  <br />
        thing, always <span className={s.blog1_h2_span}> Saas</span>
      </h2>
      <p className={s.container_p2}>And that number is growing every day. That <br /> meansa <a href="#"> e-commerce</a> is thriving.</p>
      <div className={s.header_content_buutons}>
        <button>try for free</button>
        <button>try for free</button>

      </div>
      <p>There are some things money can’t buy. For everything else there’s ‘’MasterCard” is a good example. </p>
    </motion.div>
    <div className={s.header_content_blog_2}>
      <motion.div
        initial="initial"
        whileInView="animate"
        exit="initial"
        variants={right}
        className={s.blog_img}></motion.div>
      <div className={s.blog_img2}></div>
    </div>

  </div>

</header>
</div>

</div>
    </AnimatePresence>
  
  )
}

export default Haader