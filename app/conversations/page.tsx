import { Suspense } from "react";
import PlatformShell from "../platform-shell";
import ConversationsLive from "./conversations-live";
export default function Page() { return <PlatformShell><Suspense fallback={<article className="panel loading-state">Carregando conversas...</article>}><ConversationsLive /></Suspense></PlatformShell>; }
