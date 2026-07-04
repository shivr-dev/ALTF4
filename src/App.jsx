import { useState } from 'react'
import './oreui.css'
import './App.css'

/* ── Header ── */
function Header() {
  return (
    <header className="ore-header">
      <span className="ore-header-brand">ALT+F4 STUDIO</span>
      <nav className="ore-header-nav">
        <a href="#projects" className="ore-header-item">作品</a>
        <a href="#about"    className="ore-header-item">关于</a>
      </nav>
    </header>
  )
}

/* ── Hero Logo with fallback ── */
function StudioLogo() {
  const [failed, setFailed] = useState(false)
  if (!failed) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}minecraft_title.png`}
        alt="ALT+F4 STUDIO"
        className="studio-logo"
        draggable={false}
        onError={() => setFailed(true)}
      />
    )
  }
  return (
    <div className="logo-fallback">
      <span className="logo-fallback-top">ALT+F4</span>
      <span className="logo-fallback-main">STUDIO</span>
    </div>
  )
}

/* ── Hero Section ── */
function Hero() {
  const bgUrl = `${import.meta.env.BASE_URL}image.png`
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="hero-inner">
        <StudioLogo />

        <div className="slogan-wrap">
          <div className="ore-banner ore-banner--important slogan-text">
            创造能让你玩到想按&nbsp;
            <span className="slogan-key">Alt+F4</span>
            &nbsp;的极致体验。
          </div>
        </div>

        <button
          className="ore-btn ore-btn--green"
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        >
          查看核心作品
        </button>
      </div>
    </section>
  )
}

/* ── Project image with pixel fallback ── */
const DIRT_COLORS = ['#9E6B3A','#8B5A2B','#7A4E24','#A07040','#5DA42E','#3A6B1C']
const DIRT_PICK   = [0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,4,5,4,4,5,4,4,5,4,5,4,4,5,4,4,5,5,4,5,5,4,5,5,4,5,4,5,5,4,5,5,4]

function ProjectImage() {
  const [failed, setFailed] = useState(false)
  const src = `${import.meta.env.BASE_URL}dirt_store_logo.png`
  return (
    <div className="proj-img-pane">
      {!failed ? (
        <img
          src={src}
          alt="Dirt Store: Defense Battle"
          className="proj-img"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="proj-img-fallback">
          <div className="fallback-pixel-grid" aria-hidden>
            {DIRT_PICK.map((p, i) => (
              <div key={i} style={{ background: DIRT_COLORS[p] }} />
            ))}
          </div>
          <span className="fallback-label">DIRT STORE<br />DEFENSE BATTLE</span>
        </div>
      )}
    </div>
  )
}

/* ── Featured Projects ── */
function Projects() {
  return (
    <section id="projects">
      <div className="page-body">
        <div className="page-inner">
          <div className="section-gap-lg" />

          <div className="section-head">核心作品展示 · FEATURED PROJECTS</div>

          <div className="section-gap" />

          <div className="project-ore-block">
            <ProjectImage />

            <div className="proj-info-pane">
              <div className="proj-tags">
                <span className="ore-tag ore-tag--green">防守战</span>
                <span className="ore-tag ore-tag--blue">Minecraft BE</span>
                <span className="ore-tag ore-tag--yellow">主推</span>
              </div>

              <div>
                <div className="proj-name">Dirt Store<br />Defense Battle</div>
                <div className="proj-name-zh">泥土商店：防守战</div>
              </div>

              <p className="proj-desc">
                用泥土换取一切——武器、防御塔、士兵。
                在敌潮之中守护你的基地，每一波攻势都更加凶猛。
                是经济策略，也是实时对抗，极致的防守体验从这里开始。
              </p>

              <div className="proj-badges">
                <div className="proj-badge-row">
                  <span className="ore-badge ore-badge--green" />
                  策略防守玩法
                </div>
                <div className="proj-badge-row">
                  <span className="ore-badge ore-badge--blue" />
                  多人联机支持
                </div>
                <div className="proj-badge-row">
                  <span className="ore-badge ore-badge--yellow" />
                  持续内容更新
                </div>
              </div>
            </div>
          </div>

          <div className="section-gap" />

          <div className="ore-banner ore-banner--neutral" style={{ margin: '0', width: '100%' }}>
            更多全新玩法地图（RPG、解密、生存）正在爆肝中，敬请期待……
          </div>

          <div className="section-gap-lg" />
        </div>
      </div>
    </section>
  )
}

/* ── About ── */
function About() {
  return (
    <section id="about">
      <div className="page-body">
        <div className="page-inner">
          <div className="section-head">关于工作室 · ABOUT US</div>

          <div className="section-gap" />

          <div className="ore-banner ore-banner--info" style={{ margin: '0', width: '100%', lineHeight: 1.85 }}>
            ALT+F4 STUDIO 是一支专注于 Minecraft 基岩版地图与玩法开发的独立团队。<br />
            我们相信：好的地图不只是地图，而是一段让人难以放下的体验。
          </div>

          <div className="section-gap" />

          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-title">GAMEPLAY FIRST</div>
              <p className="about-card-body">每个机制都经过反复打磨，确保玩法新鲜感与深度并存。</p>
            </div>
            <div className="about-card">
              <div className="about-card-title">TECH CRAFT</div>
              <p className="about-card-body">深度使用命令、脚本 API 与行为包，突破游戏边界。</p>
            </div>
            <div className="about-card">
              <div className="about-card-title">PASSION DRIVEN</div>
              <p className="about-card-body">用爱发电，用极致标准交付每一张地图。</p>
            </div>
          </div>

          <div className="section-gap-lg" />
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">ALT+F4 STUDIO</div>
      <p className="footer-slogan">创造能让你玩到想按 Alt+F4 的极致体验。</p>
      <p className="footer-copy">© 2024 ALT+F4 STUDIO. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
  )
}
