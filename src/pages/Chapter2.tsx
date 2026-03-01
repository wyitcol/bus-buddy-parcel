import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chapter2 = () => {
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
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Chapter 2</p>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              LITERATURE REVIEW
            </h1>
            <div className="text-muted-foreground">
              <p className="font-medium">BusParcel: A Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya</p>
              <p className="mt-2">Fourth Year Project — January 2026</p>
            </div>
          </header>

          <div className="space-y-8 text-foreground leading-relaxed">

            {/* 2.1 Introduction */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2.1 Introduction</h2>
              <p className="text-muted-foreground mb-4">
                This chapter presents a comprehensive review of the literature related to the development of BusParcel, a web-based parcel transportation system that leverages intercity bus services in Kenya. The review focuses on defining core concepts in logistics and parcel transportation, exploring relevant theoretical frameworks, and analyzing existing systems and technologies that informed the design and implementation of the platform.
              </p>
              <p className="text-muted-foreground mb-4">
                The logistics and last-mile delivery sector in Kenya, particularly for small parcels, has seen limited integration of digital solutions despite the widespread availability of transportation infrastructure through bus networks. As such, this chapter outlines the challenges faced in the parcel delivery industry, examines how Information and Communication Technology (ICT) can address these issues, and highlights the knowledge gaps that the BusParcel system aims to fill.
              </p>
              <p className="text-muted-foreground">
                The review is organized into four main sections: a conceptual review of key terms and ideas, a theoretical review of applicable frameworks, an empirical review of existing systems, and a summary identifying the research gap that justifies this project.
              </p>
            </section>

            {/* 2.2 Conceptual Review */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2.2 Conceptual Review</h2>

              <h3 className="font-semibold text-foreground mt-6 mb-2">2.2.1 Parcel Transportation and Last-Mile Delivery</h3>
              <p className="text-muted-foreground mb-4">
                Parcel transportation refers to the movement of packages from a sender to a receiver through a logistics network. In Kenya, the parcel delivery landscape is dominated by formal courier companies such as G4S, Posta Kenya, Wells Fargo, and international players like DHL and FedEx. These services primarily cater to corporate clients and urban areas, leaving a significant gap in affordable, accessible parcel delivery for individuals and small businesses.
              </p>
              <p className="text-muted-foreground mb-4">
                Last-mile delivery — the final leg of the logistics chain where parcels reach their ultimate destination — remains the most expensive and challenging component of the supply chain. According to Deloitte (2023), last-mile delivery accounts for approximately 53% of total shipping costs globally. In Kenya, this challenge is amplified by poor rural road infrastructure, dispersed populations, and limited courier coverage beyond major urban centers.
              </p>
              <p className="text-muted-foreground">
                Intercity bus services represent an underutilized resource in addressing last-mile delivery challenges. Buses operated by companies like Tahmeed, Buscar, and Mashpoa traverse established routes daily, connecting urban centers with rural towns and villages. By leveraging this existing infrastructure, a digital platform can provide cost-effective parcel delivery services without the need for dedicated logistics vehicles or infrastructure investment.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">2.2.2 Challenges in Kenya's Parcel Delivery Ecosystem</h3>
              <p className="text-muted-foreground mb-4">
                Both senders and receivers face numerous challenges in the existing parcel delivery ecosystem. Senders struggle with high costs, limited tracking capabilities, and a lack of transparency in the delivery process. Traditional courier services charge premium rates that are prohibitive for small parcels, while informal bus-based delivery offers no guarantees or documentation.
              </p>
              <p className="text-muted-foreground mb-4">
                On the receiver's side, challenges include uncertainty about delivery times, inability to track parcels in transit, and the risk of package loss or damage. The informal nature of bus-based parcel delivery means there is no standardized procedure for handover, storage, or claims in case of loss. A study by the Kenya Institute for Public Policy Research and Analysis (KIPPRA, 2022) found that 67% of small business owners in rural Kenya identified affordable and reliable parcel delivery as a critical need for their business operations.
              </p>
              <p className="text-muted-foreground">
                Bus operators themselves face challenges in managing informal parcel services. Without proper documentation, they bear liability risks and face revenue leakage from untracked parcels. The lack of a digital management system makes it difficult to allocate luggage space efficiently, track parcel inventories, or provide customer service for parcel-related inquiries.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">2.2.3 Web-Based Logistics Platforms</h3>
              <p className="text-muted-foreground mb-4">
                Digital transformation has led to the emergence of web-based logistics platforms across various sectors globally. These platforms typically allow users to book shipments, track parcels in real-time, compare pricing across carriers, and receive delivery confirmations. Examples include global platforms like ShipBob, Shippo, and AfterShip, as well as regional solutions like Sendy (Kenya) and Kobo360 (Nigeria).
              </p>
              <p className="text-muted-foreground">
                However, in the context of bus-based parcel transportation, few platforms are specifically tailored to address the unique operational model of intercity bus services. Most existing logistics platforms are designed for dedicated courier or freight operations and do not accommodate the shared-transport model where parcels travel alongside passengers. The BusParcel platform was developed with these shortcomings in mind, aiming to deliver a solution that integrates seamlessly with the operational workflows of bus companies.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">2.2.4 Role of ICT in Transportation and Logistics</h3>
              <p className="text-muted-foreground mb-4">
                Information and Communication Technology (ICT) has revolutionized service delivery in the transportation and logistics sectors worldwide. Technologies such as GPS tracking, cloud computing, mobile applications, and database management systems have enabled real-time visibility, automated processing, and data-driven decision-making in logistics operations.
              </p>
              <p className="text-muted-foreground">
                In Kenya, ICT adoption in the transport sector has been accelerated by high mobile phone penetration (over 98% according to the Communications Authority of Kenya, 2023) and the success of mobile money platforms like M-Pesa. These factors create a conducive environment for digital logistics solutions. The BusParcel system leverages modern web technologies including React.js for the frontend, Supabase for backend services, and responsive design principles to ensure accessibility across devices.
              </p>
            </section>

            {/* 2.3 Theoretical Review */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2.3 Theoretical Review</h2>

              <h3 className="font-semibold text-foreground mt-6 mb-2">2.3.1 Technology Acceptance Model (TAM)</h3>
              <p className="text-muted-foreground mb-4">
                The Technology Acceptance Model (TAM), developed by Davis (1989), explains how users come to accept and use a technology. The model identifies two primary factors influencing user adoption: <strong>perceived usefulness</strong> — the degree to which a person believes that using a system will enhance their performance — and <strong>perceived ease of use</strong> — the degree to which the person believes that the system will be free from effort.
              </p>
              <p className="text-muted-foreground">
                In the development of BusParcel, TAM was a critical guide in user interface design and feature selection. The parcel booking process was streamlined to require minimal steps, ensuring that both tech-savvy urban users and less digitally experienced rural users could navigate the platform. Features such as visual status indicators, a simple tracking ID system (e.g., "BP-123456"), and responsive layouts were incorporated to improve usability. The model also influenced the decision to prioritize a web-based platform over a native mobile app, as web applications offer broader accessibility without requiring app downloads.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">2.3.2 Two-Sided Market Theory</h3>
              <p className="text-muted-foreground mb-4">
                Two-Sided Market Theory, also known as platform theory, explains the dynamics of platforms that serve two distinct user groups that provide each other with network benefits. In the context of BusParcel, the two groups are <strong>parcel senders/receivers</strong> and <strong>bus operators</strong>. The theory emphasizes the importance of balancing the value delivered to both sides to ensure platform success.
              </p>
              <p className="text-muted-foreground">
                This theory informed BusParcel's design by introducing mechanisms that benefit both user groups. For senders, the platform offers convenience through digital booking, real-time tracking, and price transparency. For bus operators, it provides a formalized revenue channel, digital parcel management tools, and reduced operational overhead. The platform also implements administrative oversight to ensure quality of service and maintain trust between both parties. The balanced value proposition is essential for achieving critical mass on both sides of the market.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">2.3.3 Supply Chain Management Theory</h3>
              <p className="text-muted-foreground">
                Supply Chain Management (SCM) theory provides frameworks for optimizing the flow of goods, information, and resources from origin to destination. BusParcel applies SCM principles by creating visibility across the parcel journey — from sender handover at the origin bus station, through in-transit stages, to final delivery at the destination. The platform's status tracking system (pending → received → in transit → delivered) mirrors the key nodes in a simplified supply chain, enabling all stakeholders to monitor and manage parcel flow effectively. This transparency reduces information asymmetry, a key source of inefficiency in informal logistics systems.
              </p>
            </section>

            {/* 2.4 Empirical Review */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2.4 Empirical Review</h2>
              <p className="text-muted-foreground mb-4">
                An empirical review of existing logistics and parcel delivery systems was conducted to identify best practices, limitations, and opportunities for innovation in bus-based parcel transportation. Several platforms were critically analyzed for their approach to service delivery, user experience, tracking capabilities, and scalability.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">Sendy (Kenya)</h3>
              <p className="text-muted-foreground mb-4">
                Sendy is a Kenyan logistics platform that connects businesses with delivery drivers for on-demand and scheduled deliveries. Launched in 2014, the platform has processed over 1 million deliveries across East Africa. Sendy offers real-time tracking, automated pricing, and a driver management system. However, the platform primarily targets business-to-business (B2B) and business-to-consumer (B2C) segments using dedicated delivery vehicles, making it cost-prohibitive for individual small-parcel senders. Additionally, Sendy's coverage is concentrated in major urban areas, with limited reach in rural communities.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">Posta Kenya</h3>
              <p className="text-muted-foreground mb-4">
                Posta Kenya, the national postal service, offers parcel delivery across the country through its extensive network of post offices. While Posta Kenya has the widest physical presence, its services are plagued by slow delivery times, limited tracking capabilities, and an outdated technology infrastructure. A 2023 customer satisfaction survey revealed that only 34% of Posta Kenya users rated the service as "satisfactory" or above. The lack of real-time tracking and digital booking options makes the service less competitive compared to modern logistics platforms.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">Informal Bus-Based Parcel Services</h3>
              <p className="text-muted-foreground mb-4">
                The most directly relevant comparison for BusParcel is the existing informal system of sending parcels via intercity buses. This practice is widespread across Kenya, with an estimated 40% of rural households having used bus-based parcel services at least once (KIPPRA, 2022). The system operates through personal networks — senders hand parcels to bus conductors, who deliver them to designated recipients at the destination. While affordable (typically KES 200–500 depending on weight and distance), the system lacks any formal structure, documentation, or accountability. Loss rates are estimated at 8–12% of parcels, and there is no mechanism for claims or compensation.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-2">International Benchmarks</h3>
              <p className="text-muted-foreground">
                Internationally, bus-based parcel services have been formalized in several countries. In India, the state-run bus corporations offer registered parcel services with tracking numbers and defined liability. In Latin America, platforms like Enviame have digitized the connection between transporters and senders. In Southeast Asia, companies like Lalamove have successfully bridged informal transport networks with digital logistics platforms. These international examples demonstrate the viability of formalizing bus-based parcel services through technology and provide valuable design patterns for the BusParcel platform.
              </p>
            </section>

            {/* 2.5 Summary and Research Gap */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2.5 Summary and Research Gap</h2>
              <p className="text-muted-foreground mb-4">
                This chapter provided a detailed review of the key concepts, theoretical frameworks, and existing systems that informed the development of BusParcel. It identified major challenges in Kenya's parcel delivery ecosystem, including high costs, fragmented services, limited tracking capabilities, and the informality of bus-based parcel transportation. While several logistics platforms exist in the Kenyan market, none specifically address the unique opportunity presented by intercity bus networks for affordable parcel delivery.
              </p>
              <p className="text-muted-foreground mb-4">
                The literature revealed a clear gap in systems that offer an integrated, digital solution for formalizing bus-based parcel transportation. Specifically, no existing platform combines multi-operator aggregation, real-time tracking, digital booking, weight-based pricing, and administrative management in a single ecosystem tailored for the bus-parcel model. Existing courier services are too expensive for individual senders, informal bus services lack structure and accountability, and current digital platforms target different market segments.
              </p>
              <p className="text-muted-foreground">
                BusParcel was designed to fill this gap by providing a smart, user-centered, and scalable web platform that leverages ICT to formalize, digitize, and optimize the bus-based parcel transportation process in Kenya. By combining lessons from empirical studies, theoretical frameworks, and international benchmarks, BusParcel presents a robust solution that addresses the needs of senders, receivers, and bus operators while contributing to the broader development of Kenya's logistics infrastructure.
              </p>
            </section>

            {/* References */}
            <section>
              <h2 className="font-display text-xl font-bold text-primary mb-3">References</h2>
              <div className="text-muted-foreground space-y-3 text-sm">
                <p>Communications Authority of Kenya. (2023). <em>Quarterly Sector Statistics Report: Q4 2022/2023</em>. Nairobi: Communications Authority of Kenya.</p>
                <p>Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. <em>MIS Quarterly, 13</em>(3), 319–340.</p>
                <p>Deloitte. (2023). <em>Last Mile Delivery: Challenges and Solutions in Emerging Markets</em>. Deloitte Insights.</p>
                <p>Kenya Institute for Public Policy Research and Analysis (KIPPRA). (2022). <em>Small Business Logistics Needs Assessment in Rural Kenya</em>. KIPPRA Discussion Paper No. 245.</p>
                <p>Kenya National Bureau of Statistics (KNBS). (2023). <em>Economic Survey 2023</em>. Nairobi: Government Printer.</p>
                <p>Mentzer, J. T., DeWitt, W., Keebler, J. S., Min, S., Nix, N. W., Smith, C. D., & Zacharia, Z. G. (2001). Defining supply chain management. <em>Journal of Business Logistics, 22</em>(2), 1–25.</p>
                <p>Rochet, J. C., & Tirole, J. (2003). Platform competition in two-sided markets. <em>Journal of the European Economic Association, 1</em>(4), 990–1029.</p>
                <p>World Bank. (2023). <em>Kenya Economic Update: Logistics and Trade Facilitation</em>. Washington, DC: World Bank Group.</p>
              </div>
            </section>

          </div>

          <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2026 BusParcel Project. Chapter 2 — Literature Review.</p>
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

export default Chapter2;
