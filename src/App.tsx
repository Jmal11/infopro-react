import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNav from './components/Navigation/MainNav';
import { Footer } from './components/Footer';

// Main Pages
import { HomePage } from './pages/HomePage';
import { HumanAIPage } from './pages/HumanAIPage';
import { WorkforcePage } from './pages/Workforce';

// Develop Talent Pages
import { CustomContentPage } from './pages/develop-talent/CustomContentPage';
import { EarlyCareerDevelopmentPage } from './pages/develop-talent/EarlyCareerDevelopmentPage';
import { LeadershipDevelopmentPage } from './pages/develop-talent/LeadershipDevelopmentPage';
import { LearningStrategyPage } from './pages/develop-talent/LearningStrategyPage';
import { LmsAdministrationPage } from './pages/develop-talent/LmsAdministrationPage';
import { OnboardingPage } from './pages/develop-talent/OnboardingPage';
import { PerformanceManagementPage } from './pages/develop-talent/PerformanceManagementPage';
import { TalentAcquisitionPage } from './pages/develop-talent/TalentAcquisitionPage';
import { TrainingDeliveryPage } from './pages/develop-talent/TrainingDeliveryPage';
import { TrainingNeedsAnalysisPage } from './pages/develop-talent/TrainingNeedsAnalysisPage';
import { TrainingNeedsAnalysisStatsPage } from './pages/develop-talent/TrainingNeedsAnalysisStatsPage';

// Empower Teams Pages
import { AIMLPage } from './pages/empower-teams/AIMLPage';
import BusinessLeadershipLearningExperiencePage from './pages/empower-teams/BusinessLeadershipLearningExperiencePage';
import BusinessLeadershipPage from './pages/empower-teams/BusinessLeadershipPage';
import { CloudComputingContent } from './pages/empower-teams/CloudComputingContent';
import CloudComputingPage from './pages/empower-teams/CloudComputingPage';
import { CommercialLeadershipPage } from './pages/empower-teams/CommercialLeadershipPage';
import { CustomerExcellencePage } from './pages/empower-teams/CustomerExcellencePage';
import CybersecurityPage from './pages/empower-teams/CybersecurityPage';
import DataAnalyticsPage from './pages/empower-teams/DataAnalyticsPage';
import DigitalWorkplacePage from './pages/empower-teams/DigitalWorkplacePage';
import { DiversityEquityInclusionPage } from './pages/empower-teams/DiversityEquityInclusionPage';
import { MidCareerDevelopmentPage } from './pages/empower-teams/MidCareerDevelopmentPage';
import { PeopleLeadershipPage } from './pages/empower-teams/PeopleLeadershipPage';
import { ProductTrainingPage } from './pages/empower-teams/ProductTrainingPage';
import PromptEngineeringPage from './pages/empower-teams/PromptEngineeringPage';
import { SalesTrainingEnablementPage } from './pages/empower-teams/SalesTrainingEnablementPage';
import { SelfLeadershipDevelopmentPage } from './pages/empower-teams/SelfLeadershipDevelopmentPage';
import { SeniorLeaderDevelopmentPage } from './pages/empower-teams/SeniorLeaderDevelopmentPage';
import { VanguardLeadershipPage } from './pages/empower-teams/VanguardLeadershipPage';
import AgileProjectManagementPage from './pages/empower-teams/AgileProjectManagementPage';

// Transform Pages
import { AgileTransformationPage } from './pages/transform/AgileTransformationPage';
import { ChangeManagementPage } from './pages/transform/ChangeManagementPage';
import PerformanceConsultingPage from './pages/transform/PerformanceConsultingPage';

// Technology Consulting Pages
import { TechnologyConsultingPage } from './pages/technology-consulting/TechnologyConsultingPage';
import OperatingModelPage from './pages/operating-model/OperatingModelPage';
import SkillsBasedDesignPage from './pages/skills-based-design/SkillsBasedDesignPage';

// Our Work Pages
import { CaseStudiesPage } from './pages/our-work/CaseStudiesPage';
import { PodcastPage } from './pages/our-work/PodcastPage';
import { InsightsPage } from './pages/our-work/InsightsPage';

// Industries Pages
import { BankingPage } from './pages/industries/BankingPage';
import { InsurancePage } from './pages/industries/InsurancePage';
import { TechnologyPage } from './pages/industries/TechnologyPage';
import { HealthcarePage } from './pages/industries/HealthcarePage';
import { EnergyPage } from './pages/industries/EnergyPage';
import { PharmaPage } from './pages/industries/PharmaPage';
import { ProfessionalServicesPage } from './pages/industries/ProfessionalServicesPage';
import { NonProfitPage } from './pages/industries/NonProfitPage';

// About Us Pages
import { AboutUsPage } from './pages/about-us/AboutUsPage';
import { PressReleasesPage } from './pages/about-us/PressReleasesPage';
import { AwardsPage } from './pages/about-us/AwardsPage';
import { EventsPage } from './pages/about-us/EventsPage';
import { CareersPage } from './pages/about-us/CareersPage';
import { ContactUsPage } from './pages/about-us/ContactUsPage';

const App = () => {
  return (
    <Router>
      <MainNav />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/human-ai" element={<HumanAIPage />} />
        <Route path="/workforce" element={<WorkforcePage />} />

        {/* Develop Talent Pages */}
        <Route path="/develop-talent/custom-content" element={<CustomContentPage />} />
        <Route path="/develop-talent/early-career-development" element={<EarlyCareerDevelopmentPage />} />
        <Route path="/develop-talent/leadership-development" element={<LeadershipDevelopmentPage />} />
        <Route path="/develop-talent/learning-strategy" element={<LearningStrategyPage />} />
        <Route path="/develop-talent/lms-administration" element={<LmsAdministrationPage />} />
        <Route path="/develop-talent/onboarding" element={<OnboardingPage />} />
        <Route path="/develop-talent/performance-management" element={<PerformanceManagementPage />} />
        <Route path="/develop-talent/talent-acquisition" element={<TalentAcquisitionPage />} />
        <Route path="/develop-talent/training-delivery" element={<TrainingDeliveryPage />} />
        <Route path="/develop-talent/training-needs-analysis" element={<TrainingNeedsAnalysisPage />} />
        <Route path="/develop-talent/training-needs-analysis-stats" element={<TrainingNeedsAnalysisStatsPage />} />

        {/* Empower Teams Pages */}
        <Route path="/empower-teams/aiml" element={<AIMLPage />} />
        <Route path="/empower-teams/business-leadership-learning-experience" element={<BusinessLeadershipLearningExperiencePage />} />
        <Route path="/empower-teams/business-leadership" element={<BusinessLeadershipPage />} />
        <Route path="/empower-teams/cloud-computing-content" element={<CloudComputingContent />} />
        <Route path="/empower-teams/cloud-computing" element={<CloudComputingPage />} />
        <Route path="/empower-teams/commercial-leadership" element={<CommercialLeadershipPage />} />
        <Route path="/empower-teams/customer-excellence" element={<CustomerExcellencePage />} />
        <Route path="/empower-teams/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/empower-teams/data-analytics" element={<DataAnalyticsPage />} />
        <Route path="/empower-teams/digital-workplace" element={<DigitalWorkplacePage />} />
        <Route path="/empower-teams/diversity-equity-inclusion" element={<DiversityEquityInclusionPage />} />
        <Route path="/empower-teams/mid-career-development" element={<MidCareerDevelopmentPage />} />
        <Route path="/empower-teams/people-leadership" element={<PeopleLeadershipPage />} />
        <Route path="/empower-teams/product-training" element={<ProductTrainingPage />} />
        <Route path="/empower-teams/prompt-engineering" element={<PromptEngineeringPage />} />
        <Route path="/empower-teams/sales-training-enablement" element={<SalesTrainingEnablementPage />} />
        <Route path="/empower-teams/self-leadership-development" element={<SelfLeadershipDevelopmentPage />} />
        <Route path="/empower-teams/senior-leader-development" element={<SeniorLeaderDevelopmentPage />} />
        <Route path="/empower-teams/vanguard-leadership" element={<VanguardLeadershipPage />} />
        <Route path="/empower-teams/agile-project-management" element={<AgileProjectManagementPage />} />

        {/* Transform Pages */}
        <Route path="/transform/agile-transformation" element={<AgileTransformationPage />} />
        <Route path="/transform/change-management" element={<ChangeManagementPage />} />
        <Route path="/transform/performance-consulting" element={<PerformanceConsultingPage />} />

        {/* Technology Consulting Pages */}
        <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />
        <Route path="/operating-model" element={<OperatingModelPage />} />
        <Route path="/skills-based-design" element={<SkillsBasedDesignPage />} />

        {/* Our Work Pages */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/insights" element={<InsightsPage />} />

        {/* Industries Pages */}
        <Route path="/industries/banking" element={<BankingPage />} />
        <Route path="/industries/insurance" element={<InsurancePage />} />
        <Route path="/industries/technology" element={<TechnologyPage />} />
        <Route path="/industries/healthcare" element={<HealthcarePage />} />
        <Route path="/industries/energy" element={<EnergyPage />} />
        <Route path="/industries/pharma" element={<PharmaPage />} />
        <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
        <Route path="/industries/non-profit" element={<NonProfitPage />} />

        {/* About Us Pages */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/press-releases" element={<PressReleasesPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
