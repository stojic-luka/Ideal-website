import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function CountUpSection() {
  return (
    <motion.div whileInView={{ y: 0, opacity: 100, transition: { duration: 0.6 } }} initial={{ y: -25, opacity: 0 }} className="counters-wrapper">
      <div>
        <div>
          <CountUp start={0} end={64} duration={2} redraw={true} delay={0.5} />
          <span className="upcount-title">Games created</span>
          <p>
            Produced a collection of high quality diverse and engaging games, showcasing our passion for game development and a breadth of creativity.
          </p>
        </div>
        <div>
          <CountUp start={0} end={41} duration={2} redraw={true} delay={0.5} />
          <span className="upcount-title">Client reviews</span>
          <p>Explored by many, our reviews reflect a substantial number of experiences shared by satisfied customers, revealing our credibility.</p>
        </div>
        <div>
          <CountUp
            start={10}
            end={50}
            formattingFn={(value: number) => value.toString().split("").join(".")}
            duration={2}
            redraw={true}
            delay={0.5}
          />
          <span className="upcount-title">Perfect rating</span>
          <p>Insights from a variety of reviews provide valuable perspectives and feedback from our community, shaping our ongoing improvements.</p>
        </div>
        <div>
          <span>
            <CountUp start={0} end={2} duration={5} redraw={true} delay={0.5} />+
          </span>
          <span className="upcount-title">Years in business</span>
          <p>With years of expertise, we've honed our skills in Roblox game creation, delivering immersive experiences and creative gameplay.</p>
        </div>
      </div>
    </motion.div>
  );
}
