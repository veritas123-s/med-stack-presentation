'use strict';

// 所有演示数据均内置，file:// 打开无需服务器、网络或第三方库。
const references = {
  v1: {title:'V1.docx · 用户提供的路演原稿',detail:'用于团队定位、成员姓名与职责、约10人核心团队、二十余人内测群和后续方向。人数属于稿件自述，并非平台活跃用户统计。原稿中的 V3.1 已依据项目手册更新为 V4.1。'},
  current: {title:'本次明确要求与此前路演对话',detail:'规划覆盖网信中心官方渠道、智慧综测、智慧第二课堂、校内合作、双组织路径、云上影像库、校友及产学研交流。规划不代表学校已批准或合作已经落地。'},
  economy: {title:'Stanford HAI · AI Index 2026，第4章 Economy',url:'https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf',detail:'2025年全球企业AI投资5816.9亿美元，同比增长129.9%（报告印刷页178）；88%为受调查组织的AI使用比例。投资指数图以2024=100、2025=229.9绘制，不能解读为中国产业规模或全球人口使用率。'},
  science: {title:'Stanford HAI · AI Index 2026，第5章 Science',url:'https://hai.stanford.edu/ai-index/2026-ai-index-report/science',detail:'2025年自然科学领域AI相关论文约80,150篇，同比增长26%。不同领域相关研究占比5.8%–8.8%，2010年低于1%。这些是文献计量数据，不能推出临床疗效或科研任务已可完全自动完成。'},
  china: {title:'工业和信息化部 · 部长通道报道（2026-03-06）',url:'https://www.miit.gov.cn/xwfb/mtbd/wzbd/art/2026/art_09d28ac9931b4c26bd63a9d30a8f8a22.html',detail:'采用同一报道的2025年统计口径：AI核心产业规模超过1.2万亿元，企业数量超过6200家，规上制造业企业AI技术应用普及率超过30%。制造业普及率不能外推为医院或医学院普及率。'},
  policy: {title:'“十五五”规划纲要 · 全国政协转载全文',url:'https://www.cppcc.gov.cn/zxww/2026/03/16/ARTI1773644951646391.shtml',detail:'纲要部署“人工智能+”、高水平科技自立自强和教育科技人才一体发展。页面中的团队实践为对政策方向的工作转化，不是政策要求学校批准本项目。'},
  education: {title:'国务院《教育发展“十五五”规划》 · 国家发展改革委公开全文',url:'https://www.ndrc.gov.cn/fggz/fzzlgh/gjjzxgh/202609/t20260928_1407868.html',detail:'文件日期2026-06-22；此转载页日期2026-09-28。提出一体推进教育科技人才发展、国家教育数字化战略及“人工智能+教育”。发布日与统计年份分别标注。'},
  guide: {title:'Hades V4.1 使用说明 · 项目当前文件',detail:'依据 Hades-Program/docs/USER-GUIDE.md，package.json 版本4.1.0。涵盖任务、日历、专注、校园课表、成绩/教室查询、学习通、Poseidon、账号同步、可选快报、七主题、备份和恢复。项目README仍有V3.2旧内容，优先采用V4.1专门手册与验收记录。'},
  validation: {title:'Hades V4.1 验证记录 · 2026-09-30',detail:'依据 docs/VALIDATION-V4.1.md：记录121项规则、18组桌面回归和13组界面流程通过；本次为读取验收记录，未重新执行Hades测试。近24小时快讯按时间窗筛选、同原文/规范化长标题合并、缺少时分单列待核对。合成测试不能代表所有真实账号或全量信息覆盖。'},
  v4: {title:'Hades V4.0 验证记录 · 2026-09-30',detail:'依据 docs/VALIDATION-V4.0.md：公开来源采集有限覆盖；应用关闭后的云快报读取最后成功上传摘要；Canvas完整自动同步等待学校OAuth授权；Android V3.2调试包实机及正式签名待完成。'},
  proposal: {title:'本演示的建议实施方案',detail:'需求清单、阶段门槛、项目交接与活动流程是供团委讨论的建议，尚未确定负责人、日期、预算或校方承诺。以老师和相关部门最终安排为准。'}
};

const slides = [
 {id:'opening',chapter:'开场',title:'Med Stack · 医学院青年技术团队',theme:'dark',label:'团队筹备汇报',foot:'上海交通大学医学院学生团队筹备汇报 · 2026年10月',refs:['v1','current'],note:'先说明今天汇报的是筹备设想。项目已经开始，组织形式希望听取团委意见。重点是把学校培养的学生骨干组织起来，持续承担具体任务。',html:`
  <div class="cover"><div><span class="badge dark-badge">医学 × 科研 × 人工智能 × 工程</span><h1>Med Stack</h1><div class="cover-title">把技术能力，转化为<br>服务交医的建设能力。</div><div class="cover-meta">汇报人：张家羽<br>博医计划五期学员 · 团委科创中心科普部项目组长</div><div class="cover-hint">方向键 / 空格 / 滚轮切页 · 底部目录可直接跳转</div></div><div class="cover-aside"><div class="stack-layer"><strong>工程实践</strong><span>BUILD</span></div><div class="stack-layer"><strong>人工智能与数据</strong><span>CONNECT</span></div><div class="stack-layer"><strong>科学研究</strong><span>DISCOVER</span></div><div class="stack-layer"><strong>医学根基</strong><span>MEDICINE</span></div><p>从 Hades 出发，探索一支有组织、<br>能交付、可持续的青年技术团队。</p></div></div>`},
 {id:'global',chapter:'01 时代与需求',title:'AI 正在进入完整工作流程',label:'全球科技趋势',sub:'从投入、组织采用到科研产出，技术变化已经具有可观察的规模。',foot:'统计年份：2025年；来源：AI Index 2026 · 投资、调查比例与论文量分属不同口径',refs:['economy','science'],note:'三组数据分别说明投入、使用和科研变化。88%只指受调查组织，不是全世界人口。图表左侧为增长指数，不是美元金额。这里不展开工具品牌，直接转向医学生应具备什么能力。',html:`
  <div class="three content"><div class="metric"><div class="metric-head">全球企业 AI 投资</div><div class="big-number">5,817<small>亿美元</small></div><h3>同比增长约 130%</h3><p class="caption">包括并购、股权投资等企业投资类别</p><div class="bars" role="img" aria-label="投资指数，2024年100，2025年229.9"><div class="bar-item" style="height:57px"><span>100</span><label>2024</label></div><div class="bar-item" style="height:131px"><span>229.9</span><label>2025</label></div></div><p class="caption" style="margin-top:37px">增长指数：2024 = 100</p></div><div class="metric"><div class="metric-head">受调查组织 AI 使用率</div><div class="big-number">88<small>%</small></div><h3>AI 已进入组织工作</h3><p class="caption">调查口径，不等于人口普及率</p><div class="dot-grid" role="img" aria-label="100格中88格填色，代表88%">${Array.from({length:100},(_,i)=>`<i class="dot ${i<88?'filled':''}"></i>`).join('')}</div></div><div class="metric"><div class="metric-head">自然科学领域 AI 相关论文</div><div class="big-number">8.0<small>万篇</small></div><h3>同比增长 26%</h3><p class="caption">2025年约80,150篇</p><div class="rule"></div><p style="font-size:28px;line-height:1.65">AI 正从通用工具<br>进入学科研究流程。</p><p class="caption" style="margin-top:19px">增长反映研究活动，不能直接等同科研质量或临床价值。</p></div></div>`},
 {id:'china',chapter:'01 时代与需求',title:'中国的技术生态，为青年实践提供土壤',label:'中国科技发展',sub:'产业规模、企业集聚与应用扩散同步推进，能力培养可以立足国内技术与校园资源。',foot:'来源：工信部2026-03-06报道，统一采用2025年口径；下方为团队实践方向',refs:['china','proposal'],note:'国内数据使用同一条官方报道、同一个统计年份，避免混用。制造业AI应用率说明产业扩散，不能推成医学领域的应用率。我们的落点是理解国产生态、学校认可的模型服务和真实医学需求。',html:`
  <div class="three content"><div class="metric"><div class="metric-head">AI 核心产业规模</div><div class="big-number">1.2<small>万亿元以上</small></div><h3>技术加速走向产业</h3><p class="caption">中国 · 2025年</p></div><div class="metric"><div class="metric-head">AI 企业数量</div><div class="big-number">6,200<small>余家</small></div><h3>形成多样化产业生态</h3><p class="caption">中国 · 2025年统计口径</p></div><div class="metric"><div class="metric-head">规上制造业企业 AI 应用普及率</div><div class="big-number">30<small>%以上</small></div><h3>从技术研发走向应用</h3><p class="caption">截至2025年底 · 仅指制造业</p></div></div><div class="country-band"><b>交医青年可以做什么</b><p>理解国产模型与开源技术，使用学校认可的服务，<br>围绕医学学习、科学研究和校园治理，完成可检验的小项目。</p></div><div class="bottom-line">关注技术原理、使用边界与工程实践，把工具使用逐步转化为自主建设能力。</div>`},
 {id:'policy',chapter:'01 时代与需求',title:'把国家战略，落实到人才培养与校园服务',label:'十五五 · 教育科技人才',sub:'2026—2030：以立德树人为根本，在真实问题中培养跨学科实践能力。',foot:'政策概括依据“十五五”规划纲要与《教育发展“十五五”规划》；团队行动为建议',refs:['policy','education','proposal'],note:'这页只建立方向对应：立德树人、科技创新与人才成长。把宏观政策转成团委可指导、学生可参与、结果可交接的项目，不把政策支持说成项目已获批准。',html:`
  <div class="content"><div class="policy-line"><div><strong>教育</strong><div class="date">立德树人 · 数字素养</div></div><div><h3>把价值引领融入技术实践</h3><p>围绕真实校园需求开展项目制学习，兼顾学术诚信、责任意识与团队协作。</p></div></div><div class="policy-line"><div><strong>科技</strong><div class="date">人工智能+ · 科学智能</div></div><div><h3>在医学场景中理解和验证新技术</h3><p>从科研数据处理、文献工作流和校园数字化小项目切入，重视可复现与可核对。</p></div></div><div class="policy-line"><div><strong>人才</strong><div class="date">交叉培养 · 持续成长</div></div><div><h3>形成学生骨干与技术成员的培养梯队</h3><p>让医学问题、工程方法、导师指导与同伴学习相互衔接，留下可以维护的成果。</p></div></div></div>`},
 {id:'science',chapter:'01 时代与需求',title:'AI4Science：从医学问题出发',label:'医学院的能力需求',sub:'医学知识是根基；数据、人工智能与工程能力，让问题研究获得更多方法。',foot:'以下为拟开展的学生实践场景；不代表已经取得科研结论或临床应用效果',refs:['science','v1','proposal'],note:'AI4Science在这里是一条学习与研究流程：问题要由领域知识提出，分析过程可复现，结果最终仍需实验和专业判断。学生团队先做方法训练与流程支持，不宣称具备临床诊疗能力。',html:`
  <div class="flow content"><div class="flow-step"><span class="step-index">01 / 问题</span><h3>医学与科研需求</h3><p>明确研究对象<br>拆解可回答的问题</p></div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-step"><span class="step-index">02 / 证据</span><h3>文献与数据</h3><p>追溯原始来源<br>整理公开或授权数据</p></div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-step"><span class="step-index">03 / 方法</span><h3>分析与工程</h3><p>辅助编程与可视化<br>构建可复现工作流</p></div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-step"><span class="step-index">04 / 验证</span><h3>专业判断</h3><p>核对结果与局限<br>接受导师与实验检验</p></div></div><div class="three" style="margin-top:36px"><div class="brief"><h3>学习支持</h3><p>结构化知识整理、课程安排<br>与任务管理。</p></div><div class="brief"><h3>科研入门</h3><p>公开数据练习、分析复现<br>与科学图表制作。</p></div><div class="brief"><h3>校园实践</h3><p>把学生工作中的重复流程<br>转化为可用工具。</p></div></div>`},
 {id:'team',chapter:'02 团队与产品',title:'把已有学生骨干组织起来',label:'Med Stack · 筹备基础',sub:'成员来自博医计划、团委科创中心与既有学生工作体系，结合组织经验与技术兴趣。',foot:'人员、履历与规模依据V1稿件；约10人为核心团队自述，20余人为内测群规模',refs:['v1'],note:'介绍真实分工，不把成员个人履历夸大成整个团队的能力认证。内测群20余人只说明已有反馈渠道，不能说成20余名活跃用户或满意度已达标。',html:`
  <div class="team-layout content"><div class="team-stat"><div class="big-number">≈10<small>人</small></div><h3>筹备核心团队</h3><div class="rule" style="background:#ffffff30"></div><div class="big-number" style="font-size:64px">20余<small>人</small></div><h3>Hades 内测群</h3><p>从产品反馈出发，<br>逐步建立稳定分工。</p></div><table class="team-table"><tbody><tr><td>张家羽</td><td>负责人</td><td>总体建设、前瞻方向与行政协调；博医五期、团委科创中心科普部项目组长</td></tr><tr><td>乔荆洋</td><td>管理组</td><td>曾任闵行团委学生会主席；现于社团管理中心工作</td></tr><tr><td>田韵笛</td><td>技术部</td><td>博医五期、团委科创中心干事；信息学奥赛省级一等奖经历</td></tr><tr><td>张昕媛</td><td>学术部</td><td>博医五期、实践组组长；关注AI4Science与医学科研工作流</td></tr><tr><td>都泓毅</td><td>宣传部</td><td>博医五期、宣传组组长；负责内容表达与成果传播</td></tr></tbody></table></div>`},
 {id:'pillars',chapter:'02 团队与产品',title:'三项工作，围绕同一个育人目标',label:'工作框架',sub:'让有兴趣的同学进入真实项目，让项目成果回到学院与同学身边。',foot:'工作方向来自V1；流程和产出形式为筹备建议',refs:['v1','proposal'],note:'三项工作互相支撑。组织保障持续性，研发交付实际工具，交流引入知识与资源。团队可靠性要体现为负责人、需求、验证和交接，而不只是成员名单。',html:`
  <div class="three pillars"><div class="pillar"><span class="item-num">01</span><h3>组织工作</h3><p>明确分工与项目负责人<br>建立招募、培养和交接机制<br>在老师指导下规范运行</p><p class="minor">留下：任务清单、阶段复盘、交接文档</p></div><div class="pillar"><span class="item-num" style="color:#dda0ad">02</span><h3>产品研发</h3><p>持续改进 Hades<br>探索智慧综测与第二课堂<br>承接具体校园数字化需求</p><p class="minor">留下：可用原型、验证记录、维护说明</p></div><div class="pillar"><span class="item-num">03</span><h3>外部交流</h3><p>连接本部技术社群<br>拓展荣昶同学会与校友资源<br>开展医药科技产学研交流</p><p class="minor">留下：方法分享、项目案例、成长机会</p></div></div><div class="bottom-line">共同原则：先把需求讲清楚，再做小范围试点，验收后持续维护。</div>`},
 {id:'hades',chapter:'02 团队与产品',title:'Hades V4.1：医学生的校园与专注工作台',label:'已有产品 · Windows 测试版',sub:'连接分散的校园信息与个人行动，为学校现有服务提供补充。',foot:'依据V4.1使用说明与验证记录；部分连接依赖本人授权、校园网络和外部服务',refs:['guide','validation','v4'],note:'从同学的一天来讲产品：看课表、查通知、安排任务、进入专注、回顾投入。V4.1的主要增量是近24小时公开快讯和信息合并。它是校园辅助工作台，仍处于测试和持续维护阶段。',html:`
  <div class="product-grid content"><div class="product-cell"><span class="item-num">01 / 校园</span><h3>课表与校园服务</h3><p>统一日历、课表同步<br>成绩与教室查询入口</p></div><div class="product-cell"><span class="item-num">02 / 学习</span><h3>任务与学习通</h3><p>清单、四象限、作业与通知<br>明确期限事项可转为任务</p></div><div class="product-cell"><span class="item-num">03 / 专注</span><h3>专注与时间记录</h3><p>番茄钟、自定义时长与补记<br>日程管理、日历文件交换</p></div><div class="product-cell"><span class="item-num">04 / 助手</span><h3>Poseidon</h3><p>可配置模型、生成任务草稿<br>核对后写入，保留执行记录</p></div><div class="product-cell"><span class="item-num">05 / V4.1 增量</span><h3>近 24 小时校园快讯</h3><p>公开来源采集、同原文合并<br>保留出处与覆盖状态</p></div><div class="product-cell"><span class="item-num">06 / 基础能力</span><h3>账号与个性化</h3><p>业务同步、可选微信快报<br>七主题、备份与删除恢复</p></div></div><div class="product-tag"><strong>信息 → 安排 → 行动 → 回顾</strong><span>将常用环节接成一条工作流</span></div>`},
 {id:'workflow',chapter:'02 团队与产品',title:'把一条作业通知，变成可执行的安排',label:'Hades 工作流演示',sub:'点击左侧步骤查看流程；本页使用合成示例，展示功能逻辑。',foot:'功能逻辑依据Hades手册；界面为演示示意，并非真实软件截图或实时操作',refs:['guide','validation'],note:'点击四个步骤演示闭环。特意保留“核对截止时间”和“保存后记录”，让老师看到技术如何帮助同学组织工作。此处不是现场连入学校系统，避免把示例当成真实数据。',html:`
  <div class="demo-layout content"><div class="demo-tabs" role="tablist" aria-label="工作流步骤" aria-orientation="vertical"><button class="demo-tab" id="step0" role="tab" aria-controls="demoPanel" aria-selected="true" data-step="0"><small>01 / 汇集</small>查看课程与通知</button><button class="demo-tab" id="step1" role="tab" aria-controls="demoPanel" aria-selected="false" tabindex="-1" data-step="1"><small>02 / 安排</small>核对任务草稿</button><button class="demo-tab" id="step2" role="tab" aria-controls="demoPanel" aria-selected="false" tabindex="-1" data-step="2"><small>03 / 行动</small>进入专注时段</button><button class="demo-tab" id="step3" role="tab" aria-controls="demoPanel" aria-selected="false" tabindex="-1" data-step="3"><small>04 / 回顾</small>保存与查看记录</button></div><div class="demo-screen" id="demoPanel" role="tabpanel" aria-labelledby="step0" tabindex="0"></div></div><div class="demo-bottom">Poseidon 使用已配置的模型服务与本地规则；关键时间、来源与最终操作由使用者核对。</div>`},
 {id:'reliability',chapter:'02 团队与产品',title:'把可维护、可核对，作为交付要求',label:'工程基础与责任边界',theme:'dark',sub:'已有版本验收记录，也明确保留尚未覆盖的真实使用场景。',foot:'数字为项目2026-09-30验收记录，本次未重跑Hades测试；不同类别不能直接相加',refs:['validation','v4','guide'],note:'这些数字是项目记录中的测试项和流程组数，不是本次路演网页的测试结果，也不代表完成学校信息安全审查。说明已有工程习惯，并主动指出真实多设备和安卓验收还需继续。',html:`
  <div class="three content"><div class="evidence-stat"><div class="big-number">121<small>项</small></div><h3>规则测试</h3><p>覆盖时间窗口、数据规则、<br>合并逻辑与历史缓存保护。</p></div><div class="evidence-stat"><div class="big-number">18<small>组</small></div><h3>桌面回归</h3><p>覆盖任务、计时、保存、<br>备份、托盘与重启保留。</p></div><div class="evidence-stat"><div class="big-number">13<small>组</small></div><h3>界面流程</h3><p>覆盖采集、分类、折叠保持<br>及主题入口等操作。</p></div></div><div class="boundary-strip"><div><b>已有设计</b>账号隔离、本机加密、删除恢复、执行记录；校园与学习通按只读方式连接。</div><div><b>仍需验证</b>公开信息全量覆盖不作保证；安卓实机、跨设备真实冲突恢复及部分授权待完成。</div></div>`},
 {id:'migration',chapter:'03 服务学院',title:'从个人试点，逐步走向学院认可的渠道',label:'基础设施与运行保障',sub:'在老师协调下对接医学院网络信息中心，按学校要求讨论接入、托管与维护。',foot:'后续规划，尚未获得网信中心接入或托管承诺；具体安排以学校审批与技术评估为准',refs:['v1','current','proposal'],note:'明确当前部分基础设施依赖个人服务器。迁移的核心是形成正式责任主体与规范渠道。应先盘点数据、权限和服务，再由网信中心评估路径，不能今天就承诺直接接入学校系统。',html:`
  <div class="migration content"><div class="phase"><span class="phase-no">01</span><h3>当前 · 私有云试点</h3><p>Hades 已有开发与内测基础。<br>部分服务仍由个人基础设施承载，需要持续维护与交接。</p><div class="deliverable">先整理：服务清单、数据范围、维护责任</div></div><div class="phase"><span class="phase-no">02</span><h3>拟议 · 正式技术评估</h3><p>请老师协助建立沟通渠道。<br>讨论接口权限、数据管理、运行资源与试点要求。</p><div class="deliverable">形成：需求说明、风险边界、可选方案</div></div><div class="phase"><span class="phase-no">03</span><h3>目标 · 官方认可渠道</h3><p>条件成熟后逐步迁移。<br>落实经认可的部署方式、账号权限、运维与人员交接。</p><div class="deliverable">以验收为门槛：小范围验证后再扩大</div></div></div><div class="bottom-line">学生团队承担需求整理与技术实践；学校系统接入与运行规则由相关部门指导确定。</div>`},
 {id:'campus',chapter:'03 服务学院',title:'智慧第二课堂 × 智慧综测',label:'拟议产品方向',sub:'从一次活动形成的报名、参与、证明和成果材料入手，减少重复整理。',foot:'业务流程示意，待团委确定规则；不代表已有平台或自动计分机制',refs:['v1','current','proposal'],note:'先连接活动数据与材料审核，不急于自动算分。第二课堂服务成长记录，综测按学院既定规则形成材料汇总。规则、认定和最终审核始终由老师确定；实际节省时间要通过试点评估。',html:`
  <div class="campus-chain content"><div class="campus-node"><span class="item-num">01</span><h3>活动发布</h3><p>组织方与项目类别<br>报名条件和材料要求</p></div><div class="campus-node"><span class="item-num">02</span><h3>报名参与</h3><p>参与信息归集<br>明确记录来源</p></div><div class="campus-node"><span class="item-num">03</span><h3>证明提交</h3><p>统一材料入口<br>保留原始凭证</p></div><div class="campus-node"><span class="item-num">04</span><h3>老师审核</h3><p>规则核对与认定<br>允许更正与补充</p></div><div class="campus-node"><span class="item-num">05</span><h3>成果沉淀</h3><p>个人成长记录<br>育人成果汇总</p></div></div><div class="campus-out"><div><h3>智慧第二课堂</h3><p>连接社会实践、志愿服务、文体科创与学生工作，形成可追溯的成长记录。</p></div><div><h3>智慧综测</h3><p>在既定规则下整理证明材料、辅助汇总与核对，保留人工审核和申诉入口。</p></div></div><div class="bottom-line">建议先选一类活动试点，测量材料完整度、重复录入量和审核用时，再决定扩展范围。</div>`},
 {id:'paths',chapter:'04 组织与合作',title:'两种组织路径，接受团委指导选择',label:'组织形式待讨论',sub:'根据学院需求确定组织规模与工作重心；两条路径都重视育人、纪律与成果交接。',foot:'30+为社团路径的拟议招募目标；团委机构人数与架构服从实际工作安排',refs:['v1','current'],note:'这里把选择权交给老师。社团适合公开招募和社区培养，信息技术组适合明确任务与高效交付。不要对小而精擅自指定人数，也不要把30+说成已有成员数。',html:`
  <table class="path-table content"><thead><tr><th></th><th>路径 A · 学生社团</th><th>路径 B · 团委信息技术组</th></tr></thead><tbody><tr><td>规模</td><td><span class="path-number">30+</span> 人，逐步扩充</td><td><strong>小而精</strong>，按任务配置</td></tr><tr><td>核心目标</td><td>开放社区与学生科技能力培养</td><td>团委数字化建设与技术支持</td></tr><tr><td>工作重点</td><td>项目实践、AI4Science科普、技术交流</td><td>需求承接、工具研发、维护与交付</td></tr><tr><td>参与方式</td><td>核心团队＋项目成员＋开放社区</td><td>明确岗位、责任人和任务周期</td></tr><tr><td>合作侧重</td><td>校内社群、校友导师、产学研交流</td><td>围绕团委与学院实际工作协调资源</td></tr></tbody></table><div class="bottom-line">组织形式可以调整，承担项目、完成交付与持续维护的责任保持清晰。</div>`},
 {id:'network',chapter:'04 组织与合作',title:'连接医学院场景与跨学科资源',label:'校内协作与校友网络',sub:'以学生项目为纽带，逐步搭建技术、学术与成长支持网络。',foot:'据V1：已开始接触思源极客同学；其余合作关系为拟拓展方向，未视为正式合作',refs:['v1','current'],note:'区分已经开始接触与正式合作。思源极客有接触基础，本部科协、导师和校友网络是希望拓展的方向。合作围绕具体项目与活动组织，避免只是列合作单位名称。',html:`
  <div class="network content"><div class="network-side"><div class="network-item"><span class="badge">接触基础</span><h3 style="margin-top:14px">本部思源极客</h3><p>已开始与同学接触<br>拟开展技术分享与项目交流</p></div><div class="network-item"><span class="badge plan">拟对接</span><h3 style="margin-top:14px">本部科协与技术社群</h3><p>交流工程方法<br>探索联合工作坊与活动</p></div></div><div class="network-core"><b>Med Stack</b><p>医学院真实需求<br>学生项目实践<br>跨学科共同成长</p><small>以具体项目连接资源</small></div><div class="network-side"><div class="network-item"><span class="badge plan">拟拓展</span><h3 style="margin-top:14px">实验室与科研团队</h3><p>在导师指导下<br>形成方法训练与研究入门机会</p></div><div class="network-item"><span class="badge plan">拟拓展</span><h3 style="margin-top:14px">荣昶同学会与校友</h3><p>邀请分享嘉宾与项目导师<br>连接医学、科技和产业经验</p></div></div></div><div class="bottom-line">学校培养学生 → 学生服务校园 → 校友反哺学生，形成长期的人才培养循环。</div>`},
 {id:'archive',chapter:'04 组织与合作',title:'让博医培养的过程，留下可持续的记录',label:'博医品牌 · 拟建项目',sub:'“山海有回声”——荣昶博医计划五期云上影像库。',foot:'影像库为建设设想；未提供授权影像，本演示使用信息结构示意',refs:['v1','current','proposal'],note:'强调影像库是博医课程、实践和交流的长期记录，不只是一次宣传成片。没有使用虚构活动照片。后续需要收集授权、明确署名与访问范围，并由老师审核面向基金会或公开展示的内容。',html:`
  <div class="two content" style="grid-template-columns:1.4fr 1fr"><div><div class="archive-hero">山海有回声</div><div class="archive-list"><div><b>课程</b><p>讲座与学习片段<br>留下思考与成长</p></div><div><b>实践</b><p>实践影像与故事<br>保存过程与成果</p></div><div><b>交流</b><p>师友连接与分享<br>延续共同记忆</p></div></div></div><div class="archive-side"><h3>一份记忆，三个价值</h3><p><strong>对同学</strong>：形成五期共同数字记忆。</p><p><strong>对团委</strong>：持续沉淀人才培养材料。</p><p><strong>对荣昶基金会与校友</strong>：在审核与授权后，展示育人成果。</p></div></div><div class="bottom-line">拟按活动归档，记录时间、来源与署名；明确授权、可见范围与长期维护责任。</div>`},
 {id:'industry',chapter:'04 组织与合作',title:'让同学看见：医学技术如何走向应用',label:'社团路径 · 产学研交流',sub:'在学院与指导老师把关下，逐步联系医药科技企业、科研机构及校友团队。',foot:'拟议交流与合作方向；尚未确定企业名单、合作协议或活动日期',refs:['v1','current','proposal'],note:'把企业宣讲组织成技术、科研、临床需求与成果转化的知识链。可以从公益分享和案例交流做起，条件成熟再探索企业命题与联合导师指导。合作对象和内容接受老师审核。',html:`
  <div class="industry-strip"><span>人工智能</span><span>生物医药</span><span>医学影像</span><span>医疗器械</span><span>数字医疗</span></div><div class="flow content"><div class="flow-step"><span class="step-index">先了解</span><h3>技术与产业前沿</h3><p>主题宣讲、案例分享<br>理解一线问题与方法</p></div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-step"><span class="step-index">再交流</span><h3>科研到实际应用</h3><p>讨论技术验证、工程实现<br>与医学应用需求</p></div><span class="flow-arrow" aria-hidden="true">→</span><div class="flow-step"><span class="step-index">条件成熟后</span><h3>共同指导学生项目</h3><p>探索企业命题与实践项目<br>连接科研导师、产业导师</p></div></div><div class="bottom-line">坚持公益性与育人导向；合作对象、活动内容和项目边界由学院与指导老师审核。</div>`},
 {id:'roadmap',chapter:'05 实施与建议',title:'按阶段推进，让每一步都有交付',label:'建议实施顺序',sub:'先确定组织与需求，再做小范围试点，依据反馈和验收结果逐步扩大。',foot:'建议路线图，未承诺具体日期、预算、审批结果或合作单位',refs:['proposal','v1'],note:'不用未商定的日期倒逼承诺，用阶段门槛推进。第一阶段先选组织路径和需求；第二阶段围绕Hades、一类活动和影像库做小试点；第三阶段根据验收与正式渠道情况扩展。',html:`
  <div class="timeline content"><div class="time-block"><span class="badge">阶段一 · 明确安排</span><h3>定方向、定接口、定责任</h3><p>讨论组织路径与指导机制<br>整理团委实际需求<br>准备 Hades 服务与数据清单</p><div class="gate"><b>阶段交付</b><br>需求清单、分工表、试点范围</div></div><div class="time-block"><span class="badge">阶段二 · 小范围试点</span><h3>用真实任务检验方案</h3><p>继续 Hades 内测与反馈整理<br>选一类第二课堂活动做原型<br>形成“山海有回声”归档样例</p><div class="gate"><b>阶段交付</b><br>可用原型、问题记录、老师反馈</div></div><div class="time-block"><span class="badge plan">阶段三 · 规范与扩展</span><h3>成熟一项，推进一项</h3><p>按评估结果对接官方渠道<br>依组织路径推进招募与培养<br>开展校内、校友和产学研交流</p><div class="gate"><b>阶段交付</b><br>验收记录、维护说明、交接材料</div></div></div><div class="bottom-line">以实际需求和阶段验收决定节奏，避免同时铺开过多项目。</div>`},
 {id:'closing',chapter:'05 实施与建议',title:'从具体事情开始，在老师指导下做好',label:'希望听取老师的意见',theme:'dark',foot:'Med Stack · 团队筹备汇报结束；后附数据来源与Hades边界，可由目录进入',refs:['v1','current','proposal'],note:'用三个可回答的问题结束：组织形式、优先试点、沟通接口。老师不需要在今天批准所有规划，我们希望先明确可以推进的第一步。感谢老师并留时间讨论。',html:`
  <div class="closing-title">从十个人、一个产品开始，<br>把学校的培养转化为建设能力。</div><div class="closing-asks"><div><span class="item-num" style="color:#dba3af">01 / 组织定位</span><b>哪条路径更适合学院？</b><p>学生社团，或团委信息技术组；<br>规模与职责按实际需要调整。</p></div><div><span class="item-num" style="color:#dba3af">02 / 优先任务</span><b>先解决哪一个真实问题？</b><p>从 Hades、第二课堂或影像库中，<br>选择边界明确的小范围试点。</p></div><div><span class="item-num" style="color:#dba3af">03 / 指导机制</span><b>如何建立沟通与验收？</b><p>请老师指导需求对接、部门协调<br>与阶段成果审核。</p></div></div><div class="closing-bottom">有正确方向，有组织纪律，有技术能力，能够承担实际任务。<br>谢谢各位老师。</div>`},
 {id:'references',chapter:'附录 · 数据依据',title:'关键数字与资料口径',label:'备查 01',sub:'主讲内容到第18页结束；本页供现场追问与会后复核。',foot:'核对日期：2026-10-01；点击“依据”查看原始链接与口径说明',refs:['economy','science','china','policy','education','v1','guide','validation'],note:'如老师问数字来源，可在此概览，再点依据查看原文。全球投资、使用率、文献数量及国内产业数据不可混用分母。未采用原稿中尚需进一步明确口径的专利比例、算力与开源下载占比。',html:`
  <table class="reference-table content"><thead><tr><th>展示内容</th><th>采用数值 / 状态</th><th>来源与口径</th></tr></thead><tbody><tr><td>全球企业 AI 投资</td><td>2025年5,817亿美元；同比约130%</td><td>AI Index 2026 第4章；原值5816.9亿美元、129.9%</td></tr><tr><td>组织 AI 使用率</td><td>2025年88%</td><td>AI Index 2026；仅指受调查组织</td></tr><tr><td>自然科学 AI 论文</td><td>2025年约8.0万篇；同比26%</td><td>AI Index 2026 第5章；约80,150篇</td></tr><tr><td>中国 AI 产业与应用</td><td>1.2万亿元以上 / 6200余家 / 制造业30%以上</td><td>工信部2026-03-06报道，数据为2025年</td></tr><tr><td>团队 / 内测群 / 招募目标</td><td>约10人 / 20余人 / 社团路径30+</td><td>前两项为V1自述，后一项为计划目标</td></tr><tr><td>Hades V4.1 与工程检查</td><td>121项规则 / 18组桌面 / 13组界面</td><td>本地手册与2026-09-30验证记录；非本轮复测</td></tr></tbody></table>`},
 {id:'boundaries',chapter:'附录 · 功能边界',title:'Hades 当前可以讲到哪里',label:'备查 02',sub:'用同一套口径区分已实现能力、配置条件与待完成事项。',foot:'依据V4.1手册及V4.0/V4.1验证记录；校园系统实际状态可能变化',refs:['guide','validation','v4'],note:'现场可以根据问题选讲。尤其不要把Canvas入口说成自动同步，不能把安卓调试包说成成熟多端发行，也不能把最近24小时快讯说成当天活动全量列表。',html:`
  <div class="limits content"><div class="limit"><h3>校园与学习通</h3><p>须本人官方登录；学校网络与权限可能影响连接。只读同步有范围限制，失败时保留缓存。</p></div><div class="limit"><h3>近 24 小时校园快讯</h3><p>按发布时间窗筛选公开来源；时间精度不足会提示。保留出处，不保证公众号全量覆盖。</p></div><div class="limit"><h3>Poseidon 与模型</h3><p>由模型服务、本地规则和受控功能组成。模型须配置；任务默认核对，自动写入需明确启用。</p></div><div class="limit"><h3>账号同步与云快报</h3><p>业务同步与可选微信快报是不同服务。电脑关闭后，云快报使用最后上传摘要，不持续抓取新通知。</p></div><div class="limit"><h3>Canvas 与 Android</h3><p>Canvas为官方入口，完整同步待OAuth授权。Android仍为V3.2调试包，实机验收待完成。</p></div><div class="limit"><h3>官方接入与新增平台</h3><p>网信中心对接、智慧综测和智慧第二课堂均属后续规划，需明确业务规则、权限与验收要求。</p></div></div><div class="bottom-line">返回第18页继续讨论：组织定位、首个试点、指导机制。</div>`}
];

const demoSteps = [
 {title:'在一处看到今天需要处理的事',body:'课表与近期有效通知汇集到工作台，关键事项保留来源和时间信息。',entry:'生理学课程作业：提交实验分析<br><span>合成示例 · 周五18:00截止 · 以学习平台原文为准</span>',foot:'期限不明确的消息保留“待确认”，不自动冒充精确截止时间。'},
 {title:'由信息生成可以核对的任务',body:'Poseidon 可生成任务草稿，使用者检查标题、期限、预计投入和优先级后保存。',entry:'任务：完成生理学实验分析<br><span>周五18:00前 · 预计90分钟 · 重要且紧急</span>',foot:'同一任务进入清单、四象限与日历；本页按钮仅切换演示步骤。'},
 {title:'在可用时段开始一段专注',body:'结合课表与截止安排，选择关联任务，设置本次专注时长并开始工作。',entry:'专注任务：完成生理学实验分析<br><span>本次计划25分钟 · 可暂停、结束后保存</span>',foot:'此处为静态流程示意；演示网页不会启动真实计时或修改Hades数据。'},
 {title:'把投入保存下来，再调整计划',body:'保存后的记录用于查看实际投入与完成情况；业务同步需开启并确认成功。',entry:'本次专注记录：25分钟（示例）<br><span>关联任务保留 · 下一步继续安排或标记完成</span>',foot:'不展示真实个人任务、课程、账号或专注历史。'}
];

const deck = document.getElementById('deck');
deck.innerHTML = slides.map((s,i)=>`<section class="slide ${s.theme||''}" data-index="${i}" id="slide-${s.id}" aria-labelledby="title-${s.id}" ${i?'hidden inert':''}><div class="eyebrow">${s.label}<span class="section-code">MED STACK / ${String(i+1).padStart(2,'0')}</span></div>${i?`<h2 id="title-${s.id}">${s.title}</h2>${s.sub?`<p class="sub">${s.sub}</p>`:''}`:`<span class="sr-only" id="title-${s.id}">${s.title}</span>`}${s.html}<footer class="foot"><span class="foot-label">${s.foot}</span><button class="source-button" data-source="${i}" aria-haspopup="dialog">依据</button><span class="folio">${String(i+1).padStart(2,'0')}</span></footer></section>`).join('');
const sections = [...document.querySelectorAll('.slide')];
const toc = document.getElementById('toc');
const sourceDialog = document.getElementById('sources');
const progress = document.querySelector('.progress');
progress.setAttribute('aria-valuemax',String(slides.length));
document.getElementById('tocGrid').innerHTML=slides.map((s,i)=>`<button class="toc-item" data-jump="${i}"><span>${String(i+1).padStart(2,'0')}</span>${i>=18?'附录 · ':''}${s.title}</button>`).join('');
let current = 0;
let wheelSum = 0;
let lastWheelAt = 0;
let wheelLockedUntil = 0;
let modalOpener;
const mobile = ()=>window.innerWidth<=760;
const modalOpen = ()=>toc.open||sourceDialog.open;

function resizeDeck(){
  if(mobile()) return;
  const scale=Math.max(.1,Math.min((window.innerWidth-32)/1600,(window.innerHeight-100)/900));
  document.documentElement.style.setProperty('--scale',String(scale));
  document.getElementById('frame').style.width=`${1600*scale}px`;
  document.getElementById('frame').style.height=`${900*scale}px`;
}
function showSlide(index,updateHash=true){
  const nextIndex=Math.max(0,Math.min(slides.length-1,index));
  const activeElement=document.activeElement;
  if(activeElement?.closest('.slide')&&nextIndex!==current) activeElement.blur();
  current=nextIndex;
  sections.forEach((s,i)=>{s.hidden=i!==current;s.inert=i!==current;});
  document.getElementById('counter').textContent=`${String(current+1).padStart(2,'0')} / ${slides.length}`;
  document.getElementById('chapterName').textContent=slides[current].chapter;
  document.getElementById('prev').disabled=current===0;
  document.getElementById('next').disabled=current===slides.length-1;
  document.getElementById('progressFill').style.width=`${(current+1)/slides.length*100}%`;
  progress.setAttribute('aria-valuenow',String(current+1));
  progress.setAttribute('aria-valuetext',`第${current+1}页，共${slides.length}页`);
  document.getElementById('noteText').textContent=slides[current].note;
  document.querySelectorAll('[data-jump]').forEach((b,i)=>{if(i===current)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  document.title=`${String(current+1).padStart(2,'0')} · ${slides[current].title} | Med Stack`;
  document.getElementById('viewport').scrollTop=0;
  if(updateHash)history.replaceState(null,'',`#${slides[current].id}`);
}
function readHash(){const i=slides.findIndex(s=>s.id===location.hash.slice(1));showSlide(i<0?0:i,false);}
function openModal(dialog,opener){modalOpener=opener;dialog.showModal();}
function openSources(i,opener){
  document.getElementById('sourceBody').innerHTML=slides[i].refs.map(key=>{
    const r=references[key];return `<div class="source-entry"><strong>${r.url?`<a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a>`:r.title}</strong><p>${r.detail}</p></div>`;
  }).join('');
  openModal(sourceDialog,opener);
}
function setDemoStep(index,focus=false){
  const step=demoSteps[index];
  document.querySelectorAll('[data-step]').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});
  const panel=document.getElementById('demoPanel');
  panel.setAttribute('aria-labelledby',`step${index}`);
  panel.innerHTML=`<div class="demo-top"><b>HADES / WORKFLOW</b><span>合成示例 · ${index+1} / 4</span></div><h3>${step.title}</h3><p>${step.body}</p><div class="demo-entry">${step.entry}</div><div class="demo-bottom">${step.foot}</div>`;
  if(focus)document.getElementById(`step${index}`).focus();
}
function toggleNotes(){const notes=document.getElementById('notes');notes.hidden=!notes.hidden;document.getElementById('notesButton').setAttribute('aria-pressed',String(!notes.hidden));}
async function toggleFullscreen(){
  try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
  catch{document.getElementById('announcement').textContent='当前浏览器未允许全屏，可使用浏览器全屏菜单或F11。';document.getElementById('fullButton').textContent='请用F11';}
}
document.getElementById('prev').addEventListener('click',()=>showSlide(current-1));
document.getElementById('next').addEventListener('click',()=>showSlide(current+1));
document.getElementById('tocButton').addEventListener('click',e=>openModal(toc,e.currentTarget));
document.getElementById('notesButton').addEventListener('click',toggleNotes);
document.getElementById('closeNotes').addEventListener('click',toggleNotes);
document.getElementById('fullButton').addEventListener('click',toggleFullscreen);
document.addEventListener('fullscreenchange',()=>{document.getElementById('fullButton').textContent=document.fullscreenElement?'退出全屏':'全屏';resizeDeck();});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.close).close()));
document.querySelectorAll('[data-source]').forEach(b=>b.addEventListener('click',()=>openSources(Number(b.dataset.source),b)));
document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{toc.close();showSlide(Number(b.dataset.jump));document.getElementById('tocButton').focus();}));
document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>setDemoStep(Number(b.dataset.step))));
for(const d of [toc,sourceDialog]){
  d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();});
  d.addEventListener('close',()=>{if(modalOpener?.isConnected&&!modalOpener.closest('[hidden]'))modalOpener.focus();wheelSum=0;wheelLockedUntil=performance.now()+400;});
}
document.addEventListener('keydown',e=>{
  if(e.ctrlKey||e.altKey||e.metaKey||e.isComposing||e.repeat)return;
  if(modalOpen())return; // native dialog handles Escape and traps focus
  if(e.target.closest('input,textarea,select,[contenteditable=true]'))return;
  if(e.key==='Escape'){if(!document.getElementById('notes').hidden)toggleNotes();return;}
  const tab=e.target.closest('[data-step]');
  if(tab&&['ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const i=Number(tab.dataset.step);setDemoStep((i+(e.key==='ArrowDown'?1:3))%4,true);return;}
  if(e.key===' '&&e.target.closest('button,a'))return;
  if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();showSlide(current+(e.shiftKey&&e.key===' '?-1:1));}
  else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();showSlide(current-1);}
  else if(e.key==='Home'){e.preventDefault();showSlide(0);}
  else if(e.key==='End'){e.preventDefault();showSlide(slides.length-1);}
  else if(e.key.toLowerCase()==='m'){e.preventDefault();openModal(toc,document.getElementById('tocButton'));}
  else if(e.key.toLowerCase()==='n'){e.preventDefault();toggleNotes();}
  else if(e.key.toLowerCase()==='f'){e.preventDefault();toggleFullscreen();}
});
document.getElementById('viewport').addEventListener('wheel',e=>{
  if(mobile()||modalOpen()||e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;
  e.preventDefault();
  const now=performance.now();
  if(now<wheelLockedUntil){wheelLockedUntil=now+180;return;}
  if(now-lastWheelAt>240||Math.sign(e.deltaY)!==Math.sign(wheelSum))wheelSum=0;
  lastWheelAt=now;
  wheelSum+=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?600:1);
  if(Math.abs(wheelSum)>65){showSlide(current+Math.sign(wheelSum));wheelSum=0;wheelLockedUntil=now+650;}
},{passive:false});
let touchStart=null;
document.getElementById('viewport').addEventListener('touchstart',e=>{if(e.touches.length===1&&!e.target.closest('button,a'))touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
document.getElementById('viewport').addEventListener('touchend',e=>{if(!touchStart||modalOpen())return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*1.5)showSlide(current+(dx<0?1:-1));},{passive:true});
window.addEventListener('resize',resizeDeck);
window.addEventListener('hashchange',readHash);
setDemoStep(0);
resizeDeck();
readHash();
