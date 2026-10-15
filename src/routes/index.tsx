import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Heart, Gavel, ArrowDown, ArrowUpRight, Clock3, Phone, Sparkles, X, Check, Headphones, ShieldCheck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bear from '@/assets/love-judge.png';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'The Love Court — Ek Chhoti Si Maafi' },
    { name: 'description', content: 'Ek pyaara sa apology, ek sachcha promise aur ek faisla — sirf tumhare liye.' },
    { property: 'og:title', content: 'The Love Court — Ek Chhoti Si Maafi' },
    { property: 'og:description', content: 'Boyfriend guilty hai. Ab faisla tumhara, madam ji.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: LoveCourt,
});

const argumentsForLove = ['Nahi maan sakti? Check again! 🥺', 'Objection! Tumhari smile miss ho rahi hai. 🥹', 'Ek aur chance? Chai bhi meri taraf se. ☕', 'Okay, no pressure. Main yahin hoon. 💗'];

function LoveCourt() {
  const [attempts, setAttempts] = useState(0);
  const [forgiven, setForgiven] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [voucher, setVoucher] = useState(false);
  const dodge = () => setAttempts((n) => Math.min(n + 1, 4));
  const forgive = () => { setForgiven(true); setCelebrating(true); };

  return (
    <div className="love-page min-h-screen overflow-hidden">
      <div className="floating-hearts" aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <Heart key={i} className={`float-heart float-heart-${i}`} />)}</div>
      <header className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 sm:flex sm:justify-between sm:px-10">
        <a href="#" className="flex min-w-0 items-center gap-2.5 text-sm font-semibold"><span className="brand-heart shrink-0"><Heart size={17} fill="currentColor" /></span><span className="truncate">the love court<span className="text-primary">.</span></span></a>
        <span className="case-number shrink-0 text-[10px] font-medium uppercase tracking-[2px] text-muted-foreground">Case no. 001 · Us vs. My Schedule</span>
      </header>

      <main className="relative mx-auto max-w-3xl px-5 pb-14">
        <section className="intro relative pt-9 text-center sm:pt-12">
          <span className="eyebrow"><Gavel size={13} /> DIL KI ADALAT MEIN AAPKA SWAGAT HAI</span>
          <h1 className="mt-5 font-display text-[42px] leading-[1.17] sm:text-[58px]">Guilty of being busy.<br /><span className="text-primary italic">Innocent of loving you less.</span></h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground">Haan, galti meri hai. Aur tumhara gussa bilkul valid hai.<br className="hidden sm:block" /> Toh aaj, ek chhoti si maafi… thode filmy andaaz mein.</p>
          <a href="#warrant" aria-label="Read the love warrant" className="mx-auto mt-6 flex w-fit items-center gap-2 text-[11px] text-muted-foreground">The court is now in session <ArrowDown size={13} /></a>
          <div className="intro-sparkle" aria-hidden="true">✧</div>
        </section>

        <article id="warrant" className="warrant relative mt-12 scroll-mt-6">
          <img src={bear} alt="A little teddy bear judge holding a gavel and a pink heart" width={768} height={768} className="judge-bear" />
          <div className="warrant-heading flex items-center gap-3 border-b border-border px-6 py-5 sm:px-9">
            <span className="flex size-10 items-center justify-center rounded-full bg-accent text-primary"><Gavel size={20} /></span>
            <div><p className="text-[9px] font-semibold tracking-[2px] text-primary">OFFICIAL NOTICE · STRICTLY PERSONAL</p><h2 className="mt-1 font-display text-2xl">Arrest Warrant of Love</h2></div>
          </div>
          <div className="px-6 pb-7 pt-6 sm:px-9">
            <div className="mb-6 flex items-center justify-between"><span className="text-[10px] font-medium tracking-[2px] text-muted-foreground">THE PEOPLE VS. YOUR BOYFRIEND</span><span className="guilty-stamp">GUILTY <Heart size={10} fill="currentColor" /></span></div>
            <dl className="charge-list">
              <div><dt><span>01</span> Crime</dt><dd>Busy rehna aur tumhe time na dena <span aria-hidden="true">🙈</span></dd></div>
              <div><dt><span>02</span> Criminal</dt><dd>Main <span className="text-muted-foreground">(your slightly stupid boyfriend)</span></dd></div>
              <div><dt><span>03</span> Judge & victim</dt><dd>Tum <span className="text-muted-foreground">(always right, obviously)</span> <span aria-hidden="true">👑</span></dd></div>
              <div><dt><span>04</span> Saza</dt><dd>Aaj shaam sirf tumhare saath waqt bitana aur tumhari saari baatein dhyaan se sunna.</dd></div>
            </dl>
            <div className="appeal mt-6 flex gap-3 border-t border-dashed border-border pt-5"><Heart className="mt-1 shrink-0 text-primary" size={17} /><div><p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-primary">A humble appeal</p><p className="mt-1.5 font-display text-lg italic">“Gussa thoda kam karke ek smile bhejogi, madam?”</p></div></div>
          </div>
          <div className="flex items-center justify-between border-t border-border bg-muted/50 px-6 py-3 sm:px-9"><span className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><ShieldCheck size={12} /> No excuses. Just a very sorry boyfriend.</span><span className="signature text-primary">Yours, always ♡</span></div>
        </article>

        <section id="verdict" className="py-10 text-center sm:py-12" aria-labelledby="verdict-title">
          <span className="text-[10px] font-semibold uppercase tracking-[2px] text-primary">The moment of truth</span>
          <h2 id="verdict-title" className="mt-2 font-display text-[32px]">Ab faisla tumhara, madam ji.</h2>
          <p className="mt-2 text-sm text-muted-foreground">Court tumhari hai. Dil bhi tumhara hai.</p>
          <div className="verdict-actions relative mx-auto mt-6 flex max-w-lg items-center justify-center gap-3">
            <Button className="h-12 rounded-full px-6 text-[13px]" onClick={forgive}><Heart size={16} fill="currentColor" /> {forgiven ? 'Maan Gayi! · Forgiven' : 'Maan Gayi · Forgive Him'}</Button>
            <Button variant="outline" className={`angry-button dodge-${attempts} h-12 rounded-full bg-background/60 px-5 text-[12px]`} onPointerEnter={(event) => { if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches && attempts < 3) dodge(); }} onClick={dodge}>Abhi Bhi Gussa Hoon <span aria-hidden="true">😤</span></Button>
          </div>
          <p className="mt-3 min-h-5 text-xs text-muted-foreground" aria-live="polite">{attempts > 0 ? argumentsForLove[attempts - 1] : 'Psst… the second option has commitment issues.'}</p>
          {forgiven && <Button variant="ghost" className="mt-3 rounded-full text-xs text-primary" onClick={() => setCelebrating(true)}><RotateCcw size={14} /> Replay the verdict · Ek baar aur!</Button>}
        </section>

        <section className="voucher relative flex overflow-hidden rounded-lg border border-voucher-border bg-voucher" aria-label="Evening promise voucher">
          <div className="flex-1 px-6 py-6 sm:px-8"><p className="flex items-center gap-2 text-[9px] font-semibold tracking-[2px] text-voucher-foreground"><Sparkles size={13} /> A PROMISE, NOT JUST A PINKY ONE</p><h2 className="mt-3 font-display text-[28px] text-voucher-foreground">One evening. All yours.</h2><p className="mt-2 max-w-sm text-xs leading-6 text-muted-foreground">No “bas 5 minutes”. No distracted hmm-hmm.<br />Sirf tum, main, aur tumhari saari baatein.</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-voucher-foreground"><span className="flex items-center gap-1.5"><Clock3 size={12} /> Aaj shaam</span><span className="flex items-center gap-1.5"><Headphones size={12} /> 100% attention</span><span className="flex items-center gap-1.5"><Heart size={12} /> Unlimited pyaar</span></div></div>
          <div className="voucher-stub flex w-28 shrink-0 flex-col items-center justify-center border-l border-dashed border-voucher-border px-3 text-center sm:w-36"><Heart size={25} className="text-voucher-foreground" strokeWidth={1.3} /><span className="mt-3 text-[9px] tracking-[1.5px] text-voucher-foreground">JUST FOR YOU</span><Button variant="ghost" className="mt-2 h-auto whitespace-normal px-2 text-xs text-voucher-foreground" onClick={() => setVoucher(true)}>{voucher ? <><Check size={14} /> It’s a date!</> : <>Redeem <ArrowUpRight size={14} /></>}</Button></div>
        </section>
        {voucher && <p role="status" className="mt-3 text-center text-xs text-voucher-foreground">Shaam tumhare naam. Promise locked, distractions blocked. 💗</p>}
        <footer className="mt-10 text-center"><p className="font-display text-lg italic text-muted-foreground">Time kam diya. Pyaar kabhi kam nahi hua.</p><p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">Made with guilt, hope & a whole lot of <Heart size={11} className="text-primary" fill="currentColor" /></p></footer>
      </main>

      {celebrating && <div className="celebration-overlay" onClick={() => setCelebrating(false)}><div className="confetti" aria-hidden="true">{Array.from({ length: 55 }, (_, i) => <i key={i} className={`confetti-piece confetti-${i % 11}`} />)}</div><section role="dialog" aria-modal="true" aria-labelledby="celebration-title" className="celebration-card" onClick={(e) => e.stopPropagation()}><Button autoFocus variant="ghost" size="icon" className="absolute right-3 top-3 rounded-full" aria-label="Close celebration" onClick={() => setCelebrating(false)}><X /></Button><img src={bear} width={768} height={768} alt="A happy teddy bear with a heart" className="mx-auto h-44 w-44" /><span className="eyebrow">CASE CLOSED. LOVE WINS.</span><h2 id="celebration-title" className="mt-4 font-display text-4xl text-primary">Meri madam maan gayi! ♡</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Tumhari smile? Meri favourite notification.<br />Thank you for giving me another chance.<br />Aaj ki shaam, aur mera poora dhyaan — sirf tumhara.</p><Button asChild className="mt-6 h-12 rounded-full px-8"><a href="tel:" aria-label="Open your phone dialer to call him"><Phone size={16} /> Ab ek call ho jaaye?</a></Button><p className="mt-3 text-[10px] text-muted-foreground">Apne favourite insaan ka number dial kar lo ♡</p><Button variant="link" className="mt-2 text-xs" onClick={() => setCelebrating(false)}>Back to our little love court</Button></section></div>}
    </div>
  );
}