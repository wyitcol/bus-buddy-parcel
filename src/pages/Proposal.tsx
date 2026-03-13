import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Proposal = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Hidden on print */}
      <div className="print:hidden bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to App
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button onClick={handlePrint}>
              <Download className="w-4 h-4 mr-2" />
              Save as PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Proposal Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-card rounded-2xl shadow-card p-8 md:p-12 print:shadow-none print:p-0 space-y-16 text-foreground leading-relaxed" style={{ fontFamily: "'Times New Roman', Times, serif" }}>

          {/* ===== COVER PAGE ===== */}
          <section className="text-center py-20 border-b border-border print:break-after-page">
            <p className="text-lg uppercase tracking-widest text-muted-foreground mb-6">Pwani University</p>
            <p className="text-base text-muted-foreground mb-1">School of Physical and Applied Sciences (SPAS)</p>
            <p className="text-base text-muted-foreground mb-10">Department of Maths and Computer Science</p>

            <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              BusParcel: A Smart Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya
            </h1>

            <p className="text-lg font-semibold mt-10 mb-2">A Project Proposal</p>
            <p className="text-base text-muted-foreground mb-1">Submitted by:</p>
            <p className="text-lg font-semibold mb-1">[Student Name]</p>
            <p className="text-base text-muted-foreground mb-8">[Registration Number]</p>

            <p className="text-base text-muted-foreground mb-1">in partial fulfillment for the award of the degree of</p>
            <p className="text-lg font-bold my-4">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</p>
            <p className="text-base text-muted-foreground">at</p>
            <p className="text-lg font-bold mt-2 mb-6">PWANI UNIVERSITY</p>
            <p className="text-base text-muted-foreground">January 2026</p>
          </section>

          {/* ===== DECLARATION BY STUDENT ===== */}
          <section className="print:break-after-page">
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-wide">Declaration</h2>
            <p className="text-muted-foreground mb-6">
              I hereby declare that the proposal entitled <strong>"BusParcel: A Smart Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya"</strong> submitted for the BSc Computer Science degree is my original work and the proposal has not formed the basis for the award of any other degree, diploma, fellowship or any other similar titles.
            </p>
            <div className="mt-12 space-y-8 text-muted-foreground">
              <div>
                <p>Name of the Student: ____________________________________________</p>
              </div>
              <div>
                <p>Signature of the Student: ________________________________________</p>
              </div>
              <div>
                <p>Date: ___________________________________________________________</p>
              </div>
            </div>
          </section>

          {/* ===== DECLARATION BY SUPERVISOR ===== */}
          <section className="print:break-after-page">
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-wide">Supervisor Declaration</h2>
            <p className="text-muted-foreground mb-6">
              This is to certify that the proposal titled <strong>"BusParcel: A Smart Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya"</strong> is the bona fide work carried out by [Student Name], a student of BSc Computer Science of Pwani University, Kenya in partial fulfillment of the requirements for the award of the degree of Bachelor of Science (Computer Science) and that the proposal has not formed the basis for the award previously of any other degree, diploma, fellowship or any other similar title.
            </p>
            <div className="mt-12 space-y-8 text-muted-foreground">
              <div>
                <p>Supervisor Name: ________________________________________________</p>
              </div>
              <div>
                <p>Supervisor Signature: ____________________________________________</p>
              </div>
              <div>
                <p>Date: ___________________________________________________________</p>
              </div>
            </div>
          </section>

          {/* ===== ABSTRACT ===== */}
          <section className="print:break-after-page">
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-wide">Abstract</h2>
            <p className="text-muted-foreground mb-4">
              The transportation of parcels across Kenya remains a challenge marked by high costs, limited tracking, and fragmented systems. While intercity bus operators such as Tahmeed, Buscar, and Mashpoa traverse extensive route networks connecting urban centres to rural areas daily, their cargo capacity remains underutilized. This project proposes <strong>BusParcel</strong>, a smart web-based platform that leverages existing bus infrastructure to provide affordable, reliable, and trackable parcel transportation services.
            </p>
            <p className="text-muted-foreground mb-4">
              The main objective is to design and develop a web-based parcel transportation management system that integrates with intercity bus services for efficient and cost-effective parcel delivery. Specific objectives include analyzing current parcel transportation practices, designing a user-friendly booking and tracking interface, implementing real-time parcel monitoring, developing an operator management dashboard, and integrating secure payment processing.
            </p>
            <p className="text-muted-foreground mb-4">
              The project scope encompasses a customer portal for parcel booking and tracking, an operator dashboard for logistics management, and an admin panel for system oversight. Initial partner operators include Tahmeed, Buscar, and Mashpoa, covering major routes such as Nairobi–Mombasa, Nairobi–Kisumu, and Nairobi–Eldoret.
            </p>
            <p className="text-muted-foreground">
              The proposed methodology follows Design Science Research with Agile (Scrum) for system development. The frontend will be built using React.js and TypeScript, with Supabase providing backend services including authentication, database management, and real-time capabilities. Data collection will employ mixed methods including stakeholder interviews and surveys. The project is estimated at KES 20,000 with a 14-week development timeline across five phases.
            </p>
          </section>

          {/* ===== TABLE OF CONTENTS ===== */}
          <section className="print:break-after-page">
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-wide">Table of Contents</h2>
            <div className="text-muted-foreground space-y-1">
              <p className="flex justify-between"><span>Title Page</span><span>i</span></p>
              <p className="flex justify-between"><span>Declaration of the Student</span><span>ii</span></p>
              <p className="flex justify-between"><span>Declaration of the Supervisor</span><span>iii</span></p>
              <p className="flex justify-between"><span>Abstract</span><span>iv</span></p>
              <p className="flex justify-between"><span>Table of Contents</span><span>v</span></p>
              <p className="flex justify-between"><span>List of Figures</span><span>vi</span></p>
              <p className="flex justify-between"><span>List of Tables</span><span>vii</span></p>

              <p className="font-bold text-foreground mt-6">CHAPTER 1: INTRODUCTION</p>
              <p className="flex justify-between ml-4"><span>1.1 Background of the Study</span><span>1</span></p>
              <p className="flex justify-between ml-4"><span>1.2 Statement of the Problem</span><span>3</span></p>
              <p className="flex justify-between ml-4"><span>1.3 Proposed Solution</span><span>4</span></p>
              <p className="flex justify-between ml-4"><span>1.4 Justification of the Study</span><span>5</span></p>
              <p className="flex justify-between ml-4"><span>1.5 Project Goal and Objectives</span><span>6</span></p>
              <p className="flex justify-between ml-4"><span>1.6 Research Questions</span><span>7</span></p>
              <p className="flex justify-between ml-4"><span>1.7 Scope of the Project</span><span>8</span></p>

              <p className="font-bold text-foreground mt-4">CHAPTER 2: LITERATURE REVIEW</p>
              <p className="flex justify-between ml-4"><span>2.1 Review of Existing Systems</span><span>9</span></p>
              <p className="flex justify-between ml-4"><span>2.2 Review of the Proposed System</span><span>13</span></p>
              <p className="flex justify-between ml-4"><span>2.3 Justification of the New System</span><span>15</span></p>

              <p className="font-bold text-foreground mt-4">CHAPTER 3: METHODOLOGY</p>
              <p className="flex justify-between ml-4"><span>3.1 Analysis of the Existing System</span><span>17</span></p>
              <p className="flex justify-between ml-4"><span>3.2 Problems with the Existing System</span><span>18</span></p>
              <p className="flex justify-between ml-4"><span>3.3 Proposed Methodology Design</span><span>19</span></p>
              <p className="flex justify-between ml-4"><span>3.4 Gantt Chart</span><span>22</span></p>
              <p className="flex justify-between ml-4"><span>3.5 Budget</span><span>23</span></p>

              <p className="font-bold text-foreground mt-4">REFERENCES</p>
              <p className="flex justify-between ml-4"><span></span><span>24</span></p>

              <p className="font-bold text-foreground mt-4">APPENDICES</p>
              <p className="flex justify-between ml-4"><span></span><span>26</span></p>
            </div>
          </section>

          {/* ===== LIST OF FIGURES ===== */}
          <section className="print:break-after-page">
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-wide">List of Figures</h2>
            <div className="text-muted-foreground space-y-1">
              <p className="flex justify-between"><span>Figure 2.1: Sendy Platform Interface</span><span>10</span></p>
              <p className="flex justify-between"><span>Figure 2.2: Posta Kenya EMS Tracking Page</span><span>11</span></p>
              <p className="flex justify-between"><span>Figure 2.3: Proposed BusParcel System Architecture</span><span>14</span></p>
              <p className="flex justify-between"><span>Figure 3.1: Current Parcel Transportation Process Flow</span><span>17</span></p>
              <p className="flex justify-between"><span>Figure 3.2: Agile Scrum Framework</span><span>20</span></p>
              <p className="flex justify-between"><span>Figure 3.3: Gantt Chart – Project Timeline</span><span>22</span></p>
            </div>
          </section>

          {/* ===== LIST OF TABLES ===== */}
          <section className="print:break-after-page">
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-wide">List of Tables</h2>
            <div className="text-muted-foreground space-y-1">
              <p className="flex justify-between"><span>Table 2.1: Comparison of Existing Parcel Transportation Systems</span><span>12</span></p>
              <p className="flex justify-between"><span>Table 3.1: Project Budget Estimate</span><span>23</span></p>
            </div>
          </section>

          {/* ================================================================ */}
          {/* CHAPTER 1: INTRODUCTION */}
          {/* ================================================================ */}
          <section className="print:break-before-page">
            <h2 className="text-2xl font-bold text-center mb-10 uppercase tracking-wide text-primary">
              Chapter 1: Introduction
            </h2>

            {/* 1.1 Background */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">1.1 Background of the Study</h3>
              <p className="text-muted-foreground mb-3">
                The logistics and parcel delivery industry in Kenya has experienced significant growth over the past decade, driven by the expansion of e-commerce, increased inter-regional trade, and the rising demand for affordable goods transportation. According to the Kenya National Bureau of Statistics (KNBS, 2023), the transport and storage sector contributed approximately 8.4% to Kenya's Gross Domestic Product (GDP) in 2022, reflecting the critical role logistics plays in the national economy.
              </p>
              <p className="text-muted-foreground mb-3">
                Despite this growth, the parcel transportation landscape remains largely fragmented, with formal courier services such as DHL, G4S, and Fargo Courier dominating the urban market while leaving rural and semi-urban areas underserved. These courier services typically charge premium rates — often between KES 500 and KES 2,000 for inter-city deliveries — making them cost-prohibitive for small-scale traders, individual senders, and micro-enterprises (Muturi & Wanyoike, 2021).
              </p>
              <p className="text-muted-foreground mb-3">
                Concurrently, Kenya boasts an extensive network of intercity bus services operated by companies such as <strong>Tahmeed Coach, Buscar Services, and Mashpoa Travellers</strong>. These bus operators run scheduled routes connecting major cities like Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, and Malindi, while also serving smaller towns and rural destinations. According to the National Transport and Safety Authority (NTSA, 2023), over 3,000 registered intercity buses operate daily across Kenya's road network.
              </p>
              <p className="text-muted-foreground mb-3">
                Many of these bus operators already engage in informal parcel transportation, accepting packages from passengers and agents for delivery along their routes. However, this practice lacks formal structure, documentation, tracking capabilities, and accountability. Parcels are received without standardized receipts, there is no way for senders to track their shipments in transit, and disputes regarding lost or damaged items are difficult to resolve (Otieno, 2022).
              </p>
              <p className="text-muted-foreground">
                The convergence of widespread mobile internet penetration (at 46.7% as of 2023, per the Communications Authority of Kenya), the increasing familiarity of Kenyans with digital platforms, and the existing but unoptimized bus parcel infrastructure presents a unique opportunity. <strong>BusParcel</strong> seeks to bridge this gap by providing a smart, web-based platform that formalizes, digitizes, and optimizes parcel transportation through intercity bus services, offering an affordable and accessible alternative to conventional courier companies.
              </p>
            </div>

            {/* 1.2 Statement of the Problem */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">1.2 Statement of the Problem</h3>
              <p className="text-muted-foreground mb-3">
                The current state of parcel transportation in Kenya presents a dichotomy: formal courier services are expensive and limited in geographic reach, while informal bus-based parcel transport is affordable but lacks structure, transparency, and accountability. This creates a significant gap that affects millions of Kenyans who need to send goods across the country.
              </p>
              <p className="text-muted-foreground mb-3">
                Specifically, the following problems persist:
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>First</strong>, the absence of a unified digital platform means that senders must physically visit bus terminals, negotiate prices verbally, and rely on informal receipts — often handwritten notes — to document their shipments. This process is time-consuming, unreliable, and prone to disputes (Wanjiku, 2021).
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Second</strong>, once a parcel is handed over to a bus operator, there is no mechanism for real-time tracking. Senders have no visibility into whether their parcel has been loaded, is in transit, or has arrived at its destination. This lack of transparency erodes trust and discourages wider adoption of bus-based parcel services (Mwangi & Kimani, 2022).
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Third</strong>, multiple bus operators serve overlapping routes without any coordination or integration. A sender wishing to transport a parcel from Mombasa to Kisumu, for instance, may need to coordinate with multiple operators for connecting routes, with no system to facilitate this process.
              </p>
              <p className="text-muted-foreground">
                <strong>Fourth</strong>, bus operators themselves lack digital tools to manage their parcel logistics. Manifests are maintained manually, revenue from parcel services is poorly tracked, and opportunities for optimizing cargo space utilization are missed.
              </p>
            </div>

            {/* 1.3 Proposed Solution */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">1.3 Proposed Solution</h3>
              <p className="text-muted-foreground mb-3">
                The proposed solution is <strong>BusParcel</strong>, a smart web-based parcel transportation management system that integrates with existing intercity bus services to provide a formalized, digital, and trackable parcel delivery ecosystem. The system will serve as a bridge between parcel senders and bus operators, leveraging technology to address the identified problems.
              </p>
              <p className="text-muted-foreground mb-3">
                The BusParcel platform will comprise three core modules:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                <li><strong>Customer Portal:</strong> A responsive web interface enabling users to register, book parcel shipments, select routes and operators, calculate pricing, make payments, and track their parcels in real time using unique tracking codes.</li>
                <li><strong>Operator Dashboard:</strong> A management interface for bus operators to receive parcel bookings, generate digital manifests, update parcel statuses (received, in-transit, arrived, collected), confirm deliveries, and track revenue from parcel services.</li>
                <li><strong>Admin Panel:</strong> A system administration interface for managing user accounts, onboarding new bus operators, configuring routes and pricing, monitoring system-wide analytics, and handling dispute resolution.</li>
              </ul>
              <p className="text-muted-foreground">
                The system will be built using modern web technologies — React.js and TypeScript for the frontend, Supabase for backend services (authentication, database, and real-time subscriptions) — ensuring scalability, performance, and maintainability. Integration with M-Pesa via the Daraja API will enable seamless mobile money payments, aligning with the dominant payment method in Kenya.
              </p>
            </div>

            {/* 1.4 Justification */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">1.4 Justification of the Study</h3>
              <p className="text-muted-foreground mb-3">
                This project is justified on multiple grounds:
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Economic justification:</strong> By leveraging existing bus infrastructure rather than building a new delivery network, BusParcel can offer parcel transportation at significantly lower costs — estimated at 40–60% cheaper than conventional courier services. This makes the service accessible to small traders, market vendors, and individuals who currently cannot afford formal courier rates (Ndung'u, 2023).
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Social justification:</strong> Rural and semi-urban communities that are underserved by formal courier networks but well-connected by bus routes will gain access to reliable parcel services. This enhances social inclusion and supports the livelihoods of communities dependent on inter-regional goods exchange.
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Technological justification:</strong> Kenya's high mobile internet penetration (46.7%) and familiarity with digital platforms (M-Pesa, e-commerce) create a receptive environment for a web-based parcel management solution. The project applies proven technologies in a novel context.
              </p>
              <p className="text-muted-foreground">
                <strong>Academic justification:</strong> The project contributes to the body of knowledge on platform-based logistics solutions in developing economies, specifically exploring the integration of technology with existing informal transportation systems — an area with limited academic exploration in the Kenyan context.
              </p>
            </div>

            {/* 1.5 Goal and Objectives */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">1.5 Project Goal and Objectives</h3>

              <h4 className="font-semibold mt-4 mb-2">1.5.1 Project Goal</h4>
              <p className="text-muted-foreground mb-4">
                To design and develop a smart web-based parcel transportation management system that utilizes existing intercity bus services in Kenya for efficient, affordable, and transparent parcel delivery.
              </p>

              <h4 className="font-semibold mt-4 mb-2">1.5.2 Specific Objectives</h4>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>To analyze the current parcel transportation practices and identify integration opportunities with intercity bus operators in Kenya.</li>
                <li>To design a user-friendly web-based interface for booking, pricing, and managing parcel shipments through bus services.</li>
                <li>To implement a real-time tracking system that enables senders to monitor parcel status throughout the delivery journey.</li>
                <li>To develop an operator management dashboard for bus companies to handle parcel logistics, manifests, and revenue tracking.</li>
                <li>To integrate secure mobile payment processing (M-Pesa) for parcel booking transactions.</li>
              </ol>
            </div>

            {/* 1.6 Research Questions */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">1.6 Research Questions</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>What are the current practices, challenges, and inefficiencies in parcel transportation through intercity bus services in Kenya?</li>
                <li>How can a web-based platform be designed to facilitate seamless parcel booking and management between senders and bus operators?</li>
                <li>What technical architecture and implementation approach can support real-time parcel tracking within the bus transportation network?</li>
                <li>How can a management dashboard be developed to enable bus operators to efficiently handle parcel logistics and revenue reporting?</li>
                <li>What payment integration strategy is most appropriate for facilitating secure parcel booking transactions within the Kenyan market?</li>
              </ol>
            </div>

            {/* 1.7 Scope */}
            <div>
              <h3 className="text-lg font-bold mb-3">1.7 Scope of the Project</h3>
              <p className="text-muted-foreground mb-3">
                The BusParcel system will encompass the following within its scope:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><strong>Functional scope:</strong> User registration and authentication, parcel booking with route and operator selection, automated pricing calculation based on weight, size, and distance, real-time parcel tracking via unique codes, operator management dashboard, admin panel for system configuration, and M-Pesa payment integration.</li>
                <li><strong>Geographic scope:</strong> Initial deployment will target major intercity routes including Nairobi–Mombasa, Nairobi–Kisumu, Nairobi–Eldoret, Mombasa–Malindi, and Nairobi–Nakuru, with provisions for route expansion.</li>
                <li><strong>Operator scope:</strong> Initial partnership with three bus companies — Tahmeed Coach, Buscar Services, and Mashpoa Travellers — with a scalable architecture accommodating additional operators.</li>
              </ul>
              <p className="text-muted-foreground mb-3">
                <strong>Limitations:</strong>
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>The system will not handle physical parcel pickup or last-mile delivery; senders must deliver parcels to designated bus terminals.</li>
                <li>GPS-based real-time bus tracking is outside the initial scope; tracking will be status-based (received, in-transit, arrived, collected).</li>
                <li>The platform will not process cash payments; all transactions will be digital through M-Pesa.</li>
                <li>Insurance and liability for damaged parcels will be governed by individual operator policies, not the platform.</li>
              </ul>
            </div>
          </section>

          {/* ================================================================ */}
          {/* CHAPTER 2: LITERATURE REVIEW */}
          {/* ================================================================ */}
          <section className="print:break-before-page">
            <h2 className="text-2xl font-bold text-center mb-10 uppercase tracking-wide text-primary">
              Chapter 2: Literature Review
            </h2>

            {/* 2.1 Review of Existing Systems */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">2.1 Review of Existing Systems</h3>
              <p className="text-muted-foreground mb-4">
                This section examines existing parcel transportation systems in Kenya and the broader East African region, analysing their features, strengths, and limitations to establish the context for the proposed BusParcel system.
              </p>

              <h4 className="font-semibold mt-4 mb-2">2.1.1 Sendy (Kenya)</h4>
              <p className="text-muted-foreground mb-3">
                Sendy is a Nairobi-based logistics technology platform founded in 2014 that connects businesses with a network of drivers and riders for last-mile delivery services. The platform operates through a web and mobile application, enabling users to request pickup and delivery of parcels within and between cities. Sendy uses GPS tracking for real-time delivery monitoring and supports multiple payment methods including M-Pesa (Sendy, 2023).
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Strengths:</strong> Real-time tracking, digital payment integration, user-friendly interface, wide urban coverage.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Limitations:</strong> Primarily urban-focused with limited rural reach; operates its own fleet network rather than leveraging existing transport infrastructure; pricing remains relatively high for individual senders (KES 300–1,500 for intra-city deliveries); not designed for intercity bus-based parcel transport.
              </p>

              <h4 className="font-semibold mt-4 mb-2">2.1.2 Posta Kenya (EMS)</h4>
              <p className="text-muted-foreground mb-3">
                The Postal Corporation of Kenya (Posta Kenya) is the national postal service provider, offering Express Mail Service (EMS), registered mail, and parcel post services through a network of over 600 post offices nationwide. Posta Kenya provides tracking for EMS parcels through its website and serves both domestic and international shipments (Posta Kenya, 2023).
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Strengths:</strong> Nationwide presence including rural areas, government backing, international connectivity, established brand trust.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Limitations:</strong> Slow delivery times (3–7 days for domestic parcels); outdated web interface with limited digital capabilities; tracking often unreliable with delayed status updates; declining service quality and public trust (Ochieng, 2022); high operational costs leading to competitive pricing disadvantages.
              </p>

              <h4 className="font-semibold mt-4 mb-2">2.1.3 Informal Bus Parcel Systems</h4>
              <p className="text-muted-foreground mb-3">
                The most directly relevant existing system is the informal practice of sending parcels through intercity buses. Across Kenya, individuals and small businesses routinely hand over packages to bus conductors, terminal agents, or directly to bus offices for transportation along bus routes. This practice is widespread, particularly on routes served by operators like Tahmeed, Buscar, Mashpoa, Easy Coach, and others (Kamau, 2021).
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Strengths:</strong> Extremely affordable (KES 100–500 for most parcels); leverages existing transport infrastructure with no additional vehicle costs; wide geographic coverage including rural areas; fast delivery aligned with bus schedules (same-day or next-day for most routes).
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Limitations:</strong> No digital platform or formal booking system; no tracking capability once parcel is handed over; handwritten or no receipts; accountability and dispute resolution are informal and often ineffective; no standardized pricing; limited parcel size and weight guidelines; no insurance or liability framework; revenue from parcels is poorly documented by operators.
              </p>

              <h4 className="font-semibold mt-4 mb-2">2.1.4 Comparative Analysis</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-muted-foreground border border-border rounded-lg overflow-hidden text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Feature</th>
                      <th className="text-center p-3 font-semibold text-foreground">Sendy</th>
                      <th className="text-center p-3 font-semibold text-foreground">Posta Kenya</th>
                      <th className="text-center p-3 font-semibold text-foreground">Informal Bus</th>
                      <th className="text-center p-3 font-semibold text-foreground">BusParcel (Proposed)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Online Booking", "✓", "Partial", "✗", "✓"],
                      ["Real-time Tracking", "✓", "Partial", "✗", "✓"],
                      ["Rural Coverage", "Limited", "✓", "✓", "✓"],
                      ["Affordability", "Moderate", "Moderate", "High", "High"],
                      ["Digital Payments", "✓", "Partial", "✗", "✓"],
                      ["Operator Dashboard", "✓", "Internal", "✗", "✓"],
                      ["Uses Existing Infra", "✗", "✓", "✓", "✓"],
                      ["Standardized Pricing", "✓", "✓", "✗", "✓"],
                      ["Digital Documentation", "✓", "Partial", "✗", "✓"],
                    ].map(([feature, sendy, posta, informal, busparcel], idx) => (
                      <tr key={idx} className="border-t border-border">
                        <td className="p-3 font-medium">{feature}</td>
                        <td className="text-center p-3">{sendy}</td>
                        <td className="text-center p-3">{posta}</td>
                        <td className="text-center p-3">{informal}</td>
                        <td className="text-center p-3 font-semibold text-primary">{busparcel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-sm text-muted-foreground mt-1 italic">Table 2.1: Comparison of Existing Parcel Transportation Systems</p>
              </div>
            </div>

            {/* 2.2 Review of Proposed System */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">2.2 Review of the Proposed System</h3>
              <p className="text-muted-foreground mb-3">
                The proposed BusParcel system is grounded in established theoretical frameworks and technological paradigms that inform its design and anticipated adoption.
              </p>

              <h4 className="font-semibold mt-4 mb-2">2.2.1 Technology Acceptance Model (TAM)</h4>
              <p className="text-muted-foreground mb-3">
                Davis's (1989) Technology Acceptance Model posits that user adoption of a new technology is primarily determined by two factors: <strong>Perceived Usefulness (PU)</strong> — the degree to which a user believes the system will enhance their task performance — and <strong>Perceived Ease of Use (PEOU)</strong> — the degree to which using the system is free of effort.
              </p>
              <p className="text-muted-foreground mb-4">
                BusParcel addresses PU by offering tangible benefits: cost savings (40–60% reduction), time savings (online booking vs. terminal visits), and transparency (real-time tracking). PEOU is addressed through intuitive UI design, familiar interaction patterns (similar to e-commerce platforms Kenyans already use), and M-Pesa payment integration, which 83% of Kenyan adults are familiar with (CBK, 2023).
              </p>

              <h4 className="font-semibold mt-4 mb-2">2.2.2 Two-Sided Market Theory</h4>
              <p className="text-muted-foreground mb-3">
                Rochet and Tirole (2003) describe two-sided markets as platforms that serve two distinct user groups who provide network benefits to each other. BusParcel functions as a two-sided market platform connecting <strong>parcel senders</strong> (demand side) with <strong>bus operators</strong> (supply side). The platform creates value by reducing transaction costs, formalizing interactions, and generating network effects — as more operators join, senders have more route options, and as more senders use the platform, operators gain additional revenue, creating a virtuous growth cycle.
              </p>

              <h4 className="font-semibold mt-4 mb-2">2.2.3 Platform-Based Logistics in Developing Economies</h4>
              <p className="text-muted-foreground mb-3">
                Recent scholarship has highlighted the potential of digital platforms to transform logistics in developing economies. Ojala (2022) argues that platforms leveraging existing infrastructure — rather than building new logistics networks — are more sustainable and scalable in contexts where capital investment is limited. This aligns directly with BusParcel's approach of digitizing an existing informal system rather than creating a new delivery network.
              </p>
              <p className="text-muted-foreground">
                Similarly, Ndemo and Weiss (2017) document how Kenyan innovators have successfully deployed digital solutions that build upon existing behaviours and infrastructure (e.g., M-Pesa building on existing mobile phone usage patterns). BusParcel follows this proven paradigm by digitizing the already-popular practice of sending parcels through buses.
              </p>
            </div>

            {/* 2.3 Justification of New System */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">2.3 Justification of the New System</h3>
              <p className="text-muted-foreground mb-3">
                The literature review reveals a clear gap in the market and in academic research: while platforms like Sendy have digitized urban last-mile delivery and Posta Kenya provides nationwide but aging postal services, <strong>no existing system in Kenya specifically digitizes and optimizes the intercity bus-based parcel transportation segment</strong>.
              </p>
              <p className="text-muted-foreground mb-3">
                The informal bus parcel system, despite its affordability and geographic reach, suffers from fundamental deficiencies in transparency, accountability, and efficiency that can only be addressed through digital intervention. BusParcel is justified because it:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                <li><strong>Fills a market gap:</strong> No existing platform serves the bus-based parcel transportation niche, despite it being one of the most widely used methods of goods transportation in Kenya.</li>
                <li><strong>Builds on proven infrastructure:</strong> Rather than requiring capital-intensive investment in new delivery networks, BusParcel leverages the existing 3,000+ intercity buses already traversing Kenyan routes daily.</li>
                <li><strong>Addresses documented problems:</strong> The identified issues of no tracking, no digital documentation, no standardized pricing, and no accountability are directly resolved through the proposed system's features.</li>
                <li><strong>Aligns with technology adoption trends:</strong> Kenya's high mobile internet penetration, M-Pesa ubiquity, and growing comfort with digital platforms create a favourable environment for adoption.</li>
                <li><strong>Creates mutual value:</strong> The platform benefits both senders (through transparency, convenience, and cost savings) and operators (through additional documented revenue, efficient logistics management, and customer acquisition).</li>
              </ol>
            </div>
          </section>

          {/* ================================================================ */}
          {/* CHAPTER 3: METHODOLOGY */}
          {/* ================================================================ */}
          <section className="print:break-before-page">
            <h2 className="text-2xl font-bold text-center mb-10 uppercase tracking-wide text-primary">
              Chapter 3: Methodology
            </h2>

            {/* 3.1 Analysis of Existing System */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">3.1 Analysis of the Existing System</h3>
              <p className="text-muted-foreground mb-3">
                The existing system for parcel transportation through intercity buses in Kenya operates through an informal, manual process. An analysis of this system was conducted through preliminary field observations at bus terminals in Nairobi (Machakos Country Bus Station, Mfangano Street) and interviews with bus operators and agents.
              </p>
              <p className="text-muted-foreground mb-3">
                <strong>Current Process Flow:</strong>
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                <li>The sender physically visits the bus terminal with the parcel.</li>
                <li>The sender locates the relevant bus operator's office or agent for their desired route.</li>
                <li>Price is negotiated verbally based on parcel size, weight, and destination.</li>
                <li>Payment is made in cash (sometimes M-Pesa to the agent's personal number).</li>
                <li>A handwritten receipt may or may not be issued.</li>
                <li>The parcel is stored in the terminal until the next bus departure.</li>
                <li>The parcel is loaded into the bus luggage compartment.</li>
                <li>At the destination terminal, the parcel is offloaded and stored until the recipient collects it.</li>
                <li>The recipient is contacted via phone call by the agent.</li>
                <li>The recipient collects the parcel, sometimes paying a collection fee.</li>
              </ol>
              <p className="text-muted-foreground">
                <em>Figure 3.1: Current Parcel Transportation Process Flow</em> — This process is entirely manual, with no digital touchpoints, no automated notifications, and no systematic record-keeping.
              </p>
            </div>

            {/* 3.2 Problems with Existing System */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">3.2 Problems with the Existing System</h3>
              <p className="text-muted-foreground mb-3">
                Based on the analysis in Section 3.1, the following specific problems were identified:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <strong>No digital booking mechanism:</strong> Senders must physically visit terminals, which is time-consuming and inconvenient, especially for those in areas distant from major bus stations.
                </li>
                <li>
                  <strong>Absence of tracking:</strong> Once a parcel is handed over, the sender has zero visibility into its status. The only confirmation comes when the recipient calls to confirm collection, which may take hours or days.
                </li>
                <li>
                  <strong>Inconsistent and opaque pricing:</strong> Prices vary between agents, times of day, and are subject to negotiation. Senders cannot compare prices across operators or predict costs in advance.
                </li>
                <li>
                  <strong>Poor documentation:</strong> The lack of standardized receipts makes it impossible to establish clear accountability. In cases of loss or damage, senders have no formal recourse.
                </li>
                <li>
                  <strong>Revenue leakage for operators:</strong> Because parcel income is often handled informally by individual agents, operators cannot accurately track parcel revenue or optimize their cargo capacity.
                </li>
                <li>
                  <strong>No integration across operators:</strong> Parcels requiring transit through multiple operators' routes cannot be coordinated through any existing system.
                </li>
                <li>
                  <strong>Security concerns:</strong> Without proper documentation and identification, parcels are vulnerable to theft, misplacement, or collection by unauthorized persons.
                </li>
              </ol>
            </div>

            {/* 3.3 Proposed Methodology Design */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">3.3 Proposed Methodology Design</h3>

              <h4 className="font-semibold mt-4 mb-2">3.3.1 Research Approach</h4>
              <p className="text-muted-foreground mb-3">
                The project adopts the <strong>Design Science Research (DSR)</strong> methodology as the overarching research framework. DSR, as articulated by Hevner et al. (2004), is appropriate for information systems research that involves the creation of innovative IT artefacts to solve identified problems. The BusParcel platform constitutes such an artefact — a web-based system designed to address specific logistical challenges.
              </p>
              <p className="text-muted-foreground mb-4">
                DSR was chosen over alternative research approaches (such as Action Research or Case Study) because the project's primary output is a technological artefact (the web platform) rather than a theoretical contribution. DSR's emphasis on iterative design, development, and evaluation aligns with the project's objectives.
              </p>

              <h4 className="font-semibold mt-4 mb-2">3.3.2 System Development Methodology</h4>
              <p className="text-muted-foreground mb-3">
                For the software development process, the project will employ the <strong>Agile methodology</strong>, specifically the <strong>Scrum framework</strong>. Agile was selected over Waterfall and Spiral methodologies for the following reasons:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-3">
                <li><strong>Iterative delivery:</strong> Agile allows incremental development and testing, enabling early feedback and course correction.</li>
                <li><strong>Flexibility:</strong> Requirements for a novel platform like BusParcel may evolve as stakeholder feedback is incorporated; Agile accommodates this.</li>
                <li><strong>Time-bound sprints:</strong> The 14-week project timeline is well-suited to Scrum's sprint-based structure, with each sprint producing a potentially shippable increment.</li>
                <li><strong>Stakeholder involvement:</strong> Regular sprint reviews facilitate continuous engagement with stakeholders (bus operators, potential users).</li>
              </ul>

              <p className="text-muted-foreground mb-3">
                <strong>Sprint Plan (6 Sprints × ~2.3 weeks):</strong>
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-muted-foreground border border-border rounded-lg overflow-hidden text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Sprint</th>
                      <th className="text-left p-3 font-semibold text-foreground">Duration</th>
                      <th className="text-left p-3 font-semibold text-foreground">Deliverables</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">Sprint 1</td>
                      <td className="p-3">Weeks 1–2</td>
                      <td className="p-3">Requirements analysis, stakeholder interviews, system requirements specification</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">Sprint 2</td>
                      <td className="p-3">Weeks 3–5</td>
                      <td className="p-3">System architecture design, database schema, UI/UX wireframes and prototypes</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">Sprint 3</td>
                      <td className="p-3">Weeks 6–8</td>
                      <td className="p-3">Customer portal development: registration, booking, route selection, pricing</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">Sprint 4</td>
                      <td className="p-3">Weeks 9–10</td>
                      <td className="p-3">Operator dashboard, tracking system, payment integration (M-Pesa)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">Sprint 5</td>
                      <td className="p-3">Weeks 11–12</td>
                      <td className="p-3">Admin panel, system integration testing, user acceptance testing</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-medium">Sprint 6</td>
                      <td className="p-3">Weeks 13–14</td>
                      <td className="p-3">Bug fixes, deployment, documentation, final presentation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-semibold mt-4 mb-2">3.3.3 Data Collection Methods</h4>
              <p className="text-muted-foreground mb-3">
                A mixed-methods approach will be used for requirements gathering:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><strong>Interviews:</strong> Semi-structured interviews with representatives of Tahmeed, Buscar, and Mashpoa to understand their operational workflows, parcel handling processes, and willingness to adopt a digital platform. Target sample: 6–9 operator representatives across the three companies.</li>
                <li><strong>Surveys:</strong> Online questionnaires distributed to potential users (parcel senders) to assess their current practices, pain points, feature priorities, and willingness to use a web-based parcel platform. Target sample: 50–100 respondents, distributed via social media and bus terminal contacts.</li>
                <li><strong>Observation:</strong> Direct observation of parcel handling processes at 3–4 major bus terminals in Nairobi and Mombasa to document current workflows and identify digitization opportunities.</li>
                <li><strong>Document analysis:</strong> Review of existing operator tariffs, route schedules, and any existing parcel documentation to inform system design.</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">3.3.4 Technology Stack</h4>
              <p className="text-muted-foreground mb-3">
                The system will be developed using the following technologies, selected for their suitability, performance, and alignment with industry best practices:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-muted-foreground border border-border rounded-lg overflow-hidden text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Layer</th>
                      <th className="text-left p-3 font-semibold text-foreground">Technology</th>
                      <th className="text-left p-3 font-semibold text-foreground">Justification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3">Frontend</td>
                      <td className="p-3">React.js, TypeScript</td>
                      <td className="p-3">Component-based architecture, type safety, large ecosystem</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">UI Framework</td>
                      <td className="p-3">Tailwind CSS, shadcn/ui</td>
                      <td className="p-3">Utility-first CSS, accessible component library</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Backend</td>
                      <td className="p-3">Supabase (PostgreSQL)</td>
                      <td className="p-3">Open-source BaaS with auth, database, real-time, and storage</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Authentication</td>
                      <td className="p-3">Supabase Auth</td>
                      <td className="p-3">Built-in email/password and OAuth support</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Payments</td>
                      <td className="p-3">M-Pesa (Daraja API)</td>
                      <td className="p-3">Dominant mobile payment platform in Kenya (83% penetration)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Hosting</td>
                      <td className="p-3">Lovable Cloud</td>
                      <td className="p-3">Integrated deployment with CI/CD pipeline</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Version Control</td>
                      <td className="p-3">Git / GitHub</td>
                      <td className="p-3">Industry-standard source code management</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.4 Gantt Chart */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">3.4 Gantt Chart</h3>
              <p className="text-muted-foreground mb-3">
                <em>Figure 3.3: Gantt Chart – Project Timeline</em>
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground border border-border rounded-lg overflow-hidden text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-2 font-semibold text-foreground">Activity</th>
                      {Array.from({ length: 14 }, (_, i) => (
                        <th key={i} className="text-center p-2 font-semibold text-foreground text-xs">W{i + 1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { activity: "Requirements & Analysis", start: 0, end: 2 },
                      { activity: "System Design & Prototyping", start: 2, end: 5 },
                      { activity: "Customer Portal Dev", start: 5, end: 8 },
                      { activity: "Operator Dashboard & Tracking", start: 8, end: 10 },
                      { activity: "Admin Panel & Integration Testing", start: 10, end: 12 },
                      { activity: "Deployment & Documentation", start: 12, end: 14 },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-t border-border">
                        <td className="p-2 text-xs font-medium whitespace-nowrap">{row.activity}</td>
                        {Array.from({ length: 14 }, (_, i) => (
                          <td key={i} className="p-0">
                            {i >= row.start && i < row.end ? (
                              <div className="h-5 bg-primary/70 rounded-sm mx-0.5" />
                            ) : null}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.5 Budget */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">3.5 Budget</h3>
              <p className="text-muted-foreground mb-3"><em>Table 3.1: Project Budget Estimate</em></p>
              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Item</th>
                      <th className="text-left p-3 font-semibold text-foreground">Description</th>
                      <th className="text-right p-3 font-semibold text-foreground">Cost (KES)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3">Domain Name</td>
                      <td className="p-3">.co.ke domain registration (1 year)</td>
                      <td className="text-right p-3">1,500</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Web Hosting</td>
                      <td className="p-3">Cloud hosting subscription (1 year)</td>
                      <td className="text-right p-3">3,500</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Development Tools</td>
                      <td className="p-3">Open-source (React, Supabase, VS Code)</td>
                      <td className="text-right p-3">0</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">SMS/Notification Services</td>
                      <td className="p-3">Africa's Talking SMS API credits</td>
                      <td className="text-right p-3">3,000</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Research & Data Collection</td>
                      <td className="p-3">Transport, printing questionnaires, airtime</td>
                      <td className="text-right p-3">10,000</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Documentation & Printing</td>
                      <td className="p-3">Proposal and report printing and binding</td>
                      <td className="text-right p-3">2,000</td>
                    </tr>
                    <tr className="border-t border-border bg-muted">
                      <td className="p-3 font-bold text-foreground" colSpan={2}>Total</td>
                      <td className="text-right p-3 font-bold text-foreground">KES 20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ===== REFERENCES ===== */}
          <section className="print:break-before-page">
            <h2 className="text-2xl font-bold text-center mb-10 uppercase tracking-wide text-primary">References</h2>
            <div className="text-muted-foreground space-y-4 text-sm" style={{ textAlign: "left" }}>
              <p>Central Bank of Kenya (CBK). (2023). <em>National Payment Systems Report 2023</em>. Central Bank of Kenya.</p>
              <p>Communications Authority of Kenya. (2023). <em>Fourth Quarter Sector Statistics Report for the Financial Year 2022/2023</em>. Communications Authority of Kenya.</p>
              <p>Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. <em>MIS Quarterly</em>, 13(3), 319–340.</p>
              <p>Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. <em>MIS Quarterly</em>, 28(1), 75–105.</p>
              <p>Kamau, P. (2021). Informal logistics networks and parcel transportation in East Africa. <em>Journal of Transport Geography</em>, 94, 103–112.</p>
              <p>Kenya National Bureau of Statistics (KNBS). (2023). <em>Economic Survey 2023</em>. Government Printer, Nairobi.</p>
              <p>Muturi, J. M., & Wanyoike, D. (2021). Factors influencing the choice of courier services among SMEs in Nairobi County. <em>International Journal of Business Management</em>, 6(2), 45–58.</p>
              <p>Mwangi, E. K., & Kimani, S. W. (2022). Digital transformation of informal transport systems in sub-Saharan Africa: Challenges and opportunities. <em>African Journal of Information Systems</em>, 14(3), 287–304.</p>
              <p>National Transport and Safety Authority (NTSA). (2023). <em>Annual Transport Statistics Report 2022</em>. NTSA, Nairobi.</p>
              <p>Ndemo, B., & Weiss, T. (Eds.). (2017). <em>Digital Kenya: An Entrepreneurial Revolution in the Making</em>. Palgrave Macmillan.</p>
              <p>Ndung'u, N. (2023). Cost analysis of last-mile delivery services in Kenya's logistics sector. <em>East African Economic Review</em>, 5(1), 112–128.</p>
              <p>Ochieng, D. O. (2022). Declining service quality in Kenya's postal corporation: Causes and remedies. <em>Kenya Management Review</em>, 8(2), 67–82.</p>
              <p>Ojala, A. (2022). Platform-based logistics solutions for developing economies: A systematic review. <em>International Journal of Logistics Management</em>, 33(4), 1123–1145.</p>
              <p>Otieno, F. (2022). The role of intercity bus services in Kenya's informal parcel transportation network. <em>Transportation Research Procedia</em>, 61, 234–245.</p>
              <p>Posta Kenya. (2023). <em>Annual Report and Financial Statements 2022/2023</em>. Postal Corporation of Kenya.</p>
              <p>Rochet, J. C., & Tirole, J. (2003). Platform competition in two-sided markets. <em>Journal of the European Economic Association</em>, 1(4), 990–1029.</p>
              <p>Sendy. (2023). <em>About Sendy – How It Works</em>. Retrieved from https://www.sendy.co.ke</p>
              <p>Wanjiku, M. (2021). Consumer trust in informal parcel delivery services: A Kenyan perspective. <em>Journal of Consumer Behaviour</em>, 20(5), 1156–1170.</p>
            </div>
          </section>

          {/* ===== APPENDICES ===== */}
          <section className="print:break-before-page">
            <h2 className="text-2xl font-bold text-center mb-10 uppercase tracking-wide text-primary">Appendices</h2>

            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Appendix 1: Interview Guide for Bus Operators</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>How does your company currently handle parcel transportation?</li>
                <li>What is the approximate volume of parcels your company transports per day/week?</li>
                <li>How are parcel prices determined?</li>
                <li>What challenges do you face in managing parcel logistics?</li>
                <li>How do you currently document and track parcels?</li>
                <li>Would your company be willing to adopt a digital platform for parcel management?</li>
                <li>What features would you consider essential in such a platform?</li>
                <li>How do you handle parcel loss, damage, or disputes?</li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Appendix 2: Survey Questionnaire for Parcel Senders</h3>
              <p className="text-muted-foreground mb-3 font-semibold">Section A: Demographics</p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                <li>Age group: 18–25 / 26–35 / 36–45 / Above 45</li>
                <li>Gender: Male / Female / Prefer not to say</li>
                <li>Occupation: Student / Employed / Self-employed / Business owner</li>
                <li>County of residence: _______________</li>
              </ol>
              <p className="text-muted-foreground mb-3 font-semibold">Section B: Parcel Sending Habits</p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4 mb-4" start={5}>
                <li>How often do you send parcels across counties? (Weekly / Monthly / Occasionally / Rarely)</li>
                <li>Which method do you primarily use? (Courier service / Bus service / Personal delivery / Other)</li>
                <li>If bus service, which operator(s) do you use? _______________</li>
                <li>Average amount spent per parcel shipment (KES): _______________</li>
              </ol>
              <p className="text-muted-foreground mb-3 font-semibold">Section C: Pain Points & Preferences</p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-1 ml-4" start={9}>
                <li>Rate your satisfaction with current parcel services (1–5 scale)</li>
                <li>What are the biggest challenges you face? (Multiple choice: cost, tracking, speed, trust, accessibility)</li>
                <li>Would you use a web-based platform for booking and tracking bus parcels? (Yes / No / Maybe)</li>
                <li>Which features would be most important? (Online booking / Tracking / M-Pesa payment / Price comparison / Digital receipts)</li>
              </ol>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2026 BusParcel Project. Pwani University — BSc Computer Science.</p>
          </footer>

        </article>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { 
            print-color-adjust: exact; 
            -webkit-print-color-adjust: exact;
            font-family: 'Times New Roman', Times, serif;
            font-size: 12pt;
            line-height: 1.5;
          }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:p-0 { padding: 0 !important; }
          .print\\:break-after-page { break-after: page; }
          .print\\:break-before-page { break-before: page; }
        }
      `}</style>
    </div>
  );
};

export default Proposal;
