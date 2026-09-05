import React from 'react';
import styles from './AppShowcase.module.css';
import { Crown, LayoutGrid, Check, ChevronLeft, ChevronRight, ChevronDown, TrendingDown, AlertCircle, Clock, Target, Lightbulb, Users, Battery, Wifi, Signal } from 'lucide-react';

const StatusBar = () => (
  <div className={styles.statusBar}>
    <span>9:41</span>
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      <Signal size={14} strokeWidth={3} />
      <Wifi size={14} strokeWidth={3} />
      <Battery size={16} strokeWidth={2} />
    </div>
  </div>
);

const ScreenAnalytics = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        <ChevronLeft size={20} strokeWidth={3} /> Performance Analytics
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={12} strokeWidth={3} /> Premium
      </div>
    </div>

    <div className={styles.appBox}>
      <div className={styles.appBoxTitle}>TOTAL SCORE</div>
      <div className={styles.scoreMain}>
        <div>
          <div className={styles.scoreNum}>118<span className={styles.scoreDenom}>/150</span></div>
        </div>
        <div className={styles.donut}>
          <div className={styles.donutInner}>
            79%<span>score</span>
          </div>
        </div>
      </div>
      <div className={styles.scoreStats}>
        <div className={styles.statCol}>
          <div className={styles.val} style={{ color: '#10b981' }}>101</div>
          <div className={styles.lbl}>Correct</div>
          <div className={styles.statPill} style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>67.3%</div>
        </div>
        <div className={styles.statCol}>
          <div className={styles.val} style={{ color: '#ef4444' }}>34</div>
          <div className={styles.lbl}>Wrong</div>
          <div className={styles.statPill} style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>-0.33 ea</div>
        </div>
        <div className={styles.statCol}>
          <div className={styles.val} style={{ color: '#f59e0b' }}>15</div>
          <div className={styles.lbl}>Skipped</div>
          <div className={styles.statPill} style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>no penalty</div>
        </div>
      </div>
    </div>

    <div className={styles.purpleBox}>
      <div className={styles.rankIcon}><LayoutGrid size={24} /></div>
      <div style={{ zIndex: 2 }}>
        <div style={{ fontSize: 13, marginBottom: 4, opacity: 0.9, fontWeight: 500 }}>Your rank among all test takers</div>
        <div className={styles.rankNum}>#847 <span style={{ fontSize: 15, fontWeight: 600, opacity: 0.9 }}>of 12,450</span></div>
        <div style={{ fontSize: 11, marginTop: 6, opacity: 0.8, fontWeight: 500 }}>Top 6.8% • Better than 93% of students</div>
      </div>
      <div className={styles.topPill}>Top 7%</div>
    </div>

    <div className={styles.grid2x2}>
      <div className={styles.miniCard}>
        <div className={styles.miniHeader}><div className={styles.miniIcon} style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}><Target size={14} strokeWidth={3} /></div> Accuracy</div>
        <div className={styles.miniVal}>74.8%</div>
        <div className={styles.miniSub}>Attempted only</div>
        <div className={styles.miniBar}><div className={styles.miniBarFill} style={{ width: '74%', background: '#10b981' }} /></div>
      </div>
      <div className={styles.miniCard}>
        <div className={styles.miniHeader}><div className={styles.miniIcon} style={{ background: 'rgba(99,102,241,0.1)', color: '#4f46e5' }}><Clock size={14} strokeWidth={3} /></div> Avg. time/Q</div>
        <div className={styles.miniVal}>58s</div>
        <div className={styles.miniSub}>Ideal: 60s</div>
        <div className={styles.miniBar}><div className={styles.miniBarFill} style={{ width: '80%', background: '#4f46e5' }} /></div>
      </div>
    </div>
  </div>
);

const ScreenSubject = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        <ChevronLeft size={20} strokeWidth={3} /> Subject Analysis
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={12} strokeWidth={3} /> Premium
      </div>
    </div>

    <div style={{ fontSize: 18, fontWeight: 800, color: '#111', marginBottom: 16, letterSpacing: '-0.5px' }}>All subjects</div>
    <div className={styles.appBox} style={{ padding: '8px 16px' }}>
      <div className={styles.subjRow}>
        <div className={styles.subjHead}>Subject</div>
        <div className={styles.subjHead} style={{ textAlign: 'center' }}>Score</div>
        <div className={styles.subjHead} style={{ textAlign: 'center' }}>Wrong</div>
        <div className={styles.subjHead} style={{ textAlign: 'center' }}>Acc.</div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#4f46e5' }}/> Polity</div>
        <div style={{ textAlign: 'center' }}>28/35</div>
        <div style={{ textAlign: 'center', color: '#ef4444' }}>5</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>80%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#10b981' }}/> History</div>
        <div style={{ textAlign: 'center' }}>22/30</div>
        <div style={{ textAlign: 'center', color: '#ef4444' }}>6</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>73%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#f59e0b' }}/> Geography</div>
        <div style={{ textAlign: 'center' }}>24/30</div>
        <div style={{ textAlign: 'center', color: '#ef4444' }}>4</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>80%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#ef4444' }}/> Economy</div>
        <div style={{ textAlign: 'center' }}>18/30</div>
        <div style={{ textAlign: 'center', color: '#ef4444' }}>10</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>60%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#a855f7' }}/> Science</div>
        <div style={{ textAlign: 'center' }}>16/20</div>
        <div style={{ textAlign: 'center', color: '#ef4444' }}>3</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>80%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#10b981' }}/> Environment</div>
        <div style={{ textAlign: 'center' }}>10/5</div>
        <div style={{ textAlign: 'center', color: '#ef4444' }}>6</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>40%</div></div>
      </div>
    </div>

    <div style={{ fontSize: 18, fontWeight: 800, color: '#111', margin: '32px 0 16px', letterSpacing: '-0.5px' }}>Difficulty performance</div>
    <div className={styles.diffGrid}>
      <div className={styles.diffCard}>
        <div className={styles.diffDonut} style={{ background: 'conic-gradient(#10b981 85%, #f4f4f4 0)' }}><div className={styles.diffInner} style={{ color: '#10b981' }}>85%</div></div>
        <div className={styles.diffLbl}>Easy</div>
        <div className={styles.diffSub}>34/40 right</div>
      </div>
      <div className={styles.diffCard}>
        <div className={styles.diffDonut} style={{ background: 'conic-gradient(#f59e0b 70%, #f4f4f4 0)' }}><div className={styles.diffInner} style={{ color: '#f59e0b' }}>70%</div></div>
        <div className={styles.diffLbl}>Medium</div>
        <div className={styles.diffSub}>42/60 right</div>
      </div>
      <div className={styles.diffCard}>
        <div className={styles.diffDonut} style={{ background: 'conic-gradient(#ef4444 40%, #f4f4f4 0)' }}><div className={styles.diffInner} style={{ color: '#ef4444' }}>40%</div></div>
        <div className={styles.diffLbl}>Hard</div>
        <div className={styles.diffSub}>20/50 right</div>
      </div>
    </div>
  </div>
);

const ScreenDetailed = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        <ChevronLeft size={20} strokeWidth={3} /> Detailed Review
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={12} strokeWidth={3} /> Premium
      </div>
    </div>

    <div className={styles.tabs}>
      <div className={`${styles.tab} ${styles.active}`}>All (150)</div>
      <div className={`${styles.tab} ${styles.correct}`}>Correct (101)</div>
      <div className={`${styles.tab} ${styles.wrong}`}>Wrong (34)</div>
      <div className={`${styles.tab} ${styles.skipped}`}>Skipped</div>
    </div>

    <div className={styles.qCard}>
      <div className={styles.qHead}>
        <div className={styles.qNum}>QUESTION 1 • HISTORY</div>
        <div className={styles.qStatus} style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>CORRECT</div>
      </div>
      <div className={styles.qText}>In the context of the historical schisms within Jainism, which group completely rejected image worship and temple rituals?</div>
      
      <div className={styles.opt}>
        <div className={styles.optLetter}>A</div> Digambaras and Svetambaras
      </div>
      <div className={`${styles.opt} ${styles.correct}`}>
        <div className={styles.optLetter}>B</div> Sthanakvasis and Terapanthis <Check size={18} style={{marginLeft: 'auto'}} />
      </div>
      <div className={styles.opt}>
        <div className={styles.optLetter}>C</div> Ajivikas and Charvakas
      </div>
      <div className={styles.opt}>
        <div className={styles.optLetter}>D</div> Mahasanghikas and Theravadins
      </div>

      <div className={styles.qTags}>
        <div className={styles.qTag}><Clock size={12} /> 42 sec</div>
        <div className={styles.qTag}><Target size={12} /> Easy</div>
        <div className={styles.qTag}><Users size={12} /> 68% got this right</div>
      </div>

      <div className={styles.expl}>
        <div className={styles.explTitle}><Lightbulb size={14} strokeWidth={3} /> Explanation</div>
        <div className={styles.explText}>The Sthanakvasi sect (an offshoot of Shvetambara founded by Lavaji) and the Terapanth sect completely reject iconolatry and temples. They perform duties in simple halls called Sthanakas, emphasising mental purity and scriptural study.</div>
      </div>
    </div>

    <div className={styles.qCard}>
      <div className={styles.qHead}>
        <div className={styles.qNum}>QUESTION 2 • ECONOMY</div>
        <div className={styles.qStatus} style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>INCORRECT</div>
      </div>
      <div className={styles.qText}>Match the following historical events with the Five Year Plans under which they occurred.</div>
      
      <div className={`${styles.opt} ${styles.wrong}`}>
        <div className={styles.optLetter}>A</div> Your answer — Option A
      </div>
    </div>
  </div>
);

const ScreenAI = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        <ChevronLeft size={20} strokeWidth={3} /> AI Insights
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={12} strokeWidth={3} /> Premium
      </div>
    </div>

    <div className={styles.appBox}>
      <div className={styles.appBoxTitle}>AI PERFORMANCE SUMMARY</div>
      <div className={styles.insightText}>
        You scored <strong>118/150 (79%)</strong> — a strong performance. Your biggest strength is <strong>Polity and Geography</strong> (80% each). Your critical weakness is <strong>Economy</strong> (60%) which dragged your rank. You spent <strong>too long on hard Economy questions</strong> — 3 of your 10 wrong Economy answers were in the last 20 minutes when fatigue set in.
      </div>
    </div>

    <div style={{ fontSize: 18, fontWeight: 800, color: '#111', margin: '32px 0 16px', letterSpacing: '-0.5px' }}>What to focus on next</div>
    <div className={styles.focusList}>
      <div className={styles.focusCard}>
        <div className={styles.fIcon} style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}><TrendingDown size={18} strokeWidth={3} /></div>
        <div>
          <div className={styles.fTitle}>Critical gap — Indian Economy</div>
          <div className={styles.fDesc}>You got only 60% in Economy (18/30). Wrong answers: GDP calculation, Budget concepts, RBI monetary policy. These 3 topics alone cost you ~8 marks. Focus 1 hour daily on these until 80%+.</div>
        </div>
      </div>
      <div className={styles.focusCard}>
        <div className={styles.fIcon} style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}><Clock size={18} strokeWidth={3} /></div>
        <div>
          <div className={styles.fTitle}>Time management issue detected</div>
          <div className={styles.fDesc}>You spent avg 1m 48s on hard questions vs ideal 75s. In the last 30 min you attempted only 12 questions. Practice timed sets of 30 questions in 25 minutes to build speed.</div>
        </div>
      </div>
      <div className={styles.focusCard}>
        <div className={styles.fIcon} style={{ background: 'rgba(99,102,241,0.1)', color: '#4f46e5' }}><AlertCircle size={18} strokeWidth={3} /></div>
        <div>
          <div className={styles.fTitle}>Careless errors in Polity</div>
          <div className={styles.fDesc}>3 of your 5 wrong Polity answers were questions where 72%+ of students answered correctly. These are careless misreads, not knowledge gaps. Re-read questions twice before answering.</div>
        </div>
      </div>
    </div>
  </div>
);


const ScreenSyllabus = () => (
  <div className={styles.appContent} style={{ padding: 0, background: '#f8f7f4' }}>
    <div className={styles.sylHeader}>
      <div className={styles.sylIconWrap}>
        <ChevronLeft size={20} strokeWidth={3} color="#111" />
      </div>
      <div>
        <div className={styles.sylTitle}>Syllabus Tracker</div>
        <div className={styles.sylSubTitle}>Check off topics as you learn</div>
      </div>
    </div>

    <div>
      <div className={styles.sylCard}>
        <div className={styles.sylRowTitle}><ChevronDown size={16} color="#888" /> Indian Polity & Governance</div>
        <div className={styles.sylRight}>
          0% <div className={styles.sylBar}><div className={styles.miniBarFill} style={{ width: '0%', background: '#4f46e5' }} /></div>
        </div>
      </div>
      
      <div className={styles.sylSubCard}>
        <div className={styles.sylSubCardTitle}><ChevronDown size={14} color="#888" /> Constitutional Framework & Core Principles</div>
        <div className={styles.sylRight}>
          1% <div className={styles.sylBar}><div className={styles.miniBarFill} style={{ width: '1%', background: '#4f46e5' }} /></div>
        </div>
      </div>

      <div className={styles.sylSubCard} style={{ paddingLeft: 64, background: '#f4f3f0' }}>
        <div className={styles.sylSubCardTitle}><ChevronDown size={14} color="#888" /> Historical Background</div>
        <div className={styles.sylRight}>
          11% <div className={styles.sylBar}><div className={styles.miniBarFill} style={{ width: '11%', background: '#4f46e5' }} /></div>
        </div>
      </div>

      <div className={styles.sylSubCard} style={{ paddingLeft: 84, background: '#efeeeb' }}>
        <div className={styles.sylSubCardTitle}><ChevronRight size={14} color="#888" /> Historical Background (Company Rule & Crown Rule)</div>
        <div className={styles.sylRight}>
          0% <div className={styles.sylBar}><div className={styles.miniBarFill} style={{ width: '0%', background: '#4f46e5' }} /></div>
        </div>
      </div>

      <div className={styles.sylSubCard} style={{ paddingLeft: 84, background: '#efeeeb' }}>
        <div className={styles.sylSubCardTitle}><ChevronDown size={14} color="#888" /> Features & Governance Models</div>
        <div className={styles.sylRight}>
          25% <div className={styles.sylBar}><div className={styles.miniBarFill} style={{ width: '25%', background: '#4f46e5' }} /></div>
        </div>
      </div>
      
      <div className={styles.sylItem} style={{ paddingLeft: 104 }}>
        <div className={`${styles.check} ${styles.active}`}><Check size={14} strokeWidth={4} /></div>
        <div className={`${styles.sylItemText} ${styles.done}`}>Unitary Features vs. Federal Features within the Constitutional Matrix</div>
      </div>
      <div className={styles.sylItem} style={{ paddingLeft: 104 }}>
        <div className={styles.check}></div>
        <div className={styles.sylItemText}>Parliamentary Form of Government</div>
      </div>
      <div className={styles.sylItem} style={{ paddingLeft: 104 }}>
        <div className={styles.check}></div>
        <div className={styles.sylItemText}>Presidential Form of Government</div>
      </div>
      <div className={styles.sylItem} style={{ paddingLeft: 104 }}>
        <div className={styles.check}></div>
        <div className={styles.sylItemText}>Comparative Analysis: Parliamentary vs. Presidential Systems</div>
      </div>

      <div className={styles.sylSubCard} style={{ paddingLeft: 64, background: '#f4f3f0' }}>
        <div className={styles.sylSubCardTitle}><ChevronRight size={14} color="#888" /> Making of the Constitution</div>
        <div className={styles.sylRight}>
          0% <div className={styles.sylBar}><div className={styles.miniBarFill} style={{ width: '0%', background: '#4f46e5' }} /></div>
        </div>
      </div>
    </div>
  </div>
);


const screens = [
  {
    id: 1,
    title: 'Performance Analytics',
    desc: 'Deep dive into your accuracy, speed, and topic-wise strengths.',
    component: <ScreenAnalytics />
  },
  {
    id: 2,
    title: 'Subject Analysis',
    desc: 'See exactly where you are losing marks across all subjects.',
    component: <ScreenSubject />
  },
  {
    id: 3,
    title: 'Detailed Review',
    desc: 'Review every question with rich explanations and peer stats.',
    component: <ScreenDetailed />
  },
  {
    id: 4,
    title: 'AI Insights',
    desc: 'Get personalized feedback on what to focus on to improve.',
    component: <ScreenAI />
  },
  {
    id: 5,
    title: 'Syllabus Tracker',
    desc: 'Check off topics as you learn and track completion visually.',
    component: <ScreenSyllabus />
  }
];

const AppShowcase: React.FC = () => {
  return (
    <section className={styles.showcase} id="app-showcase">
      <div className={styles.head}>
        <div className="section-label">Inside the group</div>
        <h2>Designed to give you<br/>the winning edge.</h2>
        <p className={styles.sub}>
          Experience a world-class interface that makes tracking your progress, finding your weak points, and improving your score effortless.
        </p>
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {/* First Group */}
          <div className={styles.scrollGroup}>
            {screens.map((screen) => (
              <div key={`g1-${screen.id}`} className={styles.phoneWrapper}>
                <div className={styles.phoneFrame}>
                  <div className={styles.screen}>
                    <StatusBar />
                    {screen.component}
                  </div>
                </div>
                <div className={styles.caption}>
                  <h3>{screen.title}</h3>
                  <p>{screen.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Duplicate Group for Seamless Looping */}
          <div className={styles.scrollGroup}>
            {screens.map((screen) => (
              <div key={`g2-${screen.id}`} className={styles.phoneWrapper}>
                <div className={styles.phoneFrame}>
                  <div className={styles.screen}>
                    <StatusBar />
                    {screen.component}
                  </div>
                </div>
                <div className={styles.caption}>
                  <h3>{screen.title}</h3>
                  <p>{screen.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
