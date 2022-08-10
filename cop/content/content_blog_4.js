import React, { useState } from 'react'
import s from './content.module.scss'
import { motion, AnimatePresence } from "framer-motion"
function Content_blog_4() {
    let [aa, setAa] = useState(false);
    let [bb, setBb] = useState(false);
    let [cc, setCc] = useState(false);
    let [dd, setDd] = useState(false);
    let [ii, setIi] = useState(false);

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
            <motion.div
                                     
            className={s.content_blog_4}>
                <motion.div >
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        exit="initial"
                        variants={left}
                        className={s.blog_4_div}>
                        <p onClick={() => setAa(aa => !aa)}>Lorem ipsum dolor, sit amet consectetur adipisicing.?</p>
                        {
                            aa && (
                                < p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id.</p>
                            )
                        }
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        exit="initial"
                        variants={left}
                        className={s.blog_4_div}>
                        <p onClick={() => setBb(bb => !bb)}>Lorem ipsum dolor, sit amet consectetur adipisicing.?</p>
                        {
                            bb && (
                                < p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id.</p>
                            )
                        }
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        exit="initial"
                        variants={left}
                        className={s.blog_4_div}>
                        <p onClick={() => setDd(dd => !dd)}>Lorem ipsum dolor, sit amet consectetur adipisicing.?</p>
                        {
                            dd && (
                                < p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id.</p>
                            )
                        }
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        exit="initial"
                        variants={left}
                        className={s.blog_4_div}>
                        <p onClick={() => setCc(cc => !cc)}>Lorem ipsum dolor, sit amet consectetur adipisicing.?</p>
                        {
                            cc && (
                                < p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id.</p>
                            )
                        }
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        exit="initial"
                        variants={left}
                        className={s.blog_4_div}>
                        <p onClick={() => setIi(ii => !ii)}>Lorem ipsum dolor, sit amet consectetur adipisicing.?</p>
                        {
                            ii && (
                                < p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id.</p>
                            )
                        }
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        exit="initial"
                        variants={left}
                        className={s.buttons}>
                        <button>Free Trial</button>
                        <button> Read More</button>
                    </motion.div>
                </motion.div>

                <motion.div  
                                            initial="initial" whileInView="animate" exit="initial" variants={left}
                className={s.bloc7}>

                    < div className={s.blog_6}>
                        <p>earnings</p>
                        <h4>
                            $9677.04
                        </h4>
                        <p>views</p>
                        <div className={s.div}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </ div>
                    <div className={s.blog_5}>


                        <div>
                            <h4>last 7 days</h4>

                            <h4>Lorem Ipsum is simply dummy</h4>

                            <p></p>
                            <p></p>
                            <h4>Lorem Ipsum is simply.</h4>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <h4>total balance to payout</h4>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className={s.blog_7}>
                        <div className={s.b7_blog1}>
                            <p>Growth</p>
                            <div className={s.diagram}>

                            </div>
                            <div>
                                <p>32</p>
                                <p>21</p>
                                <p>98</p>
                                <p>09</p>
                                <p>32</p>
                                <p>78</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.blog_8}>
                        <div className={s.bg_1}>
                            <p>statistics</p>
                            <h2>payments  report</h2>
                            <div className={s.DIV_P}>
                                <p className={s.p1}></p>
                                <p className={s.p2}></p>
                                <p className={s.p3}></p>
                                <p className={s.p4}></p>
                                <p className={s.p5}></p>
                                <p className={s.p6}></p>
                                <p className={s.p7}></p>
                            </div>
                            <div>
                                <p>32</p>
                                <p>21</p>
                                <p>98</p>
                                <p>09</p>
                                <p>32</p>
                                <p>78</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

        </AnimatePresence >
    )
}

export default Content_blog_4