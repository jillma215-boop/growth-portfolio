'use client';
import { report } from '@/data/mockData';
import { useI18n } from '@/lib/i18n';
import { Page } from '@/components/common/Page';
export function Reports(){const {locale,dict}=useI18n();return <Page title={dict.nav.reports} kicker={dict.weekly}><div className="glass rounded-[2rem] bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-8 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950">{report.sections.map(s=><section className="border-b border-slate-200 py-5 last:border-0 dark:border-white/10" key={s.title[locale]}><h2 className="text-xl font-black">{s.title[locale]}</h2><p className="mt-2 text-slate-600 dark:text-slate-300">{s.body[locale]}</p></section>)}<h2 className="mt-6 text-xl font-black">{dict.actions}</h2><ol className="mt-3 grid gap-3 md:grid-cols-3">{report.actions[locale].map((a,i)=><li className="rounded-2xl bg-white p-4 font-bold dark:bg-slate-800" key={a}>{i+1}. {a}</li>)}</ol></div></Page>}
