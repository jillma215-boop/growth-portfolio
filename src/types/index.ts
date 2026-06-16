export type Locale = 'en-US' | 'ja-JP' | 'zh-CN';
export type PageKey = 'dashboard'|'timeline'|'goals'|'portfolio'|'reports'|'share'|'settings';
export type GoalCategory = 'Entrance Exam'|'Certification'|'Career'|'Personal Branding'|'Fitness'|'Writing'|'Programming';
export type Localized<T> = Record<Locale,T>;

export interface GrowthScoreBreakdown{label:Localized<string>;points:number;detail:Localized<string>}
export interface TodayGrowthSignal{label:Localized<string>;value:Localized<string>;impact:number;tone:'sky'|'mint'|'violet'|'amber'}
export interface AiRecommendation{title:Localized<string>;body:Localized<string>;completed:boolean;impact:number}
export interface GrowthEvent{avatar:string;category:Localized<string>;event:Localized<string>;note:Localized<string>;score:number;likes:number;comments:number;kind:'milestone'|'goal'|'recommendation'|'reflection'}
export interface Goal{name:Localized<string>;category:Localized<string>;progress:number;remaining:Localized<string>;lastEvent:Localized<string>;nextAction:Localized<string>;growthScore:number;milestones:number}
export interface PortfolioMilestone{date:string;title:Localized<string>;detail:Localized<string>;score:number}
export interface ContributionDay{date:string;score:number}
