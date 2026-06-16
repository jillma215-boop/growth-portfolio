'use client';
import { localeNames, locales, useI18n } from '@/lib/i18n';
export default function LanguageSwitcher(){const {locale,setLocale}=useI18n();return <select aria-label="Language" className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-slate-900" value={locale} onChange={e=>setLocale(e.target.value as typeof locale)}>{locales.map(l=><option key={l} value={l}>{localeNames[l]}</option>)}</select>}
