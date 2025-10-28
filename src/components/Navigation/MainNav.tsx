import { useState, useEffect, useRef } from 'react';
import { Menu, Search, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-router-dom';  // Added import for Link

// Define custom icons
const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
  </svg>
);
const ContentDesignIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
  </svg>
);
const TrainingDeliveryIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const LearningAdminIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);
const VendorManagementIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);
const ReportingIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
);
const InPersonTrainingIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);
const VirtualTrainingIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" />
  </svg>
);
const EventsIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
  </svg>
);

// Add missing icons
const ConferenceIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm10.75 1c-.96.73-2.72 1.5-4.75 1.5h-1v-2.5c0-1.62-1.37-3.11-3.45-3.45C11.71 11.08 12 11.02 12 11s1.66-.34 2.75-.95c.85.84 2.26 1.45 3.75 1.45 2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.94 0-3.54 1.38-3.9 3.21-.57-.22-1.17-.36-1.77-.46L14.05 2h-.05C13.45 1.38 12.78 1 12 1s-1.45.38-2 1h-.05l1.72 4.27c-.6.09-1.2.24-1.77.46C9.54 5.38 7.94 4 6 4 3.79 4 2 5.79 2 8s1.79 4 4 4c1.93 0 3.54-1.38 3.9-3.21.68.26 1.44.45 2.35.45h.75c.71 0 1.45-.2 2.1-.50.65.3 1.39.5 2.1.5h.04c1.64 0 2.97-.49 3.97-1.16.31.71.39 1.5.29 2.27-.14.86-.49 1.66-1 2.31V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);
const CoachingIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM2.92 6.05l1.69 1.68c-.84 1.18-.84 2.71 0 3.89l-1.69 1.69c-2.02-2.02-2.02-5.07 0-7.26z" />
  </svg>
);
const LabsIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M14.81 9l-.94-2H10.13l-.94 2H5.21A1.09 1.09 0 0 0 4 10.08c0 3.45 1.72 6.61 4.5 8.45.67.44 1.35.81 2.05 1.1l1.04-3.22L10 14H8.88L9.2 12h5.6l.32 2H13.41l-1.59 2.4.78 3.22c.69-.29 1.38-.66 2.05-1.1C17.28 16.69 19 13.53 19 10.08A1.09 1.09 0 0 0 17.79 9zm-1.42 4h-2.78l.69-1h1.4zM19 3H5c-1.1 0-2 .9-2 2v14c0 .55.22 1.05.59 1.41.36.37.86.59 1.41.59h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);
const OnboardingIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const LmsIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
);
const GoalSettingIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
);
const PerformanceIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4 6h2v12h-2zm4-2h2v14h-2z" />
  </svg>
);
const EmployeeEngagementIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M9 16.5c0 .33.03.65.07.97l2.05-.51 2.9 2.09.04-2.68L16 18l-2.92-2.1-.34.49H9zm4.5-4c1.66 0 2.99-1.34 2.99-3S15.16 6.5 13.5 6.5 10.5 7.84 10.5 9.5s1.34 3 3 3zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
  </svg>
);
const RewardsIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="text-primary">
    <path fill="currentColor" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm7 6c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V7h2v1z" />
  </svg>
);



// Navigation Data
const mainMenuItems = [
  {
    title: "Human + AI",
    link: "/human-ai",
    hasDropdown: false,
  },
  {
    title: "Develop Talent",
    hasDropdown: true,
    content: {
      leftPanel: {
        title: "Managed Learning Services",
        superscript: "AI+",
        services: [
          { icon: <StrategyIcon />, title: "Strategy", superscript: "AI+" },
          { icon: <ContentDesignIcon />, title: "Content Design", superscript: "AI+" },
          { icon: <TrainingDeliveryIcon />, title: "Training Delivery", superscript: "AI+" },
          { icon: <LearningAdminIcon />, title: "Learning Administration", superscript: "AI+" },
          { icon: <VendorManagementIcon />, title: "Vendor Management", superscript: "AI+" },
          { icon: <ReportingIcon />, title: "Reporting", superscript: "AI+" }
        ]
      },
      categories: [
        {
          title: "",
          links: [
            { text: "Custom Content", url: "/develop-talent/custom-content" },
            { text: "Training Delivery", url: "/develop-talent/training-delivery" },
            { text: "LMS Administration", url: "/develop-talent/lms-administration" },
            { text: "Learning Strategy", url: "/develop-talent/learning-strategy" },
            { text: "Training Needs Analysis", url: "/develop-talent/training-needs-analysis" }
          ]
        },
        {
          title: "",
          links: [
            { text: "Talent Acquisition", url: "/develop-talent/talent-acquisition" },
            { text: "Onboarding", url: "/develop-talent/onboarding" },
            { text: "Leadership Development", url: "/develop-talent/leadership-development" },
            { text: "Performance Management", url: "/develop-talent/performance-management" }
          ]
        }
      ],
      rightPanel: {
        title: "Studio-On-Demand",
        headline: "Predictable. Scalable. Ready to Deliver.",
        description: "Extend your team with scalable, flexible design, content & media production.",
        cta: "Explore Studio on Demand",
        ctaLink: "/studio-on-demand"
      }
    }
  },
  {
    title: "Empower Teams",
    hasDropdown: true,
    content: {
      leftPanel: {
        title: "Training Delivery As a Service",
        services: [
          { icon: <InPersonTrainingIcon />, title: "In-Person Training" },
          { icon: <VirtualTrainingIcon />, title: "Virtual Training" },
          { icon: <EventsIcon />, title: "Events" },
          { icon: <ConferenceIcon />, title: "Conference" },
          { icon: <CoachingIcon />, title: "Coaching" },
          { icon: <LabsIcon />, title: "Labs" }
        ]
      },
      categories: [
        {
          title: "Leadership Skills",
          links: [
            { text: "Vanguard Leadership", url: "/empower-teams/vanguard-leadership" },
            { text: "Early Career Development", url: "/develop-talent/early-career-development" },
            { text: "Mid-Career Development", url: "/empower-teams/mid-career-development" },
            { text: "Senior Leader Development", url: "/empower-teams/senior-leader-development" },
            { text: "Self Leadership Development", url: "/empower-teams/self-leadership-development" },
            { text: "Diversity, Equity and Inclusion", url: "/empower-teams/diversity-equity-inclusion" }
          ]
        },
        {
          title: "Business and Commercial Skills",
          links: [
            { text: "Sales Training and Enablement", url: "/empower-teams/sales-training-enablement" },
            { text: "Customer Excellence", url: "/empower-teams/customer-excellence" },
            { text: "Commercial Leader Development", url: "/empower-teams/commercial-leadership" },
            { text: "Product Training", url: "/empower-teams/product-training" },
            { text: "People Leadership", url: "/empower-teams/people-leadership" },
            { text: "Business Leadership", url: "/empower-teams/business-leadership" }
          ]
        },
        {
          title: "Digital Skills",
          links: [
            { text: "Data Analytics and Visualization", url: "/empower-teams/data-analytics" },
            { text: "AI & Machine Learning", url: "/empower-teams/aiml" },
            { text: "Mastering the Digital Workplace", url: "/empower-teams/digital-workplace" },
            { text: "AI Integration & Cloud Computing", url: "/empower-teams/cloud-computing" },
            { text: "AI & Cybersecurity", url: "/empower-teams/cybersecurity" },
            { text: "Prompt Engineering for Leaders", url: "/empower-teams/prompt-engineering" },
            { text: "Agile Project Management", url: "/empower-teams/agile-project-management" }
          ]
        }
      ],
      rightPanel: {
        title: "Master Skills with Award Winning Programs & Facilitators",
        bulletPoints: ["Blended learning journeys", "Customizable to your needs"],
        cta: "DOWNLOAD OUR SKILLS CATALOGUE",
        ctaLink: "/skills-catalogue"
      }
    }
  },
  {
    title: "Transform Organizations",
    hasDropdown: true,
    content: {
      leftPanel: {
        title: "Unlock:U Platform",
        services: [
          { icon: <OnboardingIcon />, title: "Onboarding" },
          { icon: <LmsIcon />, title: "Learning Management (LMS)" },
          { icon: <GoalSettingIcon />, title: "Goal Setting" },
          { icon: <PerformanceIcon />, title: "Performance Management" },
          { icon: <EmployeeEngagementIcon />, title: "Employee Engagement" },
          { icon: <RewardsIcon />, title: "Rewards and Recognition" }
        ]
      },
      categories: [
        {
          title: "Performance Consulting",
          url: "/transform/performance-consulting",
          links: [
            { text: "Agile Enterprise Transformation", url: "/transform/agile-transformation" },
            { text: "Organization Change Management", url: "/transform/change-management" }
          ]
        },
        {
          title: "Technology Consulting",
          url: "/technology-consulting",
          links: [
            { text: "Operating Model Transformation", url: "/operating-model" },
            { text: "Skills Based Design", url: "/skills-based-design" }
          ]
        }
      ],
      rightPanel: {
        title: "Human+AI: Transforming Workflows and Value streams",
        description: "Upskill, adapt and thrive in an AI driven future.",
        cta: "LEARN MORE",
        ctaLink: "/human-ai-transformation"
      }
    }
  }
];

// Expanded menu data
const expandedMenuData = {
  ourWork: {
    title: "Our Work",
    links: [
      { text: "Case Studies", url: "/case-studies" },
      { text: "Podcast", url: "/podcast" },
      { text: "Insights", url: "/insights" }
    ]
  },
  industries: {
    title: "Industries",
    links: [
      { text: "Banking and Finance", url: "/industries/banking" },
      { text: "Insurance", url: "/industries/insurance" },
      { text: "Technology/IT", url: "/industries/technology" },
      { text: "Healthcare", url: "/industries/healthcare" },
      { text: "Energy", url: "/industries/energy" },
      { text: "Pharma", url: "/industries/pharma" },
      { text: "Professional Services", url: "/industries/professional-services" },
      { text: "Non Profit", url: "/industries/non-profit" }
    ]
  },
  aboutUs: {
    title: "About Us",
    links: [
      { text: "About Us", url: "/about-us" },
      { text: "Press Releases", url: "/press-releases" },
      { text: "Awards", url: "/awards" },
      { text: "Events", url: "/events" },
      { text: "Careers", url: "/careers" },
      { text: "Contact Us", url: "/contact-us" }
    ]
  }
};

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});
  const scheduleClose = useRef<number | null>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  // Treat navbar as white when scrolled or any menu/overlay is active
  const isElevated =
    isScrolled ||
    activeDropdown !== null ||
    expandedMenu ||
    isSearchOpen ||
    isMenuOpen;
  const hideAnnouncement = activeDropdown !== null || isElevated || expandedMenu || isSearchOpen || isMenuOpen;

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100); // Increased threshold to ensure navbar stays transparent longer
    };
    handleScroll(); // Set initial scroll state on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure full header height (announcement + nav)
  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        const navBar = navRef.current.querySelector('.nav-bar');
        if (navBar) {
          setNavHeight(navBar.getBoundingClientRect().height);
        }
      }
    };
    measure();
    window.addEventListener('resize', measure);
    const id = window.setInterval(measure, 150);
    return () => {
      window.removeEventListener('resize', measure);
      window.clearInterval(id);
    };
  }, [isScrolled, activeDropdown, expandedMenu, isSearchOpen, isMenuOpen]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsSearchOpen(false);
        setExpandedMenu(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Hover handlers
  const handleMouseEnter = (index: number) => {
    if (scheduleClose.current) clearTimeout(scheduleClose.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    scheduleClose.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] overflow-hidden"
      ref={navRef}
    >
      {/* Background layer with slide animation */}
      <motion.div
        initial={false}
        animate={{
          y: isElevated ? 0 : '-100%',
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="absolute inset-0 bg-white shadow-md"
        style={{ zIndex: -1 }}
      />
      {/* Announcement bar */}
      {/* Announcement bar */}
      <motion.div
        initial={false}
        animate={{
          height: hideAnnouncement ? 0 : 'auto',
          opacity: hideAnnouncement ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="w-full overflow-hidden"
      >
        <div className={clsx("container mx-auto px-4 py-2 text-center text-xs sm:text-sm", isElevated ? "text-gray-800" : "text-white")}>
          Upcoming Webinar | Sales Training for Non-Sales People | November 13, 1 pm EST
          <a href="#" className="ml-2 text-blue-600 font-semibold">Register Now →</a>
        </div>
        <div className="h-px w-full bg-gray-300" />
      </motion.div>
      {/* Main Navigation Bar */}
      {/* Main Navigation Bar */}
      <div className="nav-bar container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <a href="/" className="flex items-center z-10">
            {isElevated ? (
              <img src="https://infoprolearning.com/wp-content/themes/ipl/assets/images-new/logo.svg " alt="InfoPro Learning" className="h-12" />
            ) : (
              <img src="https://infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/logo-new.svg " alt="InfoPro Learning" className="h-12" />
            )}
          </a>

          {/* Desktop Nav Links */}   
          <div className="hidden lg:flex items-center flex-wrap gap-x-2 max-w-full px-5 overflow-x-auto scrollbar-hide">
            {mainMenuItems.map((item, index) => (
              <div
                key={index}
                className="relative px-4 xl:px-4"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
              >
                {item.hasDropdown ? (
                  <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    className={clsx(
                      "flex items-center font-medium py-5 transition-colors duration-300 ease-in-out",
                      isElevated
                        ? "text-gray-800 hover:text-color-ipl"
                        : "text-white hover:text-gray-200",
                      activeDropdown === index && isElevated ? "text-color-ipl" : ""
                    )}
                    aria-expanded={activeDropdown === index}
                  >
                    {item.title} <ChevronDown className={clsx("ml-1 w-4 h-4 transition-colors duration-300", isElevated ? "text-gray-600" : "text-white")} />
                  </button>
                ) : (
                  <Link
                    to={item.link || "/"}
                    className={clsx(
                      "block py-5 transition-colors duration-300 ease-in-out",
                      isElevated
                        ? "text-gray-800 hover:text-color-ipl"
                        : "text-white hover:text-gray-200"
                    )}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Mega Dropdown - Full Width Below Navbar */}
                {item.hasDropdown && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="fixed inset-x-0 z-40 bg-white shadow-lg rounded-b"
                   style={{
  top: navHeight,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  zIndex: 50
}}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="container mx-auto px-4 py-8 bg-white">
                      <div className="grid grid-cols-12 gap-6 border border-gray-200 rounded">
                        {/* Left Panel - Service Icons */}
                        <div className="col-span-3 bg-[#f0f0ff] p-6 rounded-l">
                          <h3 className="text-gray-800 font-semibold mb-4 flex items-center">
                            {item.content?.leftPanel.title}
                            {item.content?.leftPanel.superscript && (
                              <sup className="text-blue-600 ml-1">{item.content.leftPanel.superscript}</sup>
                            )}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {item.content?.leftPanel.services.map((service, i) => (
                              <a key={i} href="#" className="flex flex-col items-center p-2 hover:bg-white rounded transition-colors">
                                <div className="mb-2">{service.icon}</div>
                                <span className="text-sm text-center" style={{ color: 'black' }}>
                                  {service.title}
                                  {'superscript' in service && service.superscript && (
                                    <sup className="text-blue-600 text-xs ml-0.5">{service.superscript}</sup>
                                  )}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Middle Categories */}
                        <div className={`col-span-6 grid ${item.content && item.content.categories && item.content.categories.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-6 p-6 border-r border-l border-gray-200`}>
                          {item.content && item.content.categories && item.content.categories.map((category, catIndex) => (
                            <div key={catIndex}>
                              {'url' in category && category.url ? (
                                <h3 className="text-black font-semibold mb-3">
                                  <Link to={category.url} className="hover:text-color-ipl transition-colors">
                                    {category.title}
                                  </Link>
                                </h3>
                              ) : (
                                <h3 className="text-black font-semibold mb-3">{category.title}</h3>
                              )}
                              <ul className="space-y-2">
                                {category.links.filter(link => typeof link.url === 'string' && link.url).map((link, liIndex) => (
                                  <li key={liIndex}>
                                    <Link to={link.url || "#"} className="text-black hover:text-color-ipl transition-colors text-sm">
                                      {link.text}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Right Panel */}
                        <div className="col-span-3 p-6">
                          <h3 className="text-gray-800 font-semibold mb-2">{item.content && item.content.rightPanel && item.content.rightPanel.title}</h3>
                          {item.content && item.content.rightPanel && item.content.rightPanel.headline && (
                            <p className="text-gray-800 font-medium mb-2">{item.content.rightPanel.headline}</p>
                          )}
                          {item.content && item.content.rightPanel && item.content.rightPanel.description && (
                            <p className="text-sm text-gray-600 mb-3">{item.content.rightPanel.description}</p>
                          )}
                          {item.content && item.content.rightPanel && item.content.rightPanel.bulletPoints && (
                            <ul className="mb-3 space-y-1">
                              {item.content.rightPanel.bulletPoints.map((point, i) => (
                                <li key={i} className="text-sm text-gray-700 flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>{point}
                                </li>
                              ))}
                            </ul>
                          )}
                          <Link to={item.content?.rightPanel?.ctaLink || "#"} className="text-sm text-gray-800 font-medium hover:text-color-ipl transition-colors flex items-center">
                            {item.content?.rightPanel?.cta}
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            {/* Right Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button onClick={() => setIsSearchOpen(true)} className={clsx("p-2 rounded-full transition-all duration-300", isElevated ? "hover:bg-gray-100" : "hover:bg-white/10")}>
                <Search className={clsx("w-5 h-5 transition-colors duration-300", isElevated ? "text-gray-700" : "text-white")} />
              </button>
              <button onClick={() => setExpandedMenu(!expandedMenu)} className={clsx("hidden lg:flex p-2 rounded-full transition-all duration-300", isElevated ? "hover:bg-gray-100" : "hover:bg-white/10")}>
                <Menu className={clsx("w-6 h-6 transition-colors duration-300", isElevated ? "text-gray-700" : "text-white")} />
              </button>
              <a
                href="/contact"
                className="hidden bg-[#6B19FF] lg:block text-white px-2 py-4 rounded bg-blue-600 hover:bg-blue-700 transition-colors w-[200px] text-center text-sm font-medium"
              >
                CONNECT WITH US
              </a>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={clsx("lg:hidden p-2 rounded-full transition-all duration-300", isElevated ? "hover:bg-gray-100" : "hover:bg-white/10")}>
                {isMenuOpen ? (
                  <X className={clsx("w-6 h-6 transition-colors duration-300", isElevated ? "text-gray-700" : "text-white")} />
                ) : (
                  <Menu className={clsx("w-6 h-6 transition-colors duration-300", isElevated ? "text-gray-700" : "text-white")} />
                )}
              </button>
            </div>

            {/* Right Buttons */}

          </div>
        </div>
      </div>

      {/* Bottom separator under navbar */}
      <div className="h-px w-full bg-gray-300" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t fixed left-0 right-0"
            style={{ top: navHeight}}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {mainMenuItems.map((item, index) => (
                  <div key={index} className="border-b pb-2">
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex justify-between items-center w-full py-2"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <a href={item.link} className="block py-2 font-medium">
                        {item.title}
                      </a>
                    )}

                    {/* Mobile Submenu */}
                    {item.hasDropdown && activeDropdown === index && item.content && (
                      <div className="mt-2 ml-4 space-y-4">
                        {item.content.categories.map((category, catIndex) => (
                          <div key={catIndex} className="mb-4">
                            <h4 className="font-medium text-gray-800 mb-2">{category.title}</h4>
                            <ul className="space-y-2 ml-2">
                              {category.links.filter(link => typeof link.url === 'string' && link.url).map((link, liIndex) => (
                                <li key={liIndex}>
                                  <Link to={link.url as string} className="text-gray-600 text-sm">{link.text}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="border-t pt-4 mt-4">
                          <h4 className="font-medium text-gray-800 mb-2">{item.content.rightPanel.title}</h4>
                          <Link to={item.content.rightPanel.ctaLink || "#"} className="text-blue-600 text-sm flex items-center">
                            {item.content.rightPanel.cta}
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-md transition-all duration-300 font-semibold tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-0.5">CONNECT WITH US</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 bg-white z-[50] shadow-lg border-b"
            style={{ top: navHeight}}
          >
            <div className="container mx-auto py-8 px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">Use Your <span className="text-blue-600">Keywords</span> For Search</h2>
                <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="relative">
                <input type="text" autoFocus placeholder="Search..." className="w-full border-b-2 border-blue-600 pb-2 text-lg outline-none" />
                <button className="absolute right-0 bottom-2">
                  <Search className="w-6 h-6 text-blue-600" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Menu */}
      <AnimatePresence>
        {expandedMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 bg-white z-[50] shadow-lg border-b"
            style={{ top: navHeight}}
          >
            <div className="container mx-auto py-6 px-4 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">{expandedMenuData.ourWork.title}</h3>
                  <ul className="space-y-3">
                    {expandedMenuData.ourWork.links.map((link, i) => (
                      <li key={i}><a href={link.url} className="text-gray-700 hover:text-blue-600 transition-colors text-base">{link.text}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">{expandedMenuData.industries.title}</h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {expandedMenuData.industries.links.map((link, i) => (
                      <a key={i} href={link.url} className="text-gray-700 hover:text-blue-600 transition-colors text-base">{link.text}</a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 invisible">{expandedMenuData.aboutUs.title}</h3>
                  <ul className="space-y-3">
                    {expandedMenuData.aboutUs.links.map((link, i) => (
                      <li key={i}><a href={link.url} className="text-gray-700 hover:text-blue-600 transition-colors text-base">{link.text}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MainNav;
