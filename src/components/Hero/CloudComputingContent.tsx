import React from 'react';
import { CheckCircle } from 'lucide-react';

export function CloudComputingContent() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1280px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Revolutionizing Operations Through Cloud and AI Integration
          </h2>
        </div>
        <div>
          <p className="mb-4">
            Welcome to our cutting-edge Cloud Computing and AI Integration Training Program. This comprehensive curriculum is designed to equip you with the skills and knowledge needed to thrive in the rapidly evolving fields of cloud technology and artificial intelligence.
          </p>
          <p className="mb-4">
            Our program covers a wide range of topics, from cloud fundamentals and major platforms to advanced AI integration and emerging technologies. Through hands-on courses and real-world projects, you'll gain practical experience in designing, implementing, and managing cloud-based AI solutions.
          </p>
          <p className="mb-8">
            Whether you're a seasoned IT professional looking to upgrade your skills or a newcomer to the field, our program offers a structured path to mastering the convergence of cloud and AI technologies. Join us to unlock new career opportunities and drive innovation in the digital age.
          </p>

          <h3 className="text-xl font-semibold mb-4">Development Outcomes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <strong>Design and Implement Cloud Solutions:</strong> Design scalable, secure, cost-effective cloud infrastructures.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <strong>Ensure Cloud Security and Compliance:</strong> Implement security, ensure compliance, and protect cloud assets.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <strong>Leverage Advanced Cloud Technologies:</strong> Integrate serverless, edge computing, IoT for business innovation.
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <strong>Integrate AI and Machine Learning with Cloud Services:</strong> Develop AI applications using cloud-based machine learning.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <strong>Optimize Cloud Performance and Costs:</strong> Optimize cloud resources, implement auto-scaling, manage costs efficiently.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <strong>Navigate the AI and Cloud Ecosystem:</strong> Grasp cloud, AI trends, ethics, and industry impacts.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudComputingContent;
