"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

// ─── DATA ────────────────────────────────────────────────────────────────────

const BREAKFAST = [
  { name:"Idli",               tag:"Classic",       img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80" },
  { name:"Medu Vada",          tag:"Crispy",        img:"https://i0.wp.com/curryloves.com/wp-content/uploads/2025/03/blogmeduvadai.jpg?resize=750%2C1000&ssl=1" },
  { name:"Sambar Idli",        tag:"Comforting",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCbB6rYGHgFW3wcjT6ZOY4WdE4gb2KzjEdA&s" },
  { name:"Mini Idli",          tag:"Bite-size",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gpXq7Kcd85OfbRooPIZaFdUJ2uWWeUF6lQ&s" },
  { name:"Ghee Podi Idli",     tag:"Rich",          img:"https://vaya.in/recipes/wp-content/uploads/2019/10/Idli-Podi-and-Podi-Idly.jpg" },
  { name:"Plain Dosa",         tag:"Everyday",      img:"https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg" },
  { name:"Masala Dosa",        tag:"Bestseller",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYH7H-KRy-dnN9To-d5TJu7dKpY3f_nr0w3Q&s" },
  { name:"Mysore Masala Dosa", tag:"Spicy",         img:"https://palatesdesire.com/wp-content/uploads/2022/09/Mysore-masala-dosa-recipe@palates-desire.jpg" },
  { name:"Rava Dosa",          tag:"Crispy Net",    img:"https://d1uz88p17r663j.cloudfront.net/original/45301b2f6294627aee5eec55e46be633_Rava__Dosa_-_Twist.jpg" },
  { name:"Onion Dosa",         tag:"Flavourful",    img:"https://media.vyaparify.com/vcards/products/177902/product_1743505073_67ebc6b142392.png" },
  { name:"Set Dosa",           tag:"Soft",          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKq0NCfzqOIp6QzRFW00eC832DKxcc2KWNsA&s" },
  { name:"Uttapam",            tag:"Thick & Hearty",img:"https://pipingpotcurry.com/wp-content/uploads/2026/01/Uttapam-Onion-Tomato-PipingPotCurry.jpg" },
  { name:"Onion Uttapam",      tag:"Savory",        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTocXeb9Hv38GDjcsa_hTA-WVNoDmH_ApQQ&s" },
  { name:"Tomato Uttapam",     tag:"Tangy",         img:"https://bergnerhome.in/cdn/shop/files/Onion-Tomato-Uttapam_ca08699f-fef2-4112-bf8d-90d51d616efa_800x.jpg?v=1754908086" },
  { name:"Pesarattu",          tag:"Protein Rich",  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dErZvJ27IvJcYpqUyOuTEwdumRzNDn5kQg&s" },
  { name:"Adai Dosa",          tag:"Lentil Dosa",   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YL6b1rkIp0coBhQZ23cd0auCcR91RXA-ew&s" },
  { name:"Neer Dosa",          tag:"Delicate",      img:"https://static.toiimg.com/thumb/53541904.cms?imgsize=168967&width=800&height=800" },
  { name:"Appam",              tag:"Kerala Style",  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZ3FPaRyyXMqRBH72H50tlS5rw6vKLqWyyg&s" },
  { name:"Rava Upma",          tag:"5-Min",         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9An3jEhdO77Wd7jrkfZg3SEGR_kR9Da46A&s" },
  { name:"Vegetable Upma",     tag:"Wholesome",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62An25qATwuE83QS6U4uid1_fK5kigq9gMQ&s" },
  { name:"Semiya Upma",        tag:"Light",         img:"https://www.cookclickndevour.com/wp-content/uploads/2021/07/semiya-upma-vermicelli-recipe.jpg" },
  { name:"Ven Pongal",         tag:"Temple Style",  img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg" },
  { name:"Khara Pongal",       tag:"Spiced",        img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/ven-pongal.jpg" },
  { name:"Sweet Pongal",       tag:"Festive",       img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/sweet-pongal-chakkara-pongal-500x500.jpg" },
];

const LUNCH = [
  { name:"Sambar Rice",        tag:"Daily Staple",  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjb1mN6MRmfhinIdsUdD4SaVj23h1QfokaA&s" },
  { name:"Lemon Rice",         tag:"Tangy",         img:"https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe.jpg" },
  { name:"Tamarind Rice",      tag:"Bold",          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQML3BAz87OkVWg-Uo9AXXFnhY_B3ulSd1TgQ&s" },
  { name:"Curd Rice",          tag:"Cooling",       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeo-GV5DmC1KSElGcsg3wc5UMWyugxorxJw&s" },
  { name:"Coconut Rice",       tag:"Fragrant",      img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe-500x500.jpg" },
  { name:"Tomato Rice",        tag:"Quick",         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2PWC2rFoqj1xdOBpxhx3wNmApWMmQ4hdHA&s" },
  { name:"Bisibele Bath",      tag:"Karnataka",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbTlzVwxWBvWUmDWnhRMNs4AiVkSDaG39nQ&s" },
  { name:"Vegetable Biryani",  tag:"Aromatic",      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg7JYWWJNnY-MJVGm02itthRtcc105HPt4Q&s" },
  { name:"Vegetable Kurma",    tag:"Rich Gravy",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBrmClB1YPQ9BIaxdIbGtcuwRR8tiMLBqnw&s" },
  { name:"Avial",              tag:"Kerala",        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UZt5GLEq8oEloJUSk8bCCJTO9sJ1y5Oiww&s" },
  { name:"Paruppu Dal",        tag:"Comfort",       img:"https://www.vidhyashomecooking.com/wp-content/uploads/2018/07/DalTadka.jpg" },
  { name:"Rasam",              tag:"Digestive",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMc1l0teo_PdE7nwmRi3P0sCVuL2UjCY24A&s" },
  { name:"Vegetable Sambar",   tag:"Homestyle",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0kF0Eib683094SKbfJ8iS-7-xqU6ckEJoQ&s" },
  { name:"Drumstick Sambar",   tag:"Traditional",   img:"data:image/jpeg;base64,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" },
  { name:"Kara Kuzhambu",      tag:"Spicy",         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJCpenAIuyvHoChCk_PYIU6REiZILA1X_bQ&s" },
  { name:"Mor Kuzhambu",       tag:"Buttermilk",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGKe9h_fvhSoNvfQFZFRN0KmDXVHWD69QgQ&s" },
  { name:"Beans Poriyal",      tag:"Stir-fried",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxyXetquNe-SFwVLRN7fC1MPOKXpuyA-m9xA&s" },
  { name:"Cabbage Poriyal",    tag:"Crunchy",       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExt0pj2fyhNR4ZU2cMIa1NjlkxCyCcMfqpA&s" },
  { name:"Beetroot Poriyal",   tag:"Colourful",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquFcuPNhnZnl-LvIN5X3FgM3wLUIgQm1ZXg&s" },
  { name:"Potato Fry",         tag:"Crowd Fav",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpkaSz7LpUwCjW2O1WVxZGSzyA0zChK6YVQ&s" },
  { name:"Kootu",              tag:"Thick Gravy",   img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2025/01/keerai-kootu-spinach-kootu.jpg" },
  { name:"Vegetable Stew",     tag:"Kerala",        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmjsHptR0W47WQRFVA6jPw9w5y3xsMNbczQ&s" },
];

const CHICKEN = [
  { name:"Andhra Chicken Curry",  tag:"Fiery",        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ulg3w0NqbnxNTxtewVnbWpO6yvn8KvrgXA&s" },
  { name:"Chicken Chettinad",     tag:"Aromatic",     img:"https://www.whiskaffair.com/wp-content/uploads/2020/09/Chicken-Chettinad-Curry-2-3.jpg" },
  { name:"Natu Kodi Pulusu",      tag:"Country Hen",  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjDrD7Oh3cjfHw6pUU77wWmlDT_t7JxGuZg&s" },
  { name:"Chicken Sukka",         tag:"Dry Roast",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18k1j1okvaMEJdv21xMeHeHBpW3HSny6gug&s" },
  { name:"Chicken Ghee Roast",    tag:"Mangalore",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dFN8gTRM7Q1uryLeTfzCixJbK84eq97npQ&s" },
  { name:"Chicken Varuval",       tag:"Tamil Nadu",   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jXF-2ChebVBKiffYNoLqYZmvt-RBdBsKcw&s" },
  { name:"Andhra Chicken Fry",    tag:"Spiced",       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovcxhD54D5nQy_oPdPTv1_zwfjdqbVsDEWg&s" },
  { name:"Pepper Chicken",        tag:"Bold",         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4ei3EsrRV9p8E8Ia6gcQfpZFcKamKwSk6g&s" },
  { name:"Chicken Biryani",       tag:"Dum Style",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s" },
];

const SEAFOOD_MUTTON = [
  { name:"Andhra Fish Curry",       tag:"Tangy",         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-AVtuAQRvRroxa7jR-iHRPKLwQfBF3v98Q&s" },
  { name:"Meen Kuzhambu",           tag:"Tamil Nadu",    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhFNMUt9M2eAaW1oQYElIHi7xtJKDig-1Jw&s" },
  { name:"Kerala Fish Curry",       tag:"Coconut",       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgg6oeidsgc-irY5ohUCpX7Bk9RhIiXRkPow&s" },
  { name:"Fish Fry",                tag:"Crispy",        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOc9Pg8dFaXhtgMiJl_vDn2QfYdhhz1uzPQ&s" },
  { name:"Chettinad Fish Fry",      tag:"Spiced",        img:"https://www.cookingandme.com/wp-content/uploads/2016/12/chettinad-fish-fry-meen-varuval-recipe-ed-500x500.jpg" },
  { name:"Mangalorean Fish Curry",  tag:"Bold",          img:"https://www.licious.in/blog/wp-content/uploads/2021/01/Mangalorean-Pomfret-Fish-Curry.jpg" },
  { name:"Korameenu Pulusu",        tag:"Snakehead",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-AVtuAQRvRroxa7jR-iHRPKLwQfBF3v98Q&s" },
  { name:"Fish Molee",              tag:"Kerala",        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykPzubz3sdysGuR0q8Em2134C_S_aZHZ2Hg&s" },
  { name:"Prawn Ghee Roast",        tag:"Mangalore",     img:"https://theyummydelights.com/wp-content/uploads/2020/10/prawns-ghee-roast.jpg" },
  { name:"Royyala Iguru",           tag:"Andhra",        img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2017/11/royyala-iguru-recipe-prawns-curry-500x500.jpg" },
  { name:"Kerala Prawn Curry",      tag:"Coconut",       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDOf13GM2o3YozDOwfYxG1mtG3AlVFbmLDA&s" },
  { name:"Prawn Fry",               tag:"Crispy",        img:"https://deliciouslyindian.net/wp-content/uploads/2025/09/IMG_8488-scaled.jpg" },
  { name:"Chettinad Prawn Masala",  tag:"Spiced",        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6WLZcDQjrFcFnyaoK4P7HRonO94sbMIP6A&s" },
  { name:"Andhra Mutton Curry",     tag:"Rich",          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGqer8mHMQHuec3hlm5my0Y1Fu1UpzT0dFg&s" },
  { name:"Mutton Sukka",            tag:"Dry Roast",     img:"https://www.sharmispassions.com/wp-content/uploads/2012/08/MuttonSukka5.jpg" },
  { name:"Mutton Pepper Fry",       tag:"Bold",          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS949vtykFylKaZjpufgXrr02YJIfUKVl4Mdg&s" },
  { name:"Mutton Biryani",          tag:"Dum Style",     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iOoCdkuvMmH_fG9NCUFsFC0NR79uZ725Ug&s" },
  { name:"Mutton Keema Curry",      tag:"Minced",        img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/mutton-keema-recipe.jpg" },
];

// ─── CARD ────────────────────────────────────────────────────────────────────

function DishCard({ name, tag, img, dark = false }: { name: string; tag: string; img: string; dark?: boolean }) {
  return (
    <div
      className="card-lift group rounded-2xl overflow-hidden reveal-scale"
      style={{
        background: dark ? "rgba(255,255,255,0.05)" : "#ffffff",
        border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(216,208,192,0.5)",
      }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={img} alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: dark ? 0.75 : 1 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(39,54,53,0.6) 0%,transparent 55%)" }} />
        <span
          className="absolute top-2.5 right-2.5 text-[10px] font-accent font-bold px-2.5 py-0.5 rounded-full text-white"
          style={{ background: dark ? "rgba(87,112,71,0.85)" : "#577047" }}
        >
          {tag}
        </span>
      </div>
      <div className="px-4 py-3">
        <h3
          className="font-display font-bold text-sm leading-snug"
          style={{ color: dark ? "#f5f2ec" : "#273635" }}
        >
          {name}
        </h3>
      </div>
    </div>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────

function SectionHeader({ emoji, label, title, sub, count, light = false }: {
  emoji: string; label: string; title: string; sub: string; count: string; light?: boolean;
}) {
  return (
    <div className="mb-10 reveal flex items-end justify-between flex-wrap gap-4">
      <div>
        <div className={`section-label ${light ? "section-label-light" : ""}`}>{label}</div>
        <h2
          className="font-display font-black flex items-center gap-3"
          style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", color: light ? "#f5f2ec" : "#273635" }}
        >
          <span>{emoji}</span> {title}
        </h2>
        <p className="mt-1.5 text-sm" style={{ color: light ? "#c8c4bc" : "#9a9590" }}>{sub}</p>
      </div>
      <span
        className="font-accent font-bold text-xs px-3 py-1.5 rounded-full flex-shrink-0"
        style={{ background: light ? "rgba(93,129,76,0.2)" : "rgba(93,129,76,0.1)", color: light ? "#7da060" : "#5d814c" }}
      >
        {count}
      </span>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function MenuPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-24 overflow-hidden" style={{ background: "#273635" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1600&q=75"
            alt="South Indian food"
            className="w-full h-full object-cover"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(39,54,53,0.97) 0%,rgba(39,54,53,0.72) 100%)" }} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle,#7da060 1px,transparent 1px)", backgroundSize: "34px 34px" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center pt-14">
          <div
            className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-accent font-bold tracking-widest uppercase mb-6"
            style={{ borderColor: "rgba(93,129,76,0.4)", color: "#7da060", animation: "fadeUp .5s ease both" }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#5d814c" }} />
            Breakfast · Lunch · Chicken · Seafood & Mutton
          </div>
          <h1
            className="font-display font-black text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2.4rem,6vw,4rem)", animation: "fadeUp .6s .08s ease both" }}
          >
            South Indian<br />
            <span className="italic" style={{ color: "#7da060" }}>Recipes & Menu</span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#c8c4bc", animation: "fadeUp .6s .16s ease both" }}
          >
            Everything from a steaming morning idli to a slow-cooked Chettinad prawn masala — the full spread of South Indian cooking.
          </p>
        </div>

        {/* Category quick-links */}
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 mt-14" style={{ animation: "fadeUp .6s .28s ease both" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Breakfast",         count: "24 dishes", anchor: "#breakfast", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&q=70" },
              { label: "Lunch & Mains",      count: "23 dishes", anchor: "#lunch",     img: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=300&q=70" },
              { label: "Chicken",            count: "10 dishes", anchor: "#chicken",   img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&q=70" },
              { label: "Seafood & Mutton",   count: "19 dishes", anchor: "#nonveg",    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&q=70" },
            ].map(({ label, count, anchor, img }) => (
              <a
                key={label} href={anchor}
                className="group relative rounded-xl overflow-hidden card-lift block"
                style={{ height: "80px" }}
              >
                <img src={img} alt={label} className="w-full h-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(39,54,53,0.8) 0%,rgba(39,54,53,0.3) 100%)" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-display font-bold text-white text-sm">{label}</div>
                  <div className="font-accent text-xs" style={{ color: "#7da060" }}>{count}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BREAKFAST ── */}
      <section id="breakfast" className="py-20 lg:py-28" style={{ background: "#f5f2ec" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            emoji="🌅" label="Morning" title="Breakfast"
            sub="Idlis, dosas, upma, pongal — the full South Indian morning spread."
            count="24 dishes"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BREAKFAST.map((d, i) => (
              <div key={i} className={`d${(i % 6) + 1}`}>
                <DishCard {...d} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LUNCH ── */}
      <section id="lunch" className="py-20 lg:py-28" style={{ background: "#ede8df" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            emoji="🍛" label="Afternoon" title="Lunch & Mains"
            sub="Rice dishes, gravies, poriyals, sambars — the heart of South Indian cooking."
            count="23 dishes"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {LUNCH.map((d, i) => (
              <div key={i} className={`d${(i % 6) + 1}`}>
                <DishCard {...d} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHICKEN ── */}
      <section id="chicken" className="py-20 lg:py-28" style={{ background: "#273635" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            emoji="🍗" label="Non-Veg" title="Chicken"
            sub="From fiery Andhra curries to slow-cooked Chettinad masalas."
            count="10 dishes" light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CHICKEN.map((d, i) => (
              <div key={i} className={`d${(i % 6) + 1}`}>
                <DishCard {...d} dark />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEAFOOD & MUTTON ── */}
      <section id="nonveg" className="py-20 lg:py-28" style={{ background: "#1a2524" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            emoji="🐟" label="Coastal & Slow-Cooked" title="Seafood & Mutton"
            sub="Fish curries, prawn roasts, and mutton dishes across South Indian coastal traditions."
            count="19 dishes" light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SEAFOOD_MUTTON.map((d, i) => (
              <div key={i} className={`d${(i % 6) + 1}`}>
                <DishCard {...d} dark />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <section className="py-12" style={{ background: "#577047" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center reveal">
          <h2 className="font-display font-black text-white mb-2" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>
            200+ Dishes. All South Indian. All Handmade.
          </h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            Breakfast · Lunch & Mains · Chicken · Seafood & Mutton
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}