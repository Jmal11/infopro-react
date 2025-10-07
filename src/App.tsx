import React from 'react';
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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
