// Comfort Air Solutions LLC — Homepage
const { useState, useEffect } = React;
const I = window.Icon;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "swoosh",
  "heroVisual": "thermostat",
  "showFeatured": true,
  "accentGreen": true
}/*EDITMODE-END*/;

function Logo({ variant }) {
  return (
    <a href="#" className="brand" aria-label="Comfort Air Solutions LLC">
      <img src="assets/logo.jpeg" alt="Comfort Air Solutions LLC" className={`brand-logo${variant === 'foot' ? ' foot' : ''}`} />
    </a>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-row">
        <Logo />
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#why">Why Us</a>
          <a href="#testi">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-cta">
          <div className="nav-phone">
            <div className="ph-ic"><I.Phone /></div>
            <div>
              <div style={{fontSize:11,color:'var(--ink-3)',textTransform:'uppercase',letterSpacing:'.1em'}}>24/7 Service</div>
              <div>(555) 274-2665</div>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary">Request a Quote</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ tweaks }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><span className="dot"></span>Available 24/7 · Same-Day Service</span>
          <h1 style={{marginTop:22}}>
            Reliable heating &amp; cooling, <span className={tweaks.headline === 'swoosh' ? 'swoosh' : 'accent'}>any season.</span>
          </h1>
          <p className="lede">
            Comfort Air Solutions delivers trusted HVAC service for homes and businesses across Fort Mohave and the Tri-State area — from urgent repairs to brand-new installations. Licensed, insured, and on time, every time.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-green"><I.Tag /> Request a Free Quote</a>
            <a href="#contact" className="btn btn-ghost"><I.Calendar /> Schedule Service</a>
          </div>
          <div className="hero-meta">
            <div className="m">
              <div className="ic"><I.Shield /></div>
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="m">
              <div className="ic"><I.Bolt /></div>
              <span>Same-Day Repairs</span>
            </div>
            <div className="m">
              <div className="stars">
                <I.Star style={{width:16,height:16}}/><I.Star style={{width:16,height:16}}/><I.Star style={{width:16,height:16}}/><I.Star style={{width:16,height:16}}/><I.Star style={{width:16,height:16}}/>
              </div>
              <span>4.9 · 380+ reviews</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hv-photo">
            <img src="assets/hero-hvac.jpg" alt="HVAC technician at outdoor AC condenser unit" loading="eager"/>
          </div>

          <div className="hv-card hv-pill">
            <div className="ic"><I.Check /></div>
            <div>
              <div className="lbl">Tech Arrived</div>
              <div className="val">12 min ahead of schedule</div>
            </div>
          </div>

          <div className="hv-card hv-quote">
            <div className="qstars">
              <I.Star style={{width:14,height:14}}/><I.Star style={{width:14,height:14}}/><I.Star style={{width:14,height:14}}/><I.Star style={{width:14,height:14}}/><I.Star style={{width:14,height:14}}/>
            </div>
            <div className="qtxt">"AC went out at 9pm — they had a tech here by 11. Honest pricing, fixed in one visit."</div>
            <div className="qauth">
              <div className="qav">DR</div>
              <div>
                <div className="qname">Diane R.</div>
                <div className="qcity">Homeowner · Fort Mohave</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { ic: <I.Shield/>, t: 'Licensed · Bonded · Insured' },
    { ic: <I.Bolt/>, t: 'Same-Day Service' },
    { ic: <I.Tag/>, t: 'Honest, Up-Front Pricing' },
    { ic: <I.Award/>, t: 'EPA-Certified Technicians' },
    { ic: <I.Heart/>, t: '100% Satisfaction Guarantee' },
  ];
  return (
    <div className="trust">
      <div className="container trust-row">
        {items.map((x,i)=>(
          <div className="trust-item" key={i}>{x.ic}<span>{x.t}</span></div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img className="about-photo" src="assets/about-hvac.jpg" alt="Comfort Air Solutions technician at home" loading="lazy" />
          <div className="about-overlay-badge">
            <div className="ic"><I.Award/></div>
            <div>
              <div className="lb">Trusted HVAC Pros</div>
              <div className="vt">Family-owned · Locally operated</div>
            </div>
          </div>
          <div className="about-badge">
            <div>
              <div className="num">15+</div>
              <div className="lbl">Years<b>Serving the community</b></div>
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow"><span className="dot"></span>About Comfort Air</span>
          <h2>A neighborhood HVAC team you can <span className="em">actually trust.</span></h2>
          <p>
            Comfort Air Solutions LLC was founded on a simple idea: HVAC service should be honest, fast, and built around the customer. For over 15 years we've kept families comfortable and businesses running — through scorching summers and frozen mornings — with technicians who treat your home like their own.
          </p>
          <p>
            No high-pressure sales. No surprise fees. Just expert work, transparent pricing, and a team that picks up the phone.
          </p>
          <div className="about-stats">
            <div className="s"><div className="v">8,500+</div><div className="l">Service calls completed</div></div>
            <div className="s"><div className="v">4.9★</div><div className="l">Avg. customer rating</div></div>
            <div className="s"><div className="v">24/7</div><div className="l">Emergency dispatch</div></div>
          </div>
          <div className="about-sig">
            <div className="av">MR</div>
            <div>
              <div className="nm">Marcus Reyes</div>
              <div className="tt">Founder &amp; Master HVAC Technician</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ tweaks }) {
  const items = [
    { ic:<I.Snow/>, t:'AC Installation', d:'High-efficiency air conditioning systems sized and installed for your home — flat-rate pricing, no surprises.', feat:false, img:'assets/svc-install.jpg' },
    { ic:<I.Wrench/>, t:'AC Repair', d:'Fast diagnosis and same-day repair on every major AC brand. Most calls fixed in a single visit.', feat:true, img:'assets/svc-repair.jpg' },
    { ic:<I.Flame/>, t:'Heating Services', d:'Furnace, heat pump, and boiler repair, replacement, and tune-ups to keep winters comfortable.', feat:false, img:'assets/svc-heat.jpg' },
    { ic:<I.Settings/>, t:'HVAC Maintenance', d:'Seasonal tune-ups and our Comfort Club membership — extend equipment life and avoid breakdowns.', feat:false, img:'assets/svc-maint.jpg' },
    { ic:<I.Leaf/>, t:'Indoor Air Quality', d:'Air purifiers, humidifiers, UV systems, and filtration — clean, healthy air your family can breathe easy.', feat:false, img:'assets/svc-iaq.jpg' },
    { ic:<I.Bolt/>, t:'Emergency Service', d:'24/7 emergency dispatch with technicians on standby. We answer when others go to voicemail.', feat:false, img:'assets/svc-emerg.jpg' },
  ];
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot"></span>Our Services</span>
            <h2>Whole-home comfort, <span className="em">handled.</span></h2>
          </div>
          <p className="lede">From a quick repair to a full system replacement, our certified technicians cover every part of your HVAC system — residential and commercial.</p>
        </div>
        <div className="svc-grid">
          {items.map((x,i)=>(
            <div className={`svc${x.feat && tweaks.showFeatured ? ' feat' : ''}`} key={i}>
              <div className="svc-img">
                <img src={x.img} alt={x.t} loading="lazy"/>
              </div>
              <div className="svc-body">
                <div className="svc-ic">{x.ic}</div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
                <a href="#contact" className="svc-link">Learn more <I.Arrow/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t:'Licensed & Insured Technicians', d:'Every tech is fully licensed, EPA-certified, background-checked, and insured — your home is protected from the moment we arrive.' },
    { t:'Fast & Reliable Service', d:'Most service calls scheduled within 24 hours. Real arrival windows, real-time updates, no all-day waiting.' },
    { t:'Honest, Up-Front Pricing', d:'Flat-rate quotes before any work begins. No hourly meters running, no surprise add-ons on the invoice.' },
    { t:'Experienced Professionals', d:'Our team averages 12+ years in the field, trained on every major brand from Carrier and Trane to Lennox and Goodman.' },
    { t:'Customer Satisfaction Guaranteed', d:'If you\'re not happy with the work, we make it right — that\'s the Comfort Air promise, in writing.' },
  ];
  return (
    <section className="why" id="why">
      <div className="container why-layout">
        <div className="why-side">
          <span className="eyebrow"><span className="dot"></span>Why Choose Us</span>
          <h2>The right call, the <span className="em">first time.</span></h2>
          <p>You shouldn't have to hope you picked the right HVAC company. Here's exactly what makes Comfort Air different — and why our neighbors keep calling us back.</p>
          <div className="why-cert">
            <div className="c"><I.Check/> NATE-Certified</div>
            <div className="c"><I.Check/> EPA 608 Certified</div>
            <div className="c"><I.Check/> BBB Accredited A+</div>
            <div className="c"><I.Check/> Carrier Factory Authorized</div>
          </div>
        </div>
        <div className="why-list">
          {items.map((x,i)=>(
            <div className="why-item" key={i}>
              <div className="why-num">{String(i+1).padStart(2,'0')}</div>
              <div>
                <h4>{x.t}</h4>
                <p>{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q:'Our furnace died in the middle of a cold snap. Comfort Air had a tech at the door within two hours, parts on the truck, and heat back on before dinner. Lifesavers.',
      n:'Diane Robertson', c:'Homeowner · Fort Mohave', i:'DR', bg:'linear-gradient(135deg,#1d3aa8,#0a1a4a)'
    },
    {
      q:'Got three quotes for a new AC system. Comfort Air wasn\'t the cheapest, but Marcus walked me through every option without pressure. Two summers in — runs perfect, half the energy bill.',
      n:'James Patel', c:'Homeowner · Bullhead City', i:'JP', bg:'linear-gradient(135deg,#22d63f,#16b330)'
    },
    {
      q:'They maintain the HVAC for our whole office building. Always on time, always professional, and they actually explain what they did. I recommend them to everyone.',
      n:'Sarah Chen', c:'Office Manager · Lake Havasu City', i:'SC', bg:'linear-gradient(135deg,#4a6fe5,#1d3aa8)'
    },
  ];
  return (
    <section className="testi" id="testi">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot"></span>Customer Reviews</span>
            <h2>Trusted by <span className="em">hundreds of neighbors.</span></h2>
          </div>
          <p className="lede">4.9 stars across 380+ Google reviews. Here's what families and businesses in our service area have to say.</p>
        </div>
        <div className="testi-grid">
          {items.map((x,i)=>(
            <div className="tcard" key={i}>
              <div className="stars">
                {[0,1,2,3,4].map(s=><I.Star key={s} style={{width:18,height:18}}/>)}
              </div>
              <p className="quote">"{x.q}"</p>
              <div className="who">
                <div className="av" style={{background:x.bg}}>{x.i}</div>
                <div>
                  <div className="nm">{x.n}</div>
                  <div className="ct">{x.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Area() {
  const cities = ['Fort Mohave','Bullhead City','Mohave Valley','Laughlin','Needles','Kingman','Lake Havasu City','Topock','Golden Shores'];
  const pins = [
    {x:50,y:50,main:true,label:'Comfort Air HQ · Fort Mohave'},
    {x:24,y:32}, {x:78,y:24}, {x:32,y:72}, {x:72,y:68}, {x:60,y:38}, {x:40,y:55}, {x:82,y:54}, {x:18,y:62},
  ];
  return (
    <section className="area">
      <div className="container area-grid">
        <div className="area-side">
          <span className="eyebrow"><span className="dot"></span>Service Area</span>
          <h2>Local techs, <span className="em">local response times.</span></h2>
          <p>We're proud to serve homes and businesses throughout the Tri-State area from our home base in Fort Mohave, AZ. Most appointments scheduled within 24 hours — emergency dispatch available around the clock.</p>
          <div className="area-cities">
            {cities.map(c=> <div key={c} className="ct"><I.Pin style={{width:13,height:13,display:'inline',verticalAlign:'-2px',marginRight:5,color:'var(--blue-700)'}}/>{c}</div>)}
          </div>
        </div>
        <div className="area-map">
          <div className="map-grid"></div>
          {pins.map((p,i)=>(
            <React.Fragment key={i}>
              {p.label && <div className="map-label" style={{left:p.x+'%',top:p.y+'%'}}>{p.label}</div>}
              <div className={`map-pin${p.main?' main':''}`} style={{left:p.x+'%',top:p.y+'%'}}>
                {p.main && <I.Pin/>}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section className="ctastrip">
      <div className="container">
        <div className="inner">
          <div>
            <span className="eyebrow" style={{background:'rgba(255,255,255,.08)',borderColor:'rgba(255,255,255,.15)',color:'#9bc2f7'}}><span className="dot"></span>No Obligation Estimate</span>
            <h2 style={{marginTop:18}}>Ready to feel the <span className="em">comfort difference?</span></h2>
            <p>Call now for same-day service, or request a free in-home estimate. A real human picks up — 24 hours a day, 7 days a week.</p>
          </div>
          <div className="ctastrip-actions">
            <a href="#contact" className="btn btn-light"><I.Tag/> Get My Free Quote</a>
            <a href="#contact" className="btn btn-outline-light"><I.Calendar/> Book a Service Visit</a>
            <div className="phonebox">
              <div className="ic"><I.Phone/></div>
              <div>
                <div className="lb">Call 24/7</div>
                <div className="num">(555) 274-2665</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false), 4000); };
  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-side">
          <span className="eyebrow"><span className="dot"></span>Get In Touch</span>
          <h2>Let's get your system <span className="em">running right.</span></h2>
          <p className="lede">Tell us what's going on and we'll be back to you within the hour during business hours — or call our 24/7 line if it can't wait.</p>
          <div className="contact-info">
            <div className="ci" itemScope itemType="https://schema.org/LocalBusiness">
              <div className="ic"><I.Pin/></div>
              <div>
                <div className="lb">Visit / Mail</div>
                <div className="v" itemProp="name">Comfort Air Solutions LLC
                  <small itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">5010 Highway 95, #12</span><br/>
                    <span itemProp="addressLocality">Fort Mohave</span>, <span itemProp="addressRegion">AZ</span> <span itemProp="postalCode">86426</span>
                  </small>
                </div>
              </div>
            </div>
            <div className="ci">
              <div className="ic"><I.Phone/></div>
              <div>
                <div className="lb">Phone · 24/7 Dispatch</div>
                <div className="v"><a href="tel:+15552742665" itemProp="telephone">(555) 274-2665</a><small>Tap to call from mobile</small></div>
              </div>
            </div>
            <div className="ci">
              <div className="ic"><I.Mail/></div>
              <div>
                <div className="lb">Email</div>
                <div className="v"><a href="mailto:service@comfortairsolutions.com">service@comfortairsolutions.com</a><small>Replies within 1 business hour</small></div>
              </div>
            </div>
            <div className="ci">
              <div className="ic"><I.Clock/></div>
              <div>
                <div className="lb">Service Hours</div>
                <div className="v">Mon–Fri · 7am – 7pm<small>Sat 8am–5pm · Sun emergency only · 24/7 phone line</small></div>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-head">
            <div className="ic"><I.Send/></div>
            <div>
              <h3>Request a Free Quote</h3>
              <p>We'll get back to you within the hour.</p>
            </div>
          </div>
          <div className="frow">
            <div className="field"><label>First Name</label><input type="text" required placeholder="Jane"/></div>
            <div className="field"><label>Last Name</label><input type="text" required placeholder="Smith"/></div>
          </div>
          <div className="frow">
            <div className="field"><label>Phone</label><input type="tel" required placeholder="(555) 123-4567"/></div>
            <div className="field"><label>Email</label><input type="email" required placeholder="jane@email.com"/></div>
          </div>
          <div className="field">
            <label>How can we help?</label>
            <select defaultValue="">
              <option value="" disabled>Choose a service…</option>
              <option>AC Repair</option>
              <option>AC Installation / Replacement</option>
              <option>Heating / Furnace Service</option>
              <option>HVAC Maintenance / Tune-up</option>
              <option>Indoor Air Quality</option>
              <option>Emergency / Same-Day</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="field">
            <label>Tell us a bit more</label>
            <textarea placeholder="What's going on with your system? Any details help us send the right tech."></textarea>
          </div>
          <div className="form-foot">
            <button type="submit" className="btn btn-primary">
              {sent ? <><I.Check/> Request Sent — We'll Call Soon</> : <>Send My Request <I.Arrow/></>}
            </button>
            <div className="note"><I.Lock/> Your info is private. We never share it.</div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo variant="foot"/>
            <p>Comfort Air Solutions LLC — your local team for honest, expert HVAC service. Heating, cooling, and clean air, done right the first time.</p>
            <div className="foot-social">
              <a href="#" aria-label="Facebook"><I.Facebook/></a>
              <a href="#" aria-label="X"><I.X/></a>
              <a href="#" aria-label="YouTube"><I.YouTube/></a>
              <a href="#" aria-label="Pinterest"><I.Pinterest/></a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">AC Installation</a></li>
              <li><a href="#services">AC Repair</a></li>
              <li><a href="#services">Heating Services</a></li>
              <li><a href="#services">HVAC Maintenance</a></li>
              <li><a href="#services">Indoor Air Quality</a></li>
              <li><a href="#services">Emergency Service</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#why">Why Choose Us</a></li>
              <li><a href="#testi">Reviews</a></li>
              <li><a href="#">Service Area</a></li>
              <li><a href="#">Comfort Club</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><div className="ci-mini"><I.Phone/><span>(555) 274-2665<br/><span style={{fontSize:12,opacity:.6}}>24/7 dispatch</span></span></div></li>
              <li><div className="ci-mini"><I.Mail/><span>service@comfortairsolutions.com</span></div></li>
              <li><div className="ci-mini"><I.Pin/><span>5010 Highway 95, #12<br/>Fort Mohave, AZ 86426</span></div></li>
              <li><div className="ci-mini"><I.Clock/><span>Mon–Fri 7am–7pm<br/>Sat 8am–5pm</span></div></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 Comfort Air Solutions LLC · All rights reserved.</div>
          <div className="lic">
            <span>License #HVAC-0184629</span>
            <span>EPA-Certified</span>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, ()=>{}];
  return (
    <>
      <Nav/>
      <Hero tweaks={tweaks}/>
      <TrustBar/>
      <About/>
      <Services tweaks={tweaks}/>
      <WhyUs/>
      <Testimonials/>
      <Area/>
      <CTAStrip/>
      <Contact/>
      <Footer/>

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Hero">
            <window.TweakRadio
              label="Headline accent"
              value={tweaks.headline}
              onChange={(v)=>setTweak('headline', v)}
              options={[
                {value:'swoosh', label:'Italic'},
                {value:'solid', label:'Solid blue'},
              ]}
            />
          </window.TweakSection>
          <window.TweakSection title="Services">
            <window.TweakToggle
              label="Highlight AC Repair card"
              value={tweaks.showFeatured}
              onChange={(v)=>setTweak('showFeatured', v)}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
