import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export function VanguardLeadershipDetails() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side heading */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-extrabold leading-tight">
            Empowering Leaders to Communicate, Inspire, and Drive Change Effectively
          </h2>
        </div>

        {/* Right side content */}
        <div className="lg:w-2/3 space-y-6 text-gray-700">
          <p>
            The Vanguard Leadership Program isn&apos;t just another training&mdash;it&apos;s a game-changing journey for leaders ready to thrive in today&apos;s disruptive world. This isn&apos;t about theory; it&apos;s about building a powerhouse of leaders who can navigate the chaos of AI, master remote collaboration, and lead with emotional intelligence. With an emphasis on bold, actionable leadership, world-class communication and strategic execution, the vanguard experience supercharges your organization&apos;s agility and readiness for whatever comes next.
          </p>
          <p>
            Investing in the Vanguard Leadership Program means you&apos;re gearing up your leaders to crush today&apos;s challenges head-on, drive innovation, make sharp decisions, and foster dynamic, cross-functional teams in a high-velocity work environment.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Development Outcomes:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">High-Impact Communicators:</p>
                <p className="text-sm">
                  Equip your leadership team with the communication skills needed to energize a high-performance culture.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Empathetic Leadership:</p>
                <p className="text-sm">
                  Build emotional intelligence to transform communication and team dynamics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Strategic Agility:</p>
                <p className="text-sm">
                  Empower leaders to pivot and adapt to the unpredictable landscapes and AI revolutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Action-Oriented and Execution-Driven:</p>
                <p className="text-sm">
                  Develop leaders who don&apos;t just talk strategy&mdash;they make it happen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Seamless Collaboration:</p>
                <p className="text-sm">
                  Sharpen leadership skills to unite and energize remote/hybrid teams, cross-cultural teams, multi-generational teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
