 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, -18]);

  return (
    <body className="site-page home-page">
      <div className="schedule-masthead">
        <div className="masthead-overlay" />
        <Image className="masthead-logo" src="/49ers.png" alt="49ersロゴ" width={200} height={200} priority />
      </div>

      <nav className="schedule-primary-nav">
        <div className="nav-left">
          <span className="nav-logo-text">49ers JP</span>
          <Link className="active" href="/">HOME</Link>
          <Link href="/schedule">SCHEDULE</Link>
          <Link href="/results">RESULTS</Link>
          <Link href="/team">TEAM</Link>
          <Link href="/roster">ROSTER</Link>
          <Link href="/highlights">HIGHLIGHTS</Link>
        </div>
        <div className="nav-right">
          <a href="https://www.ticketmaster.com" target="_blank" rel="noreferrer noopener">TICKETS</a>
          <a href="https://www.49ers.com/" target="_blank" rel="noreferrer noopener">49ERS.COM</a>
        </div>
      </nav>

      <Container as="main" className="site-main">
        <Reveal y={16} delay={80}>
          <section className="page-hero">
            <p className="eyebrow">SAN FRANCISCO 49ERS / JAPAN FAN HUB</p>
            <motion.h1 style={{ y: titleY }}>RED & GOLD GATEWAY</motion.h1>
            <p className="intro">チーム紹介、スケジュール、ロースター、注目選手をシンプルにまとめた49ers日本語ハブ。気になる項目へすぐアクセスできます。</p>
            <div className="hero-actions">
              <Button as={Link} href="/schedule" variant="primary" className="cta solid">直近スケジュール</Button>
              <Button as={Link} href="/team" variant="ghost" className="cta ghost">チームを知る</Button>
            </div>
          </section>
        </Reveal>

        <section className="feature-grid">
          <Card as="article" className="feature-card">
            <p className="badge">SCHEDULE</p>
            <h3>直近1ヶ月の結果</h3>
            <p>2025-11-12〜2025-12-12の3試合を掲載。スコアと勝敗をすぐ確認。</p>
            <Link className="link-arrow" href="/schedule">見る</Link>
          </Card>
          <Card as="article" className="feature-card">
            <p className="badge">TEAM</p>
            <h3>チームの背景</h3>
            <p>歴史・スタイル・ファン向け情報をコンパクトにまとめた紹介ページ。</p>
            <Link className="link-arrow" href="/team">見る</Link>
          </Card>
          <Card as="article" className="feature-card">
            <p className="badge">ROSTER</p>
            <h3>主要メンバー</h3>
            <p>背番号と役割、特徴を一覧化。キー選手を把握するのに便利。</p>
            <Link className="link-arrow" href="/roster">見る</Link>
          </Card>
          <Card as="article" className="feature-card">
            <p className="badge">HIGHLIGHTS</p>
            <h3>注目プレーヤー</h3>
            <p>攻守のキープレーヤーをピックアップ。どこに注目すべきかがわかる。</p>
            <Link className="link-arrow" href="/highlights">見る</Link>
          </Card>
        </section>
      </Container>
    </body>
  );
}
