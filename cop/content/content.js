import React from 'react'
import Head from 'next/head'
import s from './content.module.scss'

import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"
import Content_blog_4 from './content_blog_4';
import Content_blog_5 from './content_blog_5';
function Content() {
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
               <div className={s.content}>

            <div className={s.content_bloks}>

                <div className={s.content_blok}>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        exit="initial"
                        variants={left}
                        className={s.C_blok}>
                        <div className={s.C_blok_1}>

                            <div>
                                <p>LESS</p>
                                <p>Thank you for your</p>
                            </div>
                            <div>
                                invoice  $20
                            </div>
                        </div>
                        <motion.div initial="initial" whileInView="animate" exit="initial" variants={left} className={s.C_blok_2}>
                            <div>
                                <p>invoice  $20</p>
                                <h1>Mark Johnson</h1>
                                <p>18 Cartson Street, San <br />
                                    Francisco Califomia, <br />
                                    United States
                                </p>
                            </div>
                            <div>
                                <p>AMOUNT DUE</p>
                                <p>$3,218</p>
                                <p>PENDING</p>
                            </div>

                        </motion.div>
                        <div className={s.C_blok_3}>
                            <p>Extra services</p>
                            <p>Cleanup and Catchup 2020</p>
                            <hr />
                            <p>Extra services</p>
                            <p>Cleanup and Catchup 2020</p>

                        </div>

                    </motion.div>
                    <motion.div initial="initial" whileInView="animate" exit="initial" variants={left} className={s.C_blok2}>
                        <p className={s.C_blok2_p}>Proposal Template</p>
                        <div className={s.C_blok2_blog_hr}>
                            <div className={s.C_blok2_m}></div>
                            <div className={s.C_blok2_l}></div>
                        </div>
                        <div className={s.C_blok2_spans}>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                        <div className={s.C_blok3_number}>
                            <p>32</p>
                            <p>21</p>
                            <p>98</p>
                            <p>09</p>
                            <p>32</p>
                            <p>78</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial="initial" whileInView="animate" exit="initial" variants={left}
                    className={s.content_blok2}>
                    <p>Lorem, ipsum dolor.</p>
                    <h2>Two Saas Are Better <br />
                        Than One.
                    </h2>
                    <p style={{ color: '#000' }} className={s.container_p2}>And that number is growing every day. That <br /> meansa <a href="#"> e-commerce</a> is thriving.</p>
                    <div>
                        <motion.div
                            initial="initial" whileInView="animate" exit="initial" variants={left}
                            className={s.content_blok2_span}>
                            <span></span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla inventore, omnis deserunt tempore accusantium sunt.</p>
                        </motion.div>
                        <motion.div
                            initial="initial" whileInView="animate" exit="initial" variants={left}
                            className={s.content_blok2_span}>
                            <span></span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla inventore, omnis deserunt tempore accusantium sunt.</p>
                        </motion.div>
                        <motion.div
                            initial="initial" whileInView="animate" exit="initial" variants={left}
                            className={s.content_blok2_span}>
                            <span></span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla inventore, omnis deserunt tempore accusantium sunt.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <hr />
            <div className={s.contents}>
                <motion.p
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >Lorem, ipsum dolor.</motion.p>
                <motion.h2
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >Wiht A NAme Like Saas <br />
                    it to be Goood</motion.h2>
            </div>
            <div className={s.content_bloks1}>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}

                >
                    <div className={s.content_bloks1_div}>


                    </div>
                    <p>
                        Lorem ipsum dolor sit. </p>
                    <h3>
                        Lorem ipsum dolor sit amet.
                    </h3>
                </motion.div>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >
                    <div className={s.content_bloks1_div}>


                    </div>
                    <p>Lorem, ipsum dolor.</p>
                    <h3>
                        Lorem ipsum dolor sit amet.
                    </h3>
                </motion.div>      <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >
                    <div className={s.content_bloks1_div}>
                    </div>
                    <p>Lorem, ipsum dolor.</p>
                    <h3>
                        Lorem ipsum dolor sit amet.
                    </h3>
                </motion.div>      <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >
                    <div className={s.content_bloks1_div}>
                    </div>
                    <p>Lorem, ipsum.</p>
                    <h3>
                        Lorem ipsum dolor sit amet.
                    </h3>
                </motion.div>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >
                    <div className={s.content_bloks1_div}>
                    </div>
                    <p>Lorem, ipsum.</p>
                    <h3>
                        Lorem ipsum dolor sit amet.
                    </h3>
                </motion.div> 
                     <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >
                    <div className={s.content_bloks1_div}>
                    </div>
                    <p>Lorem, ipsum dolor.</p>
                    <h3>
                        Lorem ipsum dolor sit amet.
                    </h3>
                </motion.div>
            </div>
            <div className={s.contents}>
                <motion.p
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >Lorem, ipsum dolor.</motion.p>
                <motion.h2
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    variants={right}
                >Wiht A NAme Like Saas <br />
                    it to be Goood</motion.h2>
            </div>

            <div >
            <Content_blog_4/>
            </div>
            <div>
           < Content_blog_5/>
            </div>
        </div>

        </div>
        </AnimatePresence>
    )
}

export default Content