import { Link } from "react-router-dom"
import Identicons from 'react-identicons'

function Projects() {
  return (
    <div className="flex flex-col px-6">
        <div className="flex justify-center items-center flex-wrap " > 
            {Array(6)
            .fill()
            .map((card,i) => (
                <ProjectCard key={i} id={i} project = {card}/>
            ))}
        </div>
        </div>
  )
}

const ProjectCard = ({project ,id}) => (
    <div id = "projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
        <Link to={'/projects/' + id}>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8hSnEm48UMATfI5bWk_zrxLQjtcw1bdanA&usqp=CAU"
                alt = "project title"
                className = 'rounded-xl h-64 w-full object-cover'
            />
            <div className = 'p-4 '>
                    <h5>Creating a Rubiks Cube Community</h5>

                    <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-3">
                            <Identicons className = "rounded-full shadow-md" string = "0x15...1ea2 " size = {15}/>
                            <small className='text-gray-700'>0x15...1ea2</small>
                        </div>

                        <small className="text-gray-500">2 days left</small>

                        <div className="w-full bg-gray-300">
                            <div className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full
                            "style={{width : '50%'}}></div>
                        </div>

                        <div className=" flex justify-between items-center flex-wrap mt-4 mb-2 text-gray-500 font-bold">
                            <small>{14} Backers</small>
                            <div>
                            <small className="text-blue-400">Open</small>
                        </div>
                        </div>

                        
                    </div>
            </div>
        </Link>
        </div>
)

export default Projects