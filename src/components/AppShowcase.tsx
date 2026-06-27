import React from 'react';
import styles from './AppShowcase.module.css';
import { Crown, LayoutGrid, Check, ChevronDown, ChevronRight, TrendingUp, TrendingDown, AlertCircle, Clock, CheckSquare } from 'lucide-react';

const ScreenAnalytics = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        <LayoutGrid size={18} /> Performance Analytics
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={10} /> Premium
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
          <div className={styles.val} style={{ color: 'var(--green)' }}>101</div>
          <div className={styles.lbl}>Correct</div>
          <div className={styles.statPill} style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>67.3%</div>
        </div>
        <div className={styles.statCol}>
          <div className={styles.val} style={{ color: '#E03131' }}>34</div>
          <div className={styles.lbl}>Wrong</div>
          <div className={styles.statPill} style={{ background: '#FDF1F1', color: '#E03131' }}>-0.33 ea</div>
        </div>
        <div className={styles.statCol}>
          <div className={styles.val} style={{ color: '#F59F00' }}>15</div>
          <div className={styles.lbl}>Skipped</div>
          <div className={styles.statPill} style={{ background: 'var(--amber-bg)', color: '#F59F00' }}>no penalty</div>
        </div>
      </div>
    </div>

    <div className={styles.purpleBox}>
      <div className={styles.rankIcon}><LayoutGrid size={20} /></div>
      <div style={{ zIndex: 2 }}>
        <div style={{ fontSize: 11, marginBottom: 2, opacity: 0.8 }}>Your rank among all test takers</div>
        <div className={styles.rankNum}>#847 <span style={{ fontSize: 14, fontWeight: 500 }}>of 12,450</span></div>
      </div>
      <div className={styles.topPill}>Top 7%</div>
    </div>

    <div className={styles.grid2x2}>
      <div className={styles.miniCard}>
        <div className={styles.miniHeader}><div className={styles.miniIcon} style={{ background: 'var(--green-bg)', color: 'var(--green)' }}><CheckSquare size={12} /></div> Accuracy</div>
        <div className={styles.miniVal}>74.8%</div>
        <div className={styles.miniSub}>Attempted only</div>
        <div className={styles.miniBar}><div className={styles.miniBarFill} style={{ width: '74%', background: 'var(--green)' }} /></div>
      </div>
      <div className={styles.miniCard}>
        <div className={styles.miniHeader}><div className={styles.miniIcon} style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}><Clock size={12} /></div> Avg. time/Q</div>
        <div className={styles.miniVal}>58s</div>
        <div className={styles.miniSub}>Ideal: 60s</div>
        <div className={styles.miniBar}><div className={styles.miniBarFill} style={{ width: '80%', background: '#6366f1' }} /></div>
      </div>
    </div>
  </div>
);

const ScreenSubject = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        <LayoutGrid size={18} /> Subject Analysis
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={10} /> Premium
      </div>
    </div>

    <div style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 12 }}>All subjects</div>
    <div className={styles.appBox} style={{ padding: '8px 16px' }}>
      <div className={styles.subjRow}>
        <div className={styles.subjHead}>Subject</div>
        <div className={styles.subjHead} style={{ textAlign: 'center' }}>Score</div>
        <div className={styles.subjHead} style={{ textAlign: 'center' }}>Wrong</div>
        <div className={styles.subjHead} style={{ textAlign: 'center' }}>Acc.</div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#4338ca' }}/> Polity</div>
        <div style={{ textAlign: 'center' }}>28/35</div>
        <div style={{ textAlign: 'center', color: '#E03131' }}>5</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>80%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: 'var(--green)' }}/> History</div>
        <div style={{ textAlign: 'center' }}>22/30</div>
        <div style={{ textAlign: 'center', color: '#E03131' }}>6</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>73%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#F59F00' }}/> Economy</div>
        <div style={{ textAlign: 'center' }}>18/30</div>
        <div style={{ textAlign: 'center', color: '#E03131' }}>10</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'var(--amber-bg)', color: '#F59F00' }}>60%</div></div>
      </div>
      <div className={styles.subjRow}>
        <div><span className={styles.dot} style={{ background: '#6366f1' }}/> Science</div>
        <div style={{ textAlign: 'center' }}>16/20</div>
        <div style={{ textAlign: 'center', color: '#E03131' }}>3</div>
        <div style={{ textAlign: 'center' }}><div className={styles.accPill} style={{ background: 'var(--green-bg)', color: 'var(--green)' }}>80%</div></div>
      </div>
    </div>

    <div style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '24px 0 12px' }}>Difficulty performance</div>
    <div className={styles.diffGrid}>
      <div className={styles.diffCard}>
        <div className={styles.diffDonut} style={{ background: 'conic-gradient(var(--green) 85%, #eee 0)' }}><div className={styles.diffInner} style={{ color: 'var(--green)' }}>85%</div></div>
        <div className={styles.diffLbl}>Easy</div>
        <div className={styles.diffSub}>34/40 right</div>
      </div>
      <div className={styles.diffCard}>
        <div className={styles.diffDonut} style={{ background: 'conic-gradient(#F59F00 70%, #eee 0)' }}><div className={styles.diffInner} style={{ color: '#F59F00' }}>70%</div></div>
        <div className={styles.diffLbl}>Medium</div>
        <div className={styles.diffSub}>42/60 right</div>
      </div>
      <div className={styles.diffCard}>
        <div className={styles.diffDonut} style={{ background: 'conic-gradient(#E03131 40%, #eee 0)' }}><div className={styles.diffInner} style={{ color: '#E03131' }}>40%</div></div>
        <div className={styles.diffLbl}>Hard</div>
        <div className={styles.diffSub}>20/50 right</div>
      </div>
    </div>
  </div>
);

const ScreenAI = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        AI Insights
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={10} /> Premium
      </div>
    </div>

    <div className={styles.appBox}>
      <div className={styles.appBoxTitle}>AI PERFORMANCE SUMMARY</div>
      <div className={styles.insightText}>
        You scored <strong>118/150 (79%)</strong> — a strong performance. Your biggest strength is <strong>Polity and Geography</strong> (80% each). Your critical weakness is <strong>Economy</strong> (60%) which dragged your rank. You spent <strong>too long on hard Economy questions</strong> — 3 of your 10 wrong Economy answers were in the last 20 minutes when fatigue set in.
      </div>
    </div>

    <div style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '24px 0 12px' }}>What to focus on next</div>
    <div className={styles.focusList}>
      <div className={styles.focusCard}>
        <div className={styles.fIcon} style={{ background: '#FDF1F1', color: '#E03131' }}><TrendingDown size={16} /></div>
        <div>
          <div className={styles.fTitle}>Critical gap — Indian Economy</div>
          <div className={styles.fDesc}>You got only 60% in Economy (18/30). Wrong answers: GDP calculation, Budget concepts. Focus 1 hour daily here.</div>
        </div>
      </div>
      <div className={styles.focusCard}>
        <div className={styles.fIcon} style={{ background: 'var(--amber-bg)', color: '#F59F00' }}><Clock size={16} /></div>
        <div>
          <div className={styles.fTitle}>Time management issue detected</div>
          <div className={styles.fDesc}>You spent avg 1m 48s on hard questions vs ideal 75s. Practice timed sets to build speed.</div>
        </div>
      </div>
      <div className={styles.focusCard}>
        <div className={styles.fIcon} style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}><AlertCircle size={16} /></div>
        <div>
          <div className={styles.fTitle}>Careless errors in Polity</div>
          <div className={styles.fDesc}>3 of your 5 wrong Polity answers were answered correctly by 72%+ of students. Re-read questions carefully.</div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenPredictor = () => (
  <div className={styles.appContent}>
    <div className={styles.appHeader}>
      <div className={styles.appHeaderLeft}>
        Rank Predictor
      </div>
      <div className={styles.premiumBadge}>
        <Crown size={10} /> Premium
      </div>
    </div>

    <div className={styles.darkCard}>
      <div className={styles.darkTitle}>Predicted APPSC Group-1 Score</div>
      <div className={styles.predScore}>127-135</div>
      <div className={styles.predSub}>Based on your performance trend across 12 tests</div>
      
      <div className={styles.predBarRow}>
        <div style={{ width: 60 }}>Polity</div>
        <div className={styles.predBarWrap}><div className={styles.predBarFill} style={{ width: '85%' }}/></div>
        <div style={{ width: 30, textAlign: 'right' }}>85%</div>
      </div>
      <div className={styles.predBarRow}>
        <div style={{ width: 60 }}>History</div>
        <div className={styles.predBarWrap}><div className={styles.predBarFill} style={{ width: '76%' }}/></div>
        <div style={{ width: 30, textAlign: 'right' }}>76%</div>
      </div>
      <div className={styles.predBarRow}>
        <div style={{ width: 60 }}>Economy</div>
        <div className={styles.predBarWrap}><div className={styles.predBarFill} style={{ width: '67%', background: '#F59F00' }}/></div>
        <div style={{ width: 30, textAlign: 'right' }}>67%</div>
      </div>
    </div>

    <div style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '24px 0 12px' }}>Rank scenarios</div>
    
    <div className={styles.scenarioCard} style={{ borderColor: '#FDF1F1' }}>
      <div className={styles.sIcon} style={{ background: '#FDF1F1', color: '#E03131' }}><TrendingDown size={16} /></div>
      <div className={styles.sText}>
        <div className={styles.sLbl}>Worst case — if nothing improves</div>
        <div className={styles.sVal}>Score: 110-115</div>
      </div>
      <div className={styles.sRank} style={{ color: '#E03131' }}>#1,200</div>
    </div>
    
    <div className={styles.scenarioCard} style={{ borderColor: '#6366f1', boxShadow: '0 4px 12px rgba(99,102,241,0.1)' }}>
      <div className={styles.sIcon} style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}><TrendingUp size={16} /></div>
      <div className={styles.sText}>
        <div className={styles.sLbl} style={{ color: '#6366f1' }}>Current trajectory (realistic)</div>
        <div className={styles.sVal}>Score: 127-135</div>
      </div>
      <div className={styles.sRank} style={{ color: '#6366f1' }}>#400-600</div>
    </div>

    <div className={styles.scenarioCard} style={{ borderColor: 'var(--green-bg)' }}>
      <div className={styles.sIcon} style={{ background: 'var(--green-bg)', color: 'var(--green)' }}><TrendingUp size={16} /></div>
      <div className={styles.sText}>
        <div className={styles.sLbl}>Best case — fix Economy + speed</div>
        <div className={styles.sVal}>Score: 135-142</div>
      </div>
      <div className={styles.sRank} style={{ color: 'var(--green)' }}>#100-200</div>
    </div>
  </div>
);

const ScreenSyllabus = () => (
  <div className={styles.appContent} style={{ padding: 0, background: '#fff' }}>
    <div className={styles.appHeader} style={{ padding: '20px 20px 10px', margin: 0 }}>
      <div className={styles.appHeaderLeft}>
        <div>
          <div style={{ fontSize: 16 }}>Syllabus Tracker</div>
          <div style={{ fontSize: 11, color: '#888', fontWeight: 500, marginTop: 2 }}>Check off topics as you learn</div>
        </div>
      </div>
    </div>

    <div style={{ borderTop: '1px solid #eee' }}>
      <div className={styles.sylCard}>
        <div className={styles.sylTitle}><ChevronDown size={14} color="#888" /> Indian Polity & Governance</div>
        <div className={styles.sylRight}>
          0% <div className={styles.sylBar}><div style={{ width: '0%', height: '100%', background: '#4338ca', borderRadius: 2 }}/></div>
        </div>
      </div>
      
      <div className={styles.sylSubCard}>
        <div className={styles.sylTitle} style={{ fontSize: 12 }}><ChevronDown size={14} color="#888" /> Constitutional Framework</div>
        <div className={styles.sylRight}>
          1% <div className={styles.sylBar}><div style={{ width: '1%', height: '100%', background: '#4338ca', borderRadius: 2 }}/></div>
        </div>
      </div>

      <div className={styles.sylSubCard} style={{ paddingLeft: 48, background: '#F9F8F5' }}>
        <div className={styles.sylTitle} style={{ fontSize: 12 }}><ChevronDown size={14} color="#888" /> Historical Background</div>
        <div className={styles.sylRight}>
          11% <div className={styles.sylBar}><div style={{ width: '11%', height: '100%', background: '#4338ca', borderRadius: 2 }}/></div>
        </div>
      </div>

      <div className={styles.sylItem}>
        <div className={styles.sylTitle} style={{ fontSize: 12, fontWeight: 500, color: '#555' }}><ChevronRight size={14} color="#888" /> Company Rule & Crown Rule</div>
        <div className={styles.sylRight} style={{ marginLeft: 'auto' }}>
          0% <div className={styles.sylBar}><div style={{ width: '0%', height: '100%', background: '#4338ca', borderRadius: 2 }}/></div>
        </div>
      </div>

      <div className={styles.sylSubCard} style={{ paddingLeft: 48, background: '#F9F8F5' }}>
        <div className={styles.sylTitle} style={{ fontSize: 12 }}><ChevronDown size={14} color="#888" /> Features & Governance Models</div>
        <div className={styles.sylRight}>
          25% <div className={styles.sylBar}><div style={{ width: '25%', height: '100%', background: '#4338ca', borderRadius: 2 }}/></div>
        </div>
      </div>
      
      <div className={styles.sylItem} style={{ paddingLeft: 64, background: '#f4f4f4' }}>
        <div className={`${styles.check} ${styles.active}`}><Check size={12} strokeWidth={3} /></div>
        <div className={`${styles.sylItemText} ${styles.done}`}>Unitary Features vs. Federal Features within the Constitutional Matrix</div>
      </div>
      <div className={styles.sylItem} style={{ paddingLeft: 64, background: '#f4f4f4' }}>
        <div className={styles.check}></div>
        <div className={styles.sylItemText}>Parliamentary Form of Government</div>
      </div>
      <div className={styles.sylItem} style={{ paddingLeft: 64, background: '#f4f4f4' }}>
        <div className={styles.check}></div>
        <div className={styles.sylItemText}>Presidential Form of Government</div>
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
    title: 'AI Insights',
    desc: 'Get personalized feedback on what to focus on to improve.',
    component: <ScreenAI />
  },
  {
    id: 4,
    title: 'AI Rank Predictor',
    desc: 'Predict your final APPSC rank based on current trajectory.',
    component: <ScreenPredictor />
  },
  {
    id: 5,
    title: 'Syllabus Tracker',
    desc: 'Check off topics as you learn and track completion visually.',
    component: <ScreenSyllabus />
  },
];

const AppShowcase: React.FC = () => {
  return (
    <section className={`section-pad ${styles.showcase}`} id="app-showcase">
      <div className={styles.head}>
        <div className="section-label">Inside the App</div>
        <h2>Designed to give you<br/>the winning edge.</h2>
        <p className={styles.sub}>
          Experience a world-class interface that makes tracking your progress, finding your weak points, and improving your score effortless.
        </p>
      </div>

      <div className={styles.scrollContainer}>
        {screens.map((screen) => (
          <div key={screen.id} className={styles.phoneWrapper}>
            <div className={styles.phoneFrame}>
              <div className={styles.screen}>
                <div className={styles.statusBar}>
                  <span>9:41</span>
                  <span>LTE</span>
                </div>
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
    </section>
  );
};

export default AppShowcase;
