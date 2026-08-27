"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { organizations } from "../mocks/data";
import { createClient } from "../lib/supabase/client";

const nav = [["⌂", "Dashboard", "/dashboard"], ["◈", "Organizações", "/organizations"], ["✦", "Agentes", "/agents"], ["◌", "Clientes", "/customers"], ["▤", "Conversas", "/conversations"], ["◷", "Agenda", "/appointments"], ["◇", "Serviços", "/services"], ["♙", "Profissionais", "/professionals"], ["▧", "Conhecimento", "/knowledge"], ["↗", "Handoff humano", "/handoffs"], ["⌘", "Integrações", "/integrations"], ["⌁", "Observabilidade", "/observability"], ["⚙", "Configurações", "/settings"]];

export default function PlatformShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const section = pathname.split("/")[1] || "dashboard";
  async function logout() { await createClient().auth.signOut(); router.replace("/login"); }
  function navigate(href: string) { setMobileOpen(false); router.push(href); }
  return <div className="app-shell"><button className="mobile-menu-button icon-button" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">☰</button>{mobileOpen && <button className="sidebar-backdrop" onClick={() => setMobileOpen(false)} aria-label="Fechar menu" /> }<aside className={`sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}><div className="brand"><div className="brand-mark">R</div><div className="brand-copy"><strong>RanTech</strong><span>Agentes platform</span></div><button className="mobile-close icon-button" onClick={() => setMobileOpen(false)}>×</button></div><div className="nav-label">Operação</div><nav className="nav">{nav.map(([icon, label, href]) => <button className={`nav-item ${section === href.slice(1) ? "active" : ""}`} onClick={() => navigate(href)} key={label} title={collapsed ? label : undefined}><span className="nav-icon">{icon}</span>{!collapsed && label}</button>)}</nav>{!collapsed && <div className="sidebar-footer"><div className="nav-label" style={{ padding: 0 }}>Workspace</div><div className="workspace-name">RanTech Admin</div><div className="workspace-subtitle">Visão da plataforma</div></div>}</aside><main className="workspace"><header className="topbar"><div className="topbar-left"><button className="icon-button desktop-menu-button" onClick={() => setCollapsed(!collapsed)} aria-label="Recolher sidebar">≡</button><div className="crumb">Workspace / <strong>{section === "organizations" ? "Organizações" : section === "agents" ? "Agentes" : "Plataforma"}</strong></div></div><div className="topbar-actions"><button className="icon-button">♧</button><select className="org-switcher" defaultValue="all"><option value="all">Todas as organizações</option>{organizations.map((organization) => <option key={organization.id}>{organization.name}</option>)}</select><button className="avatar profile-button" onClick={() => setShowProfile(!showProfile)}>MV</button>{showProfile && <div className="profile-menu"><strong>Conta RanTech</strong><span>Administrador</span><button onClick={logout}>Sair</button></div>}</div></header><div className="content">{children}</div></main></div>;
}
