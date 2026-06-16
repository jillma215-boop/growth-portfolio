import type { Config } from 'tailwindcss';
export default {content:['./src/**/*.{ts,tsx}'],darkMode:'class',theme:{extend:{fontFamily:{sans:['var(--font-inter)','ui-sans-serif','system-ui']},colors:{mint:'#3FD3A2',sky:'#4A8DF8',ink:'#102033'},boxShadow:{soft:'0 20px 60px -28px rgba(30,64,175,.35)'}}},plugins:[]} satisfies Config;
