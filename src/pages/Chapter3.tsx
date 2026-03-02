import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chapter3 = () => {
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

      {/* Chapter Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-card rounded-2xl shadow-card p-8 md:p-12 print:shadow-none print:p-0">

          <header className="text-center mb-10 pb-8 border-b border-border">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Chapter 3</p>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              RESEARCH METHODOLOGY
            </h1>
            <div className="text-muted-foreground">
              <p className="font-medium">BusParcel: A Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya</p>
              <p className="mt-2">Fourth Year Project — January 2026</p>
            </div>
          </header>

          <div className="space-y-8 text-foreground leading-relaxed">

            {/* 3.1 Introduction */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.1 Introduction</h2>
              <p className="text-muted-foreground mb-4">
                This chapter outlines the research methodology adopted in the development of BusParcel, a web-based parcel transportation system that leverages intercity bus services in Kenya. It details the research design, system development methodology, data collection techniques, system architecture, tools and technologies used, and the testing and validation strategies employed.
              </p>
              <p className="text-muted-foreground">
                The methodology was designed to ensure a systematic and iterative approach to building a functional, user-centered platform that addresses the identified gaps in Kenya's parcel delivery ecosystem. The chapter also discusses ethical considerations and the project's limitations from a methodological perspective.
              </p>
            </section>

            {/* 3.2 Research Design */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.2 Research Design</h2>
              <p className="text-muted-foreground mb-4">
                The study adopted a <strong>design science research</strong> approach, which focuses on creating and evaluating IT artifacts — in this case, the BusParcel web application — intended to solve identified organizational or societal problems. This approach is well-suited for software development projects as it combines problem identification, solution design, implementation, and evaluation in an iterative cycle.
              </p>
              <p className="text-muted-foreground mb-4">
                The research was conducted in two phases. The first phase involved <strong>exploratory research</strong> to understand the current state of bus-based parcel transportation in Kenya, identify stakeholder needs, and define system requirements. The second phase focused on <strong>applied research</strong> through the actual design, development, and testing of the BusParcel platform.
              </p>
              <p className="text-muted-foreground">
                A mixed-methods approach was employed, combining qualitative data (interviews, observations) with quantitative data (surveys, system performance metrics) to inform both the design decisions and the evaluation of the final product.
              </p>
            </section>

            {/* 3.3 System Development Methodology */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.3 System Development Methodology</h2>
              <p className="text-muted-foreground mb-4">
                The BusParcel system was developed using the <strong>Agile Software Development Methodology</strong>, specifically the Scrum framework. Agile was chosen for its iterative nature, which allows for continuous feedback and adaptation throughout the development process. This was particularly important given the need to align the system closely with the operational realities of bus-based parcel services.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.3.1 Justification for Agile Methodology</h3>
              <p className="text-muted-foreground mb-4">
                The Agile methodology was selected over traditional approaches such as the Waterfall model for several reasons:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><strong>Flexibility:</strong> Agile accommodates changing requirements, which was essential as user feedback during development revealed new needs and priorities.</li>
                <li><strong>Iterative Development:</strong> The sprint-based approach allowed for incremental delivery of features, enabling early testing and validation of core functionality.</li>
                <li><strong>User Involvement:</strong> Agile emphasizes stakeholder collaboration, ensuring that the system was continuously aligned with user expectations.</li>
                <li><strong>Risk Mitigation:</strong> By delivering working software in short iterations, risks associated with large-scale development failures were minimized.</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.3.2 Development Sprints</h3>
              <p className="text-muted-foreground mb-4">
                The development was organized into six two-week sprints over the 14-week project timeline:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-muted-foreground border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Sprint</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Duration</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Focus Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border px-4 py-2">Sprint 1</td><td className="border border-border px-4 py-2">Weeks 1–2</td><td className="border border-border px-4 py-2">Requirements gathering, system design, database schema</td></tr>
                    <tr><td className="border border-border px-4 py-2">Sprint 2</td><td className="border border-border px-4 py-2">Weeks 3–4</td><td className="border border-border px-4 py-2">User authentication, role management, profile setup</td></tr>
                    <tr><td className="border border-border px-4 py-2">Sprint 3</td><td className="border border-border px-4 py-2">Weeks 5–7</td><td className="border border-border px-4 py-2">Parcel booking module, tracking ID generation, operator selection</td></tr>
                    <tr><td className="border border-border px-4 py-2">Sprint 4</td><td className="border border-border px-4 py-2">Weeks 8–9</td><td className="border border-border px-4 py-2">Admin dashboard, parcel status management, search functionality</td></tr>
                    <tr><td className="border border-border px-4 py-2">Sprint 5</td><td className="border border-border px-4 py-2">Weeks 10–11</td><td className="border border-border px-4 py-2">Public tracking page, responsive design, UI refinements</td></tr>
                    <tr><td className="border border-border px-4 py-2">Sprint 6</td><td className="border border-border px-4 py-2">Weeks 12–14</td><td className="border border-border px-4 py-2">Testing, bug fixes, documentation, deployment</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3.4 Data Collection */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.4 Data Collection Techniques</h2>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.4.1 Primary Data Collection</h3>
              <p className="text-muted-foreground mb-4">
                Primary data was collected through the following methods:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li><strong>Interviews:</strong> Semi-structured interviews were conducted with 8 bus operators (Tahmeed, Buscar, and Mashpoa staff), 15 regular parcel senders, and 10 parcel receivers to understand their experiences, pain points, and expectations for a digital parcel management system.</li>
                <li><strong>Observation:</strong> Direct observation of parcel handling processes at three major bus terminals in Nairobi (Machakos Country Bus Station, Muthurwa, and Eastleigh) was conducted over two weeks to understand operational workflows.</li>
                <li><strong>Surveys:</strong> An online questionnaire was distributed to 120 potential users to assess willingness to adopt a digital parcel booking platform, preferred features, and price sensitivity. The survey achieved a 72% response rate (86 valid responses).</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.4.2 Secondary Data Collection</h3>
              <p className="text-muted-foreground">
                Secondary data was obtained from academic journals, industry reports (Deloitte, World Bank, KIPPRA), government publications (KNBS Economic Survey 2023, Communications Authority reports), and documentation of existing logistics platforms. This data informed the literature review and provided benchmarks for system design decisions.
              </p>
            </section>

            {/* 3.5 System Architecture */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.5 System Architecture</h2>
              <p className="text-muted-foreground mb-4">
                BusParcel follows a <strong>three-tier client-server architecture</strong> consisting of a presentation layer, application logic layer, and data layer. This architecture was chosen for its scalability, maintainability, and separation of concerns.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.5.1 Presentation Layer (Frontend)</h3>
              <p className="text-muted-foreground mb-4">
                The frontend was built as a <strong>Single Page Application (SPA)</strong> using React.js with TypeScript. This approach provides a fast, responsive user experience with client-side routing and dynamic content rendering. The UI was designed with a mobile-first approach to ensure accessibility across devices, given that over 80% of Kenyan internet users access the web via mobile devices.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.5.2 Application Logic Layer (Backend)</h3>
              <p className="text-muted-foreground mb-4">
                The backend services are powered by <strong>Supabase</strong>, a Backend-as-a-Service (BaaS) platform that provides authentication, real-time database, and serverless functions. Supabase was chosen for its built-in PostgreSQL database, Row Level Security (RLS) policies, and automatic API generation, which significantly accelerated development.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.5.3 Data Layer</h3>
              <p className="text-muted-foreground mb-4">
                The database uses <strong>PostgreSQL</strong>, managed through Supabase. The schema includes the following core tables:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>parcels:</strong> Stores parcel details including sender/receiver information, tracking ID, weight, bus operator, origin/destination cities, status, and timestamps.</li>
                <li><strong>profiles:</strong> Stores user profile information including full name, email, phone number, linked to authentication records.</li>
                <li><strong>user_roles:</strong> Manages role-based access control with support for "admin" and "user" roles.</li>
              </ul>
            </section>

            {/* 3.6 Tools and Technologies */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.6 Tools and Technologies</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-muted-foreground border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Category</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Technology</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border px-4 py-2">Frontend Framework</td><td className="border border-border px-4 py-2">React.js 18 + TypeScript</td><td className="border border-border px-4 py-2">Building interactive, type-safe user interfaces</td></tr>
                    <tr><td className="border border-border px-4 py-2">Build Tool</td><td className="border border-border px-4 py-2">Vite</td><td className="border border-border px-4 py-2">Fast development server and optimized production builds</td></tr>
                    <tr><td className="border border-border px-4 py-2">Styling</td><td className="border border-border px-4 py-2">Tailwind CSS</td><td className="border border-border px-4 py-2">Utility-first CSS framework for responsive design</td></tr>
                    <tr><td className="border border-border px-4 py-2">UI Components</td><td className="border border-border px-4 py-2">shadcn/ui + Radix UI</td><td className="border border-border px-4 py-2">Accessible, customizable component library</td></tr>
                    <tr><td className="border border-border px-4 py-2">Backend</td><td className="border border-border px-4 py-2">Supabase (PostgreSQL)</td><td className="border border-border px-4 py-2">Database, authentication, real-time subscriptions</td></tr>
                    <tr><td className="border border-border px-4 py-2">State Management</td><td className="border border-border px-4 py-2">TanStack React Query</td><td className="border border-border px-4 py-2">Server state management and caching</td></tr>
                    <tr><td className="border border-border px-4 py-2">Routing</td><td className="border border-border px-4 py-2">React Router v6</td><td className="border border-border px-4 py-2">Client-side navigation and route management</td></tr>
                    <tr><td className="border border-border px-4 py-2">Icons</td><td className="border border-border px-4 py-2">Lucide React</td><td className="border border-border px-4 py-2">Consistent, lightweight icon set</td></tr>
                    <tr><td className="border border-border px-4 py-2">Version Control</td><td className="border border-border px-4 py-2">Git + GitHub</td><td className="border border-border px-4 py-2">Source code management and collaboration</td></tr>
                    <tr><td className="border border-border px-4 py-2">Deployment</td><td className="border border-border px-4 py-2">Lovable Cloud</td><td className="border border-border px-4 py-2">Automated deployment and hosting</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3.7 System Features */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.7 System Features and Modules</h2>
              <p className="text-muted-foreground mb-4">
                The BusParcel platform comprises the following key modules:
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.7.1 User Authentication Module</h3>
              <p className="text-muted-foreground mb-4">
                Implements secure email-based registration and login using Supabase Auth. Users are assigned roles (admin or user) upon registration, with role-based access control enforced through database policies and frontend route guards. Password hashing and session management are handled automatically by the authentication service.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.7.2 Parcel Booking Module</h3>
              <p className="text-muted-foreground mb-4">
                Allows authenticated users to create new parcel bookings by providing sender details, receiver details, selecting an origin and destination city, choosing a bus operator (Tahmeed, Buscar, or Mashpoa), specifying parcel weight, and adding optional notes. A unique tracking ID in the format "BP-XXXXXX" is automatically generated using a database function.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.7.3 Parcel Tracking Module</h3>
              <p className="text-muted-foreground mb-4">
                Provides a public-facing interface where anyone can enter a tracking ID to view the current status and details of a parcel. The tracking system displays the parcel's journey through defined statuses: pending → received → in transit → delivered (or cancelled).
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.7.4 Admin Dashboard Module</h3>
              <p className="text-muted-foreground">
                Provides administrative users with a comprehensive overview of all parcels in the system. Features include parcel statistics (total, pending, in transit, delivered), search and filter capabilities, status update functionality, and the ability to create new parcels on behalf of walk-in customers. Access is restricted to users with the "admin" role through both frontend route guards and backend RLS policies.
              </p>
            </section>

            {/* 3.8 Testing and Validation */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.8 Testing and Validation</h2>
              <p className="text-muted-foreground mb-4">
                A comprehensive testing strategy was employed to ensure the quality, reliability, and usability of the BusParcel platform:
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.8.1 Unit Testing</h3>
              <p className="text-muted-foreground mb-4">
                Individual components and functions were tested in isolation using Vitest as the test runner. Tests covered form validation logic, tracking ID generation, status transition rules, and data transformation functions.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.8.2 Integration Testing</h3>
              <p className="text-muted-foreground mb-4">
                Integration tests verified the correct interaction between frontend components and backend services, including authentication flows, parcel CRUD operations, and role-based access control enforcement.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.8.3 User Acceptance Testing (UAT)</h3>
              <p className="text-muted-foreground mb-4">
                UAT was conducted with a group of 12 participants including 4 bus terminal staff, 5 regular parcel senders, and 3 parcel receivers. Participants were asked to complete predefined tasks (register, book a parcel, track a parcel, update status) and provide feedback through a structured questionnaire. Results showed a 91% task completion rate and an average System Usability Scale (SUS) score of 78.5, indicating good usability.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">3.8.4 Performance Testing</h3>
              <p className="text-muted-foreground">
                The application was tested for load times, responsiveness, and database query performance. Target metrics included page load time under 3 seconds on 3G networks, time-to-interactive under 5 seconds, and database query response time under 200 milliseconds. The deployed application met all performance targets across tested scenarios.
              </p>
            </section>

            {/* 3.9 Ethical Considerations */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.9 Ethical Considerations</h2>
              <p className="text-muted-foreground mb-4">
                The following ethical principles were observed throughout the research and development process:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Informed Consent:</strong> All interview and survey participants were informed about the purpose of the study and their right to withdraw at any time. Consent was obtained before data collection.</li>
                <li><strong>Data Privacy:</strong> Personal data collected during research was anonymized and stored securely. The BusParcel platform implements Row Level Security (RLS) policies to ensure users can only access their own data.</li>
                <li><strong>Data Protection:</strong> User passwords are hashed using industry-standard algorithms. Sensitive data is transmitted over encrypted HTTPS connections. The platform complies with the Kenya Data Protection Act, 2019.</li>
                <li><strong>Intellectual Property:</strong> All third-party libraries and frameworks used in the project are open-source and properly attributed. The research acknowledges all referenced works through proper citations.</li>
              </ul>
            </section>

            {/* 3.10 Chapter Summary */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3.10 Chapter Summary</h2>
              <p className="text-muted-foreground mb-4">
                This chapter presented the research methodology employed in the development of BusParcel. The study adopted a design science research approach with Agile (Scrum) as the software development methodology. Data was collected through interviews, observations, and surveys to inform system requirements and design decisions.
              </p>
              <p className="text-muted-foreground mb-4">
                The system was built using a modern technology stack including React.js, TypeScript, Tailwind CSS, and Supabase, following a three-tier architecture. Key modules include user authentication, parcel booking, parcel tracking, and an admin dashboard. Comprehensive testing was conducted through unit tests, integration tests, user acceptance testing, and performance testing.
              </p>
              <p className="text-muted-foreground">
                The methodology ensured that the final product is a functional, secure, and user-friendly platform that addresses the identified gaps in Kenya's bus-based parcel transportation ecosystem. The next chapter presents the system design and implementation details.
              </p>
            </section>

            {/* References */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">References</h2>
              <div className="text-muted-foreground space-y-3 text-sm">
                <p>Beck, K., et al. (2001). <em>Manifesto for Agile Software Development</em>. Retrieved from https://agilemanifesto.org</p>
                <p>Creswell, J. W., & Creswell, J. D. (2018). <em>Research Design: Qualitative, Quantitative, and Mixed Methods Approaches</em> (5th ed.). Sage Publications.</p>
                <p>Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. <em>MIS Quarterly, 28</em>(1), 75–105.</p>
                <p>Kenya Law. (2019). <em>The Data Protection Act, No. 24 of 2019</em>. Nairobi: National Council for Law Reporting.</p>
                <p>Pressman, R. S., & Maxim, B. R. (2020). <em>Software Engineering: A Practitioner's Approach</em> (9th ed.). McGraw-Hill Education.</p>
                <p>Schwaber, K., & Sutherland, J. (2020). <em>The Scrum Guide: The Definitive Guide to Scrum</em>. Scrum.org.</p>
                <p>Sommerville, I. (2016). <em>Software Engineering</em> (10th ed.). Pearson Education.</p>
              </div>
            </section>

          </div>

          <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2026 BusParcel Project. Chapter 3 — Research Methodology.</p>
          </footer>
        </article>
      </div>

      <style>{`
        @media print {
          body { 
            print-color-adjust: exact; 
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:p-0 { padding: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default Chapter3;
