import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { HelmetProvider } from "react-helmet-async";
import FloatingCTA from "@/components/FloatingCTA";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

// Course Pages
import SoftwareTestingTraining from "./pages/SoftwareTestingTraining";
import ManualTesting from "./pages/ManualTesting";
import SeleniumTesting from "./pages/SeleniumTesting";
import ISTQBCertification from "./pages/ISTQBCertification";
import FullStackJavaDevelopment from "./pages/FullStackJavaDevelopment";
import FullStackPythonDevelopment from "./pages/FullStackPythonDevelopment";
import FullStackWebDevelopment from "./pages/FullStackWebDevelopment";
import FullStackDotNetDevelopment from "./pages/FullStackDotNetDevelopment";
import MERNStackDevelopment from "./pages/MERNStackDevelopment";
import MeanStackDevelopment from "./pages/MeanStackDevelopment";
import BigDataEngineering from "./pages/BigDataEngineering";
import DataScienceWithPython from "./pages/DataScienceWithPython";
import MachineLearning from "./pages/MachineLearning";
import DeepLearning from "./pages/DeepLearning";
import AIDataAnalytics from "./pages/AIDataAnalytics";
import JavaDevelopmentTraining from "./pages/JavaDevelopmentTraining";
import AdvancedJava from "./pages/AdvancedJava";
import SpringBootTraining from "./pages/SpringBootTraining";
import PythonDevelopmentTraining from "./pages/PythonDevelopmentTraining";
import WebDesigningTraining from "./pages/WebDesigningTraining";
import ReactTraining from "./pages/ReactTraining";
import AngularTraining from "./pages/AngularTraining";
import VueJSTraining from "./pages/VueJSTraining";
import RPATraining from "./pages/RPATraining";
import UiPathTraining from "./pages/UiPathTraining";
import AutomationAnywhere from "./pages/AutomationAnywhere";
import BluePrism from "./pages/BluePrism";
import HadoopTraining from "./pages/HadoopTraining";
import ApacheSpark from "./pages/ApacheSpark";
import DataWarehousing from "./pages/DataWarehousing";
import ETLDevelopment from "./pages/ETLDevelopment";

// Non-IT Course Pages
import DigitalMarketing from "./pages/DigitalMarketing";
import DataAnalysisVisualization from "./pages/DataAnalysisVisualization";
import GraphicDesigning from "./pages/GraphicDesigning";
import WebGraphicDesigning from "./pages/WebGraphicDesigning";
import ManagementInformationSystems from "./pages/ManagementInformationSystems";
import InformationTechnologyProgramme from "./pages/InformationTechnologyProgramme";
import FinancialAccounting from "./pages/FinancialAccounting";
import Accounting from "./pages/Accounting";
import Taxation from "./pages/Taxation";

// Dual Degree Pages
import BCA from "./pages/BCA";
import QuastechDegreeProgram from "./pages/QuastechDegreeProgram";

// Quick Links Pages
import PlacementPage from "./pages/PlacementPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <DarkModeProvider>
          <BrowserRouter>
            {/* Global Floating CTA - Appears on all pages */}
            <FloatingCTA />
            <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* IT Course Pages */}
          <Route path="/software-testing-training" element={<SoftwareTestingTraining />} />
          <Route path="/manual-testing" element={<ManualTesting />} />
          <Route path="/selenium-testing" element={<SeleniumTesting />} />
          <Route path="/istqb-certification" element={<ISTQBCertification />} />
          <Route path="/full-stack-java-development" element={<FullStackJavaDevelopment />} />
          <Route path="/full-stack-python-development" element={<FullStackPythonDevelopment />} />
          <Route path="/web-development-course" element={<FullStackWebDevelopment />} />
          <Route path="/full-stack-dotnet-development" element={<FullStackDotNetDevelopment />} />
          <Route path="/mern-stack-development" element={<MERNStackDevelopment />} />
          <Route path="/mean-stack-development" element={<MeanStackDevelopment />} />
          <Route path="/big-data-engineering" element={<BigDataEngineering />} />
          <Route path="/python-data-science" element={<DataScienceWithPython />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/deep-learning" element={<DeepLearning />} />
          <Route path="/ai-data-analytics" element={<AIDataAnalytics />} />
          <Route path="/java-training" element={<JavaDevelopmentTraining />} />
          <Route path="/advanced-java" element={<AdvancedJava />} />
          <Route path="/spring-boot-training" element={<SpringBootTraining />} />
          <Route path="/python-training" element={<PythonDevelopmentTraining />} />
          <Route path="/web-designing-training" element={<WebDesigningTraining />} />
          <Route path="/react-course" element={<ReactTraining />} />
          <Route path="/angular-course" element={<AngularTraining />} />
          <Route path="/vue-js-training" element={<VueJSTraining />} />
          <Route path="/rpa" element={<RPATraining />} />
          <Route path="/uipath-training" element={<UiPathTraining />} />
          <Route path="/automation-anywhere" element={<AutomationAnywhere />} />
          <Route path="/blue-prism" element={<BluePrism />} />
          <Route path="/hadoop-training" element={<HadoopTraining />} />
          <Route path="/apache-spark" element={<ApacheSpark />} />
          <Route path="/data-warehousing" element={<DataWarehousing />} />
          <Route path="/etl-development" element={<ETLDevelopment />} />
          
          {/* Non-IT Course Pages */}
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/data-analysis-visualization" element={<DataAnalysisVisualization />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/web-graphic-designing" element={<WebGraphicDesigning />} />
          <Route path="/management-information-systems" element={<ManagementInformationSystems />} />
          <Route path="/information-technology-programme" element={<InformationTechnologyProgramme />} />
          <Route path="/financial-accounting" element={<FinancialAccounting />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/taxation" element={<Taxation />} />
          
          {/* Dual Degree Pages */}
          <Route path="/bca" element={<BCA />} />
          <Route path="/quastech-degree-program" element={<QuastechDegreeProgram />} />
          
          {/* Quick Links Pages */}
          <Route path="/placement" element={<PlacementPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
