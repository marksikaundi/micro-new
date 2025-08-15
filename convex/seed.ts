import { mutation } from "./_generated/server";

export const seedDatabase = mutation({
  handler: async (ctx) => {
    // First, let's add some categories
    const categories = [
      { name: "Leadership", slug: "leadership", color: "#dc2626" },
      { name: "Innovation", slug: "innovation", color: "#2563eb" },
      { name: "Technology", slug: "technology", color: "#7c3aed" },
      { name: "Growth", slug: "growth", color: "#059669" },
      { name: "Money", slug: "money", color: "#d97706" },
      { name: "Productivity", slug: "productivity", color: "#db2777" },
    ];

    for (const category of categories) {
      await ctx.db.insert("categories", category);
    }

    // Now let's add some sample articles
    const sampleArticles = [
      {
        title:
          "The Future of Remote Work: How CEOs Are Adapting to the New Normal",
        slug: "future-remote-work-ceos-adapting",
        excerpt:
          "As companies navigate the post-pandemic landscape, leaders are reimagining how work gets done. Here's what the most successful CEOs are doing differently.",
        content: `The pandemic fundamentally changed how we think about work. What started as an emergency response has evolved into a permanent shift that's reshaping the business landscape.

According to recent studies, 87% of companies plan to offer hybrid work options indefinitely. This isn't just about employee satisfaction—it's about competitive advantage.

"We've discovered that remote work isn't just possible, it's often more productive," says Sarah Chen, CEO of TechForward Solutions. "But it requires a complete rethinking of how we manage, communicate, and build culture."

The most successful leaders are focusing on three key areas:

**1. Results-Based Management**
Instead of measuring hours worked, top companies are shifting to outcome-based performance metrics. This means setting clear expectations for deliverables and giving employees the autonomy to achieve them.

**2. Intentional Communication**
With the loss of casual office interactions, deliberate communication becomes crucial. Companies are implementing structured check-ins, virtual coffee breaks, and dedicated collaboration time.

**3. Digital-First Culture**
This goes beyond just having good video conferencing. It means designing processes, meetings, and even company events with remote participants as the primary consideration, not an afterthought.

The companies that master this transition won't just survive—they'll have access to global talent pools and operational efficiencies that give them a lasting competitive edge.`,
        category: "Leadership",
        tags: ["remote work", "leadership", "management", "productivity"],
        author: {
          name: "Michael Rodriguez",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
          bio: "Senior Business Writer at Inc. Magazine",
        },
        featuredImage:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
        readingTime: 5,
        isPublished: true,
        viewCount: 1243,
      },
      {
        title: "AI Revolution: 5 Startups That Are Changing Everything",
        slug: "ai-revolution-startups-changing-everything",
        excerpt:
          "From healthcare to finance, these innovative companies are leveraging artificial intelligence to solve real-world problems and create massive value.",
        content: `Artificial intelligence is no longer the stuff of science fiction. Today's entrepreneurs are building AI-powered solutions that are transforming industries and creating billions in value.

Here are five startups that are leading the charge:

**1. MedAI Diagnostics**
This healthcare startup uses machine learning to analyze medical images with 95% accuracy, helping doctors detect diseases earlier than ever before. They've already processed over 1 million scans and saved countless lives.

**2. FinanceBot**
By automating financial planning and investment advice, FinanceBot is democratizing wealth management. Their AI advisor manages over $500 million in assets for everyday investors.

**3. CropWise**
This agricultural tech company uses satellite imagery and AI to help farmers optimize crop yields while reducing environmental impact. They're working with over 10,000 farms worldwide.

**4. CodeGenius**
Their AI-powered coding assistant helps developers write better code faster. With over 100,000 developers using their platform, they're accelerating software development across the industry.

**5. EcoPredict**
Using AI to predict and prevent environmental disasters, EcoPredict's early warning systems have helped communities prepare for floods, wildfires, and extreme weather events.

What sets these companies apart isn't just their technology—it's their focus on solving real problems that people care about. They're not building AI for AI's sake; they're using it as a tool to create genuine value.

The lesson for entrepreneurs? Don't just follow the AI trend. Identify a meaningful problem in an industry you understand, then figure out how AI can help solve it better than existing solutions.`,
        category: "Innovation",
        tags: [
          "artificial intelligence",
          "startups",
          "technology",
          "innovation",
        ],
        author: {
          name: "Emma Thompson",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
          bio: "Technology Editor at Inc. Magazine",
        },
        featuredImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        readingTime: 7,
        isPublished: true,
        viewCount: 2156,
      },
      {
        title: "The $100 Million Mistake: Lessons from a Failed Unicorn",
        slug: "100-million-mistake-failed-unicorn-lessons",
        excerpt:
          "When CloudScale went from a $1 billion valuation to bankruptcy in 18 months, the business world took notice. Here's what went wrong and what we can learn.",
        content: `CloudScale was supposed to be the next big thing. With $100 million in funding and a unicorn valuation, the cloud infrastructure startup seemed unstoppable. Then everything fell apart.

In just 18 months, the company went from industry darling to cautionary tale. As someone who covered their rise and fall, I wanted to understand what went wrong—and what other entrepreneurs can learn from their mistakes.

**The Perfect Storm**

CloudScale's downfall wasn't the result of a single bad decision. Instead, it was a perfect storm of common startup mistakes that compounded over time:

**1. Premature Scaling**
Flush with venture capital, CloudScale hired aggressively before proving product-market fit. Their team grew from 50 to 500 employees in six months, creating massive overhead without corresponding revenue growth.

**2. Ignoring Customer Feedback**
Early customers complained about the platform's complexity, but leadership dismissed these concerns as "growing pains." They prioritized adding features over improving usability, losing customers faster than they could acquire new ones.

**3. Competitor Blindness**
While CloudScale was building their "revolutionary" platform, established players like AWS and Google Cloud were rapidly improving their offerings. CloudScale's technological advantage evaporated almost overnight.

**4. Culture Problems**
Rapid hiring without careful culture building led to internal chaos. Different teams worked on conflicting priorities, communication broke down, and employee turnover skyrocketed.

**5. Burning Cash Too Fast**
With a massive team and expensive office spaces in three cities, CloudScale was burning $8 million per month. When the next funding round fell through, they had less than two months of runway left.

**The Warning Signs**

Looking back, the red flags were there:
- Monthly recurring revenue was declining while headcount was growing
- Customer acquisition costs exceeded lifetime value by 300%
- Employee Glassdoor reviews dropped from 4.2 to 2.1 stars
- Key engineering talent started leaving for competitors

**Lessons for Entrepreneurs**

1. **Validate Before You Scale**: Don't hire aggressively until you've proven customers love your product
2. **Listen to Customers**: Their feedback is more valuable than investor enthusiasm
3. **Watch Your Unit Economics**: If you can't make money on one customer, you won't make money on a million
4. **Culture Is Everything**: Hire slowly and invest in building a strong, aligned team
5. **Plan for the Worst**: Always have 12+ months of runway and multiple funding options

CloudScale's story is a reminder that in the startup world, success and failure are often separated by just a few critical decisions. The companies that survive are those that learn from others' mistakes—and their own—before it's too late.`,
        category: "Growth",
        tags: ["startups", "failure", "lessons learned", "venture capital"],
        author: {
          name: "David Park",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          bio: "Senior Reporter at Inc. Magazine",
        },
        featuredImage:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
        readingTime: 8,
        isPublished: true,
        viewCount: 3421,
      },
      {
        title: "How This 25-Year-Old Built a $10M Business in 2 Years",
        slug: "25-year-old-10-million-business-2-years",
        excerpt:
          "Meet Jessica Wong, the young entrepreneur who turned a college side hustle into a multi-million dollar e-commerce empire. Here's her step-by-step playbook.",
        content: `When Jessica Wong started selling handmade jewelry from her dorm room, she never imagined it would become a $10 million business. But two years later, that's exactly what happened.

"I thought I was just making some pocket money for college," Wong tells me from her new 10,000-square-foot warehouse in Austin. "I had no idea I was building what would become Luminous Accessories."

**The Origin Story**

It started with a problem Wong experienced firsthand: finding affordable, high-quality jewelry that could withstand an active lifestyle. As a college athlete, she was frustrated that her accessories would tarnish or break after just a few weeks.

"I started making my own pieces using materials I researched online," she explains. "My teammates loved them and started asking me to make pieces for them too."

What began as a favor for friends quickly turned into a side business when Wong started selling through Instagram and Etsy.

**The Turning Point**

The real breakthrough came when Wong treated her business like a business, not a hobby. Here's what changed everything:

**1. Data-Driven Decisions**
Wong tracked everything: which designs sold best, what price points worked, where her customers were located, and what drove the most traffic to her online store.

**2. Strategic Partnerships**
Instead of trying to do everything herself, Wong partnered with micro-influencers who aligned with her brand values. These partnerships generated more authentic engagement than expensive celebrity endorsements.

**3. Supply Chain Optimization**
As demand grew, Wong invested in building relationships with reliable suppliers who could maintain quality while scaling production.

**4. Customer Experience Focus**
Wong obsessed over every touchpoint: packaging, shipping times, customer service, and the unboxing experience. This attention to detail generated massive word-of-mouth marketing.

**The Numbers**

Here's how Luminous Accessories scaled:
- Year 1: $150,000 in revenue (still in college)
- Year 2: $3.2 million in revenue
- Year 3: $10.8 million in revenue

Today, the company employs 47 people and ships to customers in 23 countries.

**Wong's Advice for Young Entrepreneurs**

1. **Start with a problem you personally experience**: "If you don't understand the pain point, you can't solve it effectively."

2. **Reinvest everything in the beginning**: "I lived on ramen for two years and put every dollar back into the business."

3. **Learn constantly**: "I spent more time watching YouTube tutorials about business and marketing than I did on Netflix."

4. **Don't be afraid to pivot**: "My original designs were terrible. I had to be willing to admit that and change course."

5. **Build a team as soon as you can afford it**: "I tried to do everything myself for too long. Hiring the right people was the key to scaling."

**What's Next**

Wong isn't slowing down. She's currently working on expanding into new product categories and has plans to open her first physical retail location next year.

"The goal was never to build a $10 million business," she reflects. "It was just to solve a problem I cared about. The money followed naturally."

For young entrepreneurs watching Wong's success, her message is simple: start where you are, with what you have, and focus on serving your customers better than anyone else. The rest will follow.`,
        category: "Growth",
        tags: ["young entrepreneur", "e-commerce", "success story", "scaling"],
        author: {
          name: "Lisa Chen",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          bio: "Entrepreneurship Writer at Inc. Magazine",
        },
        featuredImage:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
        readingTime: 6,
        isPublished: true,
        viewCount: 4567,
      },
      {
        title: "The Productivity Hack That Saved My Startup",
        slug: "productivity-hack-saved-startup",
        excerpt:
          "When our team was burning out and missing deadlines, I discovered a simple system that transformed our productivity. Here's how it works.",
        content: `Six months ago, my startup was in crisis. We were working 80-hour weeks, missing deadlines, and burning out fast. Our productivity was terrible despite the long hours, and I knew something had to change.

That's when I discovered the "Energy-Based Scheduling" system that completely transformed how our team works.

**The Problem with Traditional Scheduling**

Most entrepreneurs schedule their days based on external demands: meetings, deadlines, and urgent requests. But this approach ignores a crucial factor: your natural energy patterns.

I realized that I was scheduling my most important work during my lowest-energy times and wasting my peak energy on low-value activities like email and administrative tasks.

**The Energy-Based Scheduling System**

Here's how it works:

**Step 1: Track Your Energy**
For one week, rate your energy level every hour on a scale of 1-10. Also note what type of energy you have: creative, analytical, or social.

**Step 2: Identify Your Patterns**
Most people have predictable energy patterns. I discovered that my creative energy peaks from 6-10 AM, my analytical energy is strongest from 10 AM-2 PM, and I'm best at social interactions from 2-5 PM.

**Step 3: Match Tasks to Energy**
Once you know your patterns, align your work accordingly:
- Creative work (writing, designing, strategizing) during creative energy peaks
- Analytical work (data analysis, financial planning, problem-solving) during analytical peaks
- Meetings, calls, and networking during social energy peaks
- Administrative tasks during low-energy periods

**Step 4: Protect Your Peak Hours**
This is the most important part. I block my calendar during peak hours and refuse to schedule meetings during these times unless absolutely necessary.

**The Results**

The impact was immediate and dramatic:
- Our team's output increased by 40% while working 20% fewer hours
- Employee satisfaction scores jumped from 6.2 to 8.7 out of 10
- We haven't missed a single deadline in four months
- Sick days decreased by 60% as stress levels dropped

**Implementation Tips**

1. **Start Small**: Don't try to restructure your entire schedule overnight. Begin by protecting just one hour of peak energy time.

2. **Communicate Boundaries**: Let your team know about your energy-based schedule and encourage them to develop their own.

3. **Be Flexible**: Some meetings and deadlines can't be moved. The goal is to optimize what you can control.

4. **Track and Adjust**: Energy patterns can change with seasons, stress levels, and life circumstances. Review and adjust monthly.

5. **Lead by Example**: As a leader, modeling this behavior gives your team permission to prioritize their energy too.

**Beyond Individual Productivity**

The real breakthrough came when we implemented this system team-wide. We mapped everyone's energy patterns and started scheduling collaborative work during overlapping peak times.

We also restructured our meeting culture:
- No meetings before 10 AM (protecting morning creative time)
- All-hands meetings at 2 PM when everyone's social energy is high
- Complex problem-solving sessions during the team's collective analytical peak

**The Bottom Line**

Working harder isn't the answer—working smarter is. By aligning your schedule with your natural energy patterns, you can accomplish more in less time while feeling better in the process.

The best part? This system costs nothing to implement and can be started today. All it requires is awareness of your energy patterns and the discipline to protect your peak performance times.

For entrepreneurs who are constantly fighting the clock, energy-based scheduling isn't just a productivity hack—it's a sustainable way to build the stamina needed for long-term success.`,
        category: "Productivity",
        tags: ["productivity", "time management", "energy", "leadership"],
        author: {
          name: "Alex Morrison",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
          bio: "Productivity Expert and Startup Founder",
        },
        featuredImage:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
        readingTime: 4,
        isPublished: true,
        viewCount: 2890,
      },
    ];

    for (const article of sampleArticles) {
      await ctx.db.insert("articles", {
        ...article,
        publishedAt: Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000, // Random date within last 30 days
      });
    }

    return { success: true, message: "Database seeded successfully!" };
  },
});
