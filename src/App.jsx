import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Users,
  LayoutGrid,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Trophy,
  ChartSpline,
  MessageCircleQuestion,
  Menu,
  X,
  MapPin,
  Award,
  Briefcase,
  FileText,
  Shield,
  Check,
  Map,
  Microscope,
  Database,
  Send,
  Code,
  LineChart,
  UserCheck,
  LockKeyhole,
  ChevronDown,
  Target,
  Network,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";

const Logo = ({ variant = "light", size = "md" }) => {
  const isLight = variant === "light";
  const isSm = size === "sm";
  const primary = isLight ? "#1B2E4A" : "#fff";
  const secondary = isLight ? "#3D5A80" : "rgba(255,255,255,0.7)";
  const brandOpenClass = isLight ? "text-[#1B2E4A]" : "text-white";
  const brandEduClass = isLight ? "text-[#3D5A80]" : "text-white/70";
  const taglineClass = isLight ? "text-[#3D5A80]" : "text-white/50";

  const iconSize = isSm ? 32 : 44;
  const brandSize = isSm ? "text-xs" : "text-base";
  const taglineSize = isSm ? "text-[9px]" : "text-[10px]";

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className={isSm ? "mb-1" : "mb-1.5"}>
            <svg width={iconSize} height={iconSize} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="55" cy="55" r="48" stroke={primary} strokeWidth="3" fill="none" opacity="0.95" />
              <circle cx="55" cy="55" r="41" stroke={primary} strokeWidth="0.5" fill="none" opacity="0.2" />
              <polygon points="55,22 82,34 55,46 28,34" fill={primary} opacity="0.95" />
              <polygon points="55,46 75,37 75,54 55,63" fill={primary} opacity="0.55" />
              <polygon points="55,46 35,37 35,54 55,63" fill={primary} opacity="0.75" />
              <polygon points="55,46 75,37 55,28 35,37" fill={primary} opacity="0" />
              <line x1="82" y1="34" x2="82" y2="56" stroke={secondary} strokeWidth="1.5" opacity="0.9" />
              <circle cx="82" cy="59" r="3.5" fill={secondary} opacity="0.9" />
              <line x1="79" y1="59" x2="76" y2="67" stroke={secondary} strokeWidth="1" opacity="0.7" />
              <line x1="82" y1="62" x2="82" y2="70" stroke={secondary} strokeWidth="1" opacity="0.7" />
              <line x1="85" y1="59" x2="88" y2="67" stroke={secondary} strokeWidth="1" opacity="0.7" />
              <path d="M55 95 L55 72" stroke={primary} strokeWidth="1.5" opacity="0.35" strokeDasharray="3 3" />
              <polygon points="55,68 51,75 59,75" fill={primary} opacity="0.35" />
            </svg>
          </div>
          <div className={`flex items-baseline gap-px ${isSm ? "mb-0" : "mb-0.5"}`}>
            <span className={`font-cinzel ${brandSize} font-medium tracking-[0.2em] ${brandOpenClass}`}>OPEN</span>
            <span className={`font-cinzel ${brandSize} font-normal tracking-[0.2em] ${brandEduClass}`}>EDU</span>
          </div>
          <div className={`font-cormorant ${taglineSize} italic font-light tracking-widest ${taglineClass}`}>
            Open Ivy · Open Offer
          </div>
        </div>
      </div>
    </div>
  );
};

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

const ADMISSION_CASES = [
  {
    id: 1,
    student: "S 同学",
    background: "国内 211 · 计算机专业 · GPA 3.5 / 托福 100 / GRE 320",
    result: "哥伦比亚大学 · MS in Computer Science",
    tag: "藤校逆袭",
    highlight: "从「项目一般、缺少科研」到补齐两段高质量科研 + 一段远程实习，构建完整 CS 故事线。",
    year: "2024 Fall"
  },
  {
    id: 2,
    student: "L 同学",
    background: "国内双非 · 金融专业 · GPA 3.3 / 托福 103 / 无实习",
    result: "纽约大学 · MS in Finance",
    tag: "背景重塑",
    highlight:
      "通过定制的实习与竞赛组合，搭建「量化+金融科技」方向的差异化定位，提升申请说服力。",
    year: "2024 Fall"
  },
  {
    id: 3,
    student: "Z 同学",
    background: "美本 Top40 · 统计专业 · GPA 3.8 / 充足科研",
    result: "斯坦福大学 · Statistics (MS)",
    tag: "冲刺顶校",
    highlight:
      "由美国本土导师一对一打磨科研成果呈现方式，将论文与项目串联为清晰的学术发展路径。",
    year: "2023 Fall"
  }
];

const TUTORS = [
  {
    id: 1,
    name: "S导师",
    nameEn: "Sarah",
    title: "前常春藤盟校招生官",
    institution: "Ivy League University",
    tags: ["藤校背景", "前招生官", "文书大牛", "教育学博士"],
    categories: ["ivy", "admissions", "writing"],
    bio: "拥有10年藤校招生经验，深谙名校录取逻辑。曾参与审阅超过5000份申请材料，帮助200+学生进入Dream School。专精个人陈述打磨和面试辅导。",
    students: 187,
    successRate: 94,
    experience: 10,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    name: "M导师",
    nameEn: "Michael",
    title: "顶级科技公司资深工程师",
    institution: "Stanford University",
    tags: ["斯坦福校友", "CS专业专家", "大厂内推", "技术面试"],
    categories: ["ivy", "tech"],
    bio: "Stanford CS硕士，现任FAANG公司L6工程师。精通算法面试和系统设计，成功辅导120+学生拿到顶级offer。深度了解H-1B政策和OPT规划。",
    students: 145,
    successRate: 91,
    experience: 8,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 3,
    name: "W导师",
    nameEn: "William",
    title: "华尔街顶级投行执行董事",
    institution: "Wharton School",
    tags: ["沃顿商学院", "金融精英", "投行经验", "CFA持证"],
    categories: ["ivy", "finance"],
    bio: "Wharton MBA，华尔街顶级投行执行董事。专注金融职业规划和投行面试辅导，帮助90+学生进入顶级投行和私募基金。",
    students: 98,
    successRate: 89,
    experience: 12,
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    id: 4,
    name: "L导师",
    nameEn: "Lucy",
    title: "执业移民律师",
    institution: "Harvard Law School",
    tags: ["哈佛法学院", "签证专家", "H-1B律师", "绿卡规划"],
    categories: ["ivy", "visa"],
    bio: "哈佛法学博士，执业移民律师。专精H-1B、OPT、L-1等签证类型，成功处理500+疑难案件，帮助学生合法留美工作。",
    students: 234,
    successRate: 96,
    experience: 15,
    gradient: "from-emerald-400 to-teal-400"
  },
  {
    id: 5,
    name: "J导师",
    nameEn: "James",
    title: "MBB前咨询顾问",
    institution: "MIT Sloan",
    tags: ["MIT校友", "咨询精英", "Case面试", "商业分析"],
    categories: ["ivy", "consulting"],
    bio: "MIT Sloan MBA，前顶级咨询公司资深顾问。擅长Case Interview辅导和商业思维培养，辅导78名学生进入MBB咨询公司。",
    students: 89,
    successRate: 87,
    experience: 7,
    gradient: "from-amber-400 to-orange-400"
  },
  {
    id: 6,
    name: "K导师",
    nameEn: "Kevin",
    title: "顶级科技公司产品经理",
    institution: "UC Berkeley",
    tags: ["伯克利校友", "PM专家", "产品设计", "用户体验"],
    categories: ["tech"],
    bio: "UC Berkeley CS+MBA双学位，FAANG公司高级产品经理。深度理解PM职业路径，成功辅导65名学生转型产品岗位。",
    students: 72,
    successRate: 85,
    experience: 6,
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    id: 7,
    name: "M博士",
    nameEn: "Matthew",
    title: "顶尖医学院终身教授",
    institution: "Top Medical School",
    tags: ["医学专家", "公共卫生", "博士申请", "学术写作"],
    categories: ["ivy", "writing"],
    bio: "美国顶级医学院终身教授，指导过百名博士生。擅长医学类专业申请和学术论文写作指导。",
    students: 56,
    successRate: 93,
    experience: 18,
    gradient: "from-cyan-300 to-blue-300"
  },
  {
    id: 8,
    name: "R导师",
    nameEn: "Ryan",
    title: "大型科技公司数据科学家",
    institution: "Carnegie Mellon",
    tags: ["CMU校友", "数据科学", "机器学习", "A/B测试"],
    categories: ["tech"],
    bio: "CMU统计学博士，顶级科技公司数据科学团队负责人。专精数据分析面试和机器学习项目辅导，帮助80+学生进入科技公司。",
    students: 93,
    successRate: 88,
    experience: 9,
    gradient: "from-rose-400 to-pink-400"
  },
  {
    id: 9,
    name: "K2导师",
    nameEn: "Kate",
    title: "四大会计师事务所资深经理",
    institution: "Duke University",
    tags: ["杜克校友", "四大经验", "审计咨询", "CPA认证"],
    categories: ["consulting", "finance"],
    bio: "Duke会计硕士，Big 4咨询部门资深经理。精通四大面试流程和职业规划，成功推荐45名学生进入Big 4。",
    students: 67,
    successRate: 86,
    experience: 8,
    gradient: "from-orange-300 to-amber-300"
  },
  {
    id: 10,
    name: "W博士",
    nameEn: "Wendy",
    title: "常春藤盟校研究员",
    institution: "Ivy League University",
    tags: ["藤校博士", "科研指导", "文书润色", "PhD申请"],
    categories: ["ivy", "writing"],
    bio: "常春藤盟校计算机科学博士后研究员。深度理解PhD申请流程和学术写作技巧，指导42名学生获得全奖博士录取。",
    students: 48,
    successRate: 92,
    experience: 5,
    gradient: "from-indigo-400 to-purple-400"
  },
  {
    id: 11,
    name: "H导师",
    nameEn: "Helen",
    title: "华尔街投行副总裁",
    institution: "NYU Stern",
    tags: ["纽约大学", "投资银行", "估值建模", "并购交易"],
    categories: ["finance"],
    bio: "NYU Stern金融硕士，华尔街顶级投行并购部副总裁。专注投行技术面试和财务建模培训，帮助学生掌握核心金融技能。",
    students: 81,
    successRate: 87,
    experience: 11,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 12,
    name: "P导师",
    nameEn: "Peter",
    title: "顶级科技公司首席工程师",
    institution: "University of Washington",
    tags: ["华大校友", "云计算专家", "系统架构", "云平台认证"],
    categories: ["tech"],
    bio: "UW CS博士，FAANG公司云服务核心团队首席工程师。擅长系统设计面试和云计算项目指导，培养55名云工程师。",
    students: 64,
    successRate: 84,
    experience: 10,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 13,
    name: "G博士",
    nameEn: "Grace",
    title: "藤校教育学院副教授",
    institution: "Ivy League University",
    tags: ["藤校教授", "教育心理学", "申请策略", "职业规划"],
    categories: ["ivy", "admissions"],
    bio: "常春藤盟校教育学院副教授，研究美国高等教育20年。深度解析名校录取标准，提供个性化申请策略和背景提升方案。",
    students: 103,
    successRate: 91,
    experience: 14,
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    id: 14,
    name: "C导师",
    nameEn: "Claire",
    title: "知名科技公司产品总监",
    institution: "Stanford GSB",
    tags: ["斯坦福商学院", "产品战略", "增长黑客", "创业经验"],
    categories: ["tech", "consulting"],
    bio: "Stanford MBA，独角兽公司产品部门总监。曾创立两家科技创业公司，擅长产品思维培养和职业转型指导。",
    students: 71,
    successRate: 86,
    experience: 9,
    gradient: "from-emerald-400 to-teal-400"
  },
  {
    id: 15,
    name: "R2导师",
    nameEn: "Rachel",
    title: "MBB战略咨询经理",
    institution: "Northwestern Kellogg",
    tags: ["凯洛格商学院", "战略咨询", "市场分析", "商业策略"],
    categories: ["consulting"],
    bio: "Northwestern Kellogg MBA，顶级战略咨询公司项目经理。精通咨询行业求职和商业分析技能培养，成功率85%。",
    students: 58,
    successRate: 85,
    experience: 6,
    gradient: "from-amber-400 to-orange-400"
  },
  {
    id: 16,
    name: "D导师",
    nameEn: "David",
    title: "顶级科技公司高级设计师",
    institution: "Rhode Island School of Design",
    tags: ["RISD校友", "UX/UI设计", "产品设计", "交互设计"],
    categories: ["tech"],
    bio: "RISD工业设计硕士，FAANG公司产品设计团队高级设计师。帮助设计专业学生打造作品集，进入顶级科技公司。",
    students: 44,
    successRate: 82,
    experience: 7,
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    id: 17,
    name: "Z博士",
    nameEn: "Zoe",
    title: "藤校经济学访问学者",
    institution: "Ivy League University",
    tags: ["藤校背景", "经济学家", "量化分析", "研究方法"],
    categories: ["ivy", "finance"],
    bio: "常春藤盟校经济学博士，专注量化金融研究。指导学生进行学术研究和量化分析项目，培养严谨的经济学思维。",
    students: 39,
    successRate: 90,
    experience: 8,
    gradient: "from-cyan-300 to-blue-300"
  },
  {
    id: 18,
    name: "A导师",
    nameEn: "Alex",
    title: "企业级SaaS解决方案架构师",
    institution: "Georgia Tech",
    tags: ["佐治亚理工", "SaaS专家", "企业软件", "云平台"],
    categories: ["tech"],
    bio: "Georgia Tech CS硕士，顶级SaaS公司认证架构师。擅长企业软件开发和SaaS产品设计，帮助学生进入企业软件领域。",
    students: 52,
    successRate: 83,
    experience: 8,
    gradient: "from-rose-400 to-pink-400"
  },
  {
    id: 19,
    name: "L2导师",
    nameEn: "Linda",
    title: "四大税务合伙人",
    institution: "USC Marshall",
    tags: ["南加大校友", "税务专家", "四大合伙人", "国际税法"],
    categories: ["finance", "consulting"],
    bio: "USC会计硕士，Big 4税务部门合伙人。深度了解美国税务体系和四大职业路径，指导学生进入专业服务行业。",
    students: 76,
    successRate: 88,
    experience: 16,
    gradient: "from-orange-300 to-amber-300"
  },
  {
    id: 20,
    name: "T导师",
    nameEn: "Thomas",
    title: "知名招聘平台人才主管",
    institution: "Cornell University",
    tags: ["康奈尔校友", "HR专家", "招聘策略", "职业发展"],
    categories: ["ivy", "consulting"],
    bio: "Cornell人力资源管理硕士，知名招聘平台企业招聘负责人。了解企业招聘内幕和简历优化技巧，帮助学生提升求职竞争力。",
    students: 95,
    successRate: 86,
    experience: 10,
    gradient: "from-indigo-400 to-purple-400"
  }
];

const FILTER_OPTIONS = [
  { key: "all", label: "全部导师", icon: Users },
  { key: "ivy", label: "藤校背景", icon: Award },
  { key: "admissions", label: "前招生官", icon: GraduationCap },
  { key: "tech", label: "科技行业", icon: Briefcase },
  { key: "finance", label: "金融行业", icon: ChartSpline },
  { key: "consulting", label: "咨询行业", icon: BriefcaseBusiness },
  { key: "writing", label: "文书专家", icon: FileText },
  { key: "visa", label: "签证专家", icon: Shield }
];

const TIMELINE_DATA = {
  high1: {
    title: "高一学生 - 留学申请规划",
    subtitle: "现在开始准备，你将拥有充足的时间打造完美申请",
    years: [
      {
        year: "高一",
        description: "夯实基础，探索兴趣",
        months: [
          {
            name: "9-10月",
            priority: "high",
            tasks: [
              { title: "适应新环境", desc: "保持GPA 3.8+，建立良好学习习惯" },
              { title: "探索课外活动", desc: "尝试3-4个不同领域的活动或社团" },
              { title: "标化考试规划", desc: "了解SAT/ACT考试要求，制定学习计划" }
            ]
          },
          {
            name: "11-12月",
            priority: "medium",
            tasks: [
              { title: "期中考试冲刺", desc: "确保各科成绩优异" },
              { title: "寒假规划", desc: "报名托福基础课程或参加学术营" },
              { title: "阅读拓展", desc: "建立英文阅读习惯，每月2-3本" }
            ]
          },
          {
            name: "1-2月",
            priority: "medium",
            tasks: [
              { title: "托福学习", desc: "参加托福培训，目标首考80+" },
              { title: "学术探索", desc: "参加冬令营或在线课程" },
              { title: "活动深化", desc: "在1-2个活动中担任更重要的角色" }
            ]
          },
          {
            name: "3-5月",
            priority: "high",
            tasks: [
              { title: "第一次托福考试", desc: "争取80-90分的基础分数" },
              { title: "AP课程选择", desc: "与counselor讨论高二AP课程" },
              { title: "暑期规划启动", desc: "申请summer school或研究项目" }
            ]
          },
          {
            name: "6-8月",
            priority: "high",
            tasks: [
              { title: "暑期项目", desc: "参加summer school或学术研究项目" },
              { title: "托福提升", desc: "二次考试目标95+" },
              { title: "领导力培养", desc: "在活动中争取leadership position" }
            ]
          }
        ]
      }
    ]
  },
  high2: {
    title: "高二学生 - 留学申请规划",
    subtitle: "关键时期，全力冲刺标化和活动",
    years: [
      {
        year: "高二",
        description: "标化冲刺，活动深化",
        months: [
          {
            name: "9-10月",
            priority: "high",
            tasks: [
              { title: "GPA冲刺", desc: "保持GPA 3.9+，尤其是核心课程" },
              { title: "SAT/ACT首考", desc: "目标SAT 1450+或ACT 32+" },
              { title: "活动领导力", desc: "在主要活动中担任核心leadership" },
              { title: "推荐人建立", desc: "与2-3位老师建立深厚关系" }
            ]
          },
          {
            name: "11-12月",
            priority: "high",
            tasks: [
              { title: "标化刷分", desc: "SAT目标1520+或ACT 34+" },
              { title: "AP课程备考", desc: "准备5月的3-5门AP考试" },
              { title: "冬季活动", desc: "参加学术竞赛或研究项目" },
              { title: "初步选校", desc: "确定25所左右目标院校" }
            ]
          },
          {
            name: "1-2月",
            priority: "high",
            tasks: [
              { title: "标化最后冲刺", desc: "3月SAT或4月ACT考试准备" },
              { title: "暑期规划", desc: "申请顶级summer school或科研项目" },
              { title: "文书素材", desc: "开始收集personal story和经历" }
            ]
          },
          {
            name: "3-5月",
            priority: "high",
            tasks: [
              { title: "标化考试", desc: "完成最后一次SAT/ACT，达到目标分数" },
              { title: "AP考试", desc: "冲刺5月AP考试，目标4-5分" },
              { title: "选校精细化", desc: "将list缩减到15-20所" },
              { title: "文书brainstorm", desc: "与顾问讨论Common App主文书方向" }
            ]
          },
          {
            name: "6-8月",
            priority: "high",
            tasks: [
              { title: "暑期项目", desc: "参加顶级summer program或深度研究" },
              { title: "文书初稿", desc: "完成Common App主文书和活动列表" },
              { title: "推荐信", desc: "与推荐人沟通，提供brag sheet" },
              { title: "早申准备", desc: "确定ED/EA学校，准备supplemental essays" }
            ]
          }
        ]
      }
    ]
  },
  high3: {
    title: "高三学生 - 留学申请规划",
    subtitle: "申请季已至，全力以赴！",
    years: [
      {
        year: "高三上",
        description: "申请材料冲刺",
        months: [
          {
            name: "9月",
            priority: "high",
            tasks: [
              { title: "标化最后机会", desc: "如分数不理想，10月SAT/ACT是最后机会" },
              { title: "Common App开通", desc: "完成基本信息和活动列表填写" },
              { title: "主文书定稿", desc: "与顾问反复打磨personal essay" },
              { title: "确定早申学校", desc: "最迟9月底确定ED/EA学校" }
            ]
          },
          {
            name: "10月",
            priority: "high",
            tasks: [
              { title: "早申文书完成", desc: "完成所有ED/EA supplemental essays" },
              { title: "推荐信跟进", desc: "确保推荐人在系统中提交" },
              { title: "成绩单递送", desc: "联系counselor发送官方成绩单" },
              { title: "11月1日前提交", desc: "确保所有早申材料按时提交" }
            ]
          },
          {
            name: "11月",
            priority: "high",
            tasks: [
              { title: "RD选校", desc: "根据早申情况调整RD学校列表" },
              { title: "RD文书开始", desc: "着手准备常规申请文书" },
              { title: "UC系统", desc: "11月30日前提交UC申请" },
              { title: "财务准备", desc: "准备CSS Profile等财务文件" }
            ]
          },
          {
            name: "12月",
            priority: "high",
            tasks: [
              { title: "早申结果", desc: "12月中旬关注ED/EA结果" },
              { title: "RD文书定稿", desc: "完成所有常规申请文书" },
              { title: "策略调整", desc: "根据早申结果调整RD策略" },
              { title: "期末成绩", desc: "保持GPA，准备Mid-year report" }
            ]
          }
        ]
      }
    ]
  },
  college3: {
    title: "大三学生 - 研究生/就业规划",
    subtitle: "申研or就业？现在是决定的关键时刻",
    years: [
      {
        year: "大三",
        description: "明确方向，全力准备",
        months: [
          {
            name: "9-10月",
            priority: "high",
            tasks: [
              { title: "方向确定", desc: "确定申研还是就业，选择目标项目" },
              { title: "GRE/GMAT备考", desc: "开始标化考试准备" },
              { title: "GPA提升", desc: "重点提升专业课GPA至3.7+" },
              { title: "推荐人选择", desc: "与2-3位教授建立良好关系" }
            ]
          },
          {
            name: "11-12月",
            priority: "high",
            tasks: [
              { title: "GRE/GMAT首考", desc: "目标GRE 325+或GMAT 700+" },
              { title: "科研/实习", desc: "参与研究项目或相关实习" },
              { title: "寒假规划", desc: "安排科研或实习项目" },
              { title: "初步选校", desc: "research 30-40所目标项目" }
            ]
          },
          {
            name: "1-2月",
            priority: "medium",
            tasks: [
              { title: "寒假科研/实习", desc: "深度参与项目，产出成果" },
              { title: "标化刷分", desc: "如需要，准备二次GRE/GMAT" },
              { title: "文书素材", desc: "整理经历，准备personal statement素材" }
            ]
          },
          {
            name: "3-5月",
            priority: "high",
            tasks: [
              { title: "GRE/GMAT定稿", desc: "达到目标分数" },
              { title: "托福刷分", desc: "确保托福100+（理工科）或105+（商科）" },
              { title: "暑期安排", desc: "争取顶级暑研或实习机会" },
              { title: "推荐人沟通", desc: "告知推荐人申请计划" }
            ]
          },
          {
            name: "6-8月",
            priority: "high",
            tasks: [
              { title: "暑期科研/实习", desc: "参与高质量项目，争取推荐信" },
              { title: "文书初稿", desc: "完成personal statement初稿" },
              { title: "选校精细化", desc: "确定15-20所目标项目" },
              { title: "网申准备", desc: "准备简历、成绩单等材料" }
            ]
          }
        ]
      }
    ]
  },
  college1: {
    title: "大一学生 - 未来规划",
    subtitle: "打好基础，探索方向",
    years: [
      {
        year: "大一",
        description: "适应大学，寻找方向",
        months: [
          {
            name: "9-10月",
            priority: "high",
            tasks: [
              { title: "适应大学生活", desc: "建立良好的学习习惯，保持GPA 3.5+" },
              { title: "探索专业方向", desc: "尝试不同课程，了解各专业特点" },
              { title: "参加社团活动", desc: "加入2-3个感兴趣的社团或组织" },
              { title: "语言准备", desc: "如计划留学，开始托福基础学习" }
            ]
          },
          {
            name: "11-12月",
            priority: "medium",
            tasks: [
              { title: "期中考试", desc: "确保各科成绩优异，维持GPA" },
              { title: "活动深化", desc: "在1-2个活动中担任更重要的角色" },
              { title: "寒假规划", desc: "考虑参加学术营、实习或语言培训" },
              { title: "目标设定", desc: "思考未来是申研、就业还是转专业" }
            ]
          },
          {
            name: "1-2月",
            priority: "medium",
            tasks: [
              { title: "寒假项目", desc: "参加学术营、实习或语言培训" },
              { title: "专业探索", desc: "深入了解目标专业的课程和就业前景" },
              { title: "托福学习", desc: "如计划留学，开始系统学习托福" },
              { title: "科研入门", desc: "联系教授，了解科研机会" }
            ]
          },
          {
            name: "3-5月",
            priority: "high",
            tasks: [
              { title: "确定方向", desc: "明确未来是申研、就业还是转专业" },
              { title: "GPA提升", desc: "重点提升专业课成绩，目标3.6+" },
              { title: "科研/实习", desc: "联系教授或企业，争取科研/实习机会" },
              { title: "暑期规划", desc: "申请summer research或实习项目" }
            ]
          },
          {
            name: "6-8月",
            priority: "high",
            tasks: [
              { title: "暑期项目", desc: "参与summer research或实习项目" },
              { title: "托福首考", desc: "如计划留学，完成托福首考，目标80+" },
              { title: "活动积累", desc: "在活动中争取leadership position" },
              { title: "推荐人建立", desc: "与教授或导师建立良好关系" }
            ]
          }
        ]
      }
    ]
  },
  college2: {
    title: "大二学生 - 深化准备",
    subtitle: "提升背景，积累经验",
    years: [
      {
        year: "大二",
        description: "深化专业，积累背景",
        months: [
          {
            name: "9-10月",
            priority: "high",
            tasks: [
              { title: "GPA提升", desc: "专业课GPA达到3.7+，保持优秀成绩" },
              { title: "科研/实习", desc: "参与1-2个研究项目或相关实习" },
              { title: "标化准备", desc: "开始GRE/托福系统学习" },
              { title: "活动领导", desc: "在主要活动中担任leadership职务" }
            ]
          },
          {
            name: "11-12月",
            priority: "high",
            tasks: [
              { title: "期中考试", desc: "确保各科成绩优异" },
              { title: "标化学习", desc: "系统学习GRE/GMAT或托福" },
              { title: "推荐人建立", desc: "与潜在推荐人（教授/导师）建立关系" },
              { title: "寒假规划", desc: "安排科研或实习项目" }
            ]
          },
          {
            name: "1-2月",
            priority: "medium",
            tasks: [
              { title: "寒假科研/实习", desc: "深度参与项目，产出成果" },
              { title: "标化首考准备", desc: "强化训练，准备首次考试" },
              { title: "活动深化", desc: "在核心活动中承担更多责任" },
              { title: "暑期规划", desc: "申请高质量暑研或实习机会" }
            ]
          },
          {
            name: "3-5月",
            priority: "high",
            tasks: [
              { title: "标化首考", desc: "完成托福或GRE首考，目标托福100+/GRE 320+" },
              { title: "GPA维持", desc: "继续维持优秀GPA，尤其是专业课" },
              { title: "科研产出", desc: "争取在项目中产出论文或成果" },
              { title: "推荐人沟通", desc: "与推荐人保持良好沟通" }
            ]
          },
          {
            name: "6-8月",
            priority: "high",
            tasks: [
              { title: "暑期项目", desc: "参与高质量暑研或实习，争取推荐信" },
              { title: "标化刷分", desc: "如需要，准备二次考试提升分数" },
              { title: "活动总结", desc: "整理活动经历，准备申请材料" },
              { title: "选校初步", desc: "开始research目标院校和专业" }
            ]
          }
        ]
      }
    ]
  },
  college4: {
    title: "大四学生 - 申请/求职冲刺",
    subtitle: "最后冲刺，达成目标",
    years: [
      {
        year: "大四上",
        description: "申请季或求职季",
        months: [
          {
            name: "9月",
            priority: "high",
            tasks: [
              { title: "申请准备", desc: "如申研，完成所有文书和材料准备" },
              { title: "或秋招开始", desc: "如就业，参加秋季校园招聘" },
              { title: "推荐信确认", desc: "确保推荐人按时提交推荐信" },
              { title: "成绩单准备", desc: "准备官方成绩单和证明材料" }
            ]
          },
          {
            name: "10月",
            priority: "high",
            tasks: [
              { title: "申请提交", desc: "如申研，提交早截止项目（10-11月）" },
              { title: "或面试准备", desc: "如就业，准备技术面试和case面试" },
              { title: "网申填写", desc: "完成所有学校或公司的网申系统" },
              { title: "材料递送", desc: "发送成绩单、推荐信等材料" }
            ]
          },
          {
            name: "11-12月",
            priority: "high",
            tasks: [
              { title: "申请提交", desc: "完成所有研究生申请（12月-1月15日）" },
              { title: "或面试进行", desc: "如就业，参加各类面试" },
              { title: "成绩更新", desc: "提交最新成绩单和补充材料" },
              { title: "期末准备", desc: "保持GPA，完成毕业要求" }
            ]
          }
        ]
      },
      {
        year: "大四下",
        description: "等待结果，做好选择",
        months: [
          {
            name: "1-2月",
            priority: "medium",
            tasks: [
              { title: "等待录取", desc: "如申研，等待录取通知" },
              { title: "或offer选择", desc: "如就业，评估和选择offer" },
              { title: "补充材料", desc: "如有更新，及时提交补充材料" },
              { title: "面试准备", desc: "准备可能的面试或补充材料" }
            ]
          },
          {
            name: "3-4月",
            priority: "high",
            tasks: [
              { title: "录取决定", desc: "如申研，4月15日前确定入读项目" },
              { title: "或签约入职", desc: "如就业，完成签约和入职准备" },
              { title: "签证准备", desc: "如留学，准备F-1签证材料" },
              { title: "毕业准备", desc: "完成毕业论文和毕业要求" }
            ]
          },
          {
            name: "5-6月",
            priority: "medium",
            tasks: [
              { title: "毕业典礼", desc: "完成学业，参加毕业典礼" },
              { title: "签证办理", desc: "如留学，完成F-1签证面签" },
              { title: "行前准备", desc: "如留学，体检、订机票、准备行李" },
              { title: "或入职准备", desc: "如就业，准备入职相关事宜" }
            ]
          }
        ]
      }
    ]
  },
  graduate: {
    title: "研究生 - 职业发展",
    subtitle: "H-1B规划与职业发展",
    years: [
      {
        year: "研一",
        description: "学业与职业双重准备",
        months: [
          {
            name: "9-10月",
            priority: "high",
            tasks: [
              { title: "课程选择", desc: "选择有助于就业的课程，保持GPA 3.5+" },
              { title: "Network建立", desc: "参加career fair和networking event" },
              { title: "简历准备", desc: "打造美式简历和LinkedIn profile" },
              { title: "CPT了解", desc: "了解CPT政策，为实习做准备" }
            ]
          },
          {
            name: "11-12月",
            priority: "high",
            tasks: [
              { title: "实习申请", desc: "申请CPT暑期实习，准备简历和cover letter" },
              { title: "面试准备", desc: "刷题准备技术面试或case面试" },
              { title: "Network深化", desc: "与行业人士建立联系，获取内推机会" },
              { title: "OPT了解", desc: "了解OPT申请流程和H-1B政策" }
            ]
          },
          {
            name: "1-2月",
            priority: "high",
            tasks: [
              { title: "实习面试", desc: "参加各类实习面试" },
              { title: "技能提升", desc: "针对目标岗位提升相关技能" },
              { title: "推荐人建立", desc: "与教授和行业导师建立关系" },
              { title: "寒假项目", desc: "如有机会，参与短期项目或培训" }
            ]
          },
          {
            name: "3-5月",
            priority: "high",
            tasks: [
              { title: "实习确认", desc: "确认暑期实习offer" },
              { title: "CPT申请", desc: "完成CPT申请流程" },
              { title: "面试强化", desc: "继续刷题和模拟面试" },
              { title: "Network维护", desc: "保持与行业人士的联系" }
            ]
          },
          {
            name: "6-8月",
            priority: "high",
            tasks: [
              { title: "暑期实习", desc: "参与CPT暑期实习，争取return offer" },
              { title: "表现优异", desc: "在实习中表现突出，建立良好印象" },
              { title: "Network扩展", desc: "在实习中扩展人脉网络" },
              { title: "OPT准备", desc: "了解OPT申请时间线和材料准备" }
            ]
          }
        ]
      },
      {
        year: "研二",
        description: "求职冲刺与OPT申请",
        months: [
          {
            name: "9-10月",
            priority: "high",
            tasks: [
              { title: "秋招开始", desc: "参加秋季校园招聘和career fair" },
              { title: "简历更新", desc: "更新简历，加入实习经历" },
              { title: "面试准备", desc: "准备技术面试、行为面试和case面试" },
              { title: "OPT申请", desc: "开始OPT申请流程（毕业前90天）" }
            ]
          },
          {
            name: "11-12月",
            priority: "high",
            tasks: [
              { title: "面试进行", desc: "参加各类面试，争取offer" },
              { title: "OPT材料", desc: "准备OPT申请材料（I-20、照片等）" },
              { title: "Network利用", desc: "利用人脉网络获取内推机会" },
              { title: "offer评估", desc: "评估收到的offer，考虑H-1B sponsor" }
            ]
          },
          {
            name: "1-2月",
            priority: "high",
            tasks: [
              { title: "OPT提交", desc: "提交OPT申请到USCIS" },
              { title: "offer选择", desc: "选择最适合的offer，考虑H-1B政策" },
              { title: "签约准备", desc: "准备签约和入职相关事宜" },
              { title: "H-1B了解", desc: "了解H-1B抽签流程和时间线" }
            ]
          },
          {
            name: "3-5月",
            priority: "high",
            tasks: [
              { title: "H-1B抽签", desc: "如符合条件，参与H-1B抽签（4月）" },
              { title: "OPT获批", desc: "等待OPT获批，准备入职" },
              { title: "毕业准备", desc: "完成毕业论文和毕业要求" },
              { title: "入职准备", desc: "准备入职相关材料和手续" }
            ]
          },
          {
            name: "6-8月",
            priority: "medium",
            tasks: [
              { title: "毕业典礼", desc: "完成学业，参加毕业典礼" },
              { title: "OPT开始", desc: "OPT生效，开始工作" },
              { title: "H-1B结果", desc: "如参与抽签，关注H-1B结果" },
              { title: "长期规划", desc: "规划长期职业发展和身份问题" }
            ]
          }
        ]
      }
    ]
  }
};

const GRADE_OPTIONS = [
  { key: "high1", label: "高一" },
  { key: "high2", label: "高二" },
  { key: "high3", label: "高三" },
  { key: "college1", label: "大一" },
  { key: "college2", label: "大二" },
  { key: "college3", label: "大三" },
  { key: "college4", label: "大四" },
  { key: "graduate", label: "研究生" }
];

const SECTIONS = [
  { id: "hero", label: "首页" },
  { id: "services", label: "留学服务" },
  { id: "tutor-map", label: "导师团队" },
  { id: "timeline", label: "申请时间轴" },
  { id: "assessment", label: "藤校匹配度" },
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

const ConsultationModal = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch("https://formspree.io/f/mykprlnk", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Formspree 提交失败：", error);
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-5 md:p-6 bg-slate-900/60 backdrop-blur-sm">
      {/* 表单主体：自适应不同尺寸，整体略缩小 */}
      <div className="relative w-full max-w-[92vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[88vh] sm:max-h-[90vh] bg-white rounded-[1.75rem] md:rounded-[2rem] shadow-2xl flex flex-col overflow-hidden">
        <div className="h-1.5 w-full bg-skyBlue shrink-0" />

        <button
          onClick={onClose}
          className="absolute top-6 right-8 z-20 text-slate-300 hover:text-slate-600 transition-colors"
          aria-label="关闭咨询表单"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 custom-scrollbar">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-3 tracking-tight">
                  在线咨询 · 预约初步规划
                </h2>
                <p className="text-slate-500 text-sm font-light">
                  留下你的信息，OpenEdu 专家团队将在{" "}
                  <span className="text-skyBlue font-medium">24 小时内</span> 与你取得联系。
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    学生姓名 / Student Name
                  </label>
                  <input
                    required
                    name="name"
                    placeholder="例如：张同学"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all text-slate-700"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                      当前年级
                    </label>
                    <input
                      name="grade"
                      placeholder="如：高二 / 大一"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                      目标阶段
                    </label>
                    <select
                      name="target"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all appearance-none"
                    >
                      <option>美国高中</option>
                      <option>美国本科</option>
                      <option>美国转学</option>
                      <option>美国硕博</option>
                      <option>暂不确定</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    联系方式 (微信 / 手机 / 邮箱)
                  </label>
                  <input
                    required
                    name="contact"
                    placeholder="我们将通过此方式与您联系"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    背景与需求 (选填)
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="例如：目前 GPA / 已有标化成绩 / 目标专业和学校等"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all resize-none"
                  />
                </div>
              </div>

              <div className="pt-4 pb-2">
                <button
                  type="submit"
                  className="w-full py-5 bg-skyBlue hover:bg-sky-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-skyBlue/20 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>提交咨询请求</span>
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-6 italic">
                  信息仅用于 OpenEdu 顾问与您沟通，我们将严格保护您的个人隐私。
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 md:p-12 text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="font-heading text-lg md:text-xl font-semibold mb-2 text-slate-900">
              提交成功，我们已收到你的需求
            </div>
            <p className="text-xs md:text-sm text-slate-500 mb-2">
              顾问老师会在 24 小时内与您取得联系，请保持微信或电话畅通。
            </p>
            <p className="text-[11px] text-slate-400">
              如需加急，可直接通过页面底部联系方式添加微信并备注「OpenEdu 咨询」。
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const { isDark, toggle } = useDarkMode();
  const [activeTab, setActiveTab] = useState("planning");
  const activeSectionId = useActiveSection();
  const [isConsultOpen, setConsultOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isToolsOpen, setToolsOpen] = useState(false);
  const [caseIndex, setCaseIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [assessmentResults, setAssessmentResults] = useState(null);
  const [gpaValue, setGpaValue] = useState(3.5);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [showAllTutors, setShowAllTutors] = useState(false);

  // Filter tutors based on active filter
  const filteredTutors =
    activeFilter === "all"
      ? TUTORS
      : TUTORS.filter((tutor) => tutor.categories.includes(activeFilter));

  // Reset showAllTutors when filter changes
  useEffect(() => {
    setShowAllTutors(false);
  }, [activeFilter]);

  // Display tutors: show first 6 initially, or all if expanded
  const displayedTutors = showAllTutors ? filteredTutors : filteredTutors.slice(0, 6);
  const hasMoreTutors = filteredTutors.length > 6;

  // Get timeline data for selected grade
  const timelineData = selectedGrade ? TIMELINE_DATA[selectedGrade] : null;

  // Calculate assessment score
  const calculateAssessment = (formData) => {
    const gpa = parseFloat(formData.gpa || gpaValue);
    const language = formData.language;
    const sat = formData.sat;
    const activities = formData.activities;
    const major = formData.major;

    // Calculate scores for each category
    let academicScore = Math.round((gpa / 4.0) * 100);

    let testScore = 0;
    if (language === "110") testScore += 50;
    else if (language === "100") testScore += 40;
    else if (language === "90") testScore += 30;

    if (sat === "1500") testScore += 50;
    else if (sat === "1400") testScore += 35;
    else if (sat === "1300") testScore += 25;
    else if (sat === "none") testScore += 15;

    testScore = Math.min(testScore, 100);

    let activityScore = 0;
    if (activities === "high") activityScore = 90;
    else if (activities === "medium") activityScore = 70;
    else if (activities === "low") activityScore = 50;

    // Major competitiveness
    let majorScore = 75;
    if (major === "cs") majorScore = 65;
    else if (major === "business") majorScore = 70;
    else if (major === "humanities") majorScore = 85;

    // Calculate final score
    const finalScore = Math.round(
      academicScore * 0.35 +
        testScore * 0.35 +
        activityScore * 0.2 +
        majorScore * 0.1
    );

    let title, description;
    if (finalScore >= 85) {
      title = "藤校强力候选人";
      description =
        "恭喜！你的综合背景非常优秀，具备冲击顶尖藤校的实力。建议针对性地提升软实力，冲击哈佛、耶鲁等顶尖名校。";
    } else if (finalScore >= 70) {
      title = "藤校潜力候选人";
      description =
        "你已具备较好的申请基础，通过专业规划和背景提升，有很大机会进入藤校。建议重点提升标化成绩和课外活动深度。";
    } else if (finalScore >= 55) {
      title = "需要全面提升";
      description =
        "你的基础尚可，但距离藤校还有一定差距。建议从GPA、标化、活动等多方面系统提升，也可考虑其他优质美国名校。";
    } else {
      title = "建议重新规划";
      description =
        "目前的背景与藤校要求有较大差距。建议先设定阶段性目标，系统提升各项指标，或考虑更匹配的院校选择。";
    }

    return {
      finalScore,
      academicScore,
      testScore,
      activityScore,
      majorScore,
      title,
      description
    };
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-50">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="section-wrapper h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0" aria-label="OpenEdu">
              <Logo variant="light" size="sm" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
            <button
              onClick={() => scrollTo("hero")}
              className="nav-link text-[15px] font-medium text-slate-600 whitespace-nowrap leading-none inline-flex items-center"
            >
              首页
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="nav-link text-[15px] font-medium text-slate-600 whitespace-nowrap leading-none inline-flex items-center"
            >
              留学服务
            </button>
            <button
              onClick={() => scrollTo("tutor-map")}
              className="nav-link text-[15px] font-medium text-slate-600 whitespace-nowrap leading-none inline-flex items-center"
            >
              导师团队
            </button>
            {/* 申请工具：下拉合并 */}
            <div
              className="relative flex items-center whitespace-nowrap"
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                onClick={() => setToolsOpen((v) => !v)}
                className="nav-link text-[15px] font-medium text-slate-600 whitespace-nowrap leading-none inline-flex items-center"
                aria-haspopup="menu"
                aria-expanded={isToolsOpen}
              >
                申请工具
              </button>
              {isToolsOpen && (
                <div
                  className="absolute left-0 top-full mt-3 w-44 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-xl shadow-deepNavy/10 p-2 flex flex-col gap-1"
                  role="menu"
                >
                  <button
                    onClick={() => {
                      scrollTo("timeline");
                      setToolsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    role="menuitem"
                  >
                    申请时间轴
                  </button>
                  <button
                    onClick={() => {
                      scrollTo("assessment");
                      setToolsOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    role="menuitem"
                  >
                    藤校匹配度
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("products")}
              className="nav-link text-[15px] font-medium text-slate-600 whitespace-nowrap leading-none inline-flex items-center"
            >
              明星产品
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="nav-link text-[15px] font-medium text-slate-600 whitespace-nowrap leading-none inline-flex items-center"
            >
              关于我们
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden btn-ghost rounded-xl w-9 h-9 p-0 flex items-center justify-center border border-slate-200 dark:border-slate-700"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label="打开导航菜单"
              title="菜单"
            >
              {isMobileNavOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
            <button
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-skyBlue text-white rounded-full font-bold text-sm shadow-lg shadow-skyBlue/20 hover:bg-sky-600 hover:scale-105 transition-all"
              onClick={() => {
                setConsultOpen(true);
                setMobileNavOpen(false);
              }}
            >
              <MessageCircleQuestion className="w-4 h-4" />
              在线咨询
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav panel */}
      {isMobileNavOpen && (
        <div className="md:hidden border-b border-slate-100/80 dark:border-slate-800/60 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
          <div className="section-wrapper py-3 flex flex-col gap-2 text-sm">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  scrollTo(sec.id);
                  setMobileNavOpen(false);
                }}
                className="flex justify-between items-center py-2 text-slate-700 dark:text-slate-100"
              >
                <span>{sec.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ))}
            <button
              onClick={() => {
                setConsultOpen(true);
                setMobileNavOpen(false);
              }}
              className="mt-1 btn-primary justify-center text-xs"
            >
              <MessageCircleQuestion className="w-3.5 h-3.5 mr-1.5" />
              在线咨询
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="pt-20">
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
        >
          {/* 背景层 */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80&w=2000"
              alt="New York Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
          </div>

          {/* 文字+内容层 */}
          <div className="relative z-10 w-full max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-heading font-semibold text-sky-300 text-xs md:text-sm uppercase tracking-[0.6em] mb-8 opacity-90 drop-shadow-lg"
            >
              O P E N E D U
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mb-8"
            >
              <h1 className="flex flex-col gap-1.5">
                <span className="text-lg md:text-3xl font-light text-sky-100/80 tracking-[0.2em]">
                  成立于美国本土的
                </span>
                <span className="font-heading text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
                  名校咨询团队
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-slate-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 font-light px-6"
            >
              专注常春藤及美国 TOP 名校，由美国本土导师团队提供真正
              <br className="hidden md:block" />
              <span className="text-sky-300 font-normal">
                「一站式 · 定制化 · 贴心服务」
              </span>
              ，让你的每一步申请决策都更有底气。
            </motion.div>

            {/* CTA 按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24"
            >
              <button 
                onClick={() => setConsultOpen(true)}
                className="group relative px-10 py-4 bg-skyBlue hover:bg-sky-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-sky-500/40 inline-flex items-center"
              >
                预约 1v1 规划评估
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="px-10 py-4 border border-white/30 hover:bg-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm"
              >
                查看一站式服务
              </button>
            </motion.div>

            {/* 底部特性：更轻盈的玻璃拟态 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto border-t border-white/10 pt-12"
            >
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-skyBlue/20 transition-colors">
                  <LayoutGrid className="text-sky-300 w-4 h-4" />
                </div>
                <span className="text-white/70 text-sm font-light tracking-widest">
                  一站式
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-skyBlue/20 transition-colors">
                  <Users className="text-sky-300 w-4 h-4" />
                </div>
                <span className="text-white/70 text-sm font-light tracking-widest">
                  定制化
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-skyBlue/20 transition-colors">
                  <Sparkles className="text-sky-300 w-4 h-4" />
                </div>
                <span className="text-white/70 text-sm font-light tracking-widest">
                  贴心服务
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Grid */}
        <section
          id="services"
          className="py-24 bg-[#F8FAFC]"
        >
          <div className="section-wrapper relative">
            {/* 背景装饰光晕：增加氛围感，减少死白 */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-100/50 rounded-full blur-[120px] pointer-events-none" />

            {/* 头部文案：增强层级感 */}
            <div className="max-w-3xl mb-10 md:mb-16 relative z-10">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
                一站式留学服务 ·{" "}
                <span className="text-[#1E40AF] tracking-wide font-medium">从规划到落地</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-500/90 leading-relaxed font-light">
                我们将复杂的流程拆解为{" "}
                <span className="text-slate-700 font-medium">4 大核心模块</span>
                ，通过专业团队的火力协同，为你提供全链路的深度支持。
              </p>
            </div>

            {/* 交互式选项卡容器 */}
            <div className="relative z-10 bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
              {/* 1. 导航切换：胶囊设计 */}
              <div className="flex flex-wrap gap-4 mb-10 md:mb-14">
                {SERVICE_TABS.map((tab) => {
                  const active = tab.key === activeTab;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all border ${
                        active
                          ? "bg-skyBlue text-white font-bold shadow-lg shadow-skyBlue/30 border-skyBlue hover:scale-105"
                          : "bg-white text-slate-500 font-medium border border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* 2. 内容网格：更有质感的卡片 */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {(SERVICE_TABS.find((t) => t.key === activeTab)?.items || []).map(
                  (item, idx) => {
                    const meta = [
                      {
                        title: "学校排名解析",
                        desc: "基于最新 US News 及排位数据深度匹配",
                        Icon: Map
                      },
                      {
                        title: "目标专业深度解析",
                        desc: "解读行业趋势、就业前景及选课逻辑",
                        Icon: Microscope
                      },
                      {
                        title: "海量成功案例数据",
                        desc: "700+ 真实案例沉淀，复刻成功路径",
                        Icon: Database
                      },
                      {
                        title: "多方案比选与路径规划",
                        desc: "量身定制 A/B 计划，确保录取稳拿",
                        Icon: Send
                      }
                    ][idx % 4];

                    return (
                      <div
                        key={`${activeTab}-${item}`}
                        className="group flex items-center p-6 md:p-8 rounded-3xl bg-white border border-slate-50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,122,255,0.08)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-sky-50/80 flex items-center justify-center mr-5 md:mr-6 transition-all duration-500 group-hover:bg-skyBlue">
                          <meta.Icon className="w-6 h-6 md:w-7 md:h-7 text-skyBlue transition-colors duration-500 group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading text-lg md:text-xl font-bold text-slate-800 mb-1 tracking-tight group-hover:text-skyBlue transition-colors">
                            {meta.title}
                          </h4>
                          <p className="text-[13px] md:text-[15px] text-slate-400 font-light leading-relaxed">
                            {meta.desc}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-skyBlue/70 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                      </div>
                    );
                  }
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="stats"
          className="section-wrapper py-14 md:py-18 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-0 overflow-hidden">
            {/* 标题区 */}
            <div className="text-center mb-14 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-skyBlue text-sm font-bold mb-4 tracking-widest uppercase">
                <ChartSpline className="w-4 h-4" />
                Empirical Data
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                实力数据一览
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-light">
                以数据为核心，透明化展示 OpenEdu 深耕美国本土教育的核心优势与申请战绩
              </p>
            </div>

            {/* 数据卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* 卡片 1: 美国导师 */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-deepNavy/5 transition-all duration-500"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-7 md:mb-8">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-slate-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray="377"
                      strokeDashoffset="0"
                      className="text-skyBlue"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-7 h-7 md:w-8 md:h-8 text-skyBlue" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-5xl font-bold text-slate-900 mb-2">
                    100
                    <span className="text-2xl text-skyBlue ml-1">%</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    美国本土导师
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    核心团队 100% 驻扎美国境内，实现申请资讯与校园动态零时差同步。
                  </p>
                </div>
              </motion.div>

              {/* 卡片 2: 核心高亮位 (TOP 30 覆盖) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="relative group p-8 md:p-10 rounded-[2.5rem] bg-deepNavy shadow-2xl shadow-deepNavy/40 md:-translate-y-4 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_26px_80px_rgba(59,130,246,0.55)]"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-7 md:mb-8">
                  <div className="absolute inset-0 rounded-full bg-[#60A5FA]/35 animate-ping" />
                  <svg className="w-full h-full -rotate-90 relative" viewBox="0 0 128 128">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-[#1D4ED8]"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="377"
                      strokeDashoffset="0"
                      className="text-[#93C5FD]"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 md:w-9 md:h-9 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-5xl font-bold text-white mb-2 tracking-tight">
                    TOP 30
                  </div>
                  <h4 className="text-lg font-bold text-sky-200 mb-3">
                    专业全领域覆盖
                  </h4>
                  <p className="text-sm text-sky-100/70 leading-relaxed">
                    涵盖文、理、工、商、艺所有热门及新兴细分专业，提供跨学科全栈规划。
                  </p>
                </div>
              </motion.div>

              {/* 卡片 3: 藤校占比 */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="relative group p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-deepNavy/5 transition-all duration-500"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-7 md:mb-8">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-slate-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray="377"
                      strokeDashoffset="140"
                      className="text-sky-600"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-7 h-7 md:w-8 md:h-8 text-sky-600" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-5xl font-bold text-slate-900 mb-2">
                    63
                    <span className="text-2xl text-sky-600 ml-1">%</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    Ivy League 导师占比
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    导师团队逾六成来自常春藤 8 校联盟，以招生官视角打磨每一份申请。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tutor Map Section */}
        <section
          id="tutor-map"
          className="section-wrapper py-14 md:py-18 lg:py-20"
        >
          {/* Header with Stats - 使用导师团队的设计 */}
          <div className="max-w-6xl mx-auto mb-10">
            <div className="glass-panel rounded-3xl p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                {/* 左侧：文字内容 */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-skyBlue to-deepNavy flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
                      导师团队 · 100% 美国在读 / 毕业
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    OpenEdu 坚持只邀请有「美国本土学习与实战申请经验」的导师加入团队，既懂招生官视角，也懂中国学生的真实痛点，以结果为导向量身定制申请策略。
                  </p>
                  
                  {/* 核心优势亮点 */}
                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-skyBlue/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-skyBlue" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-0.5">
                          美国本土经验
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          100% 导师拥有美国学习与申请实战经验
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-skyBlue/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-skyBlue" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-0.5">
                          双重视角
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          既懂招生官视角，也懂中国学生痛点
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-skyBlue/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-skyBlue" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-0.5">
                          结果导向
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          量身定制申请策略，以结果为导向
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-skyBlue/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-skyBlue" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-0.5">
                          实战经验
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          拥有丰富的申请实战与指导经验
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右侧：视觉装饰 */}
                <div className="md:w-64 lg:w-80 flex-shrink-0">
                  <div className="relative h-full min-h-[200px] md:min-h-[250px] rounded-2xl bg-gradient-to-br from-skyBlue/10 via-skyBlue/5 to-transparent dark:from-skyBlue/20 dark:via-skyBlue/10 dark:to-transparent flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-extrabold text-skyBlue/80 dark:text-skyBlue/60 mb-2">
                        100%
                      </div>
                      <div className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300">
                        美国本土导师
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        在读 / 毕业
                      </div>
                    </div>
                    {/* 装饰性圆圈 */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-dashed border-skyBlue/30 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border-2 border-dashed border-skyBlue/20 animate-[spin_15s_linear_infinite_reverse]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {FILTER_OPTIONS.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.key}
                  onClick={() => {
                    setActiveFilter(filter.key);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    activeFilter === filter.key
                      ? "bg-skyBlue text-white border-skyBlue shadow-soft"
                      : "glass-panel border-slate-200/70 dark:border-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-50/90 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Tutors Grid */}
          {filteredTutors.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-slate-400 dark:text-slate-500 mb-2">
                <Users className="w-12 h-12 mx-auto mb-3" />
              </div>
              <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-1">
                暂无符合条件的导师
              </h3>
              <p className="text-sm text-slate-500">请尝试其他筛选条件</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {displayedTutors.map((tutor, idx) => (
                (() => {
                  const hasIvy = tutor.categories.includes("ivy");
                  const hasAdmissions = tutor.categories.includes("admissions");
                  const hasTech = tutor.categories.includes("tech");
                  const hasFinance = tutor.categories.includes("finance");

                  const theme = hasFinance
                    ? {
                        accent: "amber",
                        accentText: "text-amber-400",
                        accentBorder: "border-amber-400/50",
                        accentBg: "bg-amber-500/20",
                        pillBg: "bg-amber-50",
                        pillText: "text-amber-700",
                        role: "Wall Street Executive",
                        Icon: LineChart
                      }
                    : hasTech
                    ? {
                        accent: "emerald",
                        accentText: "text-emerald-400",
                        accentBorder: "border-emerald-400/50",
                        accentBg: "bg-emerald-500/20",
                        pillBg: "bg-emerald-50",
                        pillText: "text-emerald-700",
                        role: "Tech Industry Expert",
                        Icon: Code
                      }
                    : hasAdmissions || hasIvy
                    ? {
                        accent: "sky",
                        accentText: "text-sky-300",
                        accentBorder: "border-skyBlue/50",
                        accentBg: "bg-skyBlue/20",
                        pillBg: "bg-sky-50",
                        pillText: "text-sky-700",
                        role: "Official Admissions",
                        Icon: UserCheck
                      }
                    : {
                        accent: "slate",
                        accentText: "text-sky-300",
                        accentBorder: "border-skyBlue/40",
                        accentBg: "bg-skyBlue/15",
                        pillBg: "bg-slate-50",
                        pillText: "text-slate-700",
                        role: "Elite Mentor",
                        Icon: Shield
                      };

                  const HeaderIcon = theme.Icon;

                  return (
                <motion.div
                  key={tutor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:-translate-y-1 transition-all"
                >
                  {/* 头像替代方案：身份勋章区块 */}
                  <div className="h-44 md:h-48 relative overflow-hidden bg-slate-900">
                    {/* 抽象底纹：数学线条/建筑剪影感 */}
                    <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_35%),radial-gradient(circle_at_80%_30%,#ffffff_0,transparent_40%),radial-gradient(circle_at_40%_80%,#ffffff_0,transparent_40%)]" />
                    <div className="absolute inset-0 opacity-[0.12] bg-[repeating-linear-gradient(115deg,transparent_0,transparent_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_11px)]" />

                    {/* 核心勋章 */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div
                        className={`w-20 h-20 rounded-full border-2 ${theme.accentBorder} flex items-center justify-center backdrop-blur-sm bg-white/5 shadow-2xl mb-2`}
                      >
                        <HeaderIcon className={`w-9 h-9 ${theme.accentText}`} />
                      </div>
                      <span
                        className="text-[10px] tracking-[0.3em] font-semibold uppercase text-slate-200"
                      >
                        {theme.role}
                      </span>
                    </div>

                    {/* 隐私遮罩标识 */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      <span className="text-[10px] text-white/70 font-medium tracking-wider inline-flex items-center gap-1">
                        <LockKeyhole className="w-3 h-3" />
                        隐私保护
                      </span>
                    </div>
                  </div>

                  {/* Tutor Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-2xl font-bold text-slate-800">
                        {tutor.nameEn}
                      </h3>
                      {hasIvy && (
                        <span className={`px-2 py-0.5 ${theme.pillBg} ${theme.pillText} text-[10px] font-bold rounded`}>
                          IVY LEAGUE
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 font-bold text-sm mb-4">
                      {tutor.title}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutor.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 h-20 overflow-hidden line-clamp-4">
                      {tutor.bio}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 border-t border-slate-50 pt-6 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-800">
                          {tutor.students}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase">学员</div>
                      </div>
                      <div className="text-center border-x border-slate-100">
                        <div className={`text-lg font-bold ${hasFinance ? "text-amber-600" : hasTech ? "text-emerald-600" : "text-skyBlue"}`}>
                          {tutor.successRate}%
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase">成功率</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-800">
                          {tutor.experience}年
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase">经验</div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      onClick={() => {
                        setConsultOpen(true);
                        // 可以在这里传递导师信息到表单
                      }}
                      className="w-full py-4 bg-skyBlue hover:bg-sky-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-skyBlue/20 flex items-center justify-center gap-2"
                    >
                      <MessageCircleQuestion className="w-4 h-4" />
                      立即预约评估
                    </button>
                  </div>
                </motion.div>
                  );
                })()
              ))}
              </div>

              {/* Show More / Collapse Button */}
              {hasMoreTutors && (
                <div className="flex justify-center mt-8">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onClick={() => setShowAllTutors(!showAllTutors)}
                    className="btn-ghost px-8 py-3 text-sm font-semibold"
                  >
                    {showAllTutors ? (
                      <>
                        <X className="w-4 h-4 mr-2" />
                        收起导师列表
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        显示更多导师 ({filteredTutors.length - 6} 位)
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </>
          )}
        </section>

        {/* Timeline Section */}
        <section
          id="timeline"
          className="relative min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50"
        >
          {/* Hero Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-deepNavy via-slate-900 to-slate-950 py-20 md:py-28">
            <div className="absolute inset-0">
              {/* 轻量网格线 + 光晕：更像“规划航行”的科技氛围 */}
              <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:56px_56px]" />
              <div className="absolute -top-32 -right-28 w-[520px] h-[520px] bg-skyBlue/20 rounded-full blur-[140px]" />
              <div className="absolute -bottom-40 -left-24 w-[520px] h-[520px] bg-skyBlue/10 rounded-full blur-[160px]" />
            </div>
            <div className="section-wrapper relative z-10 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                你的留学申请时间轴
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
              >
                每一步都精准规划，让Dream School不再遥远
              </motion.p>

              {/* Grade Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto p-6 md:p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.55)]"
              >
                <div className="flex items-center justify-between gap-4 mb-7">
                  <div className="text-left">
                    <div className="text-sm font-semibold tracking-[0.18em] text-white/70 uppercase">
                      Select Stage
                    </div>
                    <div className="mt-1 font-heading text-xl md:text-2xl font-bold text-white">
                      选择你当前的年级
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6 text-left">
                  {/* 高中组 */}
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 md:p-5">
                    <div className="flex items-center gap-2 text-white/90 font-semibold mb-4">
                      <BookOpen className="w-4 h-4 text-sky-200" />
                      高中
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {GRADE_OPTIONS.filter((g) => g.key.startsWith("high")).map((grade) => (
                        <button
                          key={grade.key}
                          onClick={() => {
                            setSelectedGrade(grade.key);
                            setTimeout(() => {
                              const timelineEl = document.getElementById("timeline-content");
                              if (timelineEl) {
                                timelineEl.scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                            }, 100);
                          }}
                          className={`px-3 py-3 rounded-2xl text-sm font-semibold transition-all border ${
                            selectedGrade === grade.key
                              ? "bg-skyBlue text-white border-skyBlue shadow-lg shadow-skyBlue/20"
                              : "bg-white/10 text-white/90 border-white/15 hover:bg-white/15 hover:border-white/25"
                          }`}
                        >
                          {grade.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 本科 / 研究生组 */}
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 md:p-5">
                    <div className="flex items-center gap-2 text-white/90 font-semibold mb-4">
                      <GraduationCap className="w-4 h-4 text-sky-200" />
                      本科 / 研究生
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {GRADE_OPTIONS.filter((g) => !g.key.startsWith("high")).map((grade) => (
                        <button
                          key={grade.key}
                          onClick={() => {
                            setSelectedGrade(grade.key);
                            setTimeout(() => {
                              const timelineEl = document.getElementById("timeline-content");
                              if (timelineEl) {
                                timelineEl.scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                            }, 100);
                          }}
                          className={`px-3 py-3 rounded-2xl text-sm font-semibold transition-all border ${
                            selectedGrade === grade.key
                              ? "bg-skyBlue text-white border-skyBlue shadow-lg shadow-skyBlue/20"
                              : "bg-white/10 text-white/90 border-white/15 hover:bg-white/15 hover:border-white/25"
                          }`}
                        >
                          {grade.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Timeline Content */}
          <div id="timeline-content" className="section-wrapper py-14 md:py-20">
            {!selectedGrade ? (
              <div className="text-center py-20">
                <div className="text-slate-400 dark:text-slate-500 mb-4">
                  <LayoutGrid className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  请先选择你的年级
                </h3>
                <p className="text-sm text-slate-500">选择上方年级按钮，查看专属申请规划时间轴</p>
              </div>
            ) : timelineData ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                    {timelineData.title}
                  </h2>
                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    {timelineData.subtitle}
                  </p>
                </motion.div>

                <div className="space-y-16 md:space-y-20">
                  {timelineData.years.map((yearData, yearIdx) => (
                    <motion.div
                      key={yearIdx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: yearIdx * 0.1 }}
                      className="relative"
                    >
                      {/* Year Header */}
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8">
                        <div className="font-heading text-5xl md:text-7xl font-bold bg-gradient-to-br from-skyBlue to-amber-400 bg-clip-text text-transparent">
                          {yearData.year}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                            {yearData.year}
                          </h3>
                          <p className="text-base text-slate-600 dark:text-slate-300">
                            {yearData.description}
                          </p>
                        </div>
                      </div>

                      {/* Months Grid */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {yearData.months.map((month, monthIdx) => {
                          const currentMonth = new Date().getMonth() + 1;
                          const isCurrent = yearIdx === 0 && month.name.includes(String(currentMonth).padStart(2, "0")[0]);
                          
                          return (
                            <motion.div
                              key={monthIdx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.4, delay: (yearIdx * 0.1) + (monthIdx * 0.05) }}
                              className={`glass-panel rounded-3xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-soft transition-all relative overflow-hidden ${
                                isCurrent
                                  ? "bg-gradient-to-br from-skyBlue/10 to-sky-100/50 dark:from-skyBlue/20 dark:to-slate-800 border-2 border-skyBlue scale-105"
                                  : ""
                              }`}
                            >
                              {isCurrent && (
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-skyBlue to-amber-400" />
                              )}
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-50">
                                  {month.name}
                                </h4>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    month.priority === "high"
                                      ? "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
                                      : month.priority === "medium"
                                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                                      : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                                  }`}
                                >
                                  {month.priority === "high" ? "高优先级" : month.priority === "medium" ? "中优先级" : "低优先级"}
                                </span>
                              </div>
                              <ul className="space-y-3">
                                {month.tasks.map((task, taskIdx) => (
                                  <li key={taskIdx} className="flex gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-skyBlue to-amber-400 flex-shrink-0" />
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm text-slate-900 dark:text-slate-50 mb-1">
                                        {task.title}
                                      </div>
                                      <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {task.desc}
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-16 md:mt-20 glass-panel rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-skyBlue/5 to-amber-50/50 dark:from-slate-900/80 dark:to-slate-800/80"
                >
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                    不确定从哪里开始？
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
                    让我们的专业导师为你定制个性化的申请规划
                  </p>
                  <button
                    onClick={() => setConsultOpen(true)}
                    className="btn-primary text-base px-8 py-3"
                  >
                    获取免费规划
                  </button>
                </motion.div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500">该年级的时间轴数据正在完善中...</p>
              </div>
            )}
          </div>
        </section>

        {/* Ivy League Assessment Section */}
        <section
          id="assessment"
          className="py-24 bg-[#0F172A] min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl w-full px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-skyBlue/10 border border-skyBlue/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-skyBlue"></span>
                </span>
                <span className="text-sky-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                  AI Diagnostic Engine v2.0
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                测一测你离
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">
                  藤校
                </span>
                还有多远？
              </h1>
              <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl mx-auto">
                基于 1000+ 真实录取案例，深度解析你的全球名校匹配度
              </p>
            </motion.div>

            {/* Assessment Form */}
            {!assessmentResults ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-skyBlue/10 rounded-full blur-[80px]" />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const data = Object.fromEntries(formData);
                    data.gpa = gpaValue.toString();
                    const results = calculateAssessment(data);
                    setAssessmentResults(results);
                    setTimeout(() => {
                      document.getElementById("assessment-results")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                >
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      01. 当前年级 / Current Grade
                    </label>
                    <div className="relative group mt-3">
                      <select
                        name="grade"
                        required
                        defaultValue=""
                        className="w-full bg-white/5 border-b-2 border-slate-700 text-white py-3 px-1 focus:outline-none focus:border-skyBlue transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">
                          请选择...
                        </option>
                        <option value="high1" className="bg-slate-900">
                          高一
                        </option>
                        <option value="high2" className="bg-slate-900">
                          高二
                        </option>
                        <option value="high3" className="bg-slate-900">
                          高三
                        </option>
                        <option value="college1" className="bg-slate-900">
                          大一
                        </option>
                        <option value="college2" className="bg-slate-900">
                          大二
                        </option>
                        <option value="college3" className="bg-slate-900">
                          大三
                        </option>
                        <option value="college4" className="bg-slate-900">
                          大四
                        </option>
                        <option value="graduate" className="bg-slate-900">
                          研究生
                        </option>
                      </select>
                      <ArrowRight className="absolute right-2 top-4 w-4 h-4 -rotate-90 text-slate-500 pointer-events-none group-hover:text-sky-300 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        02. GPA 成绩 (4.0 Scale)
                      </label>
                      <span className="font-heading text-3xl font-bold text-sky-300">
                        {gpaValue.toFixed(1)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="2.0"
                      max="4.0"
                      step="0.1"
                      value={gpaValue}
                      onChange={(e) => setGpaValue(parseFloat(e.target.value))}
                      className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-skyBlue hover:accent-sky-300 transition-all"
                    />
                    <div className="flex justify-between text-[10px] text-slate-600 font-medium">
                      <span>MIN: 2.0</span>
                      <span>MAX: 4.0</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      03. 托福 / 雅思 / TOEFL & IELTS
                    </label>
                    <div className="relative group mt-3">
                      <select
                        name="language"
                        required
                        defaultValue=""
                        className="w-full bg-white/5 border-b-2 border-slate-700 text-white py-3 px-1 focus:outline-none focus:border-skyBlue transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">
                          请选择...
                        </option>
                        <option value="90" className="bg-slate-900">
                          托福 90-99 / 雅思 6.5-7.0
                        </option>
                        <option value="100" className="bg-slate-900">
                          托福 100-109 / 雅思 7.0-7.5
                        </option>
                        <option value="110" className="bg-slate-900">
                          托福 110+ / 雅思 8.0+
                        </option>
                        <option value="none" className="bg-slate-900">
                          尚未考试
                        </option>
                      </select>
                      <ArrowRight className="absolute right-2 top-4 w-4 h-4 -rotate-90 text-slate-500 pointer-events-none group-hover:text-sky-300 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      04. SAT / ACT 成绩
                    </label>
                    <div className="relative group mt-3">
                      <select
                        name="sat"
                        defaultValue=""
                        className="w-full bg-white/5 border-b-2 border-slate-700 text-white py-3 px-1 focus:outline-none focus:border-skyBlue transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">
                          请选择...
                        </option>
                        <option value="1300" className="bg-slate-900">
                          SAT 1300-1399 / ACT 28-30
                        </option>
                        <option value="1400" className="bg-slate-900">
                          SAT 1400-1499 / ACT 31-33
                        </option>
                        <option value="1500" className="bg-slate-900">
                          SAT 1500+ / ACT 34+
                        </option>
                        <option value="none" className="bg-slate-900">
                          尚未考试/不适用
                        </option>
                      </select>
                      <ArrowRight className="absolute right-2 top-4 w-4 h-4 -rotate-90 text-slate-500 pointer-events-none group-hover:text-sky-300 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      05. 意向专业方向
                    </label>
                    <div className="relative group mt-3">
                      <select
                        name="major"
                        required
                        defaultValue=""
                        className="w-full bg-white/5 border-b-2 border-slate-700 text-white py-3 px-1 focus:outline-none focus:border-skyBlue transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">
                          请选择...
                        </option>
                        <option value="cs" className="bg-slate-900">
                          计算机科学
                        </option>
                        <option value="engineering" className="bg-slate-900">
                          工程类
                        </option>
                        <option value="business" className="bg-slate-900">
                          商科
                        </option>
                        <option value="economics" className="bg-slate-900">
                          经济学
                        </option>
                        <option value="science" className="bg-slate-900">
                          自然科学
                        </option>
                        <option value="humanities" className="bg-slate-900">
                          人文社科
                        </option>
                        <option value="arts" className="bg-slate-900">
                          艺术设计
                        </option>
                        <option value="other" className="bg-slate-900">
                          其他
                        </option>
                      </select>
                      <ArrowRight className="absolute right-2 top-4 w-4 h-4 -rotate-90 text-slate-500 pointer-events-none group-hover:text-sky-300 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      06. 课外活动 / 科研经历
                    </label>
                    <div className="relative group mt-3">
                      <select
                        name="activities"
                        required
                        defaultValue=""
                        className="w-full bg-white/5 border-b-2 border-slate-700 text-white py-3 px-1 focus:outline-none focus:border-skyBlue transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">
                          请选择...
                        </option>
                        <option value="high" className="bg-slate-900">
                          丰富（3+项 leadership/科研/竞赛）
                        </option>
                        <option value="medium" className="bg-slate-900">
                          中等（1-2项有深度的活动）
                        </option>
                        <option value="low" className="bg-slate-900">
                          较少（主要专注学业）
                        </option>
                      </select>
                      <ArrowRight className="absolute right-2 top-4 w-4 h-4 -rotate-90 text-slate-500 pointer-events-none group-hover:text-sky-300 transition-colors" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="md:col-span-2 w-full py-5 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-2xl font-bold text-lg tracking-widest transition-all shadow-xl shadow-slate-900/40 flex items-center justify-center gap-3 group"
                  >
                    <ChartSpline className="w-5 h-5 text-sky-200 group-hover:rotate-12 transition-transform" />
                    立即启动 AI 评估方案
                  </button>
                </form>
                <p className="text-center text-slate-500 text-[10px] mt-6 italic">
                  * 本测试基于 OpenEdu 录取模型，结果仅供学术规划参考
                </p>
              </motion.div>
            ) : (
              <div id="assessment-results">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl"
                >
                  {/* Score Display */}
                  <div className="text-center mb-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="relative w-48 h-48 mx-auto mb-6"
                    >
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          fill="none"
                          stroke="rgba(148, 163, 184, 0.25)"
                          strokeWidth="12"
                        />
                        <motion.circle
                          cx="96"
                          cy="96"
                          r="88"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="12"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 88}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                          animate={{
                            strokeDashoffset: 2 * Math.PI * 88 * (1 - assessmentResults.finalScore / 100)
                          }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#007AFF" />
                            <stop offset="100%" stopColor="#013B81" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="font-heading text-5xl font-bold text-sky-300 mb-1"
                        >
                          {assessmentResults.finalScore}
                        </motion.div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          匹配度
                        </div>
                      </div>
                    </motion.div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
                      {assessmentResults.title}
                    </h2>
                    <p className="text-base text-slate-300 max-w-xl mx-auto">
                      {assessmentResults.description}
                    </p>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-6 mb-10">
                    {[
                      { label: "学术成绩", score: assessmentResults.academicScore, id: "academic" },
                      { label: "标化考试", score: assessmentResults.testScore, id: "test" },
                      { label: "课外活动", score: assessmentResults.activityScore, id: "activity" },
                      { label: "专业匹配", score: assessmentResults.majorScore, id: "major" }
                    ].map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-slate-900 dark:text-slate-50">
                            {item.label}
                          </span>
                          <span className="font-bold text-skyBlue">{item.score}%</span>
                        </div>
                        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.score}%` }}
                            transition={{ duration: 1, delay: 0.8 + idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-skyBlue to-deepNavy rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Section */}
                  {!leadSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="glass-panel rounded-3xl p-8 md:p-10 text-center relative overflow-hidden bg-gradient-to-br from-skyBlue/5 via-white/80 to-sky-50/50 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/80"
                    >
                      <div className="relative z-10">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50">
                          想获取完整的提升方案？
                        </h3>
                        <p className="text-base mb-6 text-slate-600 dark:text-slate-300">
                          我们的专业导师将为你提供：<br />
                          • 详细的藤校录取概率分析报告<br />
                          • 个性化的背景提升建议<br />
                          • 精准的选校推荐清单<br />
                          • 一对一免费咨询机会
                        </p>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            setLeadSubmitted(true);
                            // 这里可以接入真实后端
                          }}
                          className="max-w-md mx-auto space-y-3"
                        >
                          <input
                            type="text"
                            placeholder="你的姓名"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-slate-50 placeholder-slate-400 focus:border-skyBlue focus:ring-2 focus:ring-skyBlue/20 outline-none transition-all"
                          />
                          <input
                            type="text"
                            placeholder="微信号"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-slate-50 placeholder-slate-400 focus:border-skyBlue focus:ring-2 focus:ring-skyBlue/20 outline-none transition-all"
                          />
                          <input
                            type="tel"
                            placeholder="手机号码"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-slate-50 placeholder-slate-400 focus:border-skyBlue focus:ring-2 focus:ring-skyBlue/20 outline-none transition-all"
                          />
                          <button
                            type="submit"
                            className="w-full px-6 py-3 bg-skyBlue text-white font-bold rounded-xl hover:bg-sky-600 transition-all shadow-soft"
                          >
                            立即获取免费报告
                          </button>
                        </form>
                        <p className="text-xs mt-4 text-slate-500 dark:text-slate-400">
                          你的信息将被严格保密 | 1小时内发送报告
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 mx-auto mb-6 bg-emerald-500 rounded-full flex items-center justify-center text-white"
                      >
                        <Sparkles className="w-10 h-10" />
                      </motion.div>
                      <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                        提交成功！
                      </h3>
                      <p className="text-base text-slate-600 dark:text-slate-300">
                        感谢你的信任！我们的顾问老师将在1小时内通过微信联系你，<br />
                        发送详细的藤校匹配度报告和提升方案。
                      </p>
                    </motion.div>
                  )}

                  <div className="text-center mt-8">
                    <button
                      onClick={() => {
                        setAssessmentResults(null);
                        setLeadSubmitted(false);
                        setGpaValue(3.5);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="btn-ghost"
                    >
                      重新测试
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>

        {/* Admission Cases */}
        <section id="cases" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                  真实录取案例 · <span className="text-skyBlue">从普通背景到名校 Offer</span>
                </h2>
                <p className="text-slate-500 font-light leading-relaxed">
                  每一个 Offer 背后，都是一次关于起点、规划与努力的故事。以下案例均为真实学生背景的典型组合，便于你快速对标自己。
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setCaseIndex(
                      (prev) => (prev - 1 + ADMISSION_CASES.length) % ADMISSION_CASES.length
                    )
                  }
                  className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-skyBlue hover:shadow-lg transition-all"
                  aria-label="上一条案例"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={() => setCaseIndex((prev) => (prev + 1) % ADMISSION_CASES.length)}
                  className="w-12 h-12 rounded-full bg-skyBlue flex items-center justify-center text-white shadow-xl shadow-skyBlue/30 hover:bg-sky-600 transition-all"
                  aria-label="下一条案例"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100 relative">
              <div className="h-2 w-full bg-gradient-to-r from-skyBlue via-indigo-500 to-skyBlue" />

              <motion.div
                key={ADMISSION_CASES[caseIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col lg:flex-row"
              >
                <div className="lg:w-7/12 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-50">
                  <div className="flex items-center gap-3 mb-10">
                    <span className="px-4 py-1.5 bg-sky-50 text-skyBlue text-[11px] font-bold rounded-full tracking-widest uppercase">
                      {ADMISSION_CASES[caseIndex].tag || "案例"}
                    </span>
                    <span className="text-slate-300 text-xs font-mono italic">
                      Case ID: {ADMISSION_CASES[caseIndex].year}
                    </span>
                    {ADMISSION_CASES[caseIndex].badge && (
                      <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[11px] font-bold rounded-full">
                        {ADMISSION_CASES[caseIndex].badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-baseline gap-3">
                      {ADMISSION_CASES[caseIndex].student}{" "}
                      <span className="text-lg font-light text-slate-400">Admission Case</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                          本科院校
                        </p>
                        <p className="text-slate-700 font-medium">
                          {ADMISSION_CASES[caseIndex].backgroundSchool || "国内 211 / CS"}
                        </p>
                      </div>
                      <div className="space-y-1 border-l border-slate-100 pl-4">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                          GPA 成绩
                        </p>
                        <p className="text-skyBlue font-bold">
                          {ADMISSION_CASES[caseIndex].gpa || "3.5 / 4.0"}
                        </p>
                      </div>
                      <div className="space-y-1 border-l border-slate-100 pl-4">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                          TOEFL
                        </p>
                        <p className="text-slate-700 font-medium">
                          {ADMISSION_CASES[caseIndex].toefl || "100"}
                        </p>
                      </div>
                      <div className="space-y-1 border-l border-slate-100 pl-4">
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                          GRE
                        </p>
                        <p className="text-slate-700 font-medium">
                          {ADMISSION_CASES[caseIndex].gre || "320"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="w-16 h-16 bg-[#B9D9EB] rounded-2xl flex items-center justify-center shadow-inner">
                        <GraduationCap className="text-white w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-xs text-skyBlue font-bold uppercase tracking-tighter mb-1">
                          录取结果 / ADMISSION RESULT
                        </p>
                        <h4 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 leading-tight">
                          {ADMISSION_CASES[caseIndex].result || "哥伦比亚大学 · MS in CS"}
                        </h4>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-sky-100 rounded-full flex items-center justify-center opacity-40 -rotate-12">
                      <span className="text-sky-200 font-black text-xs uppercase tracking-widest">
                        ADMITTED
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-5/12 p-10 md:p-14 bg-sky-50/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-8">
                      <Sparkles className="text-amber-500 w-5 h-5" />
                      <h5 className="text-xl font-bold text-slate-800">OpenEdu 策略点睛</h5>
                    </div>
                    <ul className="space-y-6">
                      {ADMISSION_CASES[caseIndex].strategies?.map((s, i) => (
                        <li key={i} className="relative pl-8">
                          <span className="absolute left-0 top-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-skyBlue">
                            {i + 1}
                          </span>
                          <p className="text-slate-600 leading-relaxed">{s}</p>
                        </li>
                      )) || (
                        <>
                          <li className="relative pl-8">
                            <span className="absolute left-0 top-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-skyBlue">
                              1
                            </span>
                            <p className="text-slate-600 leading-relaxed">
                              针对“项目一般、缺少科研”，匹配两段常春藤远程科研，强化学术背书。
                            </p>
                          </li>
                          <li className="relative pl-8">
                            <span className="absolute left-0 top-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-skyBlue">
                              2
                            </span>
                            <p className="text-slate-600 leading-relaxed">
                              通过顶级科技公司实习，构建完整 CS 职业叙事，提高文书实战感。
                            </p>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="mt-12 pt-8 border-t border-sky-100">
                    <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
                      * 为保护学生隐私，以上信息略作模糊处理，但核心背景与录取结果真实可查。
                    </p>
                    <button className="flex items-center gap-2 text-skyBlue font-bold group">
                      查看该同学的完整规划手册
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 flex justify-center gap-2">
              {ADMISSION_CASES.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setCaseIndex(idx)}
                  className={`transition-all ${
                    idx === caseIndex ? "w-10 h-1.5 bg-skyBlue rounded-full" : "w-2 h-1.5 bg-slate-200 rounded-full"
                  }`}
                  aria-label={`切换到案例 ${idx + 1}`}
                />
              ))}
            </div>
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
          className="py-24 bg-[#F8FAFC] relative overflow-hidden"
        >
          {/* 背景装饰：极淡的学院轮廓/校徽感 */}
          <div className="absolute -right-24 top-10 opacity-[0.035] pointer-events-none">
            <Building2 className="w-[520px] h-[520px] text-slate-900" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* 左侧：品牌深度故事 */}
              <div className="lg:w-2/3">
                <div className="mb-12">
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                    关于 <span className="text-skyBlue">OpenEdu</span>
                  </h2>

                  <div className="border-l-4 border-skyBlue pl-6 mb-10">
                    <p className="text-xl md:text-2xl font-heading italic text-slate-700 leading-relaxed">
                      "不仅仅是拿到 Offer，更是找到适合自己的人生路径。"
                    </p>
                  </div>

                  <div className="space-y-6 text-slate-600 leading-loose text-lg font-light mb-12">
                    <p>
                      OpenEdu 由一群长期深耕美国名校申请与职业发展的导师发起，核心团队成员来自{" "}
                      <strong className="text-slate-900 font-bold">
                        Ivy League、Stanford、MIT
                      </strong>{" "}
                      等知名院校。我们深知，留学申请是一场关于自我探索的旅程，而不仅仅是标化成绩的堆砌。
                    </p>
                    <p>
                      我们坚持以{" "}
                      <span className="text-skyBlue font-semibold">
                        透明、开放、数据驱动
                      </span>{" "}
                      的方式，通过深度挖掘每位学生的独特性，打破信息差。在 OpenEdu，我们不仅关注当下的申请结果，更致力于培养独立思考、批判性表达及全球化视野。
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                      <Target className="text-skyBlue w-7 h-7 mb-4" />
                      <h4 className="text-xl font-bold mb-3 text-slate-900">
                        我们的使命
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        打破精英教育的信息壁垒，让每一位中国学子都能触达世界顶尖教育资源，成就最具竞争力的自我。
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                      <Network className="text-skyBlue w-7 h-7 mb-4" />
                      <h4 className="text-xl font-bold mb-3 text-slate-900">
                        科学申请体系
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        基于近十年 TOP30 录取数据库，结合学生性格测试与能力模型，实现精准选校与文书定位。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：为什么选择我们 (Card Style) */}
              <div className="lg:w-1/3 w-full">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-deepNavy/5 border border-slate-100 lg:sticky lg:top-24">
                  <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800 tracking-tight">
                    <span className="w-10 h-10 bg-skyBlue text-white rounded-full flex items-center justify-center text-sm font-black shadow-lg shadow-skyBlue/30">
                      ?
                    </span>
                    为什么选择我们?
                  </h3>
                  <ul className="space-y-8">
                    <li className="flex gap-5 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-skyBlue transition-colors">
                        <Check className="w-3 h-3 text-skyBlue group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 mb-1 text-sm">
                          美国本土导师一对一深度陪伴
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          跨越时差，由身在目标校的学长学姐提供最前沿的校园动态与文书灵感。
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-5 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-skyBlue transition-colors">
                        <Check className="w-3 h-3 text-skyBlue group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 mb-1 text-sm">
                          透明可视化的流程管理
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          独家 CRM 系统全透明展示申请进度，每一篇文书的修改记录随时可查。
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-5 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-skyBlue transition-colors">
                        <Check className="w-3 h-3 text-skyBlue group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 mb-1 text-sm">
                          重视长期发展而非短期「上岸」心态
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          配套职业发展规划，提供 500 强实习内推资源，为毕业后的职业生涯铺路。
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-5 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-skyBlue transition-colors">
                        <Check className="w-3 h-3 text-skyBlue group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 mb-1 text-sm">
                          藤校前招生官团队终审
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          所有核心文书由前招生官进行"模拟评审"，确保符合名校录取偏好。
                        </p>
                      </div>
                    </li>
                  </ul>

                  <button
                    onClick={() => setConsultOpen(true)}
                    className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-skyBlue transition-all shadow-xl shadow-slate-900/10"
                  >
                    获取个性化评估方案
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-[#0A1128] text-white pt-20 pb-10 mt-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0" aria-label="OpenEdu">
                      <Logo variant="dark" />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    OpenEdu 是面向常春藤及美国 TOP 名校的顶级留学咨询品牌，致力于通过本土化视野与数据驱动，为学生提供规划、申请与发展的一体化解决方案。
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setConsultOpen(true)}
                      className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-skyBlue transition-colors"
                      aria-label="微信咨询"
                      title="微信咨询"
                    >
                      <MessageCircleQuestion className="w-4 h-4" />
                    </button>
                    <button
                      className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-skyBlue transition-colors"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button
                      className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-skyBlue transition-colors"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2 md:col-start-6">
                  <h5 className="text-sm font-bold uppercase tracking-widest mb-6 text-sky-300">
                    快速链接
                  </h5>
                  <ul className="space-y-4 text-slate-400 text-sm">
                    <li>
                      <button onClick={() => scrollTo("services")} className="hover:text-white transition-colors">
                        服务介绍
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollTo("cases")} className="hover:text-white transition-colors">
                        成功案例
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollTo("tutor-map")} className="hover:text-white transition-colors">
                        导师团队
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors">
                        关于我们
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-4 md:col-start-9">
                  <h5 className="text-sm font-bold uppercase tracking-widest mb-6 text-sky-300">
                    联系我们
                  </h5>
                  <ul className="space-y-4 text-slate-400 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span>USA · CA / NYC / Boston (Global Office)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4" />
                      <a href="tel:+12408543064" className="hover:text-sky-300 transition-colors">+1 (240) 854-3064</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:contactus@openeduinc.com" className="hover:text-sky-300 transition-colors">contactus@openeduinc.com</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest">
                <p>© {new Date().getFullYear()} OpenEdu Consulting Group. All rights reserved.</p>
                <div className="flex gap-6">
                  <button className="hover:text-slate-300 transition-colors">Privacy Policy</button>
                  <button className="hover:text-slate-300 transition-colors">Terms of Service</button>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>

      {/* Consultation Modal */}
      <ConsultationModal open={isConsultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
};

export default App;

