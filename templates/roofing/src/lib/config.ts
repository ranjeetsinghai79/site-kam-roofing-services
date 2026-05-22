import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "KAM Roofing Services",
    tagline: "Quality Roofing, Built To Last",
    phone: "(727) 637-6827",
    phoneHref: "tel:+17276376827",
    email: "info@kamroofing.com",
    address: "123 Main St",
    city: "Pinellas Park",
    serviceAreas: ["Pinellas"],
    license: "CGC1525520",
    since: "2015",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ember",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Metal Roofing", desc: "Durable, long-lasting metal roofs for superior protection and energy efficiency.", urgent: false },
    { icon: "home", title: "Shingle Roofing", desc: "Classic and versatile shingle roofing options with expert installation and repair.", urgent: false },
    { icon: "home", title: "Tile Roofing", desc: "Elegant and resilient tile roofs that enhance curb appeal and withstand harsh weather.", urgent: false },
    { icon: "home", title: "Low-Slope / Flat Roofing", desc: "Specialized solutions for low-slope and flat roofs, ensuring proper drainage and longevity.", urgent: false },
    { icon: "home", title: "New Roof Construction", desc: "Expert installation of new roofs for residential and commercial properties.", urgent: false },
    { icon: "wrench", title: "Roof Repairs", desc: "Prompt and reliable roof repair services to fix leaks, storm damage, and wear.", urgent: true },
  ],

  testimonials: [
    { name: "Diniar", location: "Pinellas Park", stars: 5, text: "It was time to replace our roof and Kam roofing was referred to us through a friend. We got a few estimates including one from Leighann Hirsch from Kam Roofing. Leighann was very thorough and answered all our questions. Kam's cost estimate was somewhere in the middle, but we opted to use them because of the strong recommendation. We are glad we did. Our production manager, Brian Schwerdtfeger, communicated with us on key dates and provided updates regularly. He was very responsive. And Hilton supervised the project and reviewed the work during and after the install. We were very happy with the work and will recommend them to anyone needing work done on their roof." }
  ],

  trustBadges: [
    "GAF Certified Contractor", "Licensed & Insured", "Veteran Owned & Operated", "Discount Programs Available", "5-Star Rated", "Transparent Pricing"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your roofing needs with quick and efficient service." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, honest pricing with no hidden fees or surprises." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI receptionist is available around the clock to assist you." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and materials for the job." }
  ],

  formServiceOptions: ["Metal Roofing", "Shingle Roofing", "Tile Roofing", "Low-Slope / Flat Roofing", "New Roof Construction", "Roof Repairs", "Siding Services", "Re-roofing", "Roof Maintenance"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!