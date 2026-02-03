import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Users,
  LayoutGrid,
  SunMedium,
  MoonStar,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Trophy,
  ChartSpline,
  MessageCircleQuestion
} from "lucide-react";

const SERVICE_TABS = [
  {
    key: "planning",
    label: "留学规划",
    items: ["学校排名解析", "目标专业深度解析", "海量成功案例数据", "多方案比选与路径规划"]
  },
  {
    key: "background",
    label: "背景提升",
    items: ["标化考试整体规划", "选课与GPA管理", "名企/科研内推", "暑校与海外交流项目"]
  },
  {
    key: "application",
    label: "申请递交",
    items: ["文书深度挖掘与润色", "网申系统与材料清单", "推荐人沟通与指导", "面试与补充材料策略"]
  },
  {
    key: "after",
    label: "留学「后」服务",
    items: ["入学前行前辅导", "选课与转专业咨询", "实习求职与职涯规划", "OPT / H1B / 长期发展建议"]
  }
];

const STAR_PRODUCTS = [
  { title: "美国高中申请", icon: GraduationCap },
  { title: "美国本科申请", icon: Building2 },
  { title: "美国转学申请", icon: BriefcaseBusiness },
  { title: "美国硕博申请", icon: BookOpen },
  { title: "国际竞赛辅导", icon: Trophy },
  { title: "背景提升产品", icon: ChartSpline }
];

const SECTIONS = [
  { id: "hero", label: "首页" },
  { id: "services", label: "留学服务" },
  { id: "tutors", label: "导师团队" },
  { id: "stats", label: "实力数据" },
  { id: "products", label: "明星产品" },
  { id: "about", label: "关于我们" }
];

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((v) => !v) };
}

function useActiveSection() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handler = () => {
      let current = "hero";
      SECTIONS.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = sec.id;
        }
      });
      setActiveId(current);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return activeId;
}

const App = () => {
  const { isDark, toggle } = useDarkMode();
  const [activeTab, setActiveTab] = useState("planning");
  const activeSectionId = useActiveSection();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-50">
      {/* Sticky side progress nav */}
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 z-30">
        <div className="glass-panel rounded-full px-3 py-4 flex flex-col gap-4 items-center">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group flex items-center gap-2"
            >
              <div
                className={`sticky-nav-dot ${
                  activeSectionId === sec.id ? "sticky-nav-dot-active" : ""
                } group-hover:w-5 group-hover:bg-skyBlue`}
              />
              <span className="text-[11px] text-slate-500 dark:text-slate-300 group-hover:text-skyBlue transition-colors">
                {sec.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-100/80 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl">
        <div className="section-wrapper flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-skyBlue to-deepNavy flex items-center justify-center text-white font-bold shadow-soft">
              OE
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-heading font-semibold tracking-tight">
                OpenEdu
              </span>
              <span className="text-[11px] text-slate-500">
                Open Ivy. Open Offer.
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("hero")} className="nav-link">
              首页
            </button>
            <button onClick={() => scrollTo("services")} className="nav-link">
              留学服务
            </button>
            <button onClick={() => scrollTo("tutors")} className="nav-link">
              导师团队
            </button>
            <button onClick={() => scrollTo("products")} className="nav-link">
              明星产品
            </button>
            <button onClick={() => scrollTo("about")} className="nav-link">
              关于我们
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="btn-ghost rounded-full w-9 h-9 p-0 flex items-center justify-center"
              aria-label="切换深色模式"
            >
              {isDark ? (
                <SunMedium className="w-4 h-4" />
              ) : (
                <MoonStar className="w-4 h-4" />
              )}
            </button>
            <button className="btn-primary text-xs sm:text-sm">
              <MessageCircleQuestion className="w-4 h-4 mr-1.5" />
              在线咨询
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section
          id="hero"
          className="section-wrapper pt-10 pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24"
        >
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-skyBlue/5 border border-skyBlue/20 text-xs text-skyBlue mb-5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>专注常春藤 · 全程一站式名校规划</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight"
              >
                OpenEdu 成立于
                <span className="text-skyBlue"> 美国本土 </span>
                的名校咨询团队
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl"
              >
                专注常春藤及美国 TOP 名校，以「美本在读/毕业」导师为核心，提供从规划、背景、申请到
                Offer 后发展的全链路解决方案，助你拿下 dream school 的录取。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <button className="btn-primary text-sm">
                  预约 1v1 规划评估
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
                <button
                  onClick={() => scrollTo("services")}
                  className="btn-ghost text-xs sm:text-sm"
                >
                  查看一站式服务
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-8 grid grid-cols-3 gap-3 max-w-md text-xs"
              >
                <div className="glass-panel rounded-2xl px-3 py-3 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <LayoutGrid className="w-3.5 h-3.5 text-skyBlue" />
                    一站式服务
                  </div>
                  <div className="text-[13px] font-medium text-slate-800 dark:text-slate-100">
                    从初高中到硕博，覆盖全阶段申请路径
                  </div>
                </div>
                <div className="glass-panel rounded-2xl px-3 py-3 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Users className="w-3.5 h-3.5 text-skyBlue" />
                    定制化方案
                  </div>
                  <div className="text-[13px] font-medium text-slate-800 dark:text-slate-100">
                    按专业+背景拆解，打造专属申请故事线
                  </div>
                </div>
                <div className="glass-panel rounded-2xl px-3 py-3 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Sparkles className="w-3.5 h-3.5 text-skyBlue" />
                    贴心陪伴
                  </div>
                  <div className="text-[13px] font-medium text-slate-800 dark:text-slate-100">
                    覆盖家长沟通、选课辅导与跨时区跟进
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px]"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/900105/pexels-photo-900105.jpeg')] bg-cover bg-center opacity-60 dark:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-skyBlue/70 via-deepNavy/70 to-slate-900/90 mix-blend-multiply" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-panel rounded-3xl px-6 py-5 max-w-xs text-white">
                  <div className="flex items-center gap-2 text-xs text-sky-100 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    美国本土导师 · 实战录取经验
                  </div>
                  <div className="text-lg font-semibold leading-snug mb-3">
                    Our Tutors 100% 来自美国
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-[11px]">
                    <div>
                      <div className="text-slate-200/80">藤校导师占比</div>
                      <div className="text-xl font-bold">63%</div>
                    </div>
                    <div>
                      <div className="text-slate-200/80">覆盖学校</div>
                      <div className="text-xl font-bold">TOP30</div>
                    </div>
                    <div>
                      <div className="text-slate-200/80">专业覆盖</div>
                      <div className="text-xl font-bold">All</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 glass-panel rounded-2xl px-3 py-2 text-[11px] text-slate-100 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-sky-400/80 flex items-center justify-center text-[10px] font-semibold">
                  Ivy
                </div>
                <div>
                  <div>藤校 offer 追踪面板</div>
                  <div className="text-slate-200/80">实时更新 24F / 25F 录取情况</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Grid */}
        <section
          id="services"
          className="section-wrapper py-14 md:py-18 lg:py-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                一站式留学服务 · 从规划到落地
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                将复杂的美国留学流程拆解为 4 大模块，由专业团队火力协同，覆盖「前期规划 - 背景提升 - 申请执行 - 入学及之后」的全链路服务。
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-4 md:p-5">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-5">
              {SERVICE_TABS.map((tab) => {
                const active = tab.key === activeTab;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium border transition-all ${
                      active
                        ? "bg-skyBlue text-white border-skyBlue shadow-soft"
                        : "bg-white/60 dark:bg-slate-900/40 border-slate-200/70 dark:border-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-50/90 dark:hover:bg-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm"
            >
              {SERVICE_TABS.find((t) => t.key === activeTab)?.items.map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-100/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/60 px-3.5 py-3 flex items-start gap-2.5"
                  >
                    <div className="mt-0.5 h-6 w-6 rounded-full bg-skyBlue/10 text-skyBlue flex items-center justify-center text-[11px] font-semibold">
                      ·
                    </div>
                    <div className="text-slate-700 dark:text-slate-200 text-[13px] md:text-sm">
                      {item}
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* Tutors / Stats Section */}
        <section
          id="tutors"
          className="section-wrapper py-14 md:py-18 lg:py-20"
        >
          <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50">
                导师团队 · 100% 美国在读 / 毕业
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-lg">
                OpenEdu 坚持只邀请有「美国本土学习与实战申请经验」的导师加入团队，既懂招生官视角，也懂中国学生的真实痛点，以结果为导向量身定制申请策略。
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-center text-sm">
                <div className="glass-panel rounded-2xl px-4 py-5 flex flex-col items-center">
                  <div className="text-[11px] uppercase tracking-wide text-skyBlue/90 mb-1">
                    美国导师
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                    100%
                  </div>
                  <div className="text-[12px] text-slate-500">
                    Our Tutors 100% 来自美国
                  </div>
                </div>

                <div className="glass-panel rounded-2xl px-4 py-5 flex flex-col items-center">
                  <div className="text-[11px] uppercase tracking-wide text-skyBlue/90 mb-1">
                    学校 & 专业
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                    TOP30
                  </div>
                  <div className="text-[12px] text-slate-500">
                    涵盖所有主流与热门专业
                  </div>
                </div>

                <div className="glass-panel rounded-2xl px-4 py-5 flex flex-col items-center">
                  <div className="text-[11px] uppercase tracking-wide text-skyBlue/90 mb-1">
                    藤校导师
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                    63%
                  </div>
                  <div className="text-[12px] text-slate-500">
                    藤校导师占比，覆盖 8 校联盟
                  </div>
                </div>
              </div>
            </div>

            <section id="stats" className="md:pt-3">
              <div className="glass-panel rounded-3xl p-5 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-skyBlue" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    实力数据一览
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "美国导师", value: "100%", ring: "text-skyBlue" },
                    { label: "TOP30 覆盖", value: "All", ring: "text-emerald-400" },
                    { label: "藤校导师占比", value: "63%", ring: "text-indigo-400" }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center text-center gap-2"
                    >
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border border-slate-200/80 dark:border-slate-700" />
                        <div className="absolute inset-1 rounded-full border-2 border-dashed border-skyBlue/70 dark:border-skyBlue/80 animate-[spin_12s_linear_infinite]" />
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-skyBlue/10 via-white/5 to-slate-900/10 dark:from-slate-900/80 dark:to-slate-800/80 flex items-center justify-center text-sm font-semibold text-slate-900 dark:text-white">
                          {item.value}
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Star Products */}
        <section
          id="products"
          className="section-wrapper py-14 md:py-18 lg:py-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                明星产品 · 覆盖每一个关键申请节点
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                从美国高中到硕博深造，我们为不同阶段的学生打造了高度模块化、可组合的产品矩阵，确保每一步都有对应解决方案。
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {STAR_PRODUCTS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group glass-panel rounded-3xl p-4 md:p-5 cursor-pointer hover:-translate-y-1 hover:shadow-soft transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-2xl bg-skyBlue/10 text-skyBlue flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {p.title}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-skyBlue transition-colors" />
                  </div>
                  <p className="text-[12px] md:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    针对
                    <span className="text-skyBlue">
                      {" "}
                      {p.title.replace("美国", "")}{" "}
                    </span>
                    场景提供完整路径设计与执行支持，覆盖从前期规划、背景搭建到文书和面试的全流程。
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* About & Footer */}
        <section
          id="about"
          className="section-wrapper pb-10 md:pb-16 lg:pb-20"
        >
          <div className="glass-panel rounded-3xl p-6 md:p-7 mb-8">
            <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6">
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  关于 OpenEdu
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  OpenEdu 由一群长期深耕美国名校申请与职业发展的导师发起，核心团队成员来自
                  Ivy League、Stanford、MIT 等知名院校。
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  我们希望通过更加透明、开放、以数据为基础的方式，帮助更多中国学生走向世界一流学府——不仅是拿到
                  Offer，更是找到适合自己的人生路径。
                </p>
              </div>
              <div className="rounded-2xl bg-skyBlue/5 dark:bg-slate-900/70 border border-skyBlue/20 dark:border-slate-700 px-4 py-4 text-xs text-slate-600 dark:text-slate-300 flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-50 mb-1.5">
                    为什么选择我们？
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>美国本土导师一对一深度陪伴</li>
                    <li>透明可视化的数据与流程管理</li>
                    <li>重视长期发展而非短期「上岸」心态</li>
                  </ul>
                </div>
                <div className="mt-3 text-[11px] text-slate-400">
                  * 本页面为品牌官网视觉与信息架构示意，可根据实际业务模块继续扩展。
                </div>
              </div>
            </div>
          </div>

          <footer className="border-t border-slate-100 dark:border-slate-800 pt-6 pb-8 text-xs">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-skyBlue to-deepNavy flex items-center justify-center text-white font-bold">
                    OE
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">OpenEdu</span>
                    <span className="text-[11px] text-slate-500">
                      Open Ivy. Open Offer.
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  OpenEdu 是面向常春藤及美国 TOP 名校的留学咨询品牌，提供规划、背景、申请与发展的一体化解决方案。
                </p>
              </div>

              <div className="flex gap-8 text-[11px]">
                <div>
                  <div className="font-semibold mb-2 text-slate-900 dark:text-slate-50">
                    快速链接
                  </div>
                  <div className="space-y-1 text-slate-500">
                    <div>服务介绍</div>
                    <div>成功案例</div>
                    <div>导师团队</div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex flex-col gap-2 md:items-end">
                <div className="font-semibold text-slate-900 dark:text-slate-50">
                  联系我们
                </div>
                <div>微信服务号 · 扫码预约顾问</div>
                <div>电话：+1 (000) 000-0000</div>
                <div>办公地址：USA · CA / NYC / Boston（示意）</div>
              </div>
            </div>
            <div className="mt-4 text-[10px] text-slate-400 flex flex-wrap justify-between gap-2">
              <span>© {new Date().getFullYear()} OpenEdu. All rights reserved.</span>
              <span>本页面为示意设计，可对接实际 CRM / 报名系统。</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default App;

