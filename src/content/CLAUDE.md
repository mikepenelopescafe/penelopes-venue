# Content Creation Guidelines for Penelope's Venue

This file provides comprehensive guidelines for creating content that dominates local SEO while providing exceptional user value through problem-focused, accessible writing.

## Core Writing Standards

### 1. Writing sytle should match `brand-voice.mdc`

**Why This Matters:**
- Higher Google rankings for accessible content
- Better LLM (AI) comprehension and responses
- Wider audience reach and engagement
- Improved user experience across all education levels

**Implementation Rules:**
- **Sentence length**: 15-20 words average (max 25 words)
- **Paragraph length**: 3-4 sentences maximum
- **Word choice**: Simple, common words over complex alternatives
- **Voice**: Active voice preferred (90% of sentences)
- **Structure**: Use bullet points, lists, and headers for easy scanning

**Examples:**
```
❌ Complex: "Our establishment facilitates exceptional matrimonial celebrations."
✅ Simple: "We help couples plan amazing weddings."

❌ Long: "Penelope's Venue provides comprehensive event coordination services that encompass all aspects of planning, execution, and management for weddings, corporate events, and private celebrations throughout the Denver metropolitan area."
✅ Clear: "Penelope's Venue helps plan your perfect event. We handle weddings, corporate meetings, and private parties in the Denver area."
```

### 2. Problem/Question-Based Content Approach

**Core Principle**: Every piece of content must start with a customer problem or question.

**Why This Works:**
- Matches search intent perfectly
- Ranks higher in voice search and LLM responses
- Creates immediate connection with readers
- Drives higher conversion rates

**Content Structure Template:**
```markdown
# [Problem-focused headline under 60 characters]

[Opening: Acknowledge the specific customer problem]

## Your Challenge
[Empathize with their situation in 2-3 simple sentences]

## Our Solution
[Clear explanation of how you solve their problem]

## Why We're Different
[3-4 unique value propositions]

## What You Get
[Specific benefits and outcomes]

## Common Questions
[Address 3-5 related concerns]

## Ready to Get Started?
[Clear call-to-action]
```

**Problem-Based Title Examples:**
```
Instead of: "Micro Wedding Venue Westminster"
Write: "Need a Small Wedding Venue in Westminster? We Have the Perfect Space"

Instead of: "Corporate Event Planning Services"
Write: "Struggling to Plan Your Company Event? Let Us Handle Everything"

Instead of: "Bridal Shower Packages"
Write: "Want a Perfect Bridal Shower Without the Stress? Here's How"
```

## Content Types & Specific Guidelines

### Venue Page (Core Offering)

**Purpose**: Central page for all venue-related intent
**Target**: "event venue [city]", "venue pricing", "wedding venue" (general)
**Length**: 800-1,200 words

**Required Elements:**
- Problem statement in first paragraph
- Venue overview: capacity, vibe, amenities
- Transparent pricing from `venuePricing` (offPeak/peak/premium, minimum hours, blocks)
- Gallery
- FAQ (5-7 questions)
- Clear CTAs (tour, contact)

**Example Structure:**
```markdown
# Looking for a Modern Event Venue in Denver?

Finding a space with the right vibe and budget can be hard. We keep it simple—clean design, flexible pricing, and no stress.

## What You Get
[Capacity, amenities, layout]

## Venue Pricing
[Off-peak, peak, premium; minimums and blocks]

## Gallery
[Images]

## Common Questions
[5–7 FAQs]
```

### Catering Page (Core Offering)

**Purpose**: Central page for all catering and bar intent
**Target**: "event catering [city]", "wedding catering", "bar packages"
**Length**: 700-1,000 words

**Required Elements:**
- Menu families (e.g., American, Latin Fusion)
- Service styles (plated/buffet/passed) with price ranges
- Bar packages and any minimums/setup
- Add-ons if relevant
- Clear CTAs

**Example Structure:**
```markdown
# Catering That Fits Your Vibe

Great food, done right—plated, buffet, or passed. Choose your style and we’ll handle the rest.

## Menu Options
[Families + descriptions]

## Service Styles & Pricing
[Per-guest ranges]

## Bar Service
[Packages + minimums]
```

### Service Area Pages (Local SEO Powerhouse)

**Purpose**: Dominate local search for entire city
**Target**: "[City] event venue" and variations
**Length**: 600-900 words

**Required Elements:**
- City name in title and H1
- Local landmarks and neighborhoods mentioned
- All available services listed
- Directions from major areas
- Local testimonials
- Schema markup for local business

**Example Structure:**
```markdown
# Looking for the Perfect Event Venue in Westminster, CO?

Planning an event in Westminster? Finding the right venue can be stressful. You want something special that fits your budget and style.

## Why Choose Westminster for Your Event?
Westminster offers the perfect blend of city convenience and suburban charm. Located just 20 minutes from downtown Denver, it's easy for guests to reach.

## Our Westminster Services
### Weddings
[Brief description with link to Westminster wedding page]

### Corporate Events
[Brief description with link to Westminster corporate page]

### Private Parties
[Brief description with link to Westminster private party page]

## Getting to Our Westminster Location
- From Denver: Take US-36 north to Westminster
- From Boulder: Take US-36 south
- Parking: 75 spaces available on-site

## Westminster Event Success Stories
[2-3 brief testimonials from Westminster clients]
```

### Keyword Landing Pages (Service Intent without Service Pages)

**Purpose**: Capture specific intents (e.g., micro weddings, birthdays) without separate service pages
**Target**: Long-tail queries like "small wedding venue Westminster"
**Length**: 500-800 words

**Required Elements:**
- Problem-first intro tailored to the intent
- How the venue and catering fit that use case
- Internal links to `/venue`, `/catering`, and relevant location pages
- Local angles where helpful

### Keyword Landing Pages (Long-Tail Domination)

**Purpose**: Capture specific search intents
**Target**: Long-tail keywords and niche searches
**Length**: 400-600 words

**Keyword Categories:**
```
/content/pages/
├── venue-types/           # "boutique venue", "intimate space"
├── event-styles/          # "garden wedding", "rustic reception"
├── budget-focused/        # "affordable venue", "budget wedding"
├── guest-count/          # "small wedding venue", "intimate celebration"
├── testimonials/           
└── service-areas/     # 
```

## SEO Optimization Requirements

### On-Page SEO Checklist
- [ ] Primary keyword in title (first 3 words preferred)
- [ ] Primary keyword in H1 tag
- [ ] Primary keyword in first paragraph
- [ ] 2-3 semantic keyword variations throughout content
- [ ] Location modifier included naturally
- [ ] 2-3 internal links to related content
- [ ] External link to relevant local resource
- [ ] Alt text for all images with keywords
- [ ] Meta description 120-160 characters

### Local SEO Elements (Location-Specific Pages)
- [ ] City and state in title and H1
- [ ] Neighborhood names mentioned
- [ ] Local landmarks referenced
- [ ] Driving directions included
- [ ] Local business schema markup
- [ ] NAP (Name, Address, Phone) consistent
- [ ] Local testimonials featured

### LLM/AI Search Optimization
- [ ] Question-answer format used
- [ ] Structured data implemented
- [ ] Clear, factual information provided
- [ ] Headers use question format when appropriate
- [ ] Comparison tables where relevant
- [ ] Step-by-step processes clearly outlined

## Voice & Tone Guidelines

### Brand Voice
- Follow brand voice and tone guidelines in Cursor Rules `brand-voice.mdc`

### Writing Style
- Use "you" to speak directly to readers
- Ask questions to engage readers
- Use contractions for conversational tone
- Include personal touches and stories when relevant
- Avoid industry jargon or explain it clearly

### Tone Examples
```
❌ Formal: "Penelope's Venue provides comprehensive event coordination services."
✅ Conversational: "We'll handle all the details so you can enjoy your special day."

❌ Pushy: "Book now to secure the best venue!"
✅ Helpful: "Ready to see if we're the right fit for your event?"
```

## Content Quality Checklist

### Before Publishing
- [ ] Addresses a specific customer problem
- [ ] Written at 8th-grade reading level (check with readability tool)
- [ ] Includes location-specific information (if applicable)
- [ ] Has clear call-to-action
- [ ] Links to related content
- [ ] All images have descriptive alt text
- [ ] Meta description is compelling and complete
- [ ] Grammar and spelling checked
- [ ] Mobile-friendly formatting

### Monthly Review
- [ ] Update pricing if changed
- [ ] Check all internal links work
- [ ] Verify contact information is current
- [ ] Add seasonal updates if relevant
- [ ] Review and respond to comments/questions

## Content Calendar Strategy

### Evergreen Content (Pages Collection)
Create these first as they'll drive consistent traffic:
- Venue page (`/venue`)
- Catering page (`/catering`)
- Keyword-targeted landing pages
- Location hub pages

### Seasonal Content (Blog Collection)
Plan around wedding seasons and local events:
- **Spring**: Outdoor wedding planning, garden venues
- **Summer**: Summer wedding tips, heat considerations
- **Fall**: Autumn wedding colors, harvest themes
- **Winter**: Holiday parties, intimate celebrations

### Local Event Tie-ins
Create content around Westminster and Denver area events:
- Denver wedding shows
- Bridal exhibitions
- Corporate event seasons
- Holiday party planning

## Success Metrics

### SEO Performance
- Organic traffic growth month-over-month
- Keyword rankings for target terms
- Local pack appearances in Google
- Click-through rates from search results

### User Engagement
- Time on page (target: 2+ minutes)
- Pages per session (target: 2.5+)
- Bounce rate (target: under 60%)
- Contact form completions from content

### Content Quality Indicators
- Social shares and mentions
- Backlinks from local businesses
- Customer feedback and testimonials
- Return visitor rates

## Tools & Resources

### Writing Tools
- **Hemingway Editor**: Check reading level and clarity
- **Grammarly**: Grammar and tone checking
- **AnswerThePublic**: Find question-based keywords
- **Google Trends**: Seasonal keyword insights

### SEO Tools
- **Google Search Console**: Track performance
- **Google Keyword Planner**: Research local keywords
- **BrightLocal**: Local SEO tracking
- **Schema.org**: Structured data markup

### Local Research
- **Google My Business**: Monitor local searches
- **Yelp**: See competitor reviews and keywords
- **Facebook Events**: Local event inspiration
- **Denver Chamber of Commerce**: Local business insights

---

## Quick Reference: Content Creation Process

1. **Research**: What problem does this solve?
2. **Headline**: Start with the problem (under 60 chars)
3. **Opening**: Acknowledge the customer's pain point
4. **Solution**: Explain how you help
5. **Proof**: Add testimonials, examples, specifics
6. **Action**: Clear next step for the reader
7. **Optimize**: Check reading level and SEO elements
8. **Review**: Ensure it helps the customer

Remember: Every piece of content should make a potential customer's life easier. If it doesn't solve a problem, it shouldn't be published.