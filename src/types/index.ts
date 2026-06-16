export type Locale = 'en-US' | 'ja-JP' | 'zh-CN';
export type PageKey = 'dashboard'|'timeline'|'goals'|'portfolio'|'reports'|'share'|'settings';
export type GoalCategory = 'Entrance Exam'|'Certification'|'Career'|'Personal Branding'|'Fitness'|'Writing'|'Programming';
export type Localized<T> = Record<Locale,T>;
export interface GrowthEvent{avatar:string;category:Localized<string>;event:Localized<string>;note:Localized<string>;likes:number;comments:number}
export interface Goal{name:Localized<string>;category:Localized<string>;progress:number;remaining:Localized<string>;lastEvent:Localized<string>;nextAction:Localized<string>}
export interface PortfolioMilestone{date:string;title:Localized<string>;detail:Localized<string>}
