'use client';
import { useI18n } from '@/lib/i18n';
import { Page } from '@/components/common/Page';
export function Settings(){const {dict}=useI18n();return <Page title={dict.nav.settings} kicker="Personalize your growth OS"><div className="grid gap-4 md:grid-cols-2"><Setting label={dict.language}/><Setting label={dict.theme} value={`${dict.light} / ${dict.dark}`}/><Setting label={dict.profile} value="Aiko Tanaka"/><Setting label={dict.goalSelect} value="Become exam-ready, confident, and consistent"/></div></Page>}
function Setting({label,value}:{label:string;value?:string}){return <div className="glass rounded-[2rem] p-6"><p className="text-sm text-slate-500">{label}</p><b className="mt-2 block text-2xl">{value||'English / 日本語 / 简体中文'}</b></div>}
