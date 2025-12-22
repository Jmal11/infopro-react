import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'fundamentals-strategy',
    title: 'Cybersecurity Fundamentals and Strategy',
    content: [
      {
        heading: 'Cybersecurity Strategy Development and Alignment',
        description: 'This course focuses on developing a comprehensive cybersecurity strategy that aligns with organizational goals and risk appetite. Participants will learn to create robust security frameworks that protect assets while supporting business objectives.',
        points: [
          'Develop a comprehensive cybersecurity strategy aligned with organizational goals.',
          'Assess and define organizational risk appetite.',
          'Create measurable security objectives that support business growth.',
        ],
      },
      {
        heading: 'Cybersecurity Governance and Risk Management',
        description: 'Participants will learn to establish effective governance frameworks and risk management processes to ensure cybersecurity compliance and resilience. The course covers best practices in policy development, risk assessment, and compliance management.',
        points: [
          'Establish effective cybersecurity governance frameworks.',
          'Implement risk management processes for ongoing security assurance.',
          'Ensure compliance with relevant industry standards and regulations.',
        ],
      },
      {
        heading: 'Cybersecurity and Regulatory Compliance',
        description: 'This course delves into the complex landscape of cybersecurity regulations and standards. Participants will learn to navigate compliance requirements and implement controls to meet regulatory obligations.',
        points: [
          'Navigate major cybersecurity regulations (GDPR, HIPAA, PCI-DSS).',
          'Implement compliance controls and documentation practices.',
          'Prepare for and manage regulatory audits effectively.',
        ],
      },
    ],
  },
  {
    id: 'leadership-culture',
    title: 'Cybersecurity Leadership and Culture',
    content: [
      {
        heading: 'Building a Security-Conscious Culture',
        description: 'This course focuses on developing organizational culture that prioritizes cybersecurity. Participants will learn strategies to foster security awareness and accountability at all levels.',
        points: [
          'Design and implement security awareness programs.',
          'Foster employee accountability for cybersecurity practices.',
          'Create incentive structures that promote security behaviors.',
          'Measure and improve security culture effectiveness.',
        ],
      },
      {
        heading: 'Cybersecurity Leadership Skills',
        description: 'Participants will develop essential leadership skills for managing cybersecurity teams and initiatives. The course covers communication, stakeholder management, and strategic decision-making.',
        points: [
          'Communicate cybersecurity risks to executive leadership.',
          'Build and lead high-performing security teams.',
          'Manage stakeholder expectations and relationships.',
          'Make strategic decisions under uncertainty.',
        ],
      },
    ],
  },
  {
    id: 'threat-intelligence',
    title: 'Threat Intelligence and Incident Response',
    content: [
      {
        heading: 'Threat Intelligence Fundamentals',
        description: 'This course provides comprehensive knowledge of threat intelligence gathering, analysis, and application. Participants will learn to leverage threat intelligence for proactive security measures.',
        points: [
          'Collect and analyze threat intelligence from multiple sources.',
          'Apply threat intelligence to security operations.',
          'Develop threat hunting strategies and techniques.',
          'Share threat intelligence across industry networks.',
        ],
      },
      {
        heading: 'Incident Response and Recovery',
        description: 'Participants will master the incident response lifecycle, from preparation to recovery. The course covers best practices for managing security incidents effectively.',
        points: [
          'Develop and implement incident response plans.',
          'Lead incident response teams during security events.',
          'Conduct post-incident analysis and lessons learned.',
          'Implement recovery strategies for business continuity.',
        ],
      },
    ],
  },
  {
    id: 'advanced-topics',
    title: 'Advanced Cybersecurity Topics',
    content: [
      {
        heading: 'Cloud Security Architecture',
        description: 'This course covers advanced security considerations for cloud environments. Participants will learn to design and implement secure cloud architectures across major platforms.',
        points: [
          'Design secure cloud architectures for enterprise deployments.',
          'Implement cloud-native security controls and monitoring.',
          'Manage identity and access in multi-cloud environments.',
          'Address compliance requirements in cloud infrastructure.',
        ],
      },
      {
        heading: 'Application Security and DevSecOps',
        description: 'Participants will learn to integrate security into the software development lifecycle. The course covers secure coding practices, security testing, and DevSecOps implementation.',
        points: [
          'Implement secure coding practices and standards.',
          'Integrate security testing into CI/CD pipelines.',
          'Manage application vulnerabilities effectively.',
          'Build DevSecOps culture and processes.',
        ],
      },
    ],
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI in Cybersecurity',
    content: [
      {
        heading: 'AI-Driven Threat Detection',
        description: 'This course explores how artificial intelligence enhances threat detection capabilities. Participants will learn to leverage AI and machine learning for identifying and responding to security threats.',
        points: [
          'Implement AI-powered threat detection systems.',
          'Use machine learning for anomaly detection.',
          'Apply predictive analytics for proactive security.',
          'Evaluate AI security tools and platforms.',
        ],
      },
      {
        heading: 'Automation in Security Operations',
        description: 'Participants will learn to automate security operations using AI and orchestration tools. The course covers SOAR platforms, automated response, and intelligent security workflows.',
        points: [
          'Design automated security workflows and playbooks.',
          'Implement SOAR platforms for incident response.',
          'Use AI for security alert triage and prioritization.',
          'Optimize security operations through intelligent automation.',
        ],
      },
      {
        heading: 'Ethical AI in Cybersecurity',
        description: 'This course addresses ethical considerations when applying AI to cybersecurity. Participants will learn responsible AI practices and governance for security applications.',
        points: [
          'Address bias and fairness in AI security systems.',
          'Implement transparency in AI-driven security decisions.',
          'Develop governance frameworks for AI in security.',
          'Balance automation with human oversight.',
        ],
      },
    ],
  },
  {
    id: 'strategic-management',
    title: 'Strategic Cybersecurity Management',
    content: [
      {
        heading: 'Cybersecurity Program Management',
        description: 'This course covers the strategic management of enterprise cybersecurity programs. Participants will learn to plan, implement, and optimize comprehensive security initiatives.',
        points: [
          'Develop and manage enterprise security programs.',
          'Align security investments with business priorities.',
          'Measure and report on security program effectiveness.',
          'Optimize security resources and budgets.',
        ],
      },
      {
        heading: 'Future of Cybersecurity',
        description: 'Participants will explore emerging trends and technologies shaping the future of cybersecurity. The course covers innovation, adaptation, and strategic planning for evolving threats.',
        points: [
          'Anticipate emerging cybersecurity threats and trends.',
          'Evaluate new security technologies and approaches.',
          'Develop adaptive security strategies.',
          'Lead innovation in cybersecurity practices.',
        ],
      },
    ],
  },
];

export function CybersecurityDevelopmentJourney() {
  const [activeId, setActiveId] = useState('fundamentals-strategy');

  const activeItem = journeyItems.find((item) => item.id === activeId);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Development Journey</h2>
          <p className="text-gray-800 font-medium mb-4">Cybersecurity and AI Integration Course Outline</p>
          <p className="text-gray-700 leading-relaxed">
            The Cybersecurity and AI Integration Course offers a comprehensive journey into blending cybersecurity practices with artificial intelligence. Participants will explore AI-driven threat detection, automation in security operations, and predictive analytics for proactive risk management. The course covers key topics such as AI algorithms for cybersecurity, ethical considerations, and real-world applications in threat prevention and response. By the end, learners will gain practical skills to integrate AI tools within cybersecurity frameworks, enhancing defense mechanisms and operational efficiency in a digital-first world.
          </p>
        </div>

        {/* Content Area with Separate Containers */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Menu Container */}
          <div className="w-full lg:w-1/4 bg-white border border-gray-300 rounded-lg p-6">
            <ul className="space-y-4">
              {journeyItems.map(({ id, title }) => (
                <li key={id} className="flex items-start gap-3">
                  <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                    activeId === id ? 'bg-[#6b19ff]' : 'bg-gray-400'
                  }`}></span>
                  <button
                    className={`text-left text-base ${
                      activeId === id 
                        ? 'text-[#6b19ff] font-semibold' 
                        : 'text-gray-700 hover:text-[#6b19ff]'
                    }`}
                    onClick={() => setActiveId(id)}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Content Container */}
          <div className="w-full lg:w-3/4 bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
            {/* Scrollable Content */}
            <div className="flex-grow max-h-[500px] overflow-y-auto pr-4">
              {activeItem?.content.map((section, idx) => (
                <div key={idx} className="mb-8 last:mb-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{section.heading}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {section.points.map((point, pointIdx) => (
                      <div key={pointIdx} className="flex items-start gap-3">
                        <svg 
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#6b19ff]" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CybersecurityDevelopmentJourney;