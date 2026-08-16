use client';
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link href="/" className="logo"><span className="logo-ring">◯</span><span>OUTGOING<br/>TOUR</span></Link>
      <nav className="desktopNav">
        <Link href="/">HOME</Link>
        <div className="navDrop"><span>DESTINATIONS <ChevronDown size={12}/></span>
          <div className="drop"><Link href="/destinations/turkey">Outgoing Turkey</Link><Link href="/destinations/europe">Outgoing Europe</Link><Link href="/destinations/dubai">Outgoing Dubai</Link></div>
        </div>
        <div className="navDrop"><span>TOUR TYPES <ChevronDown size={12}/></span>
          <div className="drop"><Link href="/products/tour">Outgoing Tour</Link><Link href="/products/mice">Outgoing MICE</Link><Link href="/products/vip">Outgoing VIP</Link></div>
        </div>
        <Link href="/routes">OUR ROUTES</Link>
        <Link href="/about">ABOUT US</Link>
      </nav>
      <Link className="contactBtn" href="/contact">CONTACT US <ArrowUpRight size={14}/></Link>
      <button className="mobileMenu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      {open && <div className="mobilePanel">
        <Link href="/" onClick={()=>setOpen(false)}>HOME</Link>
        <Link href="/destinations/turkey" onClick={()=>setOpen(false)}>OUTGOING TURKEY</Link>
        <Link href="/destinations/europe" onClick={()=>setOpen(false)}>OUTGOING EUROPE</Link>
        <Link href="/destinations/dubai" onClick={()=>setOpen(false)}>OUTGOING DUBAI</Link>
        <Link href="/products/tour" onClick={()=>setOpen(false)}>OUTGOING TOUR</Link>
        <Link href="/products/mice" onClick={()=>setOpen(false)}>OUTGOING MICE</Link>
        <Link href="/products/vip" onClick={()=>setOpen(false)}>OUTGOING VIP</Link>
        <Link href="/routes" onClick={()=>setOpen(false)}>OUR ROUTES</Link>
        <Link href="/about" onClick={()=>setOpen(false)}>ABOUT US</Link>
        <Link href="/contact" onClick={()=>setOpen(false)}>CONTACT US</Link>
      </div>}
      <style jsx>{`
        .header { position:fixed; top:0; left:0; right:0; z-index:50; display:flex; align-items:center; justify-content:space-between; padding:20px 34px; background:linear-gradient(180deg,rgba(3,14,23,.82),transparent); backdrop-filter:blur(5px); }
        .logo { display:flex; align-items:center; gap:10px; font-size:12px; line-height:1; letter-spacing:.08em; font-weight:600; }
        .logo-ring { color:var(--teal); font-size:27px; }
        .desktopNav { display:flex; gap:27px; align-items:center; font-size:10px; letter-spacing:.07em; }
        .desktopNav a, .navDrop>span { opacity:.9; display:flex; align-items:center; gap:3px; }
        .navDrop { position:relative; padding:18px 0; }
        .drop { display:none; position:absolute; top:47px; left:-15px; min-width:190px; padding:10px; background:#091b26; border:1px solid var(--line); box-shadow:0 20px 50px #0008; }
        .drop a { display:block; padding:12px; }
        .drop a:hover { color:var(--teal); }
        .navDrop:hover .drop { display:block; }
        .contactBtn { display:flex; gap:7px; align-items:center; padding:11px 15px; background:var(--teal); color:white; font-size:9px; letter-spacing:.07em; }
        .mobileMenu,.mobilePanel { display:none; }
        @media(max-width:900px) { .desktopNav,.contactBtn { display:none; } .mobileMenu { display:block; background:none; border:0; color:white; } .header{padding:18px 20px} .mobilePanel{display:flex; position:absolute; top:70px; left:12px; right:12px; padding:22px; flex-direction:column; gap:20px; background:#071823ee; border:1px solid var(--line); backdrop-filter:blur(20px); font-size:12px; letter-spacing:.08em;} }
      `}</style>
    </header>
  );
}