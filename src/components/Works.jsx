import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../style'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({name, description, image ,tags, source_code_link , index})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index * 0.5 ,0.75)}>
      <Tilt
        options={
          {max : 45,
          scale: 1,
          speed: 450}}
        className="p-5 rounded bg-tertiary-2xl sm:w-[360px] w-full"
        >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='object-cover w-full h-full rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={()=>window.open(source_code_link)}
              className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer round ed-full black-gradient'> 
                <img
                  src={github}
                  alt="github"
                  className='object-contain w-1/2 h-1/2'
                />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='font-bold text-white text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='flex flex-wrap gap-2 mt-4'>
          {
            tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                {tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          projects
        </h2>
      </motion.dev>

      
      <div className='flex w-full'>
        <motion.p 
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Following projects showcases my skills nad experience through 
            real-world example of my work. Each project is briefly described
            with links to code repositories and live demos in it.
            It reflects my ability to solve complex problem, work with 
            different technologies,and mange projects effectively.
        </motion.p>
      </div>

      <div className='flex flex-wrap mt-20 gap-7'>
        {
          projects.map((project, index)=>(
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))
        }
        
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")