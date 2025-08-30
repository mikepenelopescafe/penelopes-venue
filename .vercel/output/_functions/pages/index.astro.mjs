import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute, r as renderComponent } from '../chunks/astro/server_CwXNHDtl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C-LHEuIl.mjs';
import 'clsx';
/* empty css                                 */
import { C as Card, d as CardContent } from '../chunks/card_Bb7P_wAd.mjs';
import { B as Badge } from '../chunks/badge_CutUV_Ed.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://penelopesvenue.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    headline,
    subheadline,
    showLogo = true,
    ctaPrimary = { text: "Explore Menu", href: "/menu" },
    ctaSecondary = { text: "Our Story", href: "/about" },
    showScrollHint = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero min-h-screen flex items-center justify-center relative overflow-hidden pb-24" data-astro-cid-bbe6dxrz> <!-- Background with gradient and pattern --> <div class="absolute inset-0 bg-gradient-dark" data-astro-cid-bbe6dxrz></div> <div class="absolute inset-0 bg-pattern-dots opacity-10" data-astro-cid-bbe6dxrz></div> <!-- Content --> <div class="relative z-10 text-center max-w-4xl mx-auto px-6" data-astro-cid-bbe6dxrz> ${showLogo && renderTemplate`<div class="mb-8 animate-float" data-astro-cid-bbe6dxrz> <img src="/logo.svg" alt="Penelope's Venue Logo" class="h-48 md:h-64 lg:h-80 xl:h-96 w-auto mx-auto" data-astro-cid-bbe6dxrz> </div>`} ${subheadline && renderTemplate`<div class="mb-12" data-astro-cid-bbe6dxrz> <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-astro-cid-bbe6dxrz> ${subheadline} </p> </div>`} ${(ctaPrimary || ctaSecondary) && renderTemplate`<div class="flex flex-col sm:flex-row gap-6 justify-center items-center" data-astro-cid-bbe6dxrz> ${ctaPrimary && renderTemplate`<a${addAttribute(ctaPrimary.href, "href")} class="bg-primary hover:bg-tan-hover text-primary-foreground px-8 py-4 rounded-md text-base font-medium transition-all duration-300 hover-scale inline-block" data-astro-cid-bbe6dxrz> ${ctaPrimary.text} </a>`} ${ctaSecondary && renderTemplate`<a${addAttribute(ctaSecondary.href, "href")} class="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-md text-base font-medium transition-all duration-300 inline-block" data-astro-cid-bbe6dxrz> ${ctaSecondary.text} </a>`} </div>`} </div> <!-- Scroll hint 
  {showScrollHint && (
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <ScrollHint />
    </div>
  )}--> </section> `;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://penelopesvenue.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description, icon, href } = Astro2.props;
  const Component = href ? "a" : "div";
  return renderTemplate`${renderComponent($$result, "Component", Component, { "class": "service-card bg-gradient-card border border-primary/20 rounded-lg p-6 block", "href": href, "data-astro-cid-uhzbvkqe": true }, { "default": ($$result2) => renderTemplate`${icon && renderTemplate`${maybeRenderHead()}<div class="icon-container text-4xl mb-4 text-primary" data-astro-cid-uhzbvkqe> <span data-astro-cid-uhzbvkqe>${icon}</span> </div>`}<h3 class="text-xl font-display text-foreground mb-3" data-astro-cid-uhzbvkqe> ${title} </h3> <p class="text-muted-foreground leading-relaxed" data-astro-cid-uhzbvkqe> ${description} </p> ` })} `;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/components/ServiceCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seo = {
    title: "Penelope's Cafe & Venue - Premier Wedding & Event Space in Westminster, CO",
    description: "Host unforgettable weddings and events at Penelope's Cafe & Venue in Westminster. Full-service catering, premium bar, and boutique space for 50-100 guests since 2004.",
    keywords: "Westminster wedding venue, event venue Westminster CO, wedding venue Denver metro, full service event venue, boutique wedding venue, catering venue Westminster, Penelope's Cafe"
  };
  const services = [
    {
      title: "Authentic Catering",
      description: "Latin fusion cuisine crafted with passion - Bronze, Silver, and Gold packages available",
      icon: "Chef's Hat"
    },
    {
      title: "Premium Bar Service",
      description: "Curated cocktails, beer, and wine selection with professional bartending and full bar setup",
      icon: "Bar Glass"
    },
    {
      title: "Complete Venue Buyout",
      description: "Exclusive use of our charming cafe space for your private celebration with dedicated event management",
      icon: "Event Space"
    },
    {
      title: "Professional Event Team",
      description: "Experienced staff in professional attire handling every detail from setup to cleanup",
      icon: "Team"
    }
  ];
  const testimonials = [
    {
      quote: "Penelope's made my bridal shower absolutely perfect. The food was incredible, service flawless, and our guests still talk about it!",
      author: "Maria Rodriguez",
      event: "Bridal Shower - 50 guests"
    },
    {
      quote: "The venue buyout option gave us the privacy we needed for our milestone birthday celebration. Every detail was perfect!",
      author: "David & Susan",
      event: "Birthday Celebration - 75 guests"
    }
  ];
  const venueStats = [
    { label: "Guest Capacity", value: "50-100", icon: "Guests" },
    { label: "In House Catering", value: "Yes", icon: "Delicious Food" },
    { label: "Spanish Inspired", value: "Yes", icon: "Moody Atmosphere" },
    { label: "Location", value: "Westminster, CO", icon: "Location" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description, "keywords": seo.keywords }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "subheadline": "Boutique Spanish inspired venue with full kitchen and bar, exclusively yours for events of 50-100 guests. Your premier destination for weddings and celebrations in Westminster.", "ctaPrimary": { text: "Book Your Event", href: "/contact#book" }, "ctaSecondary": { text: "View Our Menu", href: "/venue#menu" } })}  ${maybeRenderHead()}<section class="relative py-24 px-6 overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/penelope-diningroom.webp');"> <!-- Gradient Overlay for Text Readability --> <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div> <!-- Subtle Pattern Overlay for Texture --> <div class="absolute inset-0 bg-pattern-dots opacity-10"></div> </div> <!-- Content Container --> <div class="relative max-w-6xl mx-auto text-center min-h-[500px] flex items-center"> <!-- Section Header --> <div class="w-full"> <div class="mb-16"> <h2 class="text-5xl font-display text-white mb-4 leading-tight">
Your Perfect <span class="text-primary">Event Venue</span> </h2> <p class="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
Experience the warmth of our Spanish-inspired space, designed for intimate gatherings of 50-100 guests
</p> </div> <!-- Stats Grid --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8"> ${venueStats.map((stat) => renderTemplate`<div class="group hover-lift transition-all duration-300"> <!-- Glassmorphism Card --> <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300"> <div class="text-4xl font-display text-primary mb-3 group-hover:scale-110 transition-transform duration-300"> ${stat.icon} </div> <div class="text-3xl font-bold text-white mb-2">${stat.value}</div> <div class="text-white/80 text-sm font-medium">${stat.label}</div> </div> </div>`)} </div> <!-- Call to Action --> <div class="mt-16"> <a href="/contact#book" class="btn-primary-lg">
Plan Your Event
</a> </div> </div> </div> </section>  <section class="py-20 px-6 bg-background"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> ${renderComponent($$result2, "Badge", Badge, { "className": "mb-4 bg-primary/10 text-primary border-primary/20" }, { "default": ($$result3) => renderTemplate`Complete Event Experience` })} <h2 class="text-4xl font-display text-foreground mb-4">Why Choose Penelope's Cafe & Venue</h2> <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
From our authentic Latin inspired cuisine to professional event management, we provide everything you need for unforgettable celebrations
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": service.title, "description": service.description, "icon": service.icon })}`)} </div> </div> </section>  <section class="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-card/20"> <div class="max-w-6xl mx-auto"> <!-- Section Header --> <div class="text-center mb-16"> ${renderComponent($$result2, "Badge", Badge, { "className": "mb-4 bg-primary/10 text-primary border-primary/20" }, { "default": ($$result3) => renderTemplate`Meet Our Owner` })} <h2 class="text-4xl font-display text-foreground mb-4">Hey There, Welcome to Penelope's!</h2> <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
Discover the heart and soul behind Westminster's most beloved café and venue
</p> </div> <!-- Main Content Grid --> <div class="grid lg:grid-cols-2 gap-12 items-center"> <!-- Owner Photo --> <div class="relative order-2 lg:order-1"> <div class="relative group"> <!-- Decorative Background --> <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div> <!-- Photo Container --> <div class="relative bg-card rounded-2xl p-2 shadow-2xl hover-lift transition-all duration-500"> <img src="/lisseth-penelopes.jpg" alt="Lisseth, Owner of Penelope's Café & Venue" class="w-full aspect-[4/5] object-cover rounded-xl shadow-lg"> </div> </div> </div> <!-- Story Content --> <div class="order-1 lg:order-2"> <div class="space-y-6"> <!-- Introduction --> <div> <h3 class="text-2xl font-display text-foreground mb-4">I'm Lisseth</h3> <p class="text-lg text-foreground/80 leading-relaxed">
I'm excited to own and operate this place with my ex-husband and business partner Mike, 
                along with our older daughter Celeste who manages the front of house and hires our talented staff, 
                while our younger daughter serves up smiles alongside them.
</p> </div> <!-- Heritage Story --> <div class="bg-card/50 rounded-xl p-6 border border-primary/10"> <h4 class="text-lg font-semibold text-primary mb-3">Our Peruvian Roots</h4> <p class="text-foreground/80 leading-relaxed">
The name Penélope's comes from my middle name and our older daughter's—Penélope—a nod to our Peruvian roots. 
                I came to the U.S. from Peru at five, and my love for vibrant flavors shapes our Latin fusion menu.
</p> </div> <!-- Menu Highlights --> <div> <h4 class="text-lg font-semibold text-foreground mb-3">What We Love to Serve</h4> <p class="text-foreground/80 leading-relaxed mb-4">
Think fresh salads, smoothies, lattes, steak and eggs, and fluffy pancakes topped with fresh fruit—light, filling dishes. As someone who loves to design spaces, I bring that same creativity to our catering setups, ensuring every event is beautifully arranged and flavorful.
</p> </div> </div> </div> </div> </div> </section>  <section class="py-20 px-6 bg-card/30"> <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"> <div> ${renderComponent($$result2, "Badge", Badge, { "className": "mb-4 bg-primary/10 text-primary border-primary/20" }, { "default": ($$result3) => renderTemplate`Experienced Team` })} <h2 class="text-4xl font-display text-foreground mb-6">
Westminster's Premier Event Destination
</h2> <p class="text-lg text-foreground/80 mb-6 leading-relaxed">
Located at 8050 Federal Blvd in the heart of Westminster, Penelope's Venue
          has been crafting authentic Latin fusion cuisine and hosting exceptional events. Our passion for culinary excellence and commitment to service excellence
          makes us the go-to choice for weddings, corporate events, and special celebrations.
</p> <div class="grid grid-cols-2 gap-6 mb-8"> <div class="text-center p-4 bg-primary/5 rounded-lg"> <div class="text-2xl font-bold text-primary">$</div> <div class="text-sm text-muted-foreground"> Perfect Package</div> </div> <div class="text-center p-4 bg-primary/5 rounded-lg"> <div class="text-2xl font-bold text-primary">9AM-11PM</div> <div class="text-sm text-muted-foreground">Event Hours</div> </div> </div> </div> <div class="relative"> <div class="relative group hover-lift transition-all duration-300"> <img src="/penelope-exterior.webp" alt="Penelope's Café & Venue Exterior - Westminster, CO" class="w-full aspect-video object-cover rounded-lg shadow-xl"> <!-- Image Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <!-- Location Badge --> <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"> <p class="text-sm font-semibold text-primary">Westminster, CO</p> <p class="text-xs text-primary/70">8050 N Federal Blvd</p> </div> </div> </div> </div> </section>  <section class="py-20 px-6 bg-background"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl font-display text-foreground mb-4">What Our Clients Say</h2> <p class="text-lg text-muted-foreground">
Real experiences from real events hosted at Penelope's Venue
</p> </div> <div class="grid md:grid-cols-2 gap-8"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "Card", Card, { "className": "bg-card border-primary/20 hover-lift transition-all duration-300" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardContent", CardContent, { "className": "p-6" }, { "default": ($$result4) => renderTemplate` <blockquote class="text-foreground/80 mb-4 italic leading-relaxed">
"${testimonial.quote}"
</blockquote> <div class="text-sm"> <div class="font-medium text-foreground">${testimonial.author}</div> <div class="text-primary">${testimonial.event}</div> </div> ` })} ` })}`)} </div> <!-- 
      <div class="text-center mt-12">
        <a href="/testimonials" class="btn-outline">
          Read More Success Stories
        </a>
      </div>
    </div>--> </div></section>  <section class="py-16 px-6 bg-gradient-card"> <div class="max-w-4xl mx-auto text-center"> <div class="mb-8"> <h2 class="text-3xl font-display text-foreground mb-2">Visit Us in Westminster</h2> <p class="text-lg text-primary font-medium mb-2">8050 Federal Blvd, Westminster, CO 80031</p> <p class="text-muted-foreground">
(720) 639-2406
</p> </div> <h2 class="text-4xl font-display text-foreground mb-6">Ready to Plan Your Event?</h2> <p class="text-xl mb-8 text-foreground/90">
Join hundreds of satisfied clients who have chosen Penelope's Venue for their most important celebrations
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" class="btn-primary">
Book Your Event
</a> <a href="/venue" class="btn-outline">
View Venue Details
</a> </div> </div> </section> ` })}`;
}, "/Users/mike/Documents/Projects/penelopes-venue/src/pages/index.astro", void 0);

const $$file = "/Users/mike/Documents/Projects/penelopes-venue/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
