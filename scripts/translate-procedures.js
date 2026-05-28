import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const OUTPUT = path.join(DATA_DIR, 'procedure-translations.js');

const DICT = {
  ro: {
    'e': 'și', 'per': 'pentru', 'con': 'cu', 'non': 'nu', 'o': 'sau',
    'del': 'al', 'della': 'a', 'degli': 'ai', 'dei': 'ai', 'delle': 'ale',
    'di': 'de', 'in': 'în', 'a': 'la', 'da': 'din', 'su': 'pe', 'tra': 'între',
    'richiesta': 'cerere', 'presentare': 'prezenta', 'ottenere': 'obține',
    'ricevere': 'primi', 'compilare': 'completa',
    'documento': 'document', 'documenti': 'documente',
    'modulo': 'formular', 'certificato': 'certificat', 'certificati': 'certificate',
    'codice': 'cod', 'tessera': 'card',
    'ufficio': 'birou', 'sportello': 'ghișeu',
    'comune': 'comună', 'appuntamento': 'programare',
    'prenotare': 'rezerva', 'domanda': 'cerere',
    'pagamento': 'plată', 'contributo': 'contribuție',
    'importo': 'sumă', 'massimo': 'maxim', 'minimo': 'minim',
    'anno': 'an', 'annuale': 'anual', 'mensile': 'lunar',
    'rilascio': 'eliberare', 'rinnovo': 'reînnoire', 'scadenza': 'termen',
    'valido': 'valabil', 'obbligatorio': 'obligatoriu',
    'gratuito': 'gratuit', 'facile': 'ușor', 'media': 'medie', 'difficile': 'dificilă',
    'passaggio': 'transfer', 'proprietà': 'proprietate',
    'contratto': 'contract', 'locazione': 'închiriere',
    'registrazione': 'înregistrare', 'disdetta': 'reziliere',
    'rimborso': 'rambursare', 'detrazione': 'deducere',
    'deposito': 'depozit', 'cauzionale': 'cauțional',
    'esenzione': 'scutire', 'riduzione': 'reducere',
    'assicurazione': 'asigurare', 'patente': 'permis',
    'guida': 'conducere', 'revisione': 'inspecție tehnică',
    'iscrizione': 'înscriere', 'cancellazione': 'anulare',
    'lavoro': 'muncă', 'impresa': 'întreprindere',
    'agevolazione': 'facilitate', 'bonus': 'bonus', 'incentivo': 'stimulent',
    'successione': 'succesiune', 'eredità': 'moștenire',
    'firma': 'semnătură', 'digitale': 'digitală',
    'carta': 'card', 'identità': 'identitate',
    'elettronica': 'electronică', 'nazionale': 'național',
    'servizi': 'servicii', 'attivazione': 'activare',
    'utilizzo': 'utilizare', 'prepara': 'pregătește',
    'recati': 'mergi', 'consegna': 'livrare',
    'ritiro': 'colectare', 'conserva': 'păstrează',
    'verifica': 'verifică', 'scegli': 'alege',
    'registrati': 'înregistrează-te', 'accedi': 'accesează',
    'inserisci': 'introduce', 'completa': 'completează',
    'invia': 'trimite', 'allega': 'atașează',
    'scarica': 'descarcă', 'vai': 'mergi',
    'puoi': 'poți', 'serve': 'este nevoie',
    'tramite': 'prin', 'presso': 'la',
    'immediato': 'imediat', 'possibile': 'posibil',
    'necessario': 'necesar', 'specifico': 'specific',
    'generale': 'general', 'completo': 'complet',
    'provvisorio': 'provizoriu', 'definitiv': 'definitiv',
    'aggiornamento': 'actualizare', 'normativa': 'legislație',
  },
  sq: {
    'e': 'dhe', 'per': 'për', 'con': 'me', 'non': 'nuk', 'o': 'ose',
    'del': 'i', 'della': 'e', 'degli': 'të', 'dei': 'të', 'delle': 'të',
    'di': 'i', 'in': 'në', 'a': 'në', 'da': 'nga', 'su': 'mbi',
    'richiesta': 'kërkesë', 'presentare': 'paraqes', 'ottenere': 'marr',
    'ricevere': 'pranoj', 'compilare': 'plotësoj',
    'documento': 'dokument', 'documenti': 'dokumente',
    'modulo': 'formular', 'certificato': 'certifikatë',
    'codice': 'kod', 'tessera': 'kartë',
    'ufficio': 'zyrë', 'comune': 'bashki',
    'appuntamento': 'takim', 'prenotare': 'rezervoj',
    'domanda': 'kërkesë', 'pagamento': 'pagesë',
    'contributo': 'kontribut', 'importo': 'shumë',
    'massimo': 'maksimum', 'minimo': 'minimum',
    'anno': 'vit', 'annuale': 'vjetor', 'mensile': 'mujor',
    'rilascio': 'lëshim', 'rinnovo': 'rinovim', 'scadenza': 'afat',
    'valido': 'vlefshëm', 'obbligatorio': 'i detyrueshëm',
    'gratuito': 'falas', 'facile': 'lehtë', 'media': 'mesme', 'difficile': 'vështirë',
    'passaggio': 'kalim', 'proprietà': 'pronësi',
    'contratto': 'kontratë', 'locazione': 'qira',
    'registrazione': 'regjistrim', 'disdetta': 'anulim',
    'rimborso': 'rimbursim', 'detrazione': 'zbritje',
    'deposito': 'depozitë', 'cauzionale': 'garanci',
    'esenzione': 'përjashtim', 'assicurazione': 'sigurim',
    'patente': 'leje', 'guida': 'drejtim',
    'revisione': 'kontroll teknik', 'iscrizione': 'regjistrim',
    'lavoro': 'punë', 'impresa': 'ndërmarrje',
    'agevolazione': 'lehtësim', 'bonus': 'bonus',
    'successione': 'trashëgimi', 'firma': 'nënshkrim',
    'digitale': 'dixhital', 'carta': 'kartë',
    'identità': 'identitet', 'elettronike': 'elektronike',
    'servizi': 'shërbime', 'attivazione': 'aktivizim',
    'utilizzo': 'përdorim', 'prepara': 'përgatit',
    'recati': 'shko', 'consegna': 'dorëzim',
    'ritiro': 'marrje', 'conserva': 'mbaj',
    'verifica': 'verifiko', 'scegli': 'zgjidh',
    'registrati': 'regjistrohu', 'accedi': 'hyr',
    'inserisci': 'fut', 'completa': 'plotëso',
    'invia': 'dërgo', 'allega': 'bashkëngjit',
    'scarica': 'shkarko', 'vai': 'shko',
    'puoi': 'mund', 'serve': 'duhet',
  },
  zh: {
    'e': '和', 'per': '为', 'con': '用', 'non': '不', 'o': '或',
    'del': '的', 'della': '的', 'degli': '的', 'dei': '的', 'delle': '的',
    'di': '的', 'in': '在', 'a': '到', 'da': '从', 'su': '上',
    'richiesta': '申请', 'presentare': '提交', 'ottenere': '获得',
    'ricevere': '收到', 'compilare': '填写',
    'documento': '文件', 'documenti': '文件',
    'modulo': '表格', 'certificato': '证明',
    'codice': '代码', 'tessera': '卡',
    'ufficio': '办公室', 'comune': '市政府',
    'appuntamento': '预约', 'prenotare': '预订',
    'domanda': '申请', 'pagamento': '付款',
    'contributo': '补助', 'importo': '金额',
    'massimo': '最高', 'minimo': '最低',
    'anno': '年', 'annuale': '年度', 'mensile': '月度',
    'rilascio': '发放', 'rinnovo': '续期', 'scadenza': '截止日期',
    'valido': '有效', 'obbligatorio': '必须',
    'gratuito': '免费', 'facile': '简单', 'media': '中等', 'difficile': '困难',
    'passaggio': '过户', 'proprietà': '所有权',
    'contratto': '合同', 'locazione': '租赁',
    'registrazione': '登记', 'disdetta': '解约',
    'rimborso': '退款', 'detrazione': '扣除',
    'deposito': '押金', 'cauzionale': '保证金',
    'esenzione': '免除', 'assicurazione': '保险',
    'patente': '驾照', 'guida': '驾驶',
    'revisione': '年检', 'iscrizione': '注册',
    'lavoro': '工作', 'impresa': '企业',
    'agevolazione': '优惠', 'bonus': '奖金',
    'successione': '继承', 'firma': '签名',
    'digitale': '数字', 'carta': '卡',
    'identità': '身份', 'elettronica': '电子',
    'servizi': '服务', 'attivazione': '激活',
    'utilizzo': '使用', 'prepara': '准备',
    'recati': '前往', 'consegna': '提交',
    'ritiro': '领取', 'conserva': '保存',
    'verifica': '核实', 'scegli': '选择',
    'registrati': '注册', 'accedi': '登录',
    'inserisci': '输入', 'completa': '完成',
    'invia': '发送', 'allega': '附件',
    'scarica': '下载', 'vai': '前往',
    'puoi': '可以', 'serve': '需要',
  },
  ar: {
    'e': 'و', 'per': 'لـ', 'con': 'مع', 'non': 'لا', 'o': 'أو',
    'del': 'من', 'della': 'من', 'degli': 'من', 'dei': 'من', 'delle': 'من',
    'di': 'من', 'in': 'في', 'a': 'إلى', 'da': 'من',
    'richiesta': 'طلب', 'presentare': 'تقديم', 'ottenere': 'الحصول',
    'ricevere': 'استلام', 'compilare': 'تعبئة',
    'documento': 'وثيقة', 'documenti': 'وثائق',
    'modulo': 'نموذج', 'certificato': 'شهادة',
    'codice': 'رمز', 'tessera': 'بطاقة',
    'ufficio': 'مكتب', 'comune': 'بلدية',
    'appuntamento': 'موعد', 'prenotare': 'حجز',
    'domanda': 'طلب', 'pagamento': 'دفع',
    'contributo': 'مساهمة', 'importo': 'مبلغ',
    'massimo': 'أقصى', 'minimo': 'أدنى',
    'anno': 'سنة', 'annuale': 'سنوي', 'mensile': 'شهري',
    'rilascio': 'إصدار', 'rinnovo': 'تجديد', 'scadenza': 'موعد نهائي',
    'valido': 'صالح', 'obbligatorio': 'إجباري',
    'gratuito': 'مجاني', 'facile': 'سهل', 'media': 'متوسط', 'difficile': 'صعب',
    'passaggio': 'نقل', 'proprietà': 'ملكية',
    'contratto': 'عقد', 'locazione': 'إيجار',
    'registrazione': 'تسجيل', 'disdetta': 'إلغاء',
    'rimborso': 'استرداد', 'detrazione': 'خصم',
    'deposito': 'وديعة', 'cauzionale': 'تأمين',
    'esenzione': 'إعفاء', 'assicurazione': 'تأمين',
    'patente': 'رخصة', 'guida': 'قيادة',
    'revisione': 'فحص فني', 'iscrizione': 'تسجيل',
    'lavoro': 'عمل', 'impresa': 'مؤسسة',
    'agevolazione': 'تسهيل', 'bonus': 'مكافأة',
    'successione': 'إرث', 'firma': 'توقيع',
    'digitale': 'رقمي', 'carta': 'بطاقة',
    'identità': 'هوية', 'elettronica': 'إلكترونية',
    'servizi': 'خدمات', 'attivazione': 'تفعيل',
    'utilizzo': 'استخدام', 'prepara': 'حضر',
    'recati': 'اذهب', 'consegna': 'تسليم',
    'ritiro': 'استلام', 'conserva': 'احتفظ',
    'verifica': 'تحقق', 'scegli': 'اختر',
    'registrati': 'سجل', 'accedi': 'ادخل',
    'inserisci': 'أدخل', 'completa': 'أكمل',
    'invia': 'أرسل', 'allega': 'أرفق',
    'scarica': 'حمل', 'vai': 'اذهب',
    'puoi': 'يمكنك', 'serve': 'يلزم',
  }
};

function applyDict(text, lang) {
  if (!text || typeof text !== 'string') return text;
  const map = DICT[lang];
  if (!map) return text;
  let result = text;
  const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
  for (const [it, translated] of entries) {
    const regex = new RegExp(`(?<=^|[\\s,;.!?'"])${it.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=[\\s,;.!?'"]|$)`, 'gi');
    result = result.replace(regex, translated);
  }
  return result;
}

const translationKeys = ['title', 'subtitle', 'estimatedTime', 'cost'];

const files = fs.readdirSync(DATA_DIR).filter(f => f.startsWith('proc-') && f.endsWith('.js'));
const translations = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
  const procRegex = /{\s*id:\s*'([^']+)'([\s\S]*?)}(?=\s*,\s*{|\s*\];)/g;
  let match;

  while ((match = procRegex.exec(content)) !== null) {
    const procId = match[1];
    const block = match[2];
    const procTranslations = {};

    // Extract simple string fields
    for (const key of translationKeys) {
      const valRegex = new RegExp(`(?:^|,)\\s*${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`, 'm');
      const valMatch = block.match(valRegex);
      if (valMatch && valMatch[1]) {
        const itVal = valMatch[1].replace(/\\'/g, "'");
        procTranslations[key] = { it: itVal };
        for (const lang of ['ro', 'sq', 'zh', 'ar']) {
          procTranslations[key][lang] = applyDict(itVal, lang);
        }
      }
    }

    // Extract step titles
    const stepTitleRegex = /title:\s*'((?:[^'\\]|\\.)*)'/g;
    let stMatch;
    let stepIdx = 0;
    while ((stMatch = stepTitleRegex.exec(block)) !== null) {
      const itVal = stMatch[1].replace(/\\'/g, "'");
      const key = `step_${stepIdx}_title`;
      procTranslations[key] = { it: itVal };
      for (const lang of ['ro', 'sq', 'zh', 'ar']) {
        procTranslations[key][lang] = applyDict(itVal, lang);
      }
      stepIdx++;
    }

    // Extract official link labels
    const linkLabelRegex = /label:\s*'((?:[^'\\]|\\.)*)'/g;
    let llMatch;
    let linkIdx = 0;
    while ((llMatch = linkLabelRegex.exec(block)) !== null) {
      const itVal = llMatch[1].replace(/\\'/g, "'");
      if (!itVal.includes('INPS') && !itVal.includes('Agenzia')) {
        const key = `link_${linkIdx}_label`;
        procTranslations[key] = { it: itVal };
        for (const lang of ['ro', 'sq', 'zh', 'ar']) {
          procTranslations[key][lang] = applyDict(itVal, lang);
        }
        linkIdx++;
      }
    }

    if (Object.keys(procTranslations).length > 0) {
      translations[procId] = procTranslations;
    }
  }
}

const output = `// Auto-generated — procedure translations for RO, SQ, ZH, AR
export const procedureTranslations = ${JSON.stringify(translations, null, 2)};
`;

fs.writeFileSync(OUTPUT, output);
console.log(`✓ Wrote ${OUTPUT}`);
console.log(`Translated ${Object.keys(translations).length} procedures.`);

let totalFields = 0;
for (const pid of Object.keys(translations)) {
  totalFields += Object.keys(translations[pid]).length;
}
console.log(`Total fields translated: ${totalFields} × 4 languages = ${totalFields * 4} strings`);
