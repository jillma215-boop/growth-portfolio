import type { AiRecommendation, ContributionDay, Goal, GrowthEvent, GrowthScoreBreakdown, Localized, PortfolioMilestone, TodayGrowthSignal } from '@/types';

export const hero = {
  question:{'en-US':'How am I growing today?','ja-JP':'今日、私はどう成長している？','zh-CN':'今天我正在如何成长？'},
  goal:{'en-US':'Become exam-ready, confident, and consistent','ja-JP':'試験に強く、自信があり、継続できる自分になる','zh-CN':'成为准备充分、自信且持续成长的人'},
  remaining:{'en-US':'42 days to next proof point','ja-JP':'次の成長証明まで42日','zh-CN':'距离下一个成长证明42天'},
  progress:68,
  growthScore:12,
  streak:12,
  coach:{'en-US':'Your strongest growth is vocabulary recall and publishing consistency. The next unlock is listening confidence: complete one focused recommendation today for +3 growth score.','ja-JP':'語彙定着と発信の継続が最も伸びています。次の成長鍵はリスニングの自信です。今日おすすめを1つ完了すると成長スコア+3。','zh-CN':'你最明显的成长是词汇记忆和内容持续输出。下一步是提升听力自信：今天完成一个AI建议可获得成长分+3。'}
};

export const growthScoreBreakdown: GrowthScoreBreakdown[] = [
  {label:{'en-US':'Goal progress','ja-JP':'目標進捗','zh-CN':'目标进展'},points:5,detail:{'en-US':'Main goal moved from 63% to 68%.','ja-JP':'メイン目標が63%から68%へ前進。','zh-CN':'主要目标从63%推进到68%。'}},
  {label:{'en-US':'Milestone achieved','ja-JP':'マイルストーン達成','zh-CN':'达成里程碑'},points:3,detail:{'en-US':'First mock section above target accuracy.','ja-JP':'模試セクションで初めて目標正答率を突破。','zh-CN':'首次模拟分项超过目标正确率。'}},
  {label:{'en-US':'Consistency','ja-JP':'継続力','zh-CN':'持续性'},points:2,detail:{'en-US':'12-day growth streak protected.','ja-JP':'12日連続の成長ストリークを維持。','zh-CN':'保持12天成长连续记录。'}},
  {label:{'en-US':'AI recommendation completed','ja-JP':'AIおすすめ完了','zh-CN':'完成AI建议'},points:2,detail:{'en-US':'Reviewed error patterns before moving on.','ja-JP':'次へ進む前にミス傾向を復習。','zh-CN':'继续前复盘了错误模式。'}}
];

export const todaySignals: TodayGrowthSignal[] = [
  {label:{'en-US':'Confidence','ja-JP':'自信','zh-CN':'信心'},value:{'en-US':'+8% after mock review','ja-JP':'模試復習後 +8%','zh-CN':'模拟复盘后 +8%'},impact:4,tone:'sky'},
  {label:{'en-US':'Skill depth','ja-JP':'スキル深度','zh-CN':'技能深度'},value:{'en-US':'12 error patterns converted','ja-JP':'12個のミス傾向を改善','zh-CN':'转化12个错误模式'},impact:3,tone:'mint'},
  {label:{'en-US':'Public proof','ja-JP':'公開実績','zh-CN':'公开证明'},value:{'en-US':'Reflection note published','ja-JP':'振り返りノート公開','zh-CN':'发布复盘笔记'},impact:2,tone:'violet'},
  {label:{'en-US':'Streak','ja-JP':'連続成長','zh-CN':'连续成长'},value:{'en-US':'12 days becoming better','ja-JP':'12日連続で前進','zh-CN':'连续12天变好'},impact:3,tone:'amber'}
];

export const aiRecommendations: AiRecommendation[] = [
  {title:{'en-US':'Protect a 20-minute listening block','ja-JP':'20分のリスニング枠を守る','zh-CN':'保留20分钟听力训练'},body:{'en-US':'This is the highest-leverage gap before your next proof point.','ja-JP':'次の成長証明に向けて最も効果が高い弱点です。','zh-CN':'这是下一个证明点前杠杆最高的短板。'},completed:false,impact:3},
  {title:{'en-US':'Turn 3 misses into a reusable rule','ja-JP':'3つのミスを再利用できるルールに変える','zh-CN':'将3个错误变成可复用规则'},body:{'en-US':'Capture the insight, not the time spent.','ja-JP':'使った時間ではなく、得た洞察を残しましょう。','zh-CN':'记录洞察，而不只是投入时间。'},completed:true,impact:2}
];

export const timeline: GrowthEvent[] = [
 {avatar:'A',kind:'milestone',category:{'en-US':'Certification','ja-JP':'資格','zh-CN':'认证'},event:{'en-US':'First mock section above target accuracy','ja-JP':'模試セクションで初めて目標正答率を突破','zh-CN':'首次模拟分项超过目标正确率'},note:{'en-US':'A visible proof that strategy is compounding, not just activity increasing.','ja-JP':'活動量ではなく戦略が複利化している証明。','zh-CN':'证明策略正在复利增长，而不只是行动增加。'},score:3,likes:128,comments:18},
 {avatar:'M',kind:'goal',category:{'en-US':'Personal Branding','ja-JP':'個人ブランド','zh-CN':'个人品牌'},event:{'en-US':'Reached 1000 followers through useful reflections','ja-JP':'有益な振り返りでフォロワー1000人に到達','zh-CN':'通过有价值复盘达到1000粉丝'},note:{'en-US':'Ten growth notes created a visible trust signal.','ja-JP':'10本の成長ノートが信頼のシグナルになりました。','zh-CN':'10篇成长笔记建立了清晰信任信号。'},score:4,likes:342,comments:44},
 {avatar:'K',kind:'reflection',category:{'en-US':'Fitness','ja-JP':'フィットネス','zh-CN':'健身'},event:{'en-US':'Energy improved after a recovery-first week','ja-JP':'回復重視の1週間で活力が改善','zh-CN':'恢复优先的一周后精力提升'},note:{'en-US':'The meaningful change was better sleep and energy, not a logged workout count.','ja-JP':'意味のある変化は記録数ではなく睡眠と活力の改善。','zh-CN':'真正有意义的是睡眠和精力改善，而非训练次数。'},score:5,likes:87,comments:9}
];

export const goals: Goal[] = ['Entrance Exam','Certification','Career','Personal Branding','Fitness','Writing','Programming'].map((c,i)=>({name:[{'en-US':'Pass Eiken Pre-2 with confidence','ja-JP':'自信を持って英検準2級に合格','zh-CN':'自信通过英检准2级'},{'en-US':'Build AI certificate portfolio','ja-JP':'AI資格ポートフォリオ構築','zh-CN':'构建AI认证作品集'},{'en-US':'Publish technical growth essays','ja-JP':'技術成長エッセイ公開','zh-CN':'发布技术成长文章'}][i%3],category:{'en-US':c,'ja-JP':['受験','資格','キャリア','個人ブランド','フィットネス','執筆','プログラミング'][i],'zh-CN':['升学考试','认证','职业','个人品牌','健身','写作','编程'][i]},progress:[68,44,72,59,36,81,51][i],remaining:{'en-US':`${[42,90,18,120,60,30,75][i]} days to proof`,'ja-JP':`成長証明まで${[42,90,18,120,60,30,75][i]}日`,'zh-CN':`距离证明${[42,90,18,120,60,30,75][i]}天`},lastEvent:{'en-US':['12-day growth streak','Completed first proof milestone','Published 10 reflection notes'][i%3],'ja-JP':['12日連続成長','最初の証明マイルストーン完了','振り返りノート10本公開'][i%3],'zh-CN':['连续成长12天','完成首个证明里程碑','发布10篇复盘笔记'][i%3]},nextAction:{'en-US':'Create the next smallest proof of becoming better.','ja-JP':'成長していることを示す次の最小証明を作りましょう。','zh-CN':'创造下一个“正在变好”的最小证明。'},growthScore:[12,6,9,8,5,10,7][i],milestones:[4,2,5,3,2,6,3][i]}));

export const milestones: PortfolioMilestone[] = ['2026.06','2026.07','2026.08','2026.09'].map((date,i)=>({date,title:[{'en-US':'Started a growth journey toward exam confidence','ja-JP':'試験への自信を育てる成長ジャーニー開始','zh-CN':'开启通往考试自信的成长旅程'},{'en-US':'Vocabulary became a visible strength','ja-JP':'語彙が見える強みに変化','zh-CN':'词汇成为可见优势'},{'en-US':'First mock test over 70%','ja-JP':'模試で初めて70%突破','zh-CN':'首次模拟测试超过70%'},{'en-US':'Passed Eiken Pre-2 and shared the journey','ja-JP':'英検準2級に合格し歩みを共有','zh-CN':'通过英检准2级并分享旅程'}][i],detail:{'en-US':'A milestone that shows visible change, not just logged activity.','ja-JP':'活動記録ではなく、変化を示すマイルストーン。','zh-CN':'展示真实变化，而非只记录行动。'},score:[2,4,5,8][i]}));

export const contributionDays: ContributionDay[] = Array.from({length:35},(_,i)=>({date:`2026-06-${String(i+1).padStart(2,'0')}`,score:[0,1,2,3,4,5][(i*i+3)%6]}));
export const report = {sections:['This Week’s Growth','Strongest Progress','Weak Areas','Goal Risk','AI Recommendation'].map((s,i)=>({title:{'en-US':s,'ja-JP':['今週の成長','最も強い進歩','弱い領域','目標リスク','AIおすすめ'][i],'zh-CN':['本周成长','最强进步','薄弱区域','目标风险','AI建议'][i]} as Localized<string>,body:{'en-US':['Confidence signals increased because evidence is now tied to goals.','Writing output improved 38% with clearer reflection structure.','Listening confidence is below the pace needed for the next proof point.','Medium: progress is healthy but uneven across growth areas.','Protect a daily 20-minute listening block and convert errors into rules every Friday.'][i],'ja-JP':['証拠が目標と結びつき、自信のシグナルが増加。','振り返り構成が明確になり、執筆アウトプットが38%改善。','次の成長証明に必要なペースよりリスニングの自信が不足。','中：進捗は良好ですが成長領域間に偏りがあります。','毎日20分のリスニング枠を守り、金曜にミスをルール化しましょう。'][i],'zh-CN':['证据与目标相连后，信心信号增加。','复盘结构更清晰，写作输出提升38%。','听力信心低于下一个证明点所需节奏。','中等：整体健康，但成长领域之间不均衡。','每天保留20分钟听力训练，并每周五把错误转成规则。'][i]}})),actions:{'en-US':['Complete one listening recommendation','Review 12 missed patterns','Publish one growth reflection'],'ja-JP':['リスニングおすすめを1つ完了','ミス傾向12個を復習','成長の振り返りを1本公開'],'zh-CN':['完成一个听力建议','复盘12个错误模式','发布一篇成长复盘']}};
