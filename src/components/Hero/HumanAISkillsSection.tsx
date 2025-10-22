
export function HumanAISkillsSection() {
  return (
    <section className="bg-transparent py-14 px-2">
      {/* Main Heading and Subheading */}
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 leading-tight mb-3">
          Redefining Skills and Workflows:<br />The Human+AI Evolution
        </h2>
        <p className="text-center text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto mt-3">
          We empower clients to navigate the transformative landscape of AI and automation by identifying and cultivating the essential technological, social, and emotional skills needed for new workflows. By redefining workflows and skills, we help organizations adapt and thrive in the evolving future of work.
        </p>
      </div>
      
      {/* Columns */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-0">
        {/* Left Card */}
        <div className="bg-white border border-gray-300 rounded-tl-lg rounded-bl-lg flex-1 py-10 px-8 space-y-7 min-h-[420px]">
          <div className="flex items-start gap-3">
            <span className="pt-2 text-primary text-xl">&#9679;</span>
            <div>
              <span className="font-bold text-gray-900 block mb-1">Performance-Ready Workforce Blueprint</span>
              <span className="text-gray-700 text-sm">
                An AI and performance-ready workforce blueprint that captures AI's impact on workflows, identifies skills gaps, and plans for a future-ready workforce leveraging AI technologies.
              </span>
            </div>
          </div>
          <hr className="border-gray-300"/>
          <div className="flex items-start gap-3">
            <span className="pt-2 text-primary text-xl">&#9679;</span>
            <div>
              <span className="font-bold text-gray-900 block mb-1">AI Readiness Check</span>
              <span className="text-gray-700 text-sm">
                AI readiness check assesses an organization's workforce skills, focusing on digital and AI capabilities. This service identifies gaps between current competencies and those required for successful AI integration, helping companies prepare for technological transformation.
              </span>
            </div>
          </div>
          <hr className="border-gray-300"/>
          <div className="flex items-start gap-3">
            <span className="pt-2 text-primary text-xl">&#9679;</span>
            <div>
              <span className="font-bold text-gray-900 block mb-1">AI Accelerators</span>
              <span className="text-gray-700 text-sm">
                Ready-to-deploy accelerators including tools, skills taxonomies, customizable training content, and immersive labs, ensuring rapid implementation and shorter time to impact.
              </span>
            </div>
          </div>
          <hr className="border-gray-300"/>
          <div className="flex items-start gap-3">
            <span className="pt-2 text-primary text-xl">&#9679;</span>
            <div>
              <span className="font-bold text-gray-900 block mb-1">Change Management</span>
              <span className="text-gray-700 text-sm">
                Orchestrates transformation across key dimensions including people, process, technology, culture and operating model for comprehensive organizational change.
              </span>
            </div>
          </div>
        </div>
        
        {/* Right Card */}
        <div className="bg-gray-900 text-white flex-1 p-8 rounded-tr-lg rounded-br-lg max-w-[440px] border-t-4 border-t-primary lg:ml-[-2px]">
          <h3 className="font-bold text-lg mb-5">AI Transformations in Key Functions</h3>
          <div className="space-y-5 max-h-[420px] overflow-y-auto scrollbar-hide">
            <div>
              <h4 className="font-semibold text-white text-base">Sales</h4>
              <p>
                <span className="text-primary">&#9679; </span>
                AI automates lead scoring and personalization, transforming sales interactions for greater efficiency.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <h4 className="font-semibold text-white text-base">Marketing</h4>
              <p>
                <span className="text-primary">&#9679; </span>
                AI enables hyper-targeted campaigns through predictive analytics, redefining customer engagement.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <h4 className="font-semibold text-white text-base">Human Resources</h4>
              <p>
                <span className="text-primary">&#9679; </span>
                AI streamlines recruitment with automated screening and enhances employee development.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <h4 className="font-semibold text-white text-base">Operations</h4>
              <p>
                <span className="text-primary">&#9679; </span>
                AI optimizes supply chains with predictive maintenance and real-time data analysis.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <h4 className="font-semibold text-white text-base">Finance</h4>
              <p>
                <span className="text-primary">&#9679; </span>
                AI automates financial reporting and fraud detection, improving accuracy and decision-making.
              </p>
            </div>
            <hr className="border-gray-700" />
            <div>
              <h4 className="font-semibold text-white text-sm">Customer Service</h4>
              <p>
                <span className="text-primary">&#9679; </span>
                AI-powered chatbots provide instant support, enhancing customer experience and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
