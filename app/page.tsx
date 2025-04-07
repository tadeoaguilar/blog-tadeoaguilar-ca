import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter text-blog-cardinal">
          Bridging Technology and Business Strategy
      </h1>


      <p className="mb-4 text-3xl">
        {`Welcome to my blog! As a Software Architect with over 25 years in the industry, I've developed an agnostic approach to tools and technologies, focusing instead on selecting the right solutions for each unique business challenge.
My expertise spans several domains: `}
 </p>
      <ol className="list-disc list-inside space-y-2 mb-6 ml-4 marker:text-blog-cardinal text-3xl">
        <li>Cloud Computing - Designing scalable, resilient architectures</li>
        <li>Security - Implementing robust protection frameworks for modern systems</li>
        <li>Microservices - Breaking down monoliths into manageable, scalable components</li>
        <li>Mobile & Web Development - Creating seamless cross-platform experiences</li>
        <li>ERP Financial Consulting - Translating business requirements into technical solutions</li>
        <li>Acumatica Solution Development - Customizing and extending ERP capabilities</li>
        <li>Project Management - Guiding teams through complex implementation challenges</li>
      </ol>
      <p className="mb-4 text-3xl">
{`Through this blog, I'll share insights from my journey navigating the ever-evolving technology landscape, with practical advice on architectural decisions, implementation strategies, and bridging the gap between business objectives and technical execution.
Join me as we explore the intersection of innovation and pragmatism in today's digital ecosystem.`}
</p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
