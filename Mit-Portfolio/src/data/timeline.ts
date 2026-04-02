import { TimelineItem } from '../types';

export const experienceData: TimelineItem[] = [
{
    year: 'April 2025 - Present',
    organization: 'Unum, Texas',
    title: 'Senior Software Engineer – Java Full Stack',
    description: `• Leading architecture design and technical strategy for an enterprise microservices platform that powers insurance policy management, claims processing, and customer-facing portals across multiple product lines. Driving cross-functional collaboration between engineering, product, and QA teams to align on system design decisions, API contracts, and release planning through architecture review boards and design document processes.

• Spearheading cloud infrastructure optimization across AWS services including EKS for container orchestration, ECS for service deployment, Lambda for serverless event processing, and CloudFormation for infrastructure-as-code provisioning. Implementing horizontal auto-scaling strategies based on CPU, memory, and custom CloudWatch metrics to handle traffic spikes while running cost optimization initiatives that analyze resource utilization patterns and right-size instances across production, staging, and development environments.

• Mentoring a team of engineers on system design best practices including domain-driven design, event-driven architecture, CQRS patterns, and distributed systems principles. Driving TDD adoption across the team with structured code review processes, pair programming sessions, and knowledge-sharing workshops on Spring Boot, Spring Cloud, and cloud-native architecture patterns  resulting in measurable improvements in code quality, test coverage, and reduction in production incidents.`
},
{
    year: 'Jan 2023 - March 2025',
    organization: 'Unum, Texas',
    title: 'Software Engineer – Java Full Stack',
    description: `• Architected and developed 15+ production-grade microservices using Spring Boot, Spring Cloud (Eureka for service discovery, Config Server for centralized configuration, Gateway for API routing, and Circuit Breaker for fault tolerance), and RESTful APIs serving 10,000+ concurrent users with high availability. Implemented horizontal autoscaling with AWS Auto Scaling Groups and load balancing via ALB/NLB. Achieved a 30% reduction in API response latency and 40% improvement in database query performance through Redis caching layers, query optimization, index tuning, and connection pool management across MySQL and PostgreSQL databases.

• Implemented enterprise-grade security architecture using RBAC (Role-Based Access Control), OAuth2 authorization flows, and JWT token-based authentication via Spring Security across 5+ internal and external-facing platforms. Led the migration of 3 legacy monolithic Java applications to a cloud-native architecture on AWS Lambda for serverless compute and S3 for static asset storage, with fully automated CI/CD pipelines via Jenkins  cutting infrastructure costs by 25% through pay-per-execution pricing and reducing deployment cycles from hours to minutes (50% improvement) with blue-green deployment strategies.

• Built dynamic, responsive single-page applications using React.js and Angular with TypeScript, implementing component-based architecture, state management via Redux, lazy loading, and code splitting  improving frontend rendering efficiency by 20% and user satisfaction scores by 35% based on internal feedback surveys. Led technical leadership initiatives including structured code reviews, architectural decision records (ADRs), and sprint planning for a team of 4 junior engineers, reducing sprint spillover by 15% through improved estimation practices, TDD adoption with JUnit and Mockito, and Agile best practices including daily standups, retrospectives, and backlog grooming.

• Designed, built, and maintained end-to-end CI/CD pipelines using Jenkins (declarative pipelines with Jenkinsfile), GitHub Actions for PR-based workflows, and Docker containerization for consistent build and deployment environments. Implemented comprehensive observability and monitoring using AWS CloudWatch for metrics, alarms, and log aggregation, enabling proactive incident detection and achieving zero-downtime deployments across all production environments through rolling update strategies and automated health checks.`
},
{
    year: 'March 2021 - Dec 2022',
    organization: 'Bristol-Myers Squibb, Texas',
    title: 'Software Engineer – Java Full Stack',
    description: `• Developed HIPAA-compliant enterprise web applications for a Fortune 500 pharmaceutical company, serving 5,000+ internal users across clinical data management, regulatory reporting, and internal operations tools with 99.9% uptime SLA. Engineered serverless microservices on AWS Lambda with Docker containerization, implemented Elastic Load Balancing (ELB) for traffic distribution across multiple availability zones, reducing infrastructure maintenance overhead by 20% while successfully scaling to handle 3x peak traffic during regulatory filing periods and quarterly reporting cycles.

• Optimized complex PostgreSQL and MySQL database queries, stored procedures, and indexing strategies across multiple reporting and analytics pipelines. Analyzed slow query logs, implemented composite indexes, refactored N+1 query patterns, and introduced materialized views for frequently accessed aggregated data  cutting the primary reporting pipeline runtime from 4 hours to 45 minutes (an 81% improvement) and enabling near real-time business reporting capabilities that previously required overnight batch processing.

• Integrated RESTful APIs with 6 external vendor systems (including third-party clinical data providers, regulatory submission platforms, and document management services) using OAuth2 authorization flows and JWT token-based authentication for secure data exchange. Built reusable Angular and React.js component libraries with TypeScript  including form builders, data tables, filter panels, and chart components  that were adopted across 3 internal teams, reducing frontend development time by 30% on new features. Conducted cross-functional stakeholder collaboration sessions with business analysts, QA engineers, and product owners to align technical architecture with regulatory compliance requirements and business objectives.`
}
];

export const educationData: TimelineItem[] = [
  {
    year: 'Jan 2023 - Dec 2023',
    title: 'Master of Science in Computer Science',
    organization: 'Campbellsville University, KY - USA',
    description: 'Focused on advanced concepts in software engineering, data analysis, and system design. Led the university\'s coding club.',
  },
  {
    year: 'Jan 2019 - Dec 2022',
    title: 'Bachelor of Science in Computer Science',
    organization: 'The University of Texas at Dallas, TX - USA',
    description: 'Gained strong foundation in software engineering and problem-solving skills.',
  },
/*
  {
    year: 'Jan 2019 - Dec 2019',
    title: 'Associate of Science in Computer Science',
    organization: 'Dallas College',
    description: 'Gaining essential skills in programming and information technology.',
  },
*/
];