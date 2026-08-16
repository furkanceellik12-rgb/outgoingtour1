import Link from "next/link";
export default function Footer() {
 return <footer className="footer">
  <div className="container footGrid">
    <div><div className="logo"><span className="logo-ring">◯</span><span>OUTGOING<br/>TOUR</span></div><p>Outgoing Tour is a trusted business partner for professionals in the tourism industry.</p><div className="social">f　◎　in</div></div>
    <div><h4>HELPFUL LINKS</h4><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/contact">Contact Us</Link><Link href="/routes">Our Routes</Link></div>
    <div><h4>DESTINATIONS</h4><Link href="/destinations/turkey">Outgoing Turkey</Link><Link href="/destinations/europe">Outgoing Europe</Link><Link href="/destinations/dubai">Outgoing Dubai</Link></div>
    <div><h4>OUR PRODUCTS</h4><Link href="/products/tour">Outgoing Tour</Link><Link href="/products/mice">Outgoing MICE</Link><Link href="/products/vip">Outgoing VIP</Link></div>
    <div><h4>STAY INSPIRED.</h4><p>Join our e-mail list and be the first to know about unmissable opportunities.</p><div className="newsletter"><input placeholder="E-mail address"/><button>→</button></div></div>
  </div>
  <div className="container copyright">© 2026 Outgoing Tour. All rights reserved. <span>Privacy Policy　 Terms & Conditions</span></div>
  <style jsx>{`
   .footer{background:#040e16;padding:75px 0 20px;border-top:1px solid var(--line)} .footGrid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr 1.5fr;gap:35px}.footGrid>div{display:flex;flex-direction:column;gap:12px}.footGrid p{color:#87969d;font-size:11px;line-height:1.7;max-width:230px}.footGrid h4{font-size:10px;letter-spacing:.12em;margin:5px 0 10px}.footGrid a{color:#9aa7ac;font-size:11px}.footGrid a:hover{color:var(--teal)}.social{margin-top:10px;color:#aeb9bd}.newsletter{display:flex;border:1px solid var(--line)}.newsletter input{min-width:0;flex:1;background:none;border:0;padding:12px;color:white;outline:0}.newsletter button{border:0;background:var(--teal);color:white;width:42px}.copyright{margin-top:55px;padding-top:18px;border-top:1px solid var(--line);font-size:9px;color:#64747b;display:flex;justify-content:space-between}@media(max-width:850px){.footGrid{grid-template-columns:1fr 1fr}.copyright{flex-direction:column;gap:10px}}@media(max-width:520px){.footGrid{grid-template-columns:1fr}.copyright{line-height:1.6}}
  `}</style>
 </footer>
}