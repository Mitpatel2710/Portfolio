import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
} from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Profile Image */}
        <motion.div
          className="relative order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl md:h-64 md:w-64">
            <img
              src="/mit1.jpg"
              alt="Mit Patel, Senior Software Engineer"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-full bg-blue-50 md:-bottom-6 md:-right-6 md:h-48 md:w-48"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.div
            className="absolute -left-4 -top-4 -z-10 h-20 w-20 rounded-full bg-purple-50 md:-left-6 md:-top-6 md:h-32 md:w-32"
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="order-2 space-y-4 text-center md:space-y-6 md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-6 text-3xl font-normal text-gray-900 md:mb-12 md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-sm leading-relaxed text-gray-600 md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I’m Mit Patel, a Senior Software Engineer and Java Full Stack
            Developer with more than five years of experience building reliable,
            scalable applications.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed text-gray-600 md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I’ve worked on microservices, distributed systems, cloud-based
            platforms, and full-stack applications using Java, Spring Boot,
            React, Angular, and AWS. During my time at companies such as Unum
            and Bristol Myers Squibb, I’ve helped improve API performance,
            strengthen application security, build CI/CD pipelines, and support
            systems used by thousands of people.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed text-gray-600 md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I’m especially interested in AI automation and how it can solve real
            business problems. I’ve built workflows and intelligent applications
            using n8n, OpenAI, Claude, Google Gemini, LLM integrations, and RAG
            architecture to reduce manual work, improve operational efficiency,
            and make everyday processes more effective.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed text-gray-600 md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I hold an M.S. in Computer Science from Campbellsville University
            and a B.S. in Computer Science from The University of Texas at
            Dallas. I enjoy learning new technologies, solving difficult
            problems, and building products that are practical, scalable, and
            genuinely useful.
          </motion.p>

          {/* Quick Details */}
          <div className="space-y-2 md:space-y-3">
            <motion.div
              className="flex items-center justify-center gap-2 text-gray-600 md:justify-start"
              whileHover={{ x: 5 }}
            >
              <MapPin className="h-4 w-4 shrink-0 text-blue-500" />
              <span className="text-sm md:text-base">Dallas, Texas</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-2 text-gray-600 md:justify-start"
              whileHover={{ x: 5 }}
            >
              <Calendar className="h-4 w-4 shrink-0 text-blue-500" />
              <span className="text-sm md:text-base">
                5+ Years of Experience
              </span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-2 text-gray-600 md:justify-start"
              whileHover={{ x: 5 }}
            >
              <Briefcase className="h-4 w-4 shrink-0 text-blue-500" />
              <span className="text-sm md:text-base">
                Open to Full-Time Remote Opportunities
              </span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-2 md:justify-start">
            <motion.a
              href="https://github.com/Mitpatel2710"
              aria-label="View Mit Patel's GitHub profile"
              title="GitHub"
              className="rounded-lg bg-gray-50 p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:p-3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mitsoftdev/"
              aria-label="View Mit Patel's LinkedIn profile"
              title="LinkedIn"
              className="rounded-lg bg-gray-50 p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:p-3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </motion.a>

            <motion.a
              href="mailto:mitsoftdev27@gmail.com"
              aria-label="Email Mit Patel"
              title="Email"
              className="rounded-lg bg-gray-50 p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:p-3"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}