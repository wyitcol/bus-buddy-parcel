import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConceptPaper = () => {
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

      {/* Concept Paper Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-card rounded-2xl shadow-card p-8 md:p-12 print:shadow-none print:p-0">
          
          {/* Title Section */}
          <header className="text-center mb-10 pb-8 border-b border-border">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Concept Paper</p>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              BusParcel: A Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya
            </h1>
            <div className="text-muted-foreground">
              <p className="font-medium">Fourth Year Project</p>
              <p className="mt-2">January 2026</p>
            </div>
          </header>

          {/* Content Sections */}
          <div className="space-y-8 text-foreground leading-relaxed">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1. Introduction</h2>
              <p className="text-muted-foreground">
                The transportation of parcels and goods across Kenya remains a significant challenge for individuals and small businesses. While courier services exist, they are often expensive and inaccessible in remote areas. Intercity bus services operated by companies such as <strong>Tahmeed, Buscar, and Mashpoa</strong> travel extensive routes connecting major towns and rural areas daily. This project proposes <strong>BusParcel</strong>, a web-based platform that leverages existing bus infrastructure to provide affordable, reliable, and trackable parcel transportation services across Kenya.
              </p>
            </section>

            {/* 2. Problem Statement */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2. Problem Statement</h2>
              <p className="text-muted-foreground mb-3">
                Currently, sending parcels across Kenya presents several challenges:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>High costs</strong>: Traditional courier services charge premium rates, making them unaffordable for small-scale senders.</li>
                <li><strong>Limited tracking</strong>: Informal parcel sending via buses lacks transparency and real-time tracking capabilities.</li>
                <li><strong>Fragmented system</strong>: No unified platform connects multiple bus operators for parcel services.</li>
                <li><strong>Accessibility issues</strong>: Rural areas are underserved by conventional courier networks but are well-connected by bus routes.</li>
                <li><strong>Trust concerns</strong>: Lack of formal documentation and accountability in informal bus parcel systems.</li>
              </ul>
            </section>

            {/* 3. Objectives */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3. Objectives</h2>
              
              <h3 className="font-semibold text-foreground mt-4 mb-2">3.1 Main Objective</h3>
              <p className="text-muted-foreground">
                To design and develop a web-based parcel transportation management system that utilizes existing intercity bus services in Kenya for efficient and affordable parcel delivery.
              </p>
              
              <h3 className="font-semibold text-foreground mt-4 mb-2">3.2 Specific Objectives</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>To analyze the current parcel transportation landscape and identify integration opportunities with bus operators.</li>
                <li>To design a user-friendly web interface for booking, tracking, and managing parcel shipments.</li>
                <li>To implement a real-time tracking system that monitors parcel status throughout the delivery journey.</li>
                <li>To develop an administrative dashboard for bus operators to manage parcel logistics.</li>
                <li>To integrate secure payment processing for parcel booking transactions.</li>
              </ol>
            </section>

            {/* 4. Scope */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">4. Scope of the Project</h2>
              <p className="text-muted-foreground mb-3">
                The BusParcel system will encompass the following features:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Customer Portal</strong>: User registration, parcel booking, route selection, pricing calculator, and shipment tracking.</li>
                <li><strong>Operator Dashboard</strong>: Parcel management, manifest generation, delivery confirmation, and revenue tracking.</li>
                <li><strong>Admin Panel</strong>: User management, route configuration, operator onboarding, and system analytics.</li>
                <li><strong>Partner Bus Operators</strong>: Initial focus on Tahmeed, Buscar, and Mashpoa with scalability for additional operators.</li>
                <li><strong>Geographic Coverage</strong>: Major routes including Nairobi-Mombasa, Nairobi-Kisumu, Nairobi-Eldoret, and connecting rural destinations.</li>
              </ul>
            </section>

            {/* 5. Methodology */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">5. Methodology</h2>
              <p className="text-muted-foreground mb-3">
                The project will follow the <strong>Agile Software Development Methodology</strong> with iterative sprints:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Requirements Gathering</strong>: Stakeholder interviews, surveys, and analysis of existing bus parcel practices.</li>
                <li><strong>System Design</strong>: UML diagrams, database schema design, and UI/UX prototyping.</li>
                <li><strong>Development</strong>: Frontend (React.js, TypeScript), Backend (Supabase), and responsive design implementation.</li>
                <li><strong>Testing</strong>: Unit testing, integration testing, and user acceptance testing.</li>
                <li><strong>Deployment</strong>: Cloud hosting with continuous integration/deployment pipelines.</li>
              </ol>
            </section>

            {/* 6. Expected Outcomes */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">6. Expected Outcomes</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>A fully functional web-based parcel booking and tracking platform.</li>
                <li>Reduced parcel transportation costs by up to 60% compared to traditional courier services.</li>
                <li>Improved transparency through real-time tracking and digital documentation.</li>
                <li>Enhanced accessibility for underserved rural communities connected by bus routes.</li>
                <li>A scalable solution adaptable to other East African countries with similar bus networks.</li>
              </ul>
            </section>

            {/* 7. Significance */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">7. Significance of the Study</h2>
              <p className="text-muted-foreground">
                This project addresses a real-world logistics gap in Kenya by digitizing and optimizing an existing but underutilized transportation resource. It contributes to <strong>SDG 9 (Industry, Innovation, and Infrastructure)</strong> by promoting innovative use of existing infrastructure. The platform will benefit small businesses, e-commerce vendors, and individuals seeking affordable delivery options while creating additional revenue streams for bus operators.
              </p>
            </section>

            {/* 8. Budget Estimate */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">8. Budget Estimate</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Item</th>
                      <th className="text-right p-3 font-semibold text-foreground">Cost (KES)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3">Domain & Hosting (1 year)</td>
                      <td className="text-right p-3">5,000</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Development Tools & Software</td>
                      <td className="text-right p-3">0 (Open Source)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">SMS/Notification Services</td>
                      <td className="text-right p-3">3,000</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Research & Data Collection</td>
                      <td className="text-right p-3">10,000</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Documentation & Printing</td>
                      <td className="text-right p-3">2,000</td>
                    </tr>
                    <tr className="border-t border-border bg-muted">
                      <td className="p-3 font-bold text-foreground">Total</td>
                      <td className="text-right p-3 font-bold text-foreground">KES 20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Timeline */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">9. Project Timeline</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Phase</th>
                      <th className="text-left p-3 font-semibold text-foreground">Activities</th>
                      <th className="text-left p-3 font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-3">Phase 1</td>
                      <td className="p-3">Requirements & Analysis</td>
                      <td className="p-3">2 Weeks</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Phase 2</td>
                      <td className="p-3">System Design & Prototyping</td>
                      <td className="p-3">3 Weeks</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Phase 3</td>
                      <td className="p-3">Development & Implementation</td>
                      <td className="p-3">6 Weeks</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Phase 4</td>
                      <td className="p-3">Testing & Debugging</td>
                      <td className="p-3">2 Weeks</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Phase 5</td>
                      <td className="p-3">Deployment & Documentation</td>
                      <td className="p-3">1 Week</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 10. Conclusion */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">10. Conclusion</h2>
              <p className="text-muted-foreground">
                The BusParcel project presents an innovative solution to Kenya's parcel transportation challenges by leveraging the extensive network of intercity bus services. By partnering with established operators like Tahmeed, Buscar, and Mashpoa, the platform will provide an affordable, accessible, and transparent alternative to traditional courier services. This project demonstrates the potential of technology to optimize existing infrastructure and create value for all stakeholders in the logistics ecosystem.
              </p>
            </section>

          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2026 BusParcel Project. Prepared for Fourth Year Project Submission.</p>
          </footer>

        </article>
      </div>

      {/* Print Styles */}
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

export default ConceptPaper;
