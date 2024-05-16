import styles from '../Projects/ProjectsStyles.module.css';
import python from "../../assets/python.jpg"
import CertificateCard from '../../common/CertifiacteCard';
import aws from '../../assets/aws.webp'
import ibm from '../../assets/ibm.jpg'
import react from '../../assets/react.jpg'

function Certificate() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.projectsContainer}>
        <CertificateCard
          src={ibm}
          link="https://www.coursera.org/user/d87d18d138ae26e3917b3b7422b59605"
          h3 = "ibm"
        />
        <CertificateCard
          src={react}
          link="https://www.coursera.org/user/d87d18d138ae26e3917b3b7422b59605"
          h3 = "react"
        />
        <CertificateCard
          src={aws}
          link="https://www.coursera.org/user/d87d18d138ae26e3917b3b7422b59605"
          h3 = "aws"
        />
        <CertificateCard
          src={python}
          link="https://www.coursera.org/user/d87d18d138ae26e3917b3b7422b59605"
          h3 = "python"
        />
      </div>
    </section>
  );
}

export default Certificate;
