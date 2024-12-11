import { CONTACT } from "../constants"
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}  className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-lighter">
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="my-4">{CONTACT.address}</motion.p>
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </motion.div>
  )
}

export default Contact