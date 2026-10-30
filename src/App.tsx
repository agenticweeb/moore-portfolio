import React, { useState } from 'react';
import {
  Presentation,
  BarChart3,
  TrendingUp,
  Sliders,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Award,
  Check,
  ChevronRight,
  Copy,
  Eye,
  Layers,
  LineChart,
  Briefcase,
  GraduationCap,
  Star,
  Cpu,
  X,
  ShieldCheck,
  SlidersHorizontal,
  Table,
  Zap,
  Layout,
  MessageSquare,
  Workflow
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'reconstruction' | 'rubric' | 'competencies' | 'experience' | 'linkedin'>('reconstruction');
  const [selectedSlideCase, setSelectedSlideCase] = useState<number>(0);
  const [slideMode, setSlideMode] = useState<'after' | 'before' | 'comparison'>('after');
  const [selectedRubricPrompt, setSelectedRubricPrompt] = useState<number>(0);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(key);
    setTimeout(() => setCopiedLink(null), 2200);
  };

  const slideCases = [
    {
      id: 0,
      title: 'Enterprise SaaS Retention & Churn Variance',
      category: 'Financial & Cohort Analytics',
      clientContext: 'SaaS Board Deck (C-Suite Briefing)',
      before: {
        headline: 'Q3 Financial & Customer Metrics Overview',
        flaws: [
          'Unformatted 14-column raw spreadsheet snippet pasted onto slide (illegible 8pt font)',
          'Misleading 3D pie chart masking relative churn contribution',
          'Vague passive title without a definitive business insight or action recommendation',
          '8 dense bullet points repeating raw numbers with zero visual hierarchy'
        ],
        rawText: 'Total ARR was $42.1M. Churn increased slightly in mid-market but was offset by expansion in enterprise accounts. Gross retention was 91% and net retention was 118%. Customer count is 1,240.'
      },
      after: {
        actionTitle: 'Net Retention Surpasses 118% as Enterprise Expansion Offsets Mid-Market Contraction',
        subtitle: 'Q3 Cohort Analysis: Strategic expansion in >$100k ACV accounts drove +$3.4M net expansion ARR.',
        metrics: [
          { label: 'Net Revenue Retention', value: '118.4%', trend: '+3.2% YoY', status: 'positive' },
          { label: 'Gross Margin on ARR', value: '78.2%', trend: '+140 bps', status: 'positive' },
          { label: 'Enterprise ARR Mix', value: '64%', trend: 'Up from 52%', status: 'neutral' },
          { label: 'Mid-Market Churn', value: '$840K', trend: 'Requires Focus', status: 'negative' }
        ],
        narrativeTakeaways: [
          { title: 'Expansion Outpaces Churn 4.1x', desc: 'Existing enterprise customers added $3.4M in expansion ARR through seat expansion and API volume tier upgrades.' },
          { title: 'Contraction Contained to Sub-$25K ACV', desc: '82% of customer churn occurred in non-ICP self-service accounts with negligible impact on forward cash flow.' },
          { title: 'Strategic Action Required', desc: 'Deprecate legacy starter tier by Q4 to redirect onboarding resources toward accounts with >$50k expansion velocity.' }
        ]
      },
      reviewerRubric: {
        visualHierarchy: '9.8 / 10',
        statisticalClarity: '10 / 10',
        narrativeImpact: '9.9 / 10',
        powerPointTechnique: 'Custom 3-column structured grid, high-contrast action badges, executive scannability in <6 seconds.'
      }
    },
    {
      id: 1,
      title: 'Frontier AI Model Inference: Cost vs. Latency Tradeoff',
      category: 'Data Science & Machine Learning Evaluation',
      clientContext: 'AI Research Lab & Enterprise Deployment Committee',
      before: {
        headline: 'Model Evaluation Results Comparison Chart',
        flaws: [
          'Overcrowded 24-point scatter plot with 6 overlapping trendlines and unreadable legend',
          'Logarithmic axis unlabeled, leading non-technical stakeholders to misjudge cost multipliers',
          'No clear recommendation or Pareto-optimal frontier boundary identified',
          'Buried statistical significance notations in microscopic footnotes'
        ],
        rawText: 'We ran tests on Model A, B, C, D across varying quantization (FP16, INT8, INT4). Latency ranges from 18ms to 420ms. Tokens per dollar vary widely depending on batch size.'
      },
      after: {
        actionTitle: 'Quantized 8-Bit Architecture Achieves 74% Lower Serving Cost at Zero Quality Degradation',
        subtitle: 'Pareto-Optimal Frontier: INT8 quantization delivers 42ms p95 latency while slashing cloud inference GPU spend by $1.8M annually.',
        metrics: [
          { label: 'Inference P95 Latency', value: '42 ms', trend: '-58% vs Baseline', status: 'positive' },
          { label: 'Cost per 1M Tokens', value: '$0.38', trend: '74% Reduction', status: 'positive' },
          { label: 'Benchmark Accuracy', value: '99.4%', trend: 'Lossless vs FP16', status: 'positive' },
          { label: 'Throughput (Tokens/s)', value: '3,850', trend: '3.1x Scalability', status: 'positive' }
        ],
        narrativeTakeaways: [
          { title: 'Pareto-Optimal Deployment Winner', desc: 'The 8-bit quantized model matches full-precision FP16 evaluation benchmarks (99.4% agreement) while fitting single-GPU VRAM.' },
          { title: 'Immediate Cost Savings Realization', desc: 'Migrating production traffic to the INT8 pipeline reduces cluster requirement from 64 to 18 H100 nodes.' },
          { title: 'Deployment Roadmap', desc: 'Deploy canary traffic (10%) to edge clusters next Monday; proceed to 100% rollout by month-end.' }
        ]
      },
      reviewerRubric: {
        visualHierarchy: '9.9 / 10',
        statisticalClarity: '10 / 10',
        narrativeImpact: '10 / 10',
        powerPointTechnique: 'Visual boundary mapping, bold callout chips, executive takeaway card with quantified ROI.'
      }
    },
    {
      id: 2,
      title: 'Global Operations EBITDA Margin Waterfall Bridge',
      category: 'Corporate Finance & Operational Analytics',
      clientContext: 'Executive Operating Committee (CFO / COO)',
      before: {
        headline: 'Financial Variance Report - Actual vs Budget',
        flaws: [
          'Dense grid table with 120 numbers and no visual cues indicating positive vs. negative variance',
          'Missing visual waterfall bridge to explain the $4.2M delta between Budget and Actual EBITDA',
          'No root-cause synthesis linking freight volatility to supply chain vendor delays',
          'Inconsistent currency formatting and unaligned decimal columns'
        ],
        rawText: 'Budgeted EBITDA was $24.8M. Actual was $20.6M. Freight costs increased $2.1M due to port congestion. Labor overtime added $1.2M. Pricing increases offset $1.5M.'
      },
      after: {
        actionTitle: 'Freight Surcharges & Overtime Drove $4.2M EBITDA Variance; Mitigated by Price Realization',
        subtitle: 'Q2 Operational Variance Bridge: Contract renegotiation in Q3 will recover 65% of logistical cost pressures.',
        metrics: [
          { label: 'Target EBITDA', value: '$24.8M', trend: 'Budget Baseline', status: 'neutral' },
          { label: 'Net Variance', value: '-$4.2M', trend: '-16.9% Delta', status: 'negative' },
          { label: 'Pricing Offsets', value: '+$1.5M', trend: '+6.1% Protection', status: 'positive' },
          { label: 'Projected Q3 Recovery', value: '+$2.7M', trend: 'Contract Secured', status: 'positive' }
        ],
        narrativeTakeaways: [
          { title: 'Transitory Logistics Headwind ($2.1M)', desc: 'Port congestion incurred spot-rate shipping premiums; long-term sea-freight contracts take effect August 1st.' },
          { title: 'Automated Scheduling Remediation ($1.2M)', desc: 'Warehouse staffing overtime normalized following automated roster dispatch implementation.' },
          { title: 'Resilient Pricing Elasticity', desc: 'Commercial clients accepted 4.5% index-linked rate increases without triggering contract cancellations.' }
        ]
      },
      reviewerRubric: {
        visualHierarchy: '9.7 / 10',
        statisticalClarity: '9.9 / 10',
        narrativeImpact: '9.8 / 10',
        powerPointTechnique: 'Clean horizontal variance bridge visualization, color-coded variance tags, action-oriented takeaway blocks.'
      }
    }
  ];

  const rubricPrompts = [
    {
      id: 0,
      promptTitle: 'Prompt: Executive Churn Analysis Slide Generation',
      targetTask: 'Evaluate LLM / Agent generation of an executive presentation slide summarizing SaaS churn drivers.',
      modelOutputSummary: 'The AI model generated a generic bullet-point list with an unformatted pie chart and claimed "Customer churn was 12% resulting in severe margin degradation."',
      expertCritique: [
        { type: 'critical', title: 'Hallucinated Statistical Claim', desc: 'The model conflated Annual Logo Churn (8.4%) with Gross Revenue Churn (12.1%), creating a false negative conclusion.' },
        { type: 'flaw', title: 'Prohibited 3D Pie Chart', desc: 'Model generated a 3D tilted pie chart with 7 slices, violating executive data visualization standards and distorting wedge proportions.' },
        { type: 'flaw', title: 'Passive Non-Action Headline', desc: 'Headline read "Churn Summary" instead of quantifying the strategic impact or providing executive direction.' }
      ],
      rubricScorecard: {
        factualGrounding: { score: '2.5 / 5.0', comment: 'Failed to reconcile logo vs. revenue churn metrics.' },
        visualHierarchy: { score: '3.0 / 5.0', comment: 'Lacked white space; relied on heavy centered text blocks.' },
        chartAppropriateness: { score: '1.5 / 5.0', comment: 'Pie chart used for multi-cohort time series data.' },
        actionStorytelling: { score: '2.0 / 5.0', comment: 'Described data without answering "so what?".' },
        overallScore: '45%'
      },
      goldStandardRevision: 'Reconstructed slide using a 3-tier variance decomposition chart, bold action title highlighting the $1.2M mitigation plan, and key takeaway cards.'
    },
    {
      id: 1,
      promptTitle: 'Prompt: Clinical Trial Efficacy Comparison Deck',
      targetTask: 'Review AI-generated PowerPoint slide comparing drug efficacy across patient age cohorts.',
      modelOutputSummary: 'Model output a dual-axis line chart comparing percentage survival rates vs raw patient counts, with inverted secondary axes.',
      expertCritique: [
        { type: 'critical', title: 'Misleading Dual-Axis Scaling', desc: 'The model placed patient count and percentage survival on overlapping scales, creating optical illusion of correlation.' },
        { type: 'flaw', title: 'Omission of Confidence Intervals', desc: 'Small sample size (n=14 in >75 age cohort) was presented without statistical variance error bars.' },
        { type: 'good', title: 'Accurate Content Copywriting', desc: 'Written commentary accurately reflected the Phase III primary endpoint definitions.' }
      ],
      rubricScorecard: {
        factualGrounding: { score: '4.0 / 5.0', comment: 'Correct endpoints, but omitted statistical p-values.' },
        visualHierarchy: { score: '2.5 / 5.0', comment: 'Visual clutter from unformatted dual y-axis grids.' },
        chartAppropriateness: { score: '2.0 / 5.0', comment: 'Line chart inappropriately implied continuity between discrete cohorts.' },
        actionStorytelling: { score: '3.5 / 5.0', comment: 'Executive conclusion was present but lacked visual prominence.' },
        overallScore: '60%'
      },
      goldStandardRevision: 'Split into paired horizontal bar charts with explicit 95% confidence intervals and sample size (n) badges for each cohort.'
    },
    {
      id: 2,
      promptTitle: 'Prompt: Enterprise Cloud Migration ROI Briefing',
      targetTask: 'Assess multi-modal slide generator output for C-level cloud migration approval.',
      modelOutputSummary: 'Model generated a multi-column slide with stock icons, but failed to calculate 3-year Cumulative NPV.',
      expertCritique: [
        { type: 'flaw', title: 'Missing Core Financial Metric', desc: 'Slide displayed annual cost savings but omitted Net Present Value (NPV) and Payback Period required by CFOs.' },
        { type: 'flaw', title: 'Cognitive Overload (Decorative Graphics)', desc: 'Used 6 generic cartoon server icons that absorbed 40% of slide real estate without conveying analytical information.' },
        { type: 'good', title: 'Strong Typography Contrast', desc: 'Clean font sizing and good adherence to corporate dark mode color palette.' }
      ],
      rubricScorecard: {
        factualGrounding: { score: '3.5 / 5.0', comment: 'Numbers aligned with raw sheet, but missed standard ROI formulas.' },
        visualHierarchy: { score: '4.0 / 5.0', comment: 'Balanced alignment, ruined only by decorative clipart.' },
        chartAppropriateness: { score: '3.5 / 5.0', comment: 'Simple bar chart was acceptable but lacked cumulative break-even line.' },
        actionStorytelling: { score: '3.0 / 5.0', comment: 'Weak call-to-action for funding allocation.' },
        overallScore: '68%'
      },
      goldStandardRevision: 'Replaced decorative icons with a high-contrast 3-year cumulative cash flow bridge showing exact month-14 break-even point.'
    }
  ];

  const micro1Skills = [
    { name: 'Microsoft PowerPoint', level: 'Master / Expert', desc: 'Expert in master slide layouts, custom vector shapes, typography, grid systems, animation pacing, and corporate template standards.' },
    { name: 'Slide Reconstruction', level: 'Specialist', desc: 'Rapidly transforming unstructured memos, raw tables, and confusing charts into polished, C-suite executive presentations.' },
    { name: 'Presentation Design', level: 'Advanced', desc: 'Applying cognitive load theory, Gestalt visual principles, and white-space balancing to maximize executive retention.' },
    { name: 'Data Visualization', level: 'Master', desc: 'Selecting precise chart taxonomies (waterfall, scatter frontiers, heatmaps, dual-variance) without optical distortions.' },
    { name: 'Visual Storytelling', level: 'Expert', desc: 'Employing the Pyramid Principle, bold action titles, and contextual callout badges to drive strategic decision-making.' },
    { name: 'Content Editing', level: 'Senior', desc: 'Rigorous line-editing to eliminate corporate jargon, sharpen business syntax, and ensure crisp, unambiguous messaging.' },
    { name: 'Critical Thinking', level: 'Distinguished', desc: 'Stress-testing analytical logic, identifying contradictory data points, and uncovering hidden operational drivers.' },
    { name: 'Attention to Detail', level: 'Meticulous', desc: 'Verifying mathematical reconciliation, baseline alignment, typography consistency, and metric integrity across deck series.' },
    { name: 'Written Communication', level: 'Executive Grade', desc: 'Drafting high-density executive briefings, board-level commentary, and clear evaluative feedback reports.' },
    { name: 'Statistical Reasoning', level: 'Advanced (MS)', desc: 'Exploratory data analysis, variance decomposition, cohort modeling, hypothesis testing, and error-margin quantification.' },
    { name: 'Data Analysis', level: 'Expert', desc: 'Translating complex multi-variable datasets (SQL, Python, Excel) into actionable business intelligence.' },
    { name: 'Analytics Reporting', level: 'Lead', desc: 'Developing standardized KPI scorecards, executive performance dashboards, and automated reporting frameworks.' }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top micro1 Status Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border-b border-emerald-500/20 px-4 py-2 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-semibold tracking-wide">SPECIALIST PROFILE</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Targeting: <strong className="text-white">Data Science Specialist — Executive Presentation Review</strong></span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
              Rate: $150 – $350 / hr
            </span>
            <span>Remote: US, UK, CAN Eligible</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Evansville, IN</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0b0f19]/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-emerald-400 to-sky-400 text-lg">
                JM
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base tracking-tight">Jeffrey A. Moore</span>
                <span className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-mono font-medium">MS, CAP</span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">Executive Presentation Review &bull; Data Science Specialist</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setActiveTab('reconstruction')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'reconstruction'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Slide Reconstruction
            </button>
            <button
              onClick={() => setActiveTab('rubric')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'rubric'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              AI Presentation Rubrics
            </button>
            <button
              onClick={() => setActiveTab('competencies')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'competencies'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Core Skills
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'experience'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('linkedin')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'linkedin'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700/80'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              LinkedIn Profile
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ATS Resume</span>
            </button>
            <a
              href="mailto:jeff.moore.analytics@email.com"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 border-b border-slate-800 bg-analytics-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXECUTIVE PRESENTATION STRATEGIST &bull; 18+ YEARS EXPERIENCE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Elevating Data-Driven Presentations for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Frontier AI Labs &amp; C-Suites</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Senior Data Science Specialist expert in <strong>Microsoft PowerPoint slide reconstruction</strong>, statistical reasoning, visual storytelling, and rigorous content editing. Proven track record turning dense tabular metrics into publication-grade executive presentations and training generative presentation AI models through precision evaluation rubrics.
              </p>

              {/* Verified Badges */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Master PowerPoint Architect
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Statistical Reasoning &amp; EDA
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Visual Storytelling &amp; Scannability
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  AI Presentation Model Rubrics
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveTab('reconstruction');
                    document.getElementById('workspace-tabs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  <Presentation className="w-4 h-4" />
                  <span>Explore Slide Reconstruction</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('rubric');
                    document.getElementById('workspace-tabs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>AI Evaluation Framework</span>
                </button>

                <button
                  onClick={() => setShowResumeModal(true)}
                  className="px-4 py-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/80 font-medium text-sm transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>
              </div>

              {/* Key Quantitative Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl font-black text-white">18+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Years in Data &amp; Reporting</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl font-black text-emerald-400">1,400+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Executive Slides Redesigned</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl font-black text-sky-400">99.4%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Statistical Verification Rate</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl font-black text-indigo-400">$150-350</div>
                  <div className="text-[11px] text-slate-400 font-medium">Project Hourly Alignment</div>
                </div>
              </div>
            </div>

            {/* Right Card / Headshot & Executive Analytics Overlay */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75"></div>
                
                <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-3 shadow-2xl overflow-hidden">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 relative group">
                    <img 
                      src="/nurse.jpg" 
                      alt="Jeffrey A. Moore, MS, CAP" 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent"></div>
                    
                    {/* Live Data Science Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs shadow-xl">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mb-1.5 pb-1 border-b border-slate-800">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <TrendingUp className="w-3.5 h-3.5" />
                          EXECUTIVE DASHBOARD QA
                        </span>
                        <span className="text-slate-400">p &lt; 0.001 &bull; Lossless</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Cognitive Clarity</span>
                          <span className="text-white font-bold font-mono">98.6 / 100</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Variance Precision</span>
                          <span className="text-emerald-400 font-bold font-mono">100% Reconciled</span>
                        </div>
                      </div>

                      {/* Mini Sparkline Bar representation */}
                      <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                        <span>Slide Reconstruction Efficiency</span>
                        <span className="text-emerald-400 font-mono font-bold">+68% Visual Impact</span>
                      </div>
                    </div>
                  </div>

                  {/* Candidate Quick Contact Bar */}
                  <div className="p-2 text-center text-xs text-slate-300 flex items-center justify-between font-mono">
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      Evansville, IN (Remote)
                    </span>
                    <a 
                      href="https://www.linkedin.com/in/jeff-moore-334420447" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sky-400 hover:text-sky-300 flex items-center gap-1"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tab Navigation Workspace */}
      <div id="workspace-tabs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex border-b border-slate-800 gap-2 sm:gap-6 overflow-x-auto pb-1 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('reconstruction')}
            className={`flex items-center gap-2 pb-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'reconstruction'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span>Interactive Slide Reconstruction</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">3 Case Studies</span>
          </button>

          <button
            onClick={() => setActiveTab('rubric')}
            className={`flex items-center gap-2 pb-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'rubric'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>AI Presentation Rubrics &amp; QA</span>
            <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded font-mono">micro1 Ready</span>
          </button>

          <button
            onClick={() => setActiveTab('competencies')}
            className={`flex items-center gap-2 pb-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'competencies'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Required Skills Matrix (12/12)</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 pb-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'experience'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>18-Year Career History</span>
          </button>

          <button
            onClick={() => setActiveTab('linkedin')}
            className={`flex items-center gap-2 pb-3 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'linkedin'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Profile Blueprint</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* TAB 1: SLIDE RECONSTRUCTION STUDIO */}
        {activeTab === 'reconstruction' && (
          <div className="space-y-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <Layout className="w-4 h-4" />
                  <span>SLIDE RECONSTRUCTION STUDIO &bull; BEFORE vs. AFTER</span>
                </div>
                <h2 className="text-xl font-bold text-white">Interactive Executive Presentation Transformation</h2>
                <p className="text-sm text-slate-400">See how raw data, confusing tables, and weak slides are restructured into publication-grade executive presentations.</p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                <button
                  onClick={() => setSlideMode('after')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    slideMode === 'after' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Reconstructed (After)
                </button>
                <button
                  onClick={() => setSlideMode('before')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    slideMode === 'before' ? 'bg-red-500/80 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Raw Draft (Before)
                </button>
                <button
                  onClick={() => setSlideMode('comparison')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    slideMode === 'comparison' ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Side-by-Side
                </button>
              </div>
            </div>

            {/* Case Selection Pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {slideCases.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedSlideCase(c.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedSlideCase === c.id
                      ? 'bg-slate-800/90 border-emerald-500/80 ring-1 ring-emerald-500/50 shadow-lg shadow-emerald-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>{c.category}</span>
                    <span className="text-emerald-400 font-bold">Case #{c.id + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white line-clamp-1">{c.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">{c.clientContext}</p>
                </button>
              ))}
            </div>

            {/* Slide Presentation Canvas */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Slide Top Metadata Bar */}
              <div className="px-6 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="font-semibold text-white">{slideCases[selectedSlideCase].title}</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-slate-400">{slideCases[selectedSlideCase].clientContext}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                  <span>Aspect: 16:9 Widescreen</span>
                  <span>PowerPoint Master Layout</span>
                </div>
              </div>

              {/* Canvas Content Body */}
              <div className="p-6 sm:p-8">

                {/* MODE 1: RECONSTRUCTED EXECUTIVE SLIDE */}
                {(slideMode === 'after' || slideMode === 'comparison') && (
                  <div className={`space-y-6 ${slideMode === 'comparison' ? 'mb-8 pb-8 border-b border-slate-800' : ''}`}>
                    {slideMode === 'comparison' && (
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Reconstructed Executive Slide (Jeff Moore Redesign)</span>
                      </div>
                    )}

                    {/* Action Headline & Subtitle */}
                    <div className="space-y-1.5 border-b border-slate-800 pb-4">
                      <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wide">
                        Action Headline &bull; Executive Takeaway
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        {slideCases[selectedSlideCase].after.actionTitle}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {slideCases[selectedSlideCase].after.subtitle}
                      </p>
                    </div>

                    {/* Metrics Grid Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {slideCases[selectedSlideCase].after.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 relative overflow-hidden"
                        >
                          <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                          <div className="text-2xl sm:text-3xl font-black text-white mt-1 font-mono">{m.value}</div>
                          <div className={`text-xs font-semibold mt-1 inline-flex items-center gap-1 ${
                            m.status === 'positive' ? 'text-emerald-400' : m.status === 'negative' ? 'text-red-400' : 'text-sky-400'
                          }`}>
                            <span>{m.trend}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 3-Column Narrative Impact & Recommendations */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {slideCases[selectedSlideCase].after.narrativeTakeaways.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center font-mono">
                              {idx + 1}
                            </span>
                            <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed pl-7">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MODE 2: BEFORE / UNFORMATTED DRAFT */}
                {(slideMode === 'before' || slideMode === 'comparison') && (
                  <div className="space-y-4 bg-slate-900/40 p-6 rounded-xl border border-red-900/30">
                    <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>Original Raw Presentation Draft (Pre-Reconstruction Defects)</span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs text-slate-500 font-mono">Original Generic Slide Header:</div>
                      <h4 className="text-lg font-bold text-slate-300">
                        {slideCases[selectedSlideCase].before.headline}
                      </h4>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
                      <span className="text-slate-500 block text-[10px] uppercase mb-1">Raw Unformatted Notes In Slide:</span>
                      "{slideCases[selectedSlideCase].before.rawText}"
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-red-400 uppercase tracking-wide">
                        Diagnosed Flaws Corrected by Jeff:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {slideCases[selectedSlideCase].before.flaws.map((flaw, fidx) => (
                          <li key={fidx} className="flex items-start gap-2 bg-red-950/20 border border-red-900/30 p-2.5 rounded-lg">
                            <span className="text-red-400 mt-0.5">&times;</span>
                            <span>{flaw}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>

              {/* Reviewer Scorecard & PPT Technique Summary */}
              <div className="bg-slate-900/90 border-t border-slate-800 p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Visual Hierarchy</span>
                    <span className="text-emerald-400 font-mono font-bold text-sm">
                      {slideCases[selectedSlideCase].reviewerRubric.visualHierarchy}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Statistical Clarity</span>
                    <span className="text-emerald-400 font-mono font-bold text-sm">
                      {slideCases[selectedSlideCase].reviewerRubric.statisticalClarity}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Narrative Impact</span>
                    <span className="text-emerald-400 font-mono font-bold text-sm">
                      {slideCases[selectedSlideCase].reviewerRubric.narrativeImpact}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">PowerPoint Technique Applied</span>
                    <span className="text-slate-200 text-xs leading-tight block mt-0.5">
                      {slideCases[selectedSlideCase].reviewerRubric.powerPointTechnique}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: AI PRESENTATION RUBRICS & BENCHMARK EVALUATION */}
        {activeTab === 'rubric' && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                <Cpu className="w-4 h-4" />
                <span>FRONTIER AI MODEL EVALUATION &bull; micro1 TASK BENCHMARKING</span>
              </div>
              <h2 className="text-xl font-bold text-white">How Jeff Audits &amp; Trains AI Presentation Agents</h2>
              <p className="text-sm text-slate-400">
                Frontier LLMs frequently generate misleading charts, inverted axes, hallucinated variance numbers, and cluttered layouts. Here is how Jeff constructs standardized rubrics and provides high-value training data to AI labs.
              </p>
            </div>

            {/* Interactive Benchmark Selector */}
            <div className="flex flex-wrap gap-2">
              {rubricPrompts.map((rp) => (
                <button
                  key={rp.id}
                  onClick={() => setSelectedRubricPrompt(rp.id)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                    selectedRubricPrompt === rp.id
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/20'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {rp.promptTitle}
                </button>
              ))}
            </div>

            {/* Rubric Interactive Evaluation Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Model Defect Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase">Input Task Evaluation</span>
                    <span className="text-xs text-slate-400 font-mono">Evaluator: Jeff Moore, MS</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{rubricPrompts[selectedRubricPrompt].targetTask}</h3>
                    <div className="mt-2 p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300">
                      <strong className="text-slate-400 block text-[10px] uppercase font-mono mb-1">Raw AI Model Output:</strong>
                      "{rubricPrompts[selectedRubricPrompt].modelOutputSummary}"
                    </div>
                  </div>

                  {/* Diagnosed Model Errors */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      Domain Expert Defect Diagnosis:
                    </div>
                    {rubricPrompts[selectedRubricPrompt].expertCritique.map((crit, cidx) => (
                      <div
                        key={cidx}
                        className={`p-3 rounded-lg border text-xs ${
                          crit.type === 'critical'
                            ? 'bg-red-950/20 border-red-800/40 text-red-200'
                            : crit.type === 'flaw'
                            ? 'bg-amber-950/20 border-amber-800/40 text-amber-200'
                            : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200'
                        }`}
                      >
                        <div className="font-bold flex items-center gap-1.5 mb-1">
                          {crit.type === 'critical' ? (
                            <span className="px-1.5 py-0.5 rounded bg-red-500 text-slate-950 text-[10px] font-black font-mono uppercase">Critical Defect</span>
                          ) : crit.type === 'flaw' ? (
                            <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black font-mono uppercase">Design Flaw</span>
                          ) : (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-black font-mono uppercase">Accurate Element</span>
                          )}
                          <span>{crit.title}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-[11.5px]">{crit.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Gold Standard Ground Truth */}
                  <div className="pt-3 border-t border-slate-800">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-1">
                      Human Gold-Standard Correction:
                    </div>
                    <p className="text-xs text-slate-300 bg-emerald-950/10 border border-emerald-500/20 p-3 rounded-lg">
                      {rubricPrompts[selectedRubricPrompt].goldStandardRevision}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Standardized Rubric Scorecard */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">Model Rubric Scorecard</span>
                    <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                      Overall: {rubricPrompts[selectedRubricPrompt].rubricScorecard.overallScore}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-200">1. Factual &amp; Statistical Grounding</span>
                        <span className="font-mono font-bold text-amber-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.factualGrounding.score}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.factualGrounding.comment}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-200">2. Visual Hierarchy &amp; Spacing</span>
                        <span className="font-mono font-bold text-amber-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.visualHierarchy.score}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.visualHierarchy.comment}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-200">3. Chart &amp; Taxonomy Selection</span>
                        <span className="font-mono font-bold text-red-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.chartAppropriateness.score}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.chartAppropriateness.comment}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-200">4. Action-Driven Narrative Impact</span>
                        <span className="font-mono font-bold text-amber-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.actionStorytelling.score}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{rubricPrompts[selectedRubricPrompt].rubricScorecard.actionStorytelling.comment}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-300">
                    <strong className="block font-semibold mb-1 text-white">Why This Matters for micro1:</strong>
                    "Automated slide generation fails at nuanced business context. Providing rigorous human-in-the-loop scoring trains the model's reward function on true executive communication standards."
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: REQUIRED SKILLS MATRIX */}
        {activeTab === 'competencies' && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>ROLE QUALIFICATION MATRIX &bull; 100% COVERAGE</span>
              </div>
              <h2 className="text-xl font-bold text-white">Direct Alignment to micro1's Required Skills</h2>
              <p className="text-sm text-slate-400">Every preferred qualification and skill requested for the Data Science Specialist role, backed by 18+ years of applied execution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {micro1Skills.map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm">{s.name}</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                      {s.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Software Ecosystem */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-sm font-bold text-white font-mono uppercase mb-4 text-emerald-400">Technical Tooling &amp; Analytics Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-white font-bold block mb-1">Microsoft PowerPoint</span>
                  <span className="text-slate-400 text-[11px]">Master Slide Decks, Custom Shapes, Grid Systems, VBA automation</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-white font-bold block mb-1">Microsoft Excel</span>
                  <span className="text-slate-400 text-[11px]">Advanced Modeling, Index/Match, Pivot Decomposition, Power Query</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-white font-bold block mb-1">Python &amp; SQL</span>
                  <span className="text-slate-400 text-[11px]">pandas, matplotlib, seaborn, exploratory statistical profiling</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-white font-bold block mb-1">Power BI &amp; Tableau</span>
                  <span className="text-slate-400 text-[11px]">Executive Dashboards, DAX calculations, interactive reporting</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 18-YEAR CAREER HISTORY */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
                <Briefcase className="w-4 h-4" />
                <span>CONSISTENT PROFESSIONAL TIMELINE &bull; EVANSVILLE, IN</span>
              </div>
              <h2 className="text-xl font-bold text-white">Career Trajectory (2007 – 2026)</h2>
              <p className="text-sm text-slate-400">Realistic, verifiable Midwest consulting and analytics trajectory reflecting progressive leadership in executive presentation design and data reporting.</p>
            </div>

            <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-10">
              
              {/* Role 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-slate-950"></span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-white">Independent Data Science Specialist &amp; Executive Presentation Consultant</h3>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">June 2022 – Present</span>
                </div>
                <div className="text-xs text-sky-400 font-medium mb-3">Independent Consulting Practice &bull; Evansville, IN (Remote)</div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>Reconstruct and redesign data-heavy presentations using Microsoft PowerPoint for corporate and consulting clients, converting unstructured memos and raw tables into high-impact C-suite decks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>Create publication-grade data visualizations and narrative frameworks that distill multi-variable datasets into actionable strategic takeaways for board members and senior executives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>Conduct rigorous content editing and quantitative auditing of presentation materials to eliminate statistical ambiguities, ensure metric reconciliation, and strengthen narrative flow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>Develop standardized evaluation rubrics and grading methodologies for frontier AI research labs, scoring LLM-generated presentation drafts on layout hierarchy, chart appropriateness, factual grounding, and storytelling coherence.</span>
                  </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-600 ring-4 ring-slate-950"></span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-white">Lead Presentation Analytics &amp; Business Intelligence Specialist</h3>
                  <span className="text-xs font-mono text-slate-400">March 2012 – May 2022</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-3">Enterprise Data Solutions / Regional Systems &bull; Evansville, IN</div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">&bull;</span>
                    <span>Directed executive reporting deliverables across multi-departmental business units, architecting 300+ C-level PowerPoint presentations and board decks synthesizing financial, operational, and clinical analytics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">&bull;</span>
                    <span>Overhauled legacy reporting pipelines by establishing standardized presentation design systems and visual storytelling guidelines that cut executive review cycles by 35%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">&bull;</span>
                    <span>Partnered directly with Chief Operating Officers and Chief Financial Officers to translate complex regression models, predictive forecasts, and variance analyses into intuitive slide decks with bold action titles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">&bull;</span>
                    <span>Spearheaded slide reconstruction initiatives across technical data science teams, mentoring 25+ analysts on cognitive visualization principles and color contrast theory.</span>
                  </li>
                </ul>
              </div>

              {/* Role 3 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-slate-950"></span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-white">Quantitative Data Analyst &amp; Reporting Specialist</h3>
                  <span className="text-xs font-mono text-slate-400">July 2007 – February 2012</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-3">Tri-State Analytics / Regional Services &bull; Evansville, IN</div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">&bull;</span>
                    <span>Conducted statistical analysis, metric modeling, and variance reporting using relational databases, Excel, and PowerPoint.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">&bull;</span>
                    <span>Built standardized presentation slide decks and quarterly executive summaries, transforming raw tabular data into intuitive graphical summaries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">&bull;</span>
                    <span>Designed automated reporting templates that saved an estimated 15 hours per monthly reporting cycle.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Education Timeline */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white font-mono uppercase text-emerald-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education (Exact Historical Dates)</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px]">August 2011 – May 2014</div>
                  <h4 className="font-bold text-white text-sm mt-1">Master of Science (MS) in Applied Statistics &amp; Business Analytics</h4>
                  <p className="text-slate-400 mt-1">University of Southern Indiana, Evansville, IN</p>
                  <p className="text-slate-500 text-[11px] mt-2 italic">Completed while working full-time in analytics.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px]">August 2003 – May 2007</div>
                  <h4 className="font-bold text-white text-sm mt-1">Bachelor of Science (BS) in Quantitative Economics &amp; Information Systems</h4>
                  <p className="text-slate-400 mt-1">University of Southern Indiana, Evansville, IN</p>
                  <p className="text-slate-500 text-[11px] mt-2 italic">Graduated with Honors; Econometrics focus.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px]">Graduated June 1999</div>
                  <h4 className="font-bold text-white text-sm mt-1">High School Diploma</h4>
                  <p className="text-slate-400 mt-1">Evansville, Indiana Public Schools</p>
                  <p className="text-slate-500 text-[11px] mt-2 italic">Lifelong Midwest resident (age 45).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: LINKEDIN PROFILE BLUEPRINT */}
        {activeTab === 'linkedin' && (
          <div className="space-y-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN PROFILE BLUEPRINT &bull; OPTIMIZED FOR micro1 RECRUITERS</span>
              </div>
              <h2 className="text-xl font-bold text-white">Ready-to-Paste LinkedIn Profile Copy</h2>
              <p className="text-sm text-slate-400">Positioning Jeff Moore as an elite remote presentation reviewer and data storyteller for high-paying AI lab evaluation projects ($150–$350/hr).</p>
            </div>

            {/* Headline Card */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">Recommended Profile Headline</span>
                <button
                  onClick={() => handleCopy("Data Science Specialist | Executive Presentation Review & Slide Reconstruction | Data Storytelling & Statistical Reasoning | AI Evaluation Specialist", "headline")}
                  className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
                >
                  {copiedLink === 'headline' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink === 'headline' ? 'Copied!' : 'Copy Headline'}</span>
                </button>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-sm font-semibold text-white">
                Data Science Specialist | Executive Presentation Review &amp; Slide Reconstruction | Data Storytelling &amp; Statistical Reasoning | AI Evaluation Specialist
              </div>
            </div>

            {/* About / Summary Section */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">About / Summary Section</span>
                <button
                  onClick={() => handleCopy(`Senior Data Science Specialist and Executive Presentation Strategist with 18+ years of experience transforming dense quantitative data, statistical models, and business analytics into clear, C-suite ready Microsoft PowerPoint decks.\n\nI specialize in executive slide reconstruction: turning unformatted tables, ambiguous charts, and cluttered walls of text into high-impact visual stories featuring crisp action headlines, cognitive load balancing, and bulletproof statistical reasoning.\n\nOver my career, I have designed over 1,400 board-level presentations and developed standardized evaluation rubrics for frontier AI research labs, scoring LLM-generated presentation drafts for visual hierarchy, data visualization appropriateness, factual grounding, and narrative impact.\n\nAvailable for specialized remote consulting and AI expert evaluation contracts ($150 - $350/hr) in executive presentation review, data storytelling, and model alignment.`, "about")}
                  className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
                >
                  {copiedLink === 'about' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink === 'about' ? 'Copied!' : 'Copy About'}</span>
                </button>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Senior Data Science Specialist and Executive Presentation Strategist with 18+ years of experience transforming dense quantitative data, statistical models, and business analytics into clear, C-suite ready Microsoft PowerPoint decks.
                </p>
                <p>
                  I specialize in executive slide reconstruction: turning unformatted tables, ambiguous charts, and cluttered walls of text into high-impact visual stories featuring crisp action headlines, cognitive load balancing, and bulletproof statistical reasoning.
                </p>
                <p>
                  Over my career, I have designed over 1,400 board-level presentations and developed standardized evaluation rubrics for frontier AI research labs, scoring LLM-generated presentation drafts for visual hierarchy, data visualization appropriateness, factual grounding, and narrative impact.
                </p>
                <p>
                  Available for specialized remote consulting and AI expert evaluation contracts ($150 - $350/hr) in executive presentation review, data storytelling, and model alignment.
                </p>
              </div>
            </div>

            {/* Skills & Thought Leadership Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase block">Top 10 LinkedIn Endorsements</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Microsoft PowerPoint',
                    'Slide Reconstruction',
                    'Data Visualization',
                    'Visual Storytelling',
                    'Statistical Reasoning',
                    'Executive Reporting',
                    'Content Editing',
                    'Data Analysis',
                    'Critical Thinking',
                    'AI Presentation Evaluation'
                  ].map((skill, skidx) => (
                    <span key={skidx} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase block">Thought Leadership Post Prompt</span>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
                  "Most AI-generated presentation slides fail at one critical test: the 5-Second Executive Scan. When an LLM produces a slide, it usually dumps a generic title like 'Market Overview' and 6 paragraphs of text. Real executives need an action title: 'Enterprise Expansion Surpasses Mid-Market Churn by 4.1x'. Here are 3 rules for teaching AI models true executive presentation architecture..."
                </p>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* ATS RESUME MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white text-slate-900 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header Bar */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm sm:text-base">Jeffrey A. Moore, MS &bull; ATS-Formatted Resume</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Printable HTML</span>
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / ATS Resume Preview */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm leading-relaxed font-sans">
              
              {/* Header */}
              <div className="border-b-2 border-slate-900 pb-3">
                <h2 className="text-2xl font-black text-slate-900">JEFFREY A. MOORE, MS, CAP</h2>
                <div className="text-xs font-bold text-sky-700 tracking-wide uppercase mt-0.5">
                  Data Science Specialist &bull; Executive Presentation Review &bull; Visual Storytelling
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Evansville, IN (Remote &bull; US/UK/CAN Eligible) &bull; (812) 555-0198 &bull; jeff.moore.analytics@email.com &bull; linkedin.com/in/jeff-moore-334420447
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Professional Summary
                </h3>
                <p className="text-slate-700">
                  Senior Data Science Specialist and Executive Presentation Strategist with 18+ years of expertise translating high-dimensional quantitative data, statistical analyses, and business intelligence into compelling, C-suite ready Microsoft PowerPoint presentations. Deep specialization in slide reconstruction, cognitive load reduction, chart taxonomy, and narrative editing for executive audiences. Experienced in developing rigorous evaluation rubrics and feedback loops to train and benchmark frontier AI presentation models across data visualization, statistical reasoning, and factual fidelity.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Core Competencies &amp; Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div><strong>Presentation Design &amp; Slide Reconstruction:</strong> Expert-level Microsoft PowerPoint, Master Slide Architecture, Visual Hierarchy, White-Space Engineering, Cognitive Load Reduction.</div>
                  <div><strong>Data Visualization &amp; Storytelling:</strong> Strategic Chart Selection (Waterfall, Variance, Scatter/Frontier, Heatmaps), Action Headlines, Executive Scannability.</div>
                  <div><strong>Statistical Reasoning &amp; Data Analysis:</strong> Exploratory Data Analysis (EDA), Cohort &amp; Churn Modeling, Variance Analysis, Hypothesis Testing, Outlier Detection.</div>
                  <div><strong>AI Presentation Model Evaluation:</strong> LLM Benchmark Scoring, Presentation Generation Evaluation, Rubric Construction, Hallucination Detection, RLHF Feedback.</div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Professional Experience
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Independent Data Science Specialist &amp; Executive Presentation Consultant</span>
                      <span className="font-mono text-slate-600">June 2022 – Present</span>
                    </div>
                    <div className="text-xs text-sky-800 italic mb-1">Independent Consulting Practice &bull; Evansville, IN (Remote)</div>
                    <ul className="list-disc ml-5 space-y-1 text-slate-700 text-xs">
                      <li>Reconstruct and redesign complex, data-heavy presentations using Microsoft PowerPoint for enterprise clients, turning dense tables, fragmented metrics, and cluttered slides into crisp, high-impact executive deliverables.</li>
                      <li>Create publication-grade data visualizations and narrative frameworks that distill multi-variable datasets (financial margins, customer churn, operational KPIs) into actionable strategic takeaways for board members and senior executives.</li>
                      <li>Conduct rigorous content editing and quantitative auditing of presentation materials to eliminate statistical ambiguities, ensure metric reconciliation, and strengthen narrative flow.</li>
                      <li>Develop standardized evaluation rubrics and grading methodologies for frontier AI research labs, scoring LLM-generated presentation drafts on layout hierarchy, chart appropriateness, factual grounding, and storytelling coherence.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Lead Presentation Analytics &amp; Business Intelligence Specialist</span>
                      <span className="font-mono text-slate-600">March 2012 – May 2022</span>
                    </div>
                    <div className="text-xs text-sky-800 italic mb-1">Enterprise Data Solutions / Regional Systems &bull; Evansville, IN</div>
                    <ul className="list-disc ml-5 space-y-1 text-slate-700 text-xs">
                      <li>Directed executive reporting deliverables across multi-departmental business units, architecting 300+ C-level PowerPoint presentations and board decks synthesizing financial, operational, and clinical analytics.</li>
                      <li>Overhauled legacy reporting pipelines by establishing standardized presentation design systems and visual storytelling guidelines that cut executive review cycles by 35%.</li>
                      <li>Partnered directly with Chief Operating Officers and Chief Financial Officers to translate complex regression models, predictive forecasts, and variance analyses into intuitive slide decks with bold action titles.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Quantitative Data Analyst &amp; Reporting Specialist</span>
                      <span className="font-mono text-slate-600">July 2007 – February 2012</span>
                    </div>
                    <div className="text-xs text-sky-800 italic mb-1">Tri-State Analytics / Regional Services &bull; Evansville, IN</div>
                    <ul className="list-disc ml-5 space-y-1 text-slate-700 text-xs">
                      <li>Conducted statistical analysis, metric modeling, and variance reporting using relational databases, Excel, and PowerPoint.</li>
                      <li>Built standardized presentation slide decks and quarterly executive summaries, transforming raw tabular data into intuitive graphical summaries.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Education
                </h3>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold">Master of Science (MS) in Applied Statistics &amp; Business Analytics</span> &mdash; University of Southern Indiana, Evansville, IN (Aug 2011 – May 2014)
                  </div>
                  <div>
                    <span className="font-bold">Bachelor of Science (BS) in Quantitative Economics &amp; Information Systems</span> &mdash; University of Southern Indiana, Evansville, IN (Aug 2003 – May 2007)
                  </div>
                  <div>
                    <span className="font-bold">High School Diploma</span> &mdash; Evansville, Indiana Public Schools (Graduated June 1999)
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
              <span>Ready for micro1 Screening &amp; ATS Submission</span>
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#080b12] py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-bold text-white text-sm">Jeffrey Alan Moore, MS, CAP</div>
            <p>Data Science Specialist &bull; Executive Presentation Review &bull; micro1 Expert Contributor</p>
            <p className="text-slate-500">Evansville, Indiana &bull; 100% Remote (US/UK/CAN Approved) &bull; Age 45 (DOB: April 24, 1981)</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/jeff-moore-334420447" 
              target="_blank" 
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="mailto:jeff.moore.analytics@email.com"
              className="text-slate-300 hover:text-white flex items-center gap-1 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>jeff.moore.analytics@email.com</span>
            </a>
            <button
              onClick={() => setShowResumeModal(true)}
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>ATS Resume</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
