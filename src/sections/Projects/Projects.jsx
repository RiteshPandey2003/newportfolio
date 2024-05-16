import styles from './ProjectsStyles.module.css';
import pg from "../../assets/pg.jpg"
import ProjectCard from '../../common/ProjectCard';
import book from '../../assets/book.jpg'
import graph from '../../assets/graph.jpg'
import tracker from '../../assets/tracker.jpg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pg}
          link="https://github.com/RiteshPandey2003"
          h3="CollegeMate"
          
        />
        <ProjectCard
          src={tracker}
          link="https://github.com/RiteshPandey2003"
          h3="Finance Tracking "
        
          
        />
        <ProjectCard
          src={book}
          link="https://github.com/RiteshPandey2003"
          h3="Note Book"

        />
        <ProjectCard
          src={graph}
          link="https://github.com/RiteshPandey2003"
          h3="Sorting Visualizer"
          
        />
      </div>
    </section>
  );
}

export default Projects;
