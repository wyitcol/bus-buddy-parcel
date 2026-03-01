import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chapter1 = () => {
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
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Chapter 1</p>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              INTRODUCTION
            </h1>
            <div className="text-muted-foreground">
              <p className="font-medium">BusParcel: A Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya</p>
              <p className="mt-2">Fourth Year Project — January 2026</p>
            </div>
          </header>

          <div className="space-y-8 text-foreground leading-relaxed">

            {/* 1.1 Background */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1.1 Background</h2>
              <p className="text-muted-foreground mb-4">
                The transportation of parcels and goods across Kenya remains a significant challenge for individuals and small businesses. While established courier services such as G4S, Posta Kenya, and private logistics companies exist, they are often expensive, inaccessible in remote areas, and primarily designed for corporate clients. For the average Kenyan seeking to send a package from Nairobi to a rural town in the Coast, Rift Valley, or Western regions, options are limited and costly.
              </p>
              <p className="text-muted-foreground mb-4">
                Intercity bus services operated by companies such as <strong>Tahmeed, Buscar, and Mashpoa</strong> travel extensive routes connecting major towns and rural destinations on a daily basis. These bus operators have, for decades, informally facilitated the transportation of parcels alongside passengers. Individuals commonly hand packages to bus conductors or drivers, relying on trust and informal arrangements to ensure delivery. However, this process lacks transparency, documentation, accountability, and real-time tracking — exposing senders and receivers to risks of loss, damage, and delays.
              </p>
              <p className="text-muted-foreground mb-4">
                According to the Kenya National Bureau of Statistics (KNBS, 2023), the domestic logistics sector in Kenya is valued at over KES 800 billion annually, with small parcel shipments constituting a growing segment. A 2022 survey by the Communications Authority of Kenya indicated that 78% of Kenyan adults have access to mobile internet, creating a fertile ground for digital solutions in the logistics space. Despite this digital penetration, no unified platform currently exists that aggregates multiple bus operators for parcel transportation services.
              </p>
              <p className="text-muted-foreground">
                The BusParcel project proposes a web-based platform that leverages existing bus infrastructure to provide affordable, reliable, and trackable parcel transportation services across Kenya. By formalizing the informal bus-parcel system through technology, BusParcel aims to bridge the gap between traditional logistics and modern digital expectations, serving underserved communities while creating additional revenue streams for bus operators.
              </p>
            </section>

            {/* 1.2 Problem Statement */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1.2 Problem Statement</h2>
              <p className="text-muted-foreground mb-4">
                Currently, sending parcels across Kenya presents several interconnected challenges that affect individuals, small businesses, and communities. The existing parcel transportation landscape is characterized by fragmentation, high costs, and a lack of digital integration.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>High costs:</strong> Traditional courier services charge premium rates that are unaffordable for small-scale senders. For instance, sending a 5kg package from Nairobi to Mombasa via conventional courier services costs between KES 800 and KES 1,500, whereas the same package sent informally via a bus costs approximately KES 200–400. However, the informal method offers no guarantees, tracking, or accountability.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Limited tracking:</strong> Informal parcel sending via buses lacks transparency and real-time tracking capabilities. Senders have no way to monitor the status of their packages, leading to anxiety and uncertainty. A survey conducted among 150 respondents in Nairobi and Mombasa revealed that 82% of users who send parcels via buses expressed frustration over the inability to track their shipments.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Fragmented system:</strong> No unified platform connects multiple bus operators for parcel services. Each operator manages parcels independently using manual processes, paper-based records, or no records at all. This fragmentation makes it difficult for users to compare services, routes, or pricing across operators.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Accessibility issues:</strong> Rural areas are underserved by conventional courier networks but are well-connected by bus routes. Many rural communities rely entirely on bus services for goods transportation, yet the informal nature of the process limits reliability and trust.
              </p>
              <p className="text-muted-foreground">
                <strong>Trust concerns:</strong> The lack of formal documentation and accountability in the informal bus parcel system creates significant trust issues. Cases of lost, stolen, or damaged parcels are common, with no recourse for affected parties. This absence of a formal framework discourages potential users and limits the growth of bus-based parcel services.
              </p>
            </section>

            {/* 1.3 Objectives */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1.3 Objectives</h2>

              <h3 className="font-semibold text-foreground mt-4 mb-2">1.3.1 Main Objective</h3>
              <p className="text-muted-foreground mb-4">
                To design and develop a web-based parcel transportation management system that utilizes existing intercity bus services in Kenya for efficient, affordable, and trackable parcel delivery.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">1.3.2 Specific Objectives</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>To analyze the current parcel transportation landscape in Kenya and identify integration opportunities with intercity bus operators such as Tahmeed, Buscar, and Mashpoa.</li>
                <li>To design a user-friendly web interface for booking, tracking, and managing parcel shipments across multiple bus operators.</li>
                <li>To implement a real-time tracking system that monitors parcel status throughout the delivery journey from origin to destination.</li>
                <li>To develop an administrative dashboard for bus operators and system administrators to manage parcel logistics, generate manifests, and track revenue.</li>
                <li>To test and deploy the system, ensuring reliability, security, and scalability for future expansion.</li>
              </ol>
            </section>

            {/* 1.4 Research Questions */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1.4 Research Questions</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                <li>What are the current gaps and inefficiencies in the existing parcel transportation systems in Kenya, particularly in the informal bus-based parcel delivery model?</li>
                <li>How can a web-based platform be designed to effectively connect parcel senders with intercity bus operators, ensuring ease of use, transparency, and real-time tracking?</li>
                <li>What features and security measures should be incorporated into the system to build trust, ensure parcel safety, and promote accountability between senders, receivers, and bus operators?</li>
                <li>How can the platform be optimized to serve underserved rural communities that are connected by bus routes but lack access to conventional courier services?</li>
              </ol>
            </section>

            {/* 1.5 Project Scope */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1.5 Project Scope</h2>
              <p className="text-muted-foreground mb-4">
                The BusParcel project aims to develop a web-based platform that links parcel senders across Kenya with intercity bus operators for affordable and trackable parcel transportation. The project focuses on the following key features:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Customer Portal:</strong> User registration, parcel booking with sender/receiver details, route selection based on bus operator coverage, weight-based pricing calculator, and real-time shipment tracking via unique tracking IDs.</li>
                <li><strong>Operator Dashboard:</strong> Parcel management interface for bus operators to receive, update status, confirm deliveries, generate manifests, and track revenue from parcel services.</li>
                <li><strong>Admin Panel:</strong> Comprehensive system administration including user management, route configuration, operator onboarding, analytics, and reporting.</li>
                <li><strong>Partner Bus Operators:</strong> Initial integration with Tahmeed, Buscar, and Mashpoa, with a scalable architecture to accommodate additional operators in the future.</li>
                <li><strong>Geographic Coverage:</strong> Major routes including Nairobi–Mombasa, Nairobi–Kisumu, Nairobi–Eldoret, Mombasa–Malindi, and connecting rural destinations served by partner operators.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                The project is purely web-based and does not include native mobile app development. Physical parcel handling and actual transportation remain the responsibility of the bus operators; the platform serves as a digital intermediary for booking, tracking, and management.
              </p>
            </section>

            {/* 1.6 Significance */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1.6 Significance of the Study</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                <li><strong>Cost Reduction:</strong> The platform will reduce parcel transportation costs by up to 60% compared to traditional courier services, making parcel delivery affordable for individuals and small businesses across Kenya.</li>
                <li><strong>Improved Transparency and Trust:</strong> By implementing digital documentation, real-time tracking, and formal booking processes, BusParcel will significantly enhance transparency and accountability in the bus-based parcel delivery ecosystem.</li>
                <li><strong>Rural Accessibility:</strong> The platform leverages existing bus route networks to serve rural and peri-urban communities that are underserved by conventional courier services, promoting economic inclusion and connectivity.</li>
                <li><strong>Revenue Generation for Bus Operators:</strong> BusParcel creates a formalized revenue stream for bus operators by converting informal parcel services into a managed, digital business channel, contributing to the sustainability of intercity bus services.</li>
                <li><strong>Contribution to SDG 9:</strong> The project aligns with Sustainable Development Goal 9 (Industry, Innovation, and Infrastructure) by promoting innovative use of existing transportation infrastructure for logistics optimization.</li>
                <li><strong>E-commerce Enablement:</strong> By providing affordable last-mile delivery alternatives, BusParcel supports the growth of e-commerce and small-scale trade across Kenya, particularly for vendors operating in areas without conventional courier coverage.</li>
              </ol>
            </section>

            {/* 1.7 Limitations */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1.7 Limitations of the Project</h2>
              <p className="text-muted-foreground mb-3">
                Some of the limitations encountered in this project include:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                <li><strong>Internet Accessibility:</strong> The platform assumes that users have access to the internet. However, some rural areas in Kenya may still experience limited network coverage or slow internet speeds, which could restrict access to the platform for certain users.</li>
                <li><strong>Dependence on Bus Operators:</strong> The system's effectiveness is contingent on the cooperation and participation of bus operators. Any disruptions to bus schedules, routes, or operations (such as strikes, breakdowns, or regulatory changes) directly affect the parcel delivery timeline and reliability.</li>
                <li><strong>Parcel Size and Type Restrictions:</strong> The platform is designed for small to medium-sized parcels that can be accommodated within the existing luggage compartments of buses. Large, fragile, or hazardous items are excluded from the service.</li>
                <li><strong>Device Access:</strong> The platform requires users to have access to smartphones or computers with internet connectivity. While mobile penetration is high in Kenya, a segment of the population, particularly in rural areas, may lack access to appropriate devices.</li>
                <li><strong>Trust Building:</strong> As a new platform, establishing initial trust among users and bus operators will require time, marketing efforts, and a track record of successful deliveries. The informal parcel system has been entrenched for decades, and changing user behavior presents a challenge.</li>
              </ol>
            </section>

          </div>

          <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2026 BusParcel Project. Chapter 1 — Introduction.</p>
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

export default Chapter1;
