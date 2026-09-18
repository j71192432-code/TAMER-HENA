// ==========================================
// 1. إعدادات Google Sheets (جوجل شيت)
// ==========================================
// طريقة (أ): معرف شيت جوجل (Google Sheet ID) أو رابط الشيت العام
const GOOGLE_SHEET_ID = '1O_Ye0YA-8F7WVRWJRi1ox8zFfJ5JI8tdJgxUjcUVbSY'; 
const GOOGLE_SHEET_NAME = 'Sheet1'; // اسم ورقة العمل (الافتراضي Sheet1)

// طريقة (ب): رابط API لـ Google Sheets (مثل Google Apps Script / SheetDB / OpenSheet)
const GOOGLE_SHEET_API_URL = ''; 

// ==========================================
// 2. إعدادات Supabase (اختياري / احتياطي)
// ==========================================
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';

// البيانات الافتراضية للمنيو (تعمل كاحتياطي في حال عدم الاتصال بقاعدة البيانات)
let categories = [
 {name:'قهوة ساخنة',sub:'Hot Coffee & Hot Espresso',img:'cat-hotcoffee.svg',items:[['قهوة تركي',30,'سنجل'],['قهوة تركي',40,'دبل'],['قهوة اسبشيل',40,'سنجل'],['قهوة اسبشيل',50,'دبل'],['قهوة فرنساوي',50],['قهوة بندق',55],['قهوة نوتيلا',60],['إسبريسو',35,'سنجل'],['إسبريسو',45,'دبل'],['ريستريتو',35,'سنجل'],['ريستريتو',45,'دبل'],['ميكاتو',40,'سنجل'],['ميكاتو',50,'دبل'],['أفوكاتو',40,'سنجل'],['أفوكاتو',50,'دبل'],['كون بانا',40],['كورتادو',50,'كلاسيك أو موكا'],['كابتشينو',75],['لاتيه',65],['فلات وايت',60],['أمريكانو',50,'كلاسيك أو بلاك'],['نسكافيه',55,'كلاسيك أو بلاك'],['هوت شوكليت',70,'دارك أو وايت'],['هوت شوكليت مارشميلو',80],['هوت موكا',60,'دارك أو وايت']]},
 {name:'فرابيه وآيس كوفي',sub:'قهوة باردة ومشروبات مثلجة',img:'cat-frappuccino.svg',items:[['فرابيه كراميل',85],['فرابتشينو كلاسيك',75],['فرابيه موكاتشينو',85],['فرابيه لوتس ستروبري',85],['فانيلا فرابتشينو',70],['فرابيه بستشيو',100],['آيس موكا',80,'وايت أو دارك'],['آيس أمريكان',55],['آيس كوفي',65],['آيس كراميل ميكاتو',80],['آيس سبينش لاتيه',80],['آيس ماتش لاتيه',90],['ستروبري ماتش لاتيه',95],['ماتش بستشيو',110],['إيكا آيس كوفي',85],['آيس نيكتو أرش',75]]},
 {name:'موهيتو فيزي',sub:'موهيتو وبوبا',img:'cat-mojito.svg',items:[['موهيتو كلاسيك',65],['موهيتو فراولة، خوخ، كيوي',70],['موهيتو بلوبيري، باشون فروت',70],['موهيتو أمري باشون',70],['موهيتو شيري بيري',70],['موهيتو ريد بول',85],['هامر ريد بول',95],['بوبا ستروبري',70],['بوبا بلوبيري',70],['بوبا باشون فروت',70],['بوبا كولا',70],['بوبا تفاح أخضر',70],['ميلك تشيك بوبا',85,'ستروبري، بلوبيري، باشون فروت']]},
 {name:'عصائر فريش',sub:'عصائر طازجة',img:'cat-juice.svg',items:[['مانجو فريش',65],['جوافة فريش',55],['فراولة فريش',60],['برتقال فريش',60],['موز باللبن',50],['جوافة باللبن',60],['فراولة باللبن',65],['بلح موز باللبن',65],['بلح باللبن',50],['ليمون فريش',40],['ليمون نعناع فريش',45],['برتقال بالجزر',60],['بطيخ فريش',60],['بطيخ نعناع فريش',65],['جوافة نعناع فريش',65],['أناناس فريش',70],['كيوي فريش',80],['أفوكادو فريش',90]]},
 {name:'زبادي وميلك شيك',sub:'نكهات كريمية باردة',img:'cat-milkshake.svg',items:[['زبادي كلاسيك',60],['زبادي عسل',65],['زبادي فواكه',80],['زبادي',75,'مانجو، خوخ، فراولة، موز'],['زبادي',80,'بلوبيري أو باشون فروت'],['ميلك تشيك كلاسيك',75,'فانيلا، شوكولاتة، كراميل، مانجو، فراولة، كيوي'],['ميلك تشيك ميجا',80],['ميلك تشيك كونو شيبس',80],['ميلك تشيك',85,'أوريو، كيت كات، لوتس، نوتيلا، سنيكرز'],['ميلك تشيك بستشيو',95],['ميلك تشيز كيك',135,'شوكولاتة، كراميل، مانجو، فراولة']]},
 {name:'مشروبات غازيه',sub:'آيس كريم ومشروبات غازية',img:'cat-icecream.svg',items:[['آيس كريم بول',30],['آيس كريم ٣ بول',60,'مانجو، فراولة، شوكليت'],['أوريو مادنس',85],['تشيز مادنس',115],['بيبسي',35],['سفن أب',35],['توست',35],['فيروز',40],['بيريل',40],['فيوري',35],['شويبس',35],['ميرندا',35,'تفاح أو برتقال'],['ريد بول',80],['مياه',10]]},
 {name:'الشاي والأعشاب',sub:'مشروبات دافئة',img:'cat-tea.svg',items:[['شاي أحمر',20],['شاي أخضر',20],['شاي باللبن',30],['شاي أحمد تي',25],['شاي كرك',40],['شاي بالنكهات',30],['قرفة',25],['جنزبيل',25],['شاي زارده بارد',50],['ينسون ونعناع وكركديه وليمون',20],['هوت سيدر',45],['كوكتيل أعشاب صيدلية',50],['هوت سحلب مكسرات',60],['هوت سحلب فاكهة',80],['قرفة باللبن',45],['شاي أحمر نعناع',25]]},
 {name:'سموزي وكوكتيل',sub:'سموزي ومكس فريش',img:'cat-smoothie.svg',items:[['سموزي مانجو',65],['سموزي فراولة',60],['سموزي ليمون',50],['سموزي ليمون نعناع',55],['سموزي بطيخ',60],['سموزي كيوي',80],['سموزي بلوبيري',70],['سموزي ميكس بيري',70],['سموزي باشون فروت',70],['سموزي بينا بول',80],['سموزي خوخ',70],['سموزي بطيخ نعناع',65],['سموزي بيري شيري',80],['البوم أفوكادو',120,'أفوكادو، كيوي، جريب فروت'],['٦ بور أفوكادو',135,'أفوكادو وريد بول'],['إيكا الخميس',140,'أفوكادو، كيوي، موز، ريد بول'],['٦× باور',120,'أفوكادو، كيوي، موز، بلح'],['إيكا كوكتيل',90,'كيوي، موز، تفاح، مانجو، فراولة'],['فروت سلاد',90,'مانجو، موز، تفاح، فراولة'],['فخفخينا',85,'أناناس، موز، كيوي، مانجو'],['فلوريد فول',70],['مانجو كيوي',85],['مانجو خوخ',85],['كيوي ليمون نعناع',85],['موسكو',85,'موز، مانجو، باشون'],['مالديف',85,'كيوي، فراولة، جوز هند']]}
];

// دالة حماية النصوص من هجمات XSS
const escapeHtml = str => String(str ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

// تحويل الأرقام العربية المكتوبة بلغة لوحة المفاتيح العربية إلى أرقام إنجليزية
function normalizeDigits(str) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(str ?? '').replace(/[٠-٩]/g, d => arabicDigits.indexOf(d));
}

// دالة تحليل محتوى CSV القادم من Google Sheets مع حماية المقاطع والنصوص
function parseCSV(text) {
  if (!text) return [];

  // إزالة Byte Order Mark (BOM) إن وجد
  text = text.replace(/^\uFEFF/, '');

  // التأكد من أن النص ليس صفحة HTML إرشادات أو خطأ
  if (text.trim().startsWith('<') || text.includes('<!DOCTYPE')) {
    console.warn('تنبيه: استجاب Google Sheets بصفحة HTML. يرجى التأكد من أن إعداد المشاركة هو "أي شخص لديه الرابط يمكنه العرض".');
    return [];
  }

  const lines = [];
  let row = [];
  let inQuotes = false;
  let current = '';

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push(current.trim());
      current = '';
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') i++;
      row.push(current.trim());
      if (row.length > 0 && row.some(cell => cell !== '')) {
        lines.push(row);
      }
      row = [];
      current = '';
    } else {
      current += c;
    }
  }

  if (current || row.length > 0) {
    row.push(current.trim());
    if (row.some(cell => cell !== '')) lines.push(row);
  }

  if (lines.length < 2) return [];

  const headers = lines[0].map(h => h.replace(/^"|"$/g, '').trim().toLowerCase());
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const rowData = lines[i];
    const item = {};
    headers.forEach((h, idx) => {
      let val = rowData[idx] ?? '';
      val = val.replace(/^"|"$/g, '').trim();
      item[h] = val;
    });
    data.push(item);
  }

  return data;
}

// تحويل البيانات القادمة من Google Sheets أو API إلى بنية أقسام المنيو
function transformSheetData(flatData) {
  if (!Array.isArray(flatData) || flatData.length === 0) return null;

  // إذا كانت البيانات تحتوي بالفعل على بنية المجموعات الجاهزة categories
  if (flatData[0].items && flatData[0].name) {
    return flatData;
  }

  // تجميع العناصر حسب اسم القسم
  const map = new Map();
  flatData.forEach(item => {
    const catName = item.category_name || item.category || item['القسم'] || item['اسم القسم'] || 'أخرى';
    if (!map.has(catName)) {
      map.set(catName, { name: catName, sub: '', items: [] });
    }

    const rawPrice = item.price ?? item['السعر'] ?? item['سعر'] ?? 0;
    const cleanPriceStr = normalizeDigits(rawPrice).replace(/[^0-9.]/g, '');
    const priceNum = Number(cleanPriceStr) || 0;

    const note = item.note || item.description || item['الملاحظات'] || item['ملاحظة'] || item['ملاحظات'] || '';
    const name = item.name || item['الصنف'] || item['اسم الصنف'] || item['المشروب'] || '';

    if (name) {
      map.get(catName).items.push([name, priceNum, note]);
    }
  });

  return Array.from(map.values());
}

// تحميل البيانات من السيرفر / Google Sheets
async function loadMenuData() {
  try {
    let rawData = null;

    // 1. الاتصال بـ Google Sheets مباشرة عبر رابط أو ID الشيت (CSV Export)
    if (GOOGLE_SHEET_ID.trim() !== '') {
      let sheetId = GOOGLE_SHEET_ID.trim();
      const match = sheetId.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (match) sheetId = match[1];

      const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(GOOGLE_SHEET_NAME)}&_t=${Date.now()}`;
      const response = await fetch(csvUrl, { cache: 'no-store' });
      if (response.ok) {
        const csvText = await response.text();
        rawData = parseCSV(csvText);
      }
    }
    // 2. الاتصال بـ API لـ Google Sheets (مثل OpenSheet / SheetDB / Google Apps Script)
    else if (GOOGLE_SHEET_API_URL.trim() !== '') {
      const response = await fetch(GOOGLE_SHEET_API_URL.trim(), { cache: 'no-store' });
      if (response.ok) rawData = await response.json();
    }
    // 3. الاتصال بـ Supabase (احتياطي في حال رغبة الاستخدام مستقبلاً)
    else if (SUPABASE_URL.trim() !== '' && SUPABASE_ANON_KEY.trim() !== '') {
      const response = await fetch(`${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/drinks?select=*&order=sort_order.asc&_t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'apikey': SUPABASE_ANON_KEY.trim(),
          'Authorization': `Bearer ${SUPABASE_ANON_KEY.trim()}`
        }
      });
      if (response.ok) rawData = await response.json();
    } 
    // 4. التحميل من ملف menu.json المحلي
    else {
      const response = await fetch('menu.json');
      if (response.ok) rawData = await response.json();
    }

    if (rawData) {
      const formattedData = transformSheetData(rawData);
      if (formattedData && formattedData.length > 0) {
        categories = formattedData;
      }
    }
  } catch (error) {
    console.warn('استخدام البيانات الافتراضية، تعذر تحميل البيانات من السيرفر الخارجية:', error);
  } finally {
    renderAll();
    renderCatNav();
  }
}

// متغير حفظ مرصد التمرير IntersectionObserver
let catNavObserver = null;

// بناء شريط التنقل العلوي للأقسام
function renderCatNav() {
  const nav = document.getElementById('cat-nav');
  if (!nav) return;

  // تنظيف أي مراقب سابق لمنع تكرار الأحداث في الذاكرة
  if (catNavObserver) {
    catNavObserver.disconnect();
    catNavObserver = null;
  }

  nav.innerHTML = categories.map((c, i) =>
    `<button class="cat-btn${i === 0 ? ' active' : ''}" data-cat="${i}">${escapeHtml(c.name)}</button>`
  ).join('');

  nav.onclick = e => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    const idx = +btn.dataset.cat;
    nav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(`cat-${idx}`);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const sections = categories.map((_, i) => document.getElementById(`cat-${i}`));
  catNavObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const idx = id.replace('cat-', '');
        nav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        const activeBtn = nav.querySelector(`[data-cat="${idx}"]`);
        if (activeBtn) {
          activeBtn.classList.add('active');
          activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

  sections.forEach(s => s && catNavObserver.observe(s));
}

// بناء HTML لقسم واحد
function renderCategoryHtml(c, globalI) {
  return `
  <div class="menu-category" id="cat-${globalI}" style="animation-delay:${globalI * 0.04}s">
    <div class="cat-header">
      <h2>${escapeHtml(c.name)}</h2>
      <span class="egp-label">ج.م</span>
    </div>
    <div class="cat-body">
      <div class="items-col">
        ${c.items.map((x, j) => `
          <div class="drink-row" style="animation-delay:${globalI * 0.04 + j * 0.025}s">
            <div class="drink-name">${escapeHtml(x[0])}${x[2] ? `<small class="drink-note">${escapeHtml(x[2])}</small>` : ''}</div>
            <span class="dots"></span>
            <b class="price">${Number(x[1]).toLocaleString('ar-EG')}</b>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

// عرض جميع الأقسام على صفحتين بتنسيق متناسق
function renderAll() {
  const halfLength = Math.ceil(categories.length / 2);
  const p1 = categories.slice(0, halfLength);
  const p2 = categories.slice(halfLength);

  const page1 = document.getElementById('page-1');
  const page2 = document.getElementById('page-2');
  if (!page1 || !page2) return;

  page1.innerHTML = `
    <div class="page-logo">
      <img src="media/main-logo.webp" alt="Tamr Henna Café">
    </div>
    <div class="menu-layout">
      <div class="col-content">
        ${p1.map((c, i) => renderCategoryHtml(c, i)).join('')}
      </div>
      <div class="col-images">
        <img src="media/1.webp" class="side-img" alt="صورة 1" style="animation-delay: 0.15s;" loading="lazy">
        <img src="media/2.webp" class="side-img" alt="صورة 2" style="animation-delay: 0.22s;" loading="lazy">
        <img src="media/3.webp" class="side-img" alt="صورة 3" style="animation-delay: 0.29s;" loading="lazy">
        <img src="media/4.webp" class="side-img" alt="صورة 4" style="animation-delay: 0.36s;" loading="lazy">
        <img src="media/5.webp" class="side-img" alt="صورة 5" style="margin-top: 30px; animation-delay: 0.43s;" loading="lazy">
        <img src="media/6.webp" class="side-img" alt="صورة 6" style="animation-delay: 0.50s;" loading="lazy">
        <img src="media/7.webp" class="side-img" alt="صورة 7" style="animation-delay: 0.57s;" loading="lazy">
        <img src="media/8.webp" class="side-img" alt="صورة 8" style="margin-top: 30px; animation-delay: 0.64s;" loading="lazy">
        <img src="media/9.webp" class="side-img" alt="صورة 9" style="animation-delay: 0.71s;" loading="lazy">
        <img src="media/10.webp" class="side-img" alt="صورة 10" style="margin-top: 30px; animation-delay: 0.78s;" loading="lazy">
      </div>
    </div>`;

  page2.innerHTML = `
    <div class="menu-layout">
      <div class="col-content">
        ${p2.map((c, i) => renderCategoryHtml(c, halfLength + i)).join('')}
      </div>
      <div class="col-images">
        <img src="media/11.webp" class="side-img" alt="صورة 11" style="animation-delay: 0.20s;" loading="lazy">
        <img src="media/12.webp" class="side-img" alt="صورة 12" style="animation-delay: 0.27s;" loading="lazy">
        <img src="media/13.webp" class="side-img" alt="صورة 13" style="margin-top: 30px; animation-delay: 0.34s;" loading="lazy">
        <img src="media/14.webp" class="side-img" alt="صورة 14" style="animation-delay: 0.41s;" loading="lazy">
        <img src="media/15.webp" class="side-img" alt="صورة 15" style="margin-top: 30px; animation-delay: 0.48s;" loading="lazy">
        <img src="media/16.webp" class="side-img" alt="صورة 16" style="animation-delay: 0.55s;" loading="lazy">
        <img src="media/17.webp" class="side-img" alt="صورة 17" style="animation-delay: 0.62s;" loading="lazy">
        <img src="media/18.webp" class="side-img" alt="صورة 18" style="animation-delay: 0.69s;" loading="lazy">
      </div>
    </div>`;
}

// بدء تحميل البيانات عند فتح الموقع
loadMenuData();
