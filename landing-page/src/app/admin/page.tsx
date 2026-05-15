"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, CreditCard, CheckCircle, Clock, Search, Bus, Lock, LogOut } from "lucide-react";

// Mock Data
const MOCK_APPLICATIONS = [
  { id: "APP-001", name: "Rahul Kumar", rollNo: "21X41A0501", route: "1346 (KUKATPALLY)", amount: "₹35,000", paymentStatus: "Paid", passStatus: "Pending", date: "2026-05-14" },
  { id: "APP-002", name: "Priya Reddy", rollNo: "21X41A0502", route: "1024 (BHEL)", amount: "₹35,000", paymentStatus: "Paid", passStatus: "Created", date: "2026-05-14" },
  { id: "APP-003", name: "Kiran Sharma", rollNo: "21X41A0503", route: "1258 (SECUNDERABAD)", amount: "₹35,000", paymentStatus: "Pending", passStatus: "Pending", date: "2026-05-15" },
  { id: "APP-004", name: "Anjali Desai", rollNo: "21X41A0504", route: "1137 (ALWAL)", amount: "₹35,000", paymentStatus: "Paid", passStatus: "Pending", date: "2026-05-15" },
];

async function hashKey(key: string) {
  const msgBuffer = new TextEncoder().encode(key);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// SHA-256 Hash of "1234"
const SECRET_HASH = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4";

export default function AdminPanel() {
  const [view, setView] = useState<"loading" | "login" | "register" | "dashboard">("loading");
  const [applications, setApplications] = useState(MOCK_APPLICATIONS);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    setView(isLoggedIn ? "dashboard" : "login");
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const hashed = await hashKey(secretKey);
    if (hashed !== SECRET_HASH) {
      setError("Invalid Admin Entry Key.");
      return;
    }
    localStorage.setItem("admin_user", JSON.stringify({ username, password }));
    alert("Admin registered successfully! You can now login.");
    setView("login");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const storedUserStr = localStorage.getItem("admin_user");
    if (!storedUserStr) {
      setError("No admin found. Please register first.");
      return;
    }
    const storedUser = JSON.parse(storedUserStr);
    if (storedUser.username === username && storedUser.password === password) {
      localStorage.setItem("isAdminLoggedIn", "true");
      setView("dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setView("login");
  };

  const handleCreatePass = (id: string) => {
    setApplications(apps => apps.map(app => app.id === id ? { ...app, passStatus: "Created" } : app));
  };

  if (view === "loading") return null;

  if (view === "login" || view === "register") {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-16">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Lock className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold">Admin {view === "login" ? "Login" : "Registration"}</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {view === "login" ? "Enter your credentials to access the dashboard." : "Create an admin account to manage passes."}
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm font-medium text-red-500 dark:text-red-400 text-center">
                {error}
              </div>
            )}

            <form onSubmit={view === "login" ? handleLogin : handleRegister} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Username</label>
                <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
              </div>
              
              {view === "register" && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium flex justify-between">
                    <span>Admin Entry Key</span>
                    <span className="text-muted-foreground font-normal text-xs">(Requires secret key)</span>
                  </label>
                  <input type="password" required value={secretKey} onChange={(e) => setSecretKey(e.target.value)} placeholder="Enter key..." className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                </div>
              )}

              <button type="submit" className="mt-4 w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]">
                {view === "login" ? "Login to Dashboard" : "Register Admin"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm border-t border-border pt-6">
              {view === "login" ? (
                <button onClick={() => { setView("register"); setError(""); }} className="text-muted-foreground hover:text-foreground transition-colors">
                  Don't have an account? <span className="font-semibold text-primary">Register</span>
                </button>
              ) : (
                <button onClick={() => { setView("login"); setError(""); }} className="text-muted-foreground hover:text-foreground transition-colors">
                  Already have an account? <span className="font-semibold text-primary">Login</span>
                </button>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Dashboard View
  const filteredApps = applications.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: "Total Applications", value: applications.length, icon: Users, color: "text-blue-500" },
    { label: "Payments Received", value: applications.filter(a => a.paymentStatus === "Paid").length, icon: CreditCard, color: "text-emerald-500" },
    { label: "Passes Created", value: applications.filter(a => a.passStatus === "Created").length, icon: CheckCircle, color: "text-violet-500" },
    { label: "Pending Passes", value: applications.filter(a => a.paymentStatus === "Paid" && a.passStatus === "Pending").length, icon: Clock, color: "text-amber-500" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin <span className="gradient-text">Dashboard</span></h1>
              <p className="mt-2 text-muted-foreground">Manage bus pass applications and verify payments.</p>
            </div>
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/50 transition-all shadow-sm">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>

          <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="border-b border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-lg font-bold">Recent Applications</h2>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search by name or roll no..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-medium">Student</th>
                    <th className="px-6 py-4 font-medium">Route</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Payment</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredApps.map((app) => (
                    <tr key={app.id} className="transition-colors hover:bg-muted/30">
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{app.name}</div>
                        <div className="text-xs text-muted-foreground uppercase">{app.rollNo}</div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{app.route}</td>
                      <td className="px-6 py-4 text-muted-foreground">{app.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${app.paymentStatus === 'Paid' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'}`}>
                          {app.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {app.paymentStatus === 'Paid' && app.passStatus === 'Pending' ? (
                          <button 
                            onClick={() => handleCreatePass(app.id)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
                          >
                            <Bus className="h-3.5 w-3.5" /> Create Pass
                          </button>
                        ) : app.passStatus === 'Created' ? (
                          <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                            <CheckCircle className="h-3.5 w-3.5" /> Pass Created
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">Awaiting Payment</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredApps.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                        No applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
