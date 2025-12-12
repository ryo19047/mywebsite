import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { Container } from '@/components/ui/Container';

const rows = [
  {
    date: '11月17日（日本時間）',
    label: 'AWAY',
    teams: '49ers @ カーディナルス',
    location: 'ステートファーム・スタジアム',
    result: '41–22',
    status: 'FINAL（49ers勝利）',
    className: 'win',
  },
  {
    date: '11月25日（日本時間）',
    label: 'HOME',
    teams: 'パンサーズ @ 49ers',
    location: 'リーバイス・スタジアム',
    result: '20–9',
    status: 'FINAL（49ers勝利）',
    className: 'win',
  },
  {
    date: '12月1日（日本時間）',
    label: 'AWAY',
    teams: '49ers @ ブラウンズ',
    location: 'クリーブランド・ブラウンズ・スタジアム',
    result: '26–8',
    status: 'FINAL（49ers勝利）',
    className: 'win',
  },
];

export default function ResultsPage() {
  return (
    <body className="site-page results-page">
      <div className="schedule-masthead">
        <div className="masthead-overlay" />
        <Image className="masthead-logo" src="/49ers.png" alt="49ersロゴ" width={200} height={200} priority />
      </div>

      <nav className="schedule-primary-nav">
        <div className="nav-left">
          <span className="nav-logo-text">49ers JP</span>
          <Link href="/">HOME</Link>
          <Link href="/schedule">SCHEDULE</Link>
          <Link className="active" href="/results">RESULTS</Link>
          <Link href="/team">TEAM</Link>
          <Link href="/roster">ROSTER</Link>
          <Link href="/highlights">HIGHLIGHTS</Link>
        </div>
        <div className="nav-right">
          <a href="https://www.ticketmaster.com" target="_blank" rel="noreferrer noopener">TICKETS</a>
          <a href="https://www.49ers.com/" target="_blank" rel="noreferrer noopener">49ERS.COM</a>
        </div>
      </nav>

      <Container as="main" className="schedule-main">
        <section className="season-hero">
          <p className="season-sub">2025 シーズン</p>
          <h1>GAME RESULTS</h1>
          <p className="season-note">通算成績：9勝4敗（2025-12-12時点） / 直近1ヶ月（2025-11-12〜2025-12-12）の戦績一覧</p>
        </section>

        <section className="record-summary">
          <div className="record-pill">
            <p className="record-title">NFC西地区 ランキング</p>
            <p className="record-value">3位（9勝4敗）</p>
          </div>
          <div className="record-pill light">
            <p className="record-title">ホーム</p>
            <p className="record-value">3勝2敗</p>
          </div>
          <div className="record-pill light">
            <p className="record-title">ロード</p>
            <p className="record-value">6勝2敗</p>
          </div>
        </section>

        <section className="schedule-list">
          {rows.map((row, idx) => (
            <Reveal key={row.date} delay={idx * 70} y={14}>
              <div className="schedule-row">
                <div className="date-block">
                  <p className="week">{row.date}</p>
                  <p className={`label ${row.label.toLowerCase()}`}>{row.label}</p>
                </div>
                <div className="matchup">
                  <p className="teams">{row.teams}</p>
                  <p className="location">{row.location}</p>
                </div>
                <div className="score">
                  <p className={`result ${row.className}`}>{row.result}</p>
                  <p className="status">{row.status}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </section>
      </Container>
    </body>
  );
}
