"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Landscape background"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream drop-shadow-lg leading-tight">
              About the Project
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-cream/90 drop-shadow-md leading-relaxed">
              Learn about Professor Emily Ritter and her vision for the First
              American Land Allotment Project
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Project Director */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-earth mb-8">
                Meet the Project Director
              </h2>
              <div className="h-1 w-20 bg-accent mb-8 rounded-full"></div>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="w-full sm:w-1/3 aspect-[176/205] relative mb-6 sm:mb-0 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/tutorials/drtitta.png"
                    alt="Professor Emily Ritter"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full sm:w-2/3">
                  <h3 className="text-2xl font-bold text-earth mb-2">
                    Professor Emily Ritter
                  </h3>
                  <p className="text-sm text-earth/70 mb-6">
                    PhD, Department of Political Science, Vanderbilt University
                  </p>
                  <p className="text-earth/90 mb-4 leading-relaxed">
                    Professor Ritter's academic journey has been dedicated to
                    exploring the intersection of human rights, political
                    institutions, and historical justice. With a focus on how
                    power dynamics shape policy outcomes, her research has
                    provided important insights into the complex relationship
                    between government actions and their impacts on marginalized
                    communities.
                  </p>
                  <p className="text-earth/90 leading-relaxed">
                    At Vanderbilt University, she leads interdisciplinary
                    research that bridges historical analysis with contemporary
                    digital methodologies. Her work combines rigorous
                    scholarship with accessible digital tools that make complex
                    historical patterns visible to both academic and public
                    audiences.
                  </p>
                </div>
              </div>
            </section>

            {/* Origin Story */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-earth mb-8">
                Origin of the Project
              </h2>
              <div className="h-1 w-20 bg-accent mb-8 rounded-full"></div>
              <p className="text-earth/90 mb-6 leading-relaxed">
                The First American Land Allotment Project began in Professor
                Ritter's seminar on political rights and historical justice.
                While examining case studies of land policy impacts, she and her
                students discovered significant gaps in accessible resources
                that visualized the dramatic transformation of indigenous lands
                through federal policies.
              </p>
              <p className="text-earth/90 mb-6 leading-relaxed">
                "We kept encountering the same challenge," Professor Ritter
                explains. "The data existed in various archives and databases,
                but there was no comprehensive way for communities, researchers,
                or students to see and understand these land changes over time.
                The stories were there, but they needed to be made visible."
              </p>
              <p className="text-earth/90 leading-relaxed">
                This realization led to an initial pilot project that mapped
                allotment patterns in one tribal nation. The positive response
                from both community members and fellow researchers convinced
                Professor Ritter of the need to expand the work into what has
                become the First American Land Allotment Project.
              </p>
            </section>

            {/* Vision and Approach */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-earth mb-8">
                Vision and Approach
              </h2>
              <div className="h-1 w-20 bg-accent mb-8 rounded-full"></div>
              <p className="text-earth/90 mb-6 leading-relaxed">
                Professor Ritter's vision for the project emerged from her
                commitment to making historical justice visible and accessible.
                "Understanding land history is essential for addressing
                contemporary inequities," she notes. "But that understanding
                requires tools that help us see patterns and changes that
                occurred over decades or even centuries."
              </p>
              <p className="text-earth/90 mb-6 leading-relaxed">
                Her approach combines several key elements:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-earth/90 mb-6 leading-relaxed">
                <li>
                  Collaborative partnerships with tribal communities to ensure
                  project work respects and incorporates indigenous perspectives
                </li>
                <li>
                  Integration of historical research with modern digital mapping
                  technologies
                </li>
                <li>
                  Development of interactive tools that allow users to explore
                  complex historical data in intuitive ways
                </li>
                <li>
                  Creation of educational resources that make this history
                  accessible to diverse audiences
                </li>
              </ul>
              <p className="text-earth/90 leading-relaxed">
                "This isn't just about documenting what happened," Professor
                Ritter emphasizes. "It's about creating tools that help us
                understand why it happened, how it impacted communities, and
                what it means for ongoing questions of land rights and tribal
                sovereignty today."
              </p>
            </section>

            {/* Impact and Future Direction */}
            <section>
              <h2 className="text-3xl font-bold text-earth mb-8">
                Impact and Future Direction
              </h2>
              <div className="h-1 w-20 bg-accent mb-8 rounded-full"></div>
              <p className="text-earth/90 mb-6 leading-relaxed">
                Under Professor Ritter's leadership, the project has grown from
                a classroom initiative to a comprehensive digital platform. To
                date, the project has mapped allotment histories across multiple
                tribal nations, developed interactive story maps that have been
                used in educational settings from high schools to graduate
                programs, and created open datasets that support ongoing
                research.
              </p>
              <p className="text-earth/90 mb-6 leading-relaxed">
                Looking ahead, Professor Ritter envisions expanding the project
                to include more tribal territories, integrating oral histories
                and community knowledge into the digital resources, and
                developing new tools for visualizing the connections between
                historical land policies and contemporary issues.
              </p>
              <p className="text-earth/90 leading-relaxed">
                "This is ongoing work," she explains. "We continue to learn from
                community partners, refine our approaches, and develop new ways
                to make this history accessible and meaningful. The ultimate
                goal is to create resources that serve both communities with
                direct connections to these histories and broader audiences who
                need to understand this critical aspect of American history."
              </p>
            </section>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Link href="/data">
                <Button className="h-14 rounded-md text-muted text-lg bg-accent hover:bg-accent/90 px-8 shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                  Explore the Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
