import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TechnologyItem = {
  name: string;
  logo?: string;
  accent?: string;
};

const gradientPalette = [
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-blue-500",
  "from-rose-500 to-red-500",
  "from-slate-500 to-slate-700",
];

const COURSE_TECHNOLOGIES: Record<string, TechnologyItem[]> = {
  "software-testing-training": [
    { name: "Selenium", logo: "/images/icons/se.png" },
    { name: "JIRA", logo: "/images/icons/jira.png" },
    { name: "Postman", logo: "/images/icons/postman.png" },
    { name: "JMeter", logo: "/images/icons/jmeter.png" },
    { name: "Jenkins", logo: "/images/icons/jenkis.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "Git", logo: "/images/icons/git.png" },
    { name: "ISTQB", logo: "/images/icons/istq.png" },
  ],
  "manual-testing": [
    { name: "Test Strategy" },
    { name: "Bug Tracking" },
    { name: "JIRA", logo: "/images/icons/jira.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "TestRail" },
    { name: "Agile QA" },
    { name: "Requirement Analysis" },
    { name: "Defect Lifecycle" },
  ],
  "selenium-testing": [
    { name: "Selenium", logo: "/images/icons/se.png" },
    { name: "Java" },
    { name: "TestNG" },
    { name: "Maven" },
    { name: "Jenkins", logo: "/images/icons/jenkis.png" },
    { name: "Git", logo: "/images/icons/git.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "ChromeDriver" },
  ],
  "istqb-certification": [
    { name: "ISTQB", logo: "/images/icons/istq.png" },
    { name: "Test Design Techniques" },
    { name: "Quality Metrics" },
    { name: "Verification & Validation" },
    { name: "Agile Testing" },
    { name: "Risk Management" },
    { name: "Test Management" },
    { name: "Scrum Concepts" },
  ],
  "full-stack-java-development": [
    { name: "Java", logo: "/images/icons/full%20stack%20java%20development.png" },
    { name: "Spring Boot" },
    { name: "Hibernate" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "React", logo: "/images/icons/react.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
    { name: "Git", logo: "/images/icons/git.png" },
  ],
  "full-stack-python-development": [
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Django", logo: "/images/icons/django.png" },
    { name: "Flask", logo: "/images/icons/flask.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "NumPy", logo: "/images/icons/num.png" },
    { name: "Pandas", logo: "/images/icons/pandsa.png" },
    { name: "Git", logo: "/images/icons/git.png" },
  ],
  "web-development-course": [
    { name: "HTML5", logo: "/images/icons/HTML.png" },
    { name: "CSS3", logo: "/images/icons/CSS.png" },
    { name: "JavaScript", logo: "/images/icons/JS.png" },
    { name: "React", logo: "/images/icons/react.png" },
    { name: "Node.js", logo: "/images/icons/node%20js.png" },
    { name: "Express.js", logo: "/images/icons/express%20js.png" },
    { name: "MongoDB", logo: "/images/icons/mango%20db.png" },
    { name: "Bootstrap", logo: "/images/icons/Boot.png" },
  ],
  "full-stack-dotnet-development": [
    { name: ".NET Core" },
    { name: "ASP.NET", logo: "/images/icons/ASP%20net.png" },
    { name: "C#" },
    { name: "Entity Framework" },
    { name: "SQL Server", logo: "/images/icons/SQLZ.png" },
    { name: "Azure Cloud" },
    { name: "Docker", logo: "/images/icons/docker.png" },
    { name: "Git", logo: "/images/icons/git.png" },
  ],
  "mern-stack-development": [
    { name: "MongoDB", logo: "/images/icons/mango%20db.png" },
    { name: "Express.js", logo: "/images/icons/express%20js.png" },
    { name: "React", logo: "/images/icons/react.png" },
    { name: "Node.js", logo: "/images/icons/node%20js.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "Postman", logo: "/images/icons/postman.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
    { name: "Git", logo: "/images/icons/git.png" },
  ],
  "mean-stack-development": [
    { name: "MongoDB", logo: "/images/icons/mango%20db.png" },
    { name: "Express.js", logo: "/images/icons/express%20js.png" },
    { name: "Angular", logo: "/images/icons/angular.png" },
    { name: "Node.js", logo: "/images/icons/node%20js.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "TypeScript", logo: "/images/icons/TS.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
    { name: "GitHub", logo: "/images/icons/github.png" },
  ],
  "big-data-engineering": [
    { name: "Hadoop" },
    { name: "Spark" },
    { name: "Kafka" },
    { name: "Airflow" },
    { name: "Hive" },
    { name: "Scala" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
  ],
  "python-data-science": [
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Pandas", logo: "/images/icons/pandsa.png" },
    { name: "NumPy", logo: "/images/icons/num.png" },
    { name: "Matplotlib" },
    { name: "Seaborn" },
    { name: "BI Tools", logo: "/images/icons/BI.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
  ],
  "machine-learning": [
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Scikit-learn" },
    { name: "TensorFlow" },
    { name: "NumPy", logo: "/images/icons/num.png" },
    { name: "Pandas", logo: "/images/icons/pandsa.png" },
    { name: "Power BI", logo: "/images/icons/BI.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
  ],
  "deep-learning": [
    { name: "TensorFlow" },
    { name: "Keras" },
    { name: "PyTorch" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "NumPy", logo: "/images/icons/num.png" },
    { name: "Pandas", logo: "/images/icons/pandsa.png" },
    { name: "OpenCV" },
    { name: "Azure ML" },
  ],
  "ai-data-analytics": [
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Power BI", logo: "/images/icons/BI.png" },
    { name: "Tableau" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "Excel" },
    { name: "Azure" },
    { name: "Snowflake" },
    { name: "AWS" },
  ],
  "java-training": [
    { name: "Core Java", logo: "/images/icons/full%20stack%20java%20development.png" },
    { name: "Spring" },
    { name: "Hibernate" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "Git", logo: "/images/icons/git.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
    { name: "Maven" },
  ],
  "advanced-java": [
    { name: "Servlets" },
    { name: "JSP" },
    { name: "Spring Boot" },
    { name: "Hibernate" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "GitHub", logo: "/images/icons/github.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
  ],
  "spring-boot-training": [
    { name: "Spring Boot" },
    { name: "Spring Security" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "Hibernate" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
    { name: "AWS" },
    { name: "Git", logo: "/images/icons/git.png" },
  ],
  "python-training": [
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Flask", logo: "/images/icons/flask.png" },
    { name: "Django", logo: "/images/icons/django.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "NumPy", logo: "/images/icons/num.png" },
    { name: "Pandas", logo: "/images/icons/pandsa.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
    { name: "Git", logo: "/images/icons/git.png" },
  ],
  "web-designing-training": [
    { name: "HTML5", logo: "/images/icons/HTML.png" },
    { name: "CSS3", logo: "/images/icons/CSS.png" },
    { name: "JavaScript", logo: "/images/icons/JS.png" },
    { name: "Bootstrap", logo: "/images/icons/Boot.png" },
    { name: "React", logo: "/images/icons/react.png" },
    { name: "Tailwind CSS" },
    { name: "Figma" },
    { name: "Adobe XD" },
  ],
  "react-course": [
    { name: "React", logo: "/images/icons/react.png" },
    { name: "TypeScript", logo: "/images/icons/TS.png" },
    { name: "JavaScript", logo: "/images/icons/JS.png" },
    { name: "Redux" },
    { name: "Node.js", logo: "/images/icons/node%20js.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "Git", logo: "/images/icons/git.png" },
    { name: "Jest" },
  ],
  "angular-course": [
    { name: "Angular", logo: "/images/icons/angular.png" },
    { name: "TypeScript", logo: "/images/icons/TS.png" },
    { name: "RxJS" },
    { name: "Node.js", logo: "/images/icons/node%20js.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "HTML5", logo: "/images/icons/HTML.png" },
    { name: "CSS3", logo: "/images/icons/CSS.png" },
    { name: "Git", logo: "/images/icons/git.png" },
  ],
  "vue-js-training": [
    { name: "Vue.js" },
    { name: "JavaScript", logo: "/images/icons/JS.png" },
    { name: "TypeScript", logo: "/images/icons/TS.png" },
    { name: "Pinia" },
    { name: "Node.js", logo: "/images/icons/node%20js.png" },
    { name: "REST API", logo: "/images/icons/rest.png" },
    { name: "Tailwind CSS" },
    { name: "GitHub", logo: "/images/icons/github.png" },
  ],
  rpa: [
    { name: "UiPath" },
    { name: "Automation Anywhere" },
    { name: "Blue Prism" },
    { name: "Power Automate" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "Excel Automation" },
    { name: "AI Builder" },
  ],
  "uipath-training": [
    { name: "UiPath Studio" },
    { name: "UiPath Orchestrator" },
    { name: "UiPath Robots" },
    { name: "AI Center" },
    { name: "Document Understanding" },
    { name: "Excel Automation" },
    { name: "REFramework" },
    { name: "Version Control" },
  ],
  "automation-anywhere": [
    { name: "Automation Anywhere" },
    { name: "Bot Creator" },
    { name: "Control Room" },
    { name: "IQ Bot" },
    { name: "Bot Insight" },
    { name: "API Integration" },
    { name: "Excel Automation" },
    { name: "Python", logo: "/images/icons/python.png" },
  ],
  "blue-prism": [
    { name: "Blue Prism" },
    { name: "Process Studio" },
    { name: "Object Studio" },
    { name: "Control Room" },
    { name: "Queue Management" },
    { name: "Surface Automation" },
    { name: "Work Queues" },
    { name: "Credential Manager" },
  ],
  "hadoop-training": [
    { name: "HDFS" },
    { name: "MapReduce" },
    { name: "Hive" },
    { name: "Pig" },
    { name: "Sqoop" },
    { name: "Spark" },
    { name: "Scala" },
    { name: "Python", logo: "/images/icons/python.png" },
  ],
  "apache-spark": [
    { name: "Spark Core" },
    { name: "Spark SQL" },
    { name: "Spark Streaming" },
    { name: "Scala" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Kafka" },
    { name: "Airflow" },
    { name: "Databricks" },
  ],
  "data-warehousing": [
    { name: "ETL Pipelines" },
    { name: "Informatica" },
    { name: "Talend" },
    { name: "Snowflake" },
    { name: "SQL Server", logo: "/images/icons/SQLZ.png" },
    { name: "Power BI", logo: "/images/icons/BI.png" },
    { name: "AWS Redshift" },
    { name: "Azure Synapse" },
  ],
  "etl-development": [
    { name: "Informatica" },
    { name: "Talend" },
    { name: "SSIS" },
    { name: "DataStage" },
    { name: "SQL Server", logo: "/images/icons/SQLZ.png" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Airflow" },
    { name: "Snowflake" },
  ],
  "digital-marketing": [
    { name: "Google Ads" },
    { name: "Facebook Ads" },
    { name: "SEO Tools" },
    { name: "Google Analytics" },
    { name: "HubSpot" },
    { name: "Canva" },
    { name: "WordPress" },
    { name: "LinkedIn Ads" },
  ],
  "data-analysis-visualization": [
    { name: "Power BI", logo: "/images/icons/BI.png" },
    { name: "Tableau" },
    { name: "Excel" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Pandas", logo: "/images/icons/pandsa.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "Looker Studio" },
    { name: "DAX" },
  ],
  "graphic-designing": [
    { name: "Photoshop" },
    { name: "Illustrator" },
    { name: "InDesign" },
    { name: "Figma" },
    { name: "Canva" },
    { name: "After Effects" },
    { name: "CorelDRAW" },
    { name: "XD" },
  ],
  "web-graphic-designing": [
    { name: "Photoshop" },
    { name: "Illustrator" },
    { name: "Figma" },
    { name: "HTML5", logo: "/images/icons/HTML.png" },
    { name: "CSS3", logo: "/images/icons/CSS.png" },
    { name: "JavaScript", logo: "/images/icons/JS.png" },
    { name: "Bootstrap", logo: "/images/icons/Boot.png" },
    { name: "Canva" },
  ],
  "management-information-systems": [
    { name: "Excel" },
    { name: "Power BI", logo: "/images/icons/BI.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "SAP" },
    { name: "Tableau" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Access" },
    { name: "Data Visualization" },
  ],
  "information-technology-programme": [
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Java", logo: "/images/icons/full%20stack%20java%20development.png" },
    { name: "HTML5", logo: "/images/icons/HTML.png" },
    { name: "CSS3", logo: "/images/icons/CSS.png" },
    { name: "JavaScript", logo: "/images/icons/JS.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "GitHub", logo: "/images/icons/github.png" },
    { name: "Cloud Basics" },
  ],
  "financial-accounting": [
    { name: "Tally" },
    { name: "GST" },
    { name: "Accounting Standards" },
    { name: "Excel" },
    { name: "SAP" },
    { name: "QuickBooks" },
    { name: "Zoho Books" },
    { name: "Compliance" },
  ],
  accounting: [
    { name: "Tally" },
    { name: "GST" },
    { name: "Excel" },
    { name: "Income Tax" },
    { name: "SAP" },
    { name: "Financial Reporting" },
    { name: "Payroll" },
    { name: "Auditing" },
  ],
  taxation: [
    { name: "GST" },
    { name: "Income Tax" },
    { name: "Tally" },
    { name: "Compliance" },
    { name: "Excel" },
    { name: "TDS" },
    { name: "Auditing" },
    { name: "SAP" },
  ],
  bca: [
    { name: "C", logo: "/images/icons/C.png" },
    { name: "C++", logo: "/images/icons/c++.png" },
    { name: "Java", logo: "/images/icons/full%20stack%20java%20development.png" },
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "HTML5", logo: "/images/icons/HTML.png" },
    { name: "CSS3", logo: "/images/icons/CSS.png" },
    { name: "JavaScript", logo: "/images/icons/JS.png" },
    { name: "MySQL", logo: "/images/icons/Mysql.png" },
  ],
  "quastech-degree-program": [
    { name: "Python", logo: "/images/icons/python.png" },
    { name: "Java", logo: "/images/icons/full%20stack%20java%20development.png" },
    { name: "React", logo: "/images/icons/react.png" },
    { name: "SQL", logo: "/images/icons/SQLZ.png" },
    { name: "AI", logo: "/images/icons/ai.png" },
    { name: "Power BI", logo: "/images/icons/BI.png" },
    { name: "Git", logo: "/images/icons/git.png" },
    { name: "Docker", logo: "/images/icons/docker.png" },
  ],
};

const duplicateTechnologies = (technologies: TechnologyItem[], times = 2) => {
  const duplicated: TechnologyItem[] = [];
  for (let i = 0; i < times; i += 1) {
    duplicated.push(...technologies);
  }
  return duplicated;
};

interface CourseTechnologySectionProps {
  courseSlug: string;
  title?: string;
  subtitle?: string;
}

const CourseTechnologySection = ({
  courseSlug,
  title = "Tools & Technologies You'll Master",
  subtitle = "Hands-on practice with the platforms and frameworks used by top teams.",
}: CourseTechnologySectionProps) => {
  const technologies = COURSE_TECHNOLOGIES[courseSlug];

  if (!technologies || technologies.length === 0) {
    return null;
  }

  const marqueeItems = duplicateTechnologies(technologies, 3);

  return (
    <section className="relative py-14 md:py-18 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_1200px_at_20%_20%,rgba(59,130,246,0.12),transparent),radial-gradient(circle_800px_at_80%_0%,rgba(236,72,153,0.12),transparent)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="relative overflow-hidden py-4">
          <motion.div
            className="flex gap-4 md:gap-6 lg:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((tech, index) => {
              const gradient =
                gradientPalette[index % gradientPalette.length];
              const abbreviation = tech.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 3)
                .toUpperCase();

              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-40"
                >
                  <div className="h-32 sm:h-36 md:h-40 rounded-3xl bg-white shadow-lg border border-white/50 flex flex-col items-center justify-center gap-3 px-4 transition-transform duration-300 hover:-translate-y-2">
                    {tech.logo ? (
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="h-10 sm:h-12 md:h-14 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl shadow-inner`}
                      >
                        {abbreviation}
                      </div>
                    )}
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 text-center leading-snug">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex justify-center mt-10">
          <Button
            type="button"
            size="lg"
            className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 text-white px-6 md:px-8 py-3 shadow-lg shadow-blue-500/20 flex items-center gap-2"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            <ArrowUpRight className="w-4 h-4" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseTechnologySection;

