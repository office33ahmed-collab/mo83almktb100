const localeLayoutStyles = document.createElement('style');
localeLayoutStyles.textContent = `
  html[lang="en"] .language-toggle { font-family: 'Readex Pro', sans-serif !important; }
  @media (max-width: 640px) {
    html[lang="en"] header nav > a.group { flex-shrink: 1 !important; min-width: 0; }
    html[lang="en"] header nav > a.group > span:last-child,
    html[lang="en"] header nav > a.group > div:last-child { min-width: 0; max-width: calc(100vw - 164px); }
    html[lang="en"] header nav > a.group > span:last-child > span:first-child,
    html[lang="en"] header nav > a.group > div:last-child > span:first-child { overflow-wrap: anywhere; }
  }
`;
document.head.append(localeLayoutStyles);

window.ALHAKAMI_LOCALE = {
  initialLanguage() {
    const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
    if (requestedLanguage === 'en' || requestedLanguage === 'ar') return requestedLanguage;

    return window.localStorage.getItem('alhakami-locale') === 'en' ? 'en' : 'ar';
  },
  persist(language) {
    if (language === 'en' || language === 'ar') {
      window.localStorage.setItem('alhakami-locale', language);
    }
  },
};

new MutationObserver(() => {
  window.ALHAKAMI_LOCALE.persist(document.documentElement.lang);
}).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

window.ALHAKAMI_EN_TEXT = {
  'ساعات العمل: 09:00 - 17:00': 'Office hours: 9:00 AM–5:00 PM',
  'خدمات التحكيم': 'Arbitration services',
  'جدول أشكال الشركات في النظام السعودي': 'Table of company forms under Saudi law',
  'جدول أحكام تأسيس الشركات وحوكمتها': 'Table of company formation and governance provisions',
  'جدول نزاعات الورثة ومعالجتها النظامية': 'Table of inheritance disputes and their legal resolution',
  'خدمات القضايا العمالية': 'Labor dispute services',
  'جدول أحكام انتهاء عقد العمل والحقوق العمالية': 'Table of employment termination provisions and labor rights',
  'معلومات خدمة الترافع أمام المحاكم': 'Information about court representation services',
  'جدول طرق الاعتراض على الأحكام ومددها': 'Table of remedies against judgments and applicable deadlines',
  'خدمات القضايا العقارية': 'Real estate dispute services',
  'نواف بن حسن الحكمي': 'Nawaf bin Hassan Al-Hakami',
  'مكتب نواف بن حسن الحكمي': 'Nawaf bin Hassan Al-Hakami',
  'للمحاماة والاستشارات القانونية وأعمال التوثيق': 'Legal Services, Consultancy & Notarial Services',
  'Legal Services, Consultancy & Notarial Services': 'Legal Services, Consultancy & Notarial Services',
  'الرئيسية': 'Home', 'من نحن': 'About', 'الرؤية والرسالة': 'Vision & Mission',
  'مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services',
  'مطرقة قاضٍ على طاولة خشبية بجانب كتب قانونية': 'A judge’s gavel beside law books on a wooden desk',
  'واجهة المنصة القانونية الذكية لمتابعة القضايا والمستندات والتحديثات': 'A preview of the smart legal platform for case and document updates',
  'خدماتنا': 'Our Services', 'منصتنا الذكية': 'Our Legal Platform', 'شركاء النجاح': 'Our Clients',
  'NAWAF BIN HASSAN AL-HAKAMI LAW FIRM': 'NAWAF BIN HASSAN AL-HAKAMI LAW FIRM',
  'تواصلوا معنا': 'Contact Us', 'الدخول إلى المنصة الذكية': 'Sign in to the Smart Platform', 'القائمة': 'Open menu', 'حسابات التواصل الاجتماعي': 'Social media accounts',
  'نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services',
  '«وجهتكم القانونية الموثوقة»': 'Your trusted legal partner',
  'تواصلوا معنا الآن': 'Speak with our team',
  'يقدم مكتب نواف بن حسن الحكمي للمحاماة في جدة خدمات قانونية واستشارية متكاملة، تستند إلى فهم عميق للأنظمة السعودية وخبرة في التعامل مع القضايا والنزاعات. ويقود المكتب المحامي نواف بن حسن الحكمي، بمساندة فريق من المحامين والمستشارين والمحكمين، لتقديم خدمات قانونية تتسم بالدقة والاحترافية، وبناء حلول مدروسة تراعي طبيعة كل قضية وتخدم مصالح العملاء، مع الالتزام بأعلى معايير النزاهة والمهنية.': 'Based in Jeddah, Nawaf bin Hassan Al-Hakami Law Firm provides integrated legal and advisory services grounded in a thorough understanding of Saudi regulations and experience handling disputes. Led by attorney Nawaf bin Hassan Al-Hakami and supported by a team of lawyers, consultants, and arbitrators, the firm delivers precise, professional services and carefully considered solutions tailored to each matter and each client’s interests, upholding the highest standards of integrity.',
  'نبذة عن مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق': 'About Nawaf bin Hassan Al-Hakami Law Firm',
  'يُعد مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق في جدة جهةً مهنية متخصصة في تقديم الخدمات القانونية والتوثيقية المتكاملة، وفق الأنظمة المعمول بها في المملكة العربية السعودية، وبمنهج مهني يرتكز على الدقة والاحترافية والالتزام. ويقدم المكتب حلولًا قانونية مدروسة في مجالات الاستشارات القانونية، وإدارة القضايا والنزاعات، وصياغة العقود، وأعمال التوثيق، بما يسهم في حماية الحقوق والمصالح، والحد من المخاطر القانونية، وتعزيز الامتثال والحوكمة. ومن خلال فريق من المحامين والمستشارين والمتخصصين، يحرص المكتب على بناء علاقات مهنية قائمة على الثقة والشفافية، وتقديم خدمات قانونية تستجيب لاحتياجات العملاء وتدعم استقرار أعمالهم وتحقيق أهدافهم.': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services is a Jeddah-based practice providing comprehensive legal and notarial services in accordance with Saudi laws and regulations. Our approach is grounded in accuracy, professionalism, and commitment. We offer well-considered solutions in legal consultation, litigation and dispute management, contract drafting, and notarization—helping protect rights and interests, reduce legal risk, and strengthen compliance and governance. Our lawyers, consultants, and specialists build trusted, transparent relationships and deliver services tailored to clients’ needs and business objectives, upholding the highest standards of integrity.',
  'رؤيتنا': 'Our Vision', 'رسالتنا': 'Our Mission', 'قيمنا المهنية': 'Our Values',
  'الريادة والتميز في تقديم الحلول القانونية والشرعية وخدمات التوثيق في مدينة جدة وجميع أنحاء المملكة، بما يواكب مستهدفات رؤية المملكة 2030 ويعزز بيئة الأعمال والاستثمار.': 'To lead in providing legal and Sharia solutions and notarial services in Jeddah and across Saudi Arabia, in support of Saudi Vision 2030 and a stronger environment for business and investment.',
  'رعاية حقوق عملائنا ومصالحهم بأعلى درجات الدقة والاحترافية والأمانة، عبر كفاءات قانونية متمرسة في التقاضي والتحكيم وصياغة العقود والتوثيق النظامي السريع.': 'To safeguard our clients’ rights and interests with the utmost precision, professionalism and integrity, through experienced legal professionals in litigation, arbitration, contract drafting and prompt notarization.',
  'الالتزام التام بالسرية والخصوصية، والنزاهة والشفافية مع الموكلين، والإلمام العميق بالأنظمة والتشريعات السعودية، والسرعة في إنجاز المعاملات القضائية والتوثيقية.': 'Confidentiality and privacy, integrity and transparency, in-depth knowledge of Saudi laws and regulations, and prompt handling of legal and notarial matters.',
  'الركائز القانونية لأعمالكم – خدمات المحاماة والتوثيق والاستشارات القانونية في جدة': 'Legal Services for Your Business: Litigation, Notarization & Advice in Jeddah',
  'نوفّر في مكتب نواف بن حسن الحكمي في جدة باقة متكاملة من الخدمات المتخصصة المصممة لحماية حقوقكم وتعزيز امتثالكم بكل دقة واحترافية:': 'At Al-Hakami Law Firm in Jeddah, we offer a full range of specialized services designed to protect your rights and strengthen your compliance with precision and professionalism:',
  'محامي قضايا تجارية': 'Commercial Litigation',
  'صياغة ومراجعة العقود المحكمة – إعداد عقود البيع والتوريد والتوزيع وفق نظام التجارة وأفضل الممارسات، مع سدّ الثغرات وتحديد الالتزامات بوضوح.': 'Drafting and reviewing robust sales, supply, and distribution agreements in line with applicable commercial regulations and sound practice, with clear obligations and carefully addressed risks.',
  'تفاصيل أكثر': 'Learn more',
  'خدمات قانونية رقمية': 'Digital Legal Services', 'منصتنا القانونية الذكية': 'Our Smart Legal Platform',
  'منصة قانونية ذكية تتيح لكم متابعة القضايا، والاطلاع على الأحكام والمستندات، واستقبال الإشعارات عبر الجوال والبريد الإلكتروني، من خلال حسابكم الخاص وفي مكان واحد.': 'A smart legal platform that lets you track your cases, view judgments and documents, and receive notifications by SMS and email, all in one place through your own account.',
  'اكتشفوا منصتنا الذكية': 'Explore the platform',
  'شركاء النجاح والقطاعات التي نخدمها': 'The Clients and Sectors We Serve',
  'نعتز بثقة عملائنا من الشركات والمؤسسات التجارية ورجال الأعمال والأفراد في مدينة جدة ومختلف مناطق المملكة.': 'We are honored by the trust of businesses, institutions, entrepreneurs, and individuals in Jeddah and across Saudi Arabia.',
  'القطاع العقاري والتطوير': 'Real Estate & Development', 'الشركات والمجموعات': 'Companies & Groups',
  'اللوجستيات والاستيراد': 'Logistics & Import', 'المنشآت الطبية والصحية': 'Healthcare',
  'المقاولات والهندسة': 'Construction & Engineering', 'الأوقاف والشركات العائلية': 'Endowments & Family Businesses',
  'تواصلوا الآن مع فريق المحامين في جدة': 'Speak with Our Jeddah Legal Team',
  'للاستفادة من استشاراتنا القانونية المتخصصة وحلولنا الاحترافية في التقاضي والتحكيم والتوثيق وغيرها من خدماتنا المتكاملة، تواصلوا مع فريقنا من المحامين والموثقين المرخّصين وذوي الخبرة العالية الآن:': 'To benefit from our specialized legal advice and professional solutions in litigation, arbitration, notarization and more, contact our team of experienced, licensed lawyers and notaries today:',
  'مكتب نواف بن حسن الحكمي - للمحاماة والاستشارات القانونية وأعمال التوثيق': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services',
  '«وجهتكم القانونية الموثوقة»': 'Your trusted legal partner',
  '«ذراعكم القانونية التي يعتمد عليها»': 'Legal support you can rely on',
  'موقع مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق - جدة حي النزهة شارع حراء': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services, Al-Nuzhah, Hira Street, Jeddah',
  'افتح في خرائط Google': 'Open in Google Maps',
  'الفتح في "خرائط Google"': 'Open in Google Maps',
  '05XXXXXXXX': '+966 5X XXX XXXX',
  'اكتب نبذة مختصرة عن طلبك لنقوم بخدمتك بأسرع وقت...': 'Briefly describe your request so we can assist you promptly...',
  'مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services',
  'جدة - حي النزهة - شارع حراء - 6439': '6439 Hira Street, Al-Nuzhah, Jeddah',
  'الوصول إلينا': 'Get directions',
  'عن المكتب': 'About the Firm', 'مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق في جدة.': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services, Jeddah.',
  'تأسس المكتب بقيادة مؤسسه المحامي نواف بن حسن الحكمي، صاحب الخبرة في العمل القانوني والنزاعات القضائية، مع فريق من المحامين والمستشارين والمحكمين، لتقديم منظومة قانونية وتوثيقية متكاملة وفق أعلى معايير الدقة والاحترافية في رعاية حقوق عملائنا ومصالحهم.': 'Founded by attorney Nawaf bin Hassan Al-Hakami, the firm combines his experience in legal practice and litigation with a team of lawyers, consultants, and arbitrators. Together, we provide integrated legal and notarial services to the highest standards of accuracy and professionalism, safeguarding our clients’ rights and interests.',
  'روابط مهمة': 'Quick Links', 'ساعات العمل': 'Office Hours',
  'المملكة العربية السعودية - جدة - حي النزهة - شارع حراء - 6439': '6439 Hira Street, Al-Nuzhah, Jeddah, Saudi Arabia',
  'الأحد: 09:00 - 17:00': 'Sunday: 9:00 AM–5:00 PM', 'الاثنين: 09:00 - 17:00': 'Monday: 9:00 AM–5:00 PM',
  'الثلاثاء: 09:00 - 17:00': 'Tuesday: 9:00 AM–5:00 PM', 'الأربعاء: 09:00 - 17:00': 'Wednesday: 9:00 AM–5:00 PM',
  'الخميس: 09:00 - 17:00': 'Thursday: 9:00 AM–5:00 PM', 'الجمعة: مغلق': 'Friday: Closed', 'السبت: مغلق': 'Saturday: Closed',
  'جميع الحقوق محفوظة ©': '©',
  'مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق – جدة.': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services, Jeddah. All rights reserved.',
  'تواصلوا مباشرة عبر واتساب': 'Contact us on WhatsApp', 'العودة للأعلى': 'Back to top',
  'طلب استشارة أو موعد قانوني': 'Request a Legal Consultation or Appointment',
  'الاسم الكريم / اسم المنشأة *': 'Full name / company name *', 'أدخل اسمك الكامل': 'Enter your full name',
  'طلب استشارة قانونية فورية': 'Immediate legal consultation',
  'رقم الجوال *': 'Mobile number *', 'نوع الخدمة المطلوبة *': 'Service required *',
  'استشارة عامة أو تواصل مباشر': 'General legal consultation',
  'التوثيق القانوني والعقاري': 'Legal and real estate notarization',
  'التوثيق القانوني والعقاري (ناجز / إفراغ)': 'Legal and real estate notarization (Najiz / Ifragh)',
  'الترافع أمام المحاكم': 'Court representation', 'الترافع والتمثيل أمام المحاكم': 'Litigation and court representation',
  'تأسيس وحوكمة الشركات': 'Company formation and governance', 'قسمة التركات': 'Estate distribution',
  'صياغة ومراجعة العقود': 'Contract drafting and review', 'قضايا عقارية أو عمالية أو تجارية': 'Real estate, labor, or commercial disputes',
  'قضايا عقارية / عمالية / تجارية': 'Real estate, labor, and commercial disputes',
  'استشارة قانونية شاملة': 'General legal consultation', 'حصر وقسمة التركات': 'Estate inventory and distribution',
  'ملخص الموضوع أو الاستفسار': 'Brief description of your matter',
  'اكتب نبذة مختصرة عن طلبك لنقوم بخدمتك بأسرع وقت...': 'Briefly describe how we can help, and our team will respond as soon as possible.',
  'إرسال الطلب مباشرة عبر واتساب المكتب': 'Send your request via WhatsApp',
  'إرسال الطلب عبر البريد الإلكتروني': 'Send your request by email',
  'سيتم فتح تطبيق البريد الإلكتروني لإتمام إرسال الطلب.': 'Your email app will open so you can complete and send the request.',
  'اتصال مباشر': 'Call us',
  'تفاصيل الخدمة': 'Service Details', 'ماذا يشمل نطاق العمل في مكتب نواف بن حسن الحكمي؟': 'How can Nawaf bin Hassan Al-Hakami Law Firm help?',
  'إغلاق': 'Close', 'طلب هذه الخدمة الآن': 'Request this service',
  'سيتم ربط الحساب الرسمي للمكتب على': 'The firm’s official account on',
  'قريباً – يمكنكم التواصل معنا مباشرة عبر واتساب أو الهاتف.': 'will be available soon. In the meantime, contact us by WhatsApp or phone.',
  'منصة X (تويتر)': 'X', 'منصة X': 'X', 'إنستغرام': 'Instagram', 'لينكد إن': 'LinkedIn',
  'طلب استشارة / خدمة قانونية عبر الموقع الإلكتروني:': 'Legal consultation/service request submitted through the website:',
  '• الاسم: ': '• Name: ', '• رقم الجوال: ': '• Mobile: ', '• الخدمة المطلوبة: ': '• Service: ', '• التفاصيل: ': '• Details: ',
  'السلام عليكم ورحمة الله وبركاته،': 'Hello,',
  'حوكمة الشركات': 'Corporate Governance',
  'الأسئلة الشائعة': 'Frequently Asked Questions',
  'تنظيم العلاقات والصلاحيات داخل الشركة بما يعزز الشفافية والامتثال.': 'Structuring company relationships and responsibilities to support transparency and compliance.',
  'خدمة حوكمة الشركات': 'Corporate governance service',
  'تعنى حوكمة الشركات بضبط إدارة شركات المساهمة وغيرها من الشركات، من خلال تنظيم العلاقة بين المساهمين أو الشركاء ومجلس الإدارة والإدارة التنفيذية وأصحاب المصالح، وتحديد الصلاحيات واللجان. ويأتي ذلك وفق نظام الشركات ولائحته التنفيذية، ولائحة حوكمة الشركات الصادرة عن مجلس هيئة السوق المالية فيما يخص الشركات المدرجة، بما يسهم في تعزيز الثقة، وجذب المستثمرين، وبيان التزامات الأطراف، وتحقيق العدالة والشفافية، ورفع مستوى الأداء.': 'Corporate governance provides a framework for the management of joint-stock and other companies. It structures the relationship between shareholders or partners, the board, executive management, and stakeholders, and clarifies authorities and committees. The framework is based on the Companies Law and its Implementing Regulations, as well as the Corporate Governance Regulations issued by the Capital Market Authority for listed companies. It supports trust, investment, clear accountability, fairness, transparency, and stronger performance.',
  'ما الأنظمة واللوائح التي تحكم حوكمة الشركات في المملكة؟': 'Which laws and regulations govern corporate governance in Saudi Arabia?',
  'ينظم أحكام إدارة الشركات بوجه عام نظام الشركات الصادر بالمرسوم الملكي رقم (م/132) وتاريخ 1/12/1443هـ ولائحته التنفيذية، التي أفردت بابها الثاني لشركة المساهمة غير المدرجة في السوق المالية. وتخضع شركات المساهمة المدرجة كذلك للائحة حوكمة الشركات الصادرة عن مجلس هيئة السوق المالية، وللائحة التنفيذية لنظام الشركات الخاصة بشركات المساهمة المدرجة.': 'Company management is generally governed by the Companies Law, issued by Royal Decree No. (M/132) dated 1/12/1443 AH, and its Implementing Regulations. Part Two of the Implementing Regulations is devoted to joint-stock companies not listed on the financial market. Listed joint-stock companies are also subject to the Corporate Governance Regulations issued by the Board of the Capital Market Authority, and to the Implementing Regulations of the Companies Law applicable to listed joint-stock companies.',
  'ولا يخل نظام الشركات بالأحكام والاختصاصات المقررة للبنك المركزي السعودي وهيئة السوق المالية بموجب الأنظمة ذات الصلة، وفقاً للبند (ثانياً) من المرسوم الملكي رقم (م/132).': 'The Companies Law does not affect the provisions or powers assigned to the Saudi Central Bank or the Capital Market Authority under the relevant laws, pursuant to Clause (Second) of Royal Decree No. (M/132).',
  'هل لائحة حوكمة الشركات الصادرة عن هيئة السوق المالية إلزامية؟': 'Are the Capital Market Authority’s Corporate Governance Regulations mandatory?',
  'تسري لائحة حوكمة الشركات على شركة المساهمة المدرجة في السوق وفقاً للمادة (الأولى)، وتنص الفقرة (ب) من المادة (الثانية) على أنها إلزامية للشركات المدرجة في السوق الرئيسية باستثناء الأحكام التي يُشار فيها إلى أنها استرشادية. أما الشركات المدرجة في السوق الموازية فتلتزم بالأحكام التي عددتها الفقرة (ج) من المادة ذاتها، وتُعد بقية الأحكام استرشادية عليها.': 'Under Article (1), the Corporate Governance Regulations apply to joint-stock companies listed on the market. Article (2)(b) makes them mandatory for companies listed on the Main Market, except for provisions expressly identified as guiding provisions. Companies listed on the Parallel Market must comply with the provisions listed in Article (2)(c); the remaining provisions are guiding for those companies.',
  'ما الحد الأدنى لعدد أعضاء مجلس إدارة شركة المساهمة؟ وما مدة العضوية؟': 'What is the minimum size of a joint-stock company’s board, and how long is a board term?',
  'توجب الفقرة (1) من المادة (السابعة والستين) من نظام الشركات ألا يقل عدد أعضاء مجلس إدارة شركة المساهمة عن ثلاثة، وتشترط المادة (الثامنة والستون) أن يكونوا من ذوي الصفة الطبيعية وألا تتجاوز مدة العضوية أربع سنوات.': 'Article 67(1) of the Companies Law requires a joint-stock company’s board to have at least three members. Article 68 requires board members to be natural persons and limits a board term to four years.',
  'وتنص المادة (السادسة عشرة) من لائحة حوكمة الشركات، في شأن الشركة المدرجة، على أن تكون أغلبية المجلس من الأعضاء غير التنفيذيين، وألا يقل عدد المستقلين عن عضوين أو ثلث أعضاء المجلس أيهما أكثر، كما لا يجوز الجمع بين منصب رئيس مجلس الإدارة وأي منصب تنفيذي في الشركة وفق الفقرة (ب) من المادة (الثالثة والعشرين).': 'For listed companies, Article 16 of the Corporate Governance Regulations provides that a majority of the board must be non-executive directors and that the number of independent directors must be no fewer than two or one-third of the board, whichever is greater. Under Article 23(b), the chair of the board may not also hold an executive position in the company.',
  'هل تلتزم الشركة المدرجة بتشكيل لجنة مراجعة؟': 'Must a listed company establish an audit committee?',
  'نعم، توجب المادة (الحادية والخمسون) من لائحة حوكمة الشركات تشكيل لجنة مراجعة بقرار من مجلس الإدارة، على ألا يكون من بين أعضائها عضو تنفيذي، وألا يقل عدد أعضائها عن ثلاثة ولا يزيد على خمسة، وأن يكون أحدهم مختصاً بالشؤون المالية والمحاسبية، وأن يكون من بينهم عضو مستقل على الأقل.': 'Yes. Article 51 of the Corporate Governance Regulations requires the board to establish an audit committee. No committee member may be an executive director; the committee must have between three and five members, at least one member must have expertise in finance and accounting, and at least one member must be independent.',
  'هل يجوز تنظيم حوكمة الشركة العائلية باتفاق مكتوب؟': 'Can a family business’s governance be set out in a written agreement?',
  'تجيز المادة (الحادية عشرة) من نظام الشركات إبرام ميثاق عائلي يتضمن تنظيم الملكية العائلية في الشركة وحوكمتها وإدارتها، وسياسة توظيف أفراد العائلة، وتوزيع الأرباح، والتصرف بالحصص أو الأسهم، وآلية تسوية المنازعات أو الخلافات. ويكون الميثاق ملزماً، ويجوز أن يكون جزءاً من عقد تأسيس الشركة أو نظامها الأساس، بشرط ألا يخالف النظام أو عقد التأسيس أو النظام الأساس.': 'Article 11 of the Companies Law permits a family charter covering family ownership, company governance and management, family employment policies, profit distribution, transfers of shares or interests, and dispute-resolution procedures. The charter is binding and may form part of the company’s articles of association or bylaws, provided it does not conflict with the Law, the articles, or the bylaws.',
  'حماية الملكية الفكرية': 'Intellectual Property Protection',
  'حماية العلامات والمصنفات والابتكارات وتعزيز الحقوق النظامية لأصحابها.': 'Protecting trademarks, creative works, and inventions while strengthening their owners’ legal rights.',
  'نقدّم، من خلال وكلاء ملكية فكرية مرخَّصين من الهيئة السعودية للملكية الفكرية، خدماتِ تسجيل حقوق الملكية الفكرية بأنواعها، كالعلامات التجارية، والنماذج الصناعية، والمصنفات المحمية بحقوق المؤلف، وغيرها، إضافةً إلى الجانب الوقائي بصياغة العقود المتعلقة بحقوق الملكية الفكرية وإعدادها، وتقديم الاعتراضات المتعلقة بتسجيلها ومتابعتها، بدءاً من مراحلها الأولى أمام الهيئة وحتى مرحلة الطعن أمام المحكمة المختصة؛ وذلك وفقاً لأحكام قانون (نظام) العلامات التجارية لدول مجلس التعاون لدول الخليج العربية ولائحته التنفيذية، ونظام حقوق المؤلف ولائحته التنفيذية، ونظام براءات الاختراع والتصميمات التخطيطية للدارات المتكاملة والأصناف النباتية والنماذج الصناعية ولائحته التنفيذية، والأنظمة الأخرى ذات العلاقة في المملكة العربية السعودية.': 'Through intellectual property agents licensed by the Saudi Authority for Intellectual Property, we provide registration services for all types of intellectual property rights, including trademarks, industrial designs, copyright-protected works, and more. Our preventive services include drafting and preparing intellectual property agreements, as well as filing and following up on registration oppositions from the initial proceedings before the Authority through appeals before the competent court. These services are provided in accordance with the GCC Trademark Law and its Implementing Regulations, the Copyright Law and its Implementing Regulations, the Law of Patents, Layout-Designs of Integrated Circuits, Plant Varieties, and Industrial Designs and its Implementing Regulations, and other relevant laws in the Kingdom of Saudi Arabia.',
  'خدمة حماية الملكية الفكرية': 'Intellectual property protection service',
  'تُعنى حماية الملكية الفكرية بصون الحقوق على العلامات التجارية والمصنفات والابتكارات، وتمكين أصحابها من تسجيلها والاستفادة منها ومواجهة التعدي عليها. وتشمل هذه الحقوق العلامات التجارية وحقوق المؤلف وبراءات الاختراع والنماذج الصناعية، وتخضع كل منها للأنظمة ذات الصلة في المملكة العربية السعودية.': 'Intellectual property protection safeguards rights in trademarks, creative works, and inventions, enabling owners to register, use, and defend them against infringement. These rights include trademarks, copyrights, patents, and industrial designs, each governed by the relevant laws and regulations of Saudi Arabia.',
  'ما مدة حماية العلامة التجارية؟ وكيف يُجدَّد تسجيلها؟': 'How long is a trademark protected, and how can its registration be renewed?',
  'مدة الحماية المترتبة على تسجيل العلامة التجارية عشر سنوات، ويجوز لمالكها تجديد الحماية لمدد مماثلة بطلب يُقدَّم خلال السنة الأخيرة من مدة الحماية، وذلك وفقاً للمادة (العشرين) من قانون (نظام) العلامات التجارية لدول مجلس التعاون لدول الخليج العربية.': 'A registered trademark is protected for ten years. Its owner may renew the protection for equivalent periods by filing an application during the final year of the protection term, pursuant to Article 20 of the GCC Trademark Law.',
  'كما يجوز التجديد خلال الأشهر الستة التالية لانتهاء مدة التسجيل، فإن انقضت دون تقديم طلب التجديد شطبت الجهة المختصة العلامة من السجل.': 'Renewal may also be requested during the six months following expiration. If no renewal application is filed within that period, the competent authority will remove the trademark from the register.',
  'هل يجوز الاعتراض على تسجيل علامة تجارية؟ وما المدة المقررة لذلك؟': 'Can someone oppose a trademark registration, and what is the deadline?',
  'نعم؛ فلكل ذي شأن أن يقدّم إلى الجهة المختصة اعتراضاً مكتوباً على تسجيل العلامة خلال ستين يوماً من تاريخ نشرها، وفقاً للمادة (الرابعة عشرة) من قانون (نظام) العلامات التجارية لدول مجلس التعاون. وتصدر الجهة المختصة قرارها بقبول التسجيل أو رفضه، ولكل ذي شأن الطعن فيه أمام المحكمة المختصة خلال ثلاثين يوماً من تاريخ إخطاره به، وفقاً للمادة (الخامسة عشرة) من القانون ذاته.': 'Yes. Any interested party may submit a written opposition to the competent authority within sixty days of publication, pursuant to Article 14 of the GCC Trademark Law. The authority will decide whether to accept or reject the registration. Any interested party may challenge that decision before the competent court within thirty days of notification, pursuant to Article 15 of the same Law.',
  'هل يُشترط تسجيل المصنَّف لدى الهيئة لكي يتمتع بحماية حق المؤلف؟': 'Must a work be registered with the Authority to receive copyright protection?',
  'لا يُشترط ذلك؛ إذ تتمتع المصنفات بالحماية دون اشتراط أي إجراء شكلي وفقاً للمادة (الثالثة) من اللائحة التنفيذية لنظام حقوق المؤلف، والتسجيل لدى الهيئة السعودية للملكية الفكرية جوازي بموجب المادة (الثانية والأربعين) من نظام حقوق المؤلف، ويُعد قرينة قابلة لإثبات العكس على ملكية المصنَّف.': 'No. Works are protected without any formalities under Article 3 of the Implementing Regulations of the Copyright Law. Registration with the Saudi Authority for Intellectual Property is optional under Article 42 of the Copyright Law and constitutes rebuttable evidence of ownership of the work.',
  'وتكون حماية الحقوق المالية للمؤلف طوال حياته وتستمر خمسين سنة بعد وفاته، وفقاً للمادة (الثانية والعشرين) من النظام.': 'The author’s economic rights are protected for the author’s lifetime and for fifty years after death, pursuant to Article 22 of the Law.',
  'ما مدة حماية براءة الاختراع والنموذج الصناعي؟': 'How long are patents and industrial designs protected?',
  'وفقاً للمادة (التاسعة عشرة) من نظام براءات الاختراع والتصميمات التخطيطية للدارات المتكاملة والأصناف النباتية والنماذج الصناعية، فإن مدة حماية براءة الاختراع عشرون سنة من تاريخ إيداع الطلب، ومدة حماية شهادة النموذج الصناعي خمس عشرة سنة من تاريخ إيداع الطلب.': 'Under Article 19 of the Law of Patents, Layout-Designs of Integrated Circuits, Plant Varieties, and Industrial Designs, a patent is protected for twenty years from the filing date, and an industrial design certificate is protected for fifteen years from the filing date.',
  'ويستحق على طلب الحماية أو وثيقتها مقابل مالي سنوي، ويترتب على عدم سداده في المواعيد المقررة نظاماً سقوط الطلب أو وثيقة الحماية، وفقاً للمادة (الثامنة عشرة) من النظام.': 'An annual fee is due for a protection application or certificate. Failure to pay it within the prescribed deadlines results in lapse of the application or protection certificate, pursuant to Article 18 of the Law.',
  'كيف تُحمى حقوق الملكية الفكرية قضائياً؟': 'How are intellectual property rights protected through the courts?',
  'لصاحب الحق في العلامة التجارية إذا لحقه ضرر مباشر أن يرفع دعوى أمام المحكمة المختصة وفقاً للمادة (الحادية والأربعين) من قانون (نظام) العلامات التجارية لدول مجلس التعاون، وتتولى النيابة العامة التحقيق في المخالفات المنصوص عليها في المادة (السابعة والأربعين) من نظام حقوق المؤلف والادعاء بها أمام المحكمة المختصة وفقاً للمادة (السادسة والأربعين) منه.': 'If directly harmed, a trademark owner may bring an action before the competent court under Article 41 of the GCC Trademark Law. The Public Prosecution investigates the violations listed in Article 47 of the Copyright Law and brings them before the competent court under Article 46 of that Law.',
  'خدمة الترافع أمام المحاكم': 'Court representation service',
  'تمثيل العملاء في إجراءات التقاضي ومتابعة تنفيذ الأحكام أمام المحاكم واللجان المختصة.': 'Representing clients in litigation and following up on enforcement before courts and competent committees.',
  'إحقاقاً للحق، ونصرةً للمظلوم، وذوداً عن القيم الإنسانية، نتولى إجراءات التقاضي نيابةً عن عملائنا، باتخاذ ما يلزم من جمع الأدلة والبيّنات، ودراسة القضية، وإقامة الدعوى، وصياغة اللوائح والمذكرات، وتقديم الطلبات عبر الأنظمة الإلكترونية المعتمدة ومنها منصة «ناجز»، وحضور الجلسات، وانتهاءً بمتابعة تنفيذ الأحكام؛ وذلك أمام المحاكم العامة، والمحاكم التجارية، ومحاكم الأحوال الشخصية، والمحاكم العمالية، والمحاكم الإدارية بديوان المظالم، واللجان ذات الاختصاص شبه القضائي، إسهاماً في إيصال الحقوق إلى أصحابها وفق الأصول المعمول بها في المملكة العربية السعودية. كما تشمل خدماتنا تقييم القضايا، ووضع استراتيجية الدعوى، والتفاوض، والوسائل البديلة لتسوية المنازعات، بما يتناسب مع احتياجات كل عميل.': 'In pursuit of justice, standing with those seeking redress, and upholding human values, we handle litigation on behalf of our clients. Our work includes gathering evidence, assessing cases, filing claims, drafting pleadings and memoranda, submitting applications through approved electronic systems including Najiz, attending hearings, and following up on judgment enforcement. We represent clients before general, commercial, personal status, labor, and administrative courts, as well as quasi-judicial committees, in accordance with the applicable procedures in Saudi Arabia. Our services also include case evaluation, litigation strategy, negotiation, and alternative dispute resolution tailored to each client.',
  'ما المحاكم التي تنظر المنازعات في المملكة؟': 'Which courts hear disputes in Saudi Arabia?',
  'تنقسم محاكم الدرجة الأولى في القضاء العام بحسب نوع النزاع إلى: المحاكم العامة، والمحاكم الجزائية، ومحاكم الأحوال الشخصية، والمحاكم العمالية، والمحاكم التجارية. وتتكون محاكم ديوان المظالم وفقاً للمادة (الثامنة) من نظامه من المحكمة الإدارية العليا ومحاكم الاستئناف الإدارية والمحاكم الإدارية.': 'Courts of first instance in the general judiciary are divided by dispute type into general, criminal, personal status, labor, and commercial courts. Under Article 8 of its Law, the Board of Grievances consists of the Supreme Administrative Court, administrative courts of appeal, and administrative courts.',
  'ومن يحق له الترافع عن الغير أمام المحاكم؟': 'Who may represent another party before the courts?',
  'قصرت المادة (الثامنة عشرة) من نظام المحاماة، بعد تعديلها بالمرسوم الملكي رقم (م/21) وتاريخ 26/1/1447هـ، حق الترافع عن الغير أمام المحاكم أو ديوان المظالم أو اللجان المشار إليها في النظام على المحامين المقيدين في جدول الممارسين، واستثنت حالات محددة، منها الزوج أو الصهر أو القريب إلى الدرجة الرابعة، والممثل النظامي للشخص ذي الصفة الاعتبارية.': 'As amended by Royal Decree No. (M/21), dated 26/1/1447 AH, Article 18 of the Law of Advocacy limits representation of others before courts, the Board of Grievances, and the committees referred to in the Law to lawyers listed in the practicing lawyers register. Exceptions include a spouse, an in-law or relative up to the fourth degree, and the legal representative of a legal person.',
  'ما الدعاوى التي تختص بها المحاكم الإدارية بديوان المظالم؟': 'What claims fall within the jurisdiction of the administrative courts of the Board of Grievances?',
  'تختص المحاكم الإدارية وفقاً للمادة (الثالثة عشرة) من نظام ديوان المظالم بالفصل في دعاوى منها: إلغاء القرارات الإدارية النهائية، والتعويض عن قرارات جهة الإدارة أو أعمالها، والدعاوى المتعلقة بالعقود التي تكون جهة الإدارة طرفاً فيها.': 'Under Article 13 of the Board of Grievances Law, administrative courts hear claims including challenges to final administrative decisions, compensation for administrative decisions or actions, and disputes concerning contracts to which an administrative authority is a party.',
  'هل تُقدَّم طلبات الاعتراض على الأحكام إلكترونياً؟': 'Are applications to appeal judgments submitted electronically?',
  'نعم؛ إذ نصّت المادة (الثانية) من اللائحة التنفيذية لطرق الاعتراض على الأحكام على أن يكون تقديم الطلبات واتخاذ الإجراءات «عبر الأنظمة الإلكترونية المعتمدة من وزارة العدل»، ومنصة «ناجز» هي منصة الوزارة للخدمات العدلية الإلكترونية.': 'Yes. Article 2 of the Implementing Regulations for Methods of Appealing Judgments provides that applications and procedures are submitted through electronic systems approved by the Ministry of Justice. Najiz is the Ministry’s electronic platform for justice services.',
  'هل يضمن المحامي نتيجة الدعوى؟': 'Does a lawyer guarantee the outcome of a case?',
  'لا؛ إذ تنص الفقرة (3) من القاعدة (السادسة عشرة) من قواعد السلوك المهني للمحامين على أنه «لا يجوز للمحامي الوعد بتحقيق نتيجة فيما ليس تحت تصرفه أو فيما لا يمكن فيه ضمان تحقيق النتيجة»، ويلتزم المحامي ببذل العناية الواجبة والجهد المعقول وفقاً لنطاق التعاقد وأصول المهنة.': 'No. Paragraph 3 of Rule 16 of the Rules of Professional Conduct for Lawyers states that “a lawyer may not promise an outcome that is beyond their control or cannot be guaranteed.” A lawyer must exercise due care and reasonable efforts within the agreed scope and professional standards.',
  'التحكيم': 'Arbitration',
  'خدمات التحكيم التجاري': 'Commercial arbitration services',
  'تمثيل الأطراف في إجراءات التحكيم ومتابعة ما يتصل بها من إجراءات نظامية.': 'Representing parties in arbitration and following up on related legal procedures.',
  'نقدّم خدمات التحكيم بوصفه وسيلة لتسوية النزاعات بعيداً عن التقاضي أمام المحاكم متى اتفق الأطراف عليه. وتشمل خدماتنا صياغة اتفاقات التحكيم وشروطه، والمساعدة في إجراءات اختيار المحكمين وتشكيل هيئة التحكيم، وتمثيل الأطراف في إجراءات التحكيم أمامها، ومتابعة الإجراءات اللاحقة لصدور حكم التحكيم أمام المحكمة المختصة؛ وذلك وفق نظام التحكيم ولائحته التنفيذية، وقواعد مراكز التحكيم المؤسسي عند اختيارها، في المنازعات التجارية والمدنية.': 'We provide arbitration as a means of resolving disputes outside court proceedings when the parties agree to it. Our services include drafting arbitration agreements and clauses, assisting with arbitrator selection and tribunal formation, representing parties in arbitration proceedings, and following up on procedures before the competent court after an award is issued. Services are provided under the Arbitration Law and its Implementing Regulations and, where selected, the rules of institutional arbitration centers, for commercial and civil disputes.',
  'من الذي يُصدر حكم التحكيم؟': 'Who issues the arbitration award?',
  'يصدر حكم التحكيم عن هيئة التحكيم، لا عن أحد أطراف النزاع أو وكلائهم، وتنص الفقرة (1) من المادة (الرابعة عشرة) من اللائحة التنفيذية لنظام التحكيم على أن «ينطق رئيس هيئة التحكيم بالحكم بعد إقفال باب المرافعة».': 'The arbitration award is issued by the arbitral tribunal, not by either party or their representatives. Paragraph (1) of Article 14 of the Implementing Regulations of the Arbitration Law provides that “the presiding arbitrator shall pronounce the award after the pleadings have been closed.”',
  'من يملك الاتفاق على التحكيم؟': 'Who may agree to arbitration?',
  'نصّت الفقرة (1) من المادة (العاشرة) من نظام التحكيم، بعد تعديلها بالمرسوم الملكي رقم (م/21) وتاريخ 26/1/1447هـ، على أنه «لا يصح الاتفاق على التحكيم إلا ممن يكون أهلاً للتصرف سواء أكان شخصاً ذا صفة طبيعية أم شخصاً ذا صفة اعتبارية».': 'As amended by Royal Decree No. (M/21), dated 26/1/1447 AH, Article 10(1) of the Arbitration Law provides that “an arbitration agreement may only be concluded by a person with legal capacity to dispose of their rights, whether a natural or legal person.”',
  'ماذا لو لم يتفق الطرفان على اختيار المحكم الفرد؟': 'What if the parties do not agree on a sole arbitrator?',
  'إذا كانت هيئة التحكيم مشكلة من محكم واحد ولم يتفق طرفا التحكيم على اختياره، تتولى المحكمة المختصة اختياره بناءً على طلب، وفقاً للمادة (العاشرة) من اللائحة التنفيذية لنظام التحكيم. ويُقصد بالمحكمة المختصة، بحسب المادة (الثانية) من اللائحة، محكمة الاستئناف المختصة أصلاً بنظر النزاع، عدا حالات استثناها النظام.': 'If the tribunal consists of a sole arbitrator and the parties cannot agree on the appointment, the competent court appoints the arbitrator upon request under Article 10 of the Implementing Regulations of the Arbitration Law. Under Article 2 of the Regulations, the competent court is the Court of Appeal that would originally have jurisdiction over the dispute, except in cases specified by the Law.',
  'هل يمكن الطعن في حكم التحكيم؟': 'Can an arbitration award be challenged?',
  'يجوز رفع دعوى بطلان حكم التحكيم في الأحوال المحددة في المادة (الخمسين) من نظام التحكيم، ومنها أن يكون أحد طرفي اتفاق التحكيم وقت إبرامه عديم الأهلية أو ناقصها وفقاً للنظام الذي يحكم أهليته. ولا تُقبل الدعوى من مدعيها إذا تنازل عن حقه في رفعها بعد صدور حكم التحكيم، وفقاً للفقرة (1) من المادة (الثامنة عشرة) من اللائحة التنفيذية.': 'An action to set aside an arbitration award may be brought on the grounds specified in Article 50 of the Arbitration Law, including where a party to the arbitration agreement lacked full legal capacity when it was concluded under the law governing that party’s capacity. Under Article 18(1) of the Implementing Regulations, the claimant may not bring the action if they waived that right after the award was issued.',
  'ما المستندات التي تُرفق بدعوى بطلان حكم التحكيم؟': 'What documents must accompany an action to set aside an arbitration award?',
  'أوجبت الفقرة (2) من المادة (الثامنة عشرة) من اللائحة التنفيذية لنظام التحكيم على مدعي البطلان أن يرفق بدعواه: أصل حكم التحكيم أو صورة مصدقة منه، وصورة طبق الأصل من اتفاق التحكيم، وترجمة لحكم التحكيم إلى اللغة العربية مصدقة من جهة معتمدة إذا كان صادراً بلغة أخرى.': 'Under Article 18(2) of the Implementing Regulations of the Arbitration Law, the claimant must attach the original arbitration award or a certified copy, a true copy of the arbitration agreement, and—if the award was issued in another language—a certified Arabic translation from an accredited authority.',
  'التوثيق': 'Notarization',
  'خدمات التوثيق': 'Notarization services',
  'توثيق الوكالات والإقرارات والرهون والعقود والإفراغات العقارية عبر موثقين مرخصين.': 'Notarizing powers of attorney, declarations, mortgages, contracts, and real estate conveyances through licensed notaries.',
  'نقدّم لعملائنا، عبر موثقين مرخصين من وزارة العدل، خدمات توثيق الوكالات، والإقرارات، والرهون، والإفراغات العقارية، والعقود، وفق نظام التوثيق ولائحته التنفيذية وفي حدود اختصاص الموثق.': 'Through notaries licensed by the Ministry of Justice, we provide our clients with notarization of powers of attorney, declarations, mortgages, real estate conveyances, and contracts, under the Notarization Law and its Implementing Regulations and within the notary’s scope of authority.',
  'ما مدة سريان صك الوكالة؟': 'How long is a power of attorney valid?',
  'تنص المادة (38) من نظام التوثيق، بعد تعديلها بالمرسوم الملكي رقم (م/21) وتاريخ 26/1/1447هـ، على أن مدة صك الوكالة خمس سنوات من تاريخ صدوره، ما لم تُفسخ أو يُتوفَّ أحد طرفيها أو تُفقد أهليته قبل مضي هذه المدة، أو يحدد الموكل مدتها بما يقل عن ذلك.': 'As amended by Royal Decree No. (M/21), dated 26/1/1447 AH, Article 38 of the Notarization Law provides that a power of attorney is valid for five years from issuance unless it is revoked, either party dies or loses legal capacity before that period expires, or the principal specifies a shorter term.',
  'هل يجوز توثيق إقرار أو عقد يكون أحد طرفيه قاصراً أو غائباً؟': 'Can a declaration or contract involving a minor or absent party be notarized?',
  'تنص المادة (12) من نظام التوثيق بعد تعديلها على أن كاتب العدل لا يختص بتوثيق أي إقرار أو عقد يكون أحد طرفيه عديم الأهلية أو ناقصها أو غائباً، أو ناظر وقف أو وصية، إلا في حالات محددة، منها قبول الهبة، وتصرفات الأب في مال ولده عديم الأهلية أو ناقصها، وعقد التأجير الذي لا تتطلب مدته الإذن من المحكمة المختصة. ويسري ذلك على الموثق المرخص في حدود اختصاصه، وفقاً للمادة (11) من اللائحة التنفيذية.': 'As amended, Article 12 of the Notarization Law provides that a notary public is not competent to notarize a declaration or contract where a party lacks or has limited legal capacity, is absent, or is a waqf or will administrator, except in specified cases. These include accepting a gift, a father’s dealings with the property of a child lacking or having limited capacity, and a lease whose term does not require the competent court’s permission. The same applies to licensed notaries within their authority under Article 11 of the Implementing Regulations.',
  'ما الإطار النظامي لعمل الموثق المرخص؟': 'What legal framework governs a licensed notary’s work?',
  'يباشر الموثق اختصاصاته المنصوص عليها في نظام التوثيق وفق الأنظمة واللوائح والأدلة الإجرائية والتعليمات ذات الصلة، ويسري عليه -في حدود اختصاصه وفيما عدا الأحكام الوظيفية- ما يسري على كاتب العدل من أحكام وضوابط (المادة 11 من اللائحة التنفيذية). ويلتزم بإجراء التوثيق عبر الأنظمة الإلكترونية المعتمدة من الوزارة، والتحقق من هوية ذوي الشأن واكتمال متطلبات كل عمل توثيقي (المادة 19).': 'A licensed notary exercises the powers set out in the Notarization Law in accordance with applicable laws, regulations, procedural guides, and instructions. Within the scope of their authority and except for employment provisions, the rules applicable to notaries public also apply (Article 11 of the Implementing Regulations). The notary must use the Ministry-approved electronic systems and verify the identity of the parties and that each notarization requirement is complete (Article 19).',
  'كيف يُحدَّد المقابل المالي لأعمال التوثيق لدى الموثق المرخص؟': 'How are fees for a licensed notary’s services determined?',
  'يكون المقابل المالي المستحق للمرخص له وفق ما يتفق عليه المرخص له وذوو الشأن، مع مراعاة الجدول المرافق للائحة التنفيذية لنظام التوثيق (المادة 28 من اللائحة)، ويتضمن الجدول الوكالات والإقرارات والرهون والإفراغات العقارية والعقود.': 'The fee payable to a licensee is agreed between the licensee and the parties, subject to the schedule accompanying the Implementing Regulations of the Notarization Law (Article 28). The schedule covers powers of attorney, declarations, mortgages, real estate conveyances, and contracts.',
  'هل يجوز للمتعاقدين إضافة شروط خاصة إلى نماذج العقود؟': 'May contracting parties add special terms to contract forms?',
  'تنص الفقرة (2) من المادة (40) من نظام التوثيق، بعد تعديلها بالمرسوم الملكي رقم (م/21) وتاريخ 26/1/1447هـ، على أن يراعى عند إعداد نماذج العقود حق المتعاقدين في إضافة أي شرط أو اتفاق، ما لم يخالف النصوص النظامية.': 'As amended by Royal Decree No. (M/21), dated 26/1/1447 AH, Article 40(2) of the Notarization Law provides that contract forms must respect the parties’ right to add any term or agreement, provided it does not conflict with legal provisions.',
  'المعلومات الواردة للتعريف العام، ولا تُعد استشارة قانونية لحالة بعينها.': 'This information is for general reference only and is not legal advice for any particular matter.',
  'التنقل الرئيسي': 'Main navigation', 'فتح القائمة': 'Open menu', 'إغلاق القائمة': 'Close menu',
  'مكتب نواف بن حسن الحكمي للمحاماة والاستشارات القانونية وأعمال التوثيق': 'Nawaf bin Hassan Al-Hakami Law Firm, Legal Consultancy & Notarial Services',
  'اتصل بنا': 'Call us', 'البريد الإلكتروني': 'Email us', 'واتساب': 'WhatsApp',
  '01': '01'
};

window.ALHAKAMI_EN_SERVICES = [
  {
    title: 'Corporate Governance',
    desc: 'Drafting internal bylaws and structuring relationships between shareholders and management to improve efficiency and promote transparent operations.',
    points: ['Drafting internal governance policies, board charters, and committee mandates.', 'Defining executive management authority and establishing clear decision-making and oversight procedures.', 'Supporting compliance with the Saudi Companies Law and its implementing regulations.']
  },
  {
    title: 'Intellectual Property Protection',
    desc: 'Registering trademarks and patents and taking action against infringement to protect your commercial interests.',
    points: ['Registering trademarks, industrial designs, and copyrights with the Saudi Authority for Intellectual Property.', 'Representing clients in trademark infringement and unfair competition disputes.', 'Drafting licensing and franchise agreements and protecting trade secrets.']
  },
  {
    title: 'Court Representation',
    desc: 'Representing clients before Saudi courts at all levels and preparing clear, professional legal submissions.',
    points: ['Representing clients before general, commercial, labor, and administrative courts.', 'Preparing claims, responses, and appeals for appellate courts and the Supreme Court.', 'Following up on judgments and enforcement instruments through enforcement courts.']
  },
  {
    title: 'Arbitration',
    desc: 'Drafting arbitration agreements and supporting efficient dispute resolution under applicable local and international rules.',
    points: ['Drafting arbitration clauses for commercial, construction, and investment contracts.', 'Representing parties before recognized local and international arbitration institutions.', 'Providing arbitrator and mediation services for confidential, efficient commercial dispute resolution.']
  },
  {
    title: 'Notarization',
    desc: 'Through notaries licensed by the Ministry of Justice, we notarize powers of attorney, declarations, mortgages, real estate conveyances, and contracts under the Notarization Law and its Implementing Regulations.',
    points: ['Notarizing powers of attorney, declarations, mortgages, and real estate conveyances.', 'Notarizing contracts under the Notarization Law and its Implementing Regulations.', 'Completing notarial acts through licensed notaries and within their scope of authority.']
  },
  {
    title: 'Estate Administration & Distribution',
    desc: 'Managing the estate process from asset identification through distribution, representing heirs and supporting amicable solutions.',
    points: ['Obtaining heirship certificates and identifying real estate, cash, shares, and other estate assets.', 'Preparing and documenting consensual distribution agreements or pursuing judicial distribution.', 'Settling estates, paying debts, and implementing valid wills and endowments.']
  },
  {
    title: 'Sharia and Legal Advice',
    desc: 'Providing carefully considered legal and Sharia advice that takes relevant rules and requirements into account.',
    points: ['Providing written and verbal legal and Sharia advice to individuals and businesses.', 'Assessing the legal position, opportunities, and risks before proceedings are initiated.', 'Offering ongoing advisory arrangements tailored to commercial operations.']
  },
  {
    title: 'Legal Drafting & Contract Review',
    desc: 'Drafting and reviewing contracts, bylaws, and internal policies with clarity and precision to align with applicable laws, protect the parties’ rights, and help prevent disputes.',
    points: ['Drafting and reviewing commercial, civil, construction, operations, and supply contracts.', 'Reviewing agreements and memoranda of understanding in Arabic and English.', 'Assessing contractual risks and drafting remedies and dispute-resolution provisions.']
  },
  {
    title: 'Company Formation',
    desc: 'Selecting an appropriate legal structure, preparing formation documents, and supporting licensing and registration through official channels.',
    points: ['Forming limited liability, joint-stock, simplified joint-stock, and professional companies.', 'Converting establishments into companies, and advising on mergers, acquisitions, and amendments.', 'Supporting commercial registration, investment licensing, and electronic notarization.']
  },
  {
    title: 'Corporate Legal Services',
    desc: 'Managing corporate legal matters, from updating internal policies to representation in litigation and arbitration.',
    points: ['Providing comprehensive outsourced legal department services to companies and institutions.', 'Preparing workplace regulations and conducting administrative and financial investigations.', 'Pursuing commercial debt collection and protecting business interests.']
  },
  {
    title: 'Real Estate Disputes',
    desc: 'Managing property matters and disputes throughout the process, in coordination with the relevant authorities.',
    points: ['Representing clients in ownership disputes, overlapping title deeds, and title claims.', 'Handling real estate contribution, lease, eviction, and development disputes.', 'Drafting and managing off-plan sale, mortgage, and real estate finance agreements.']
  },
  {
    title: 'Labor & Employment Disputes',
    desc: 'Representing employers and employees before labor courts and committees in Jeddah and throughout Saudi Arabia.',
    points: ['Representing employers or employees in amicable settlement proceedings and labor courts.', 'Drafting and reviewing employment and non-compete agreements and confidentiality provisions.', 'Handling termination, end-of-service benefit, and employment compensation matters.']
  },
  {
    title: 'Commercial Disputes',
    desc: 'Drafting and reviewing robust sales, supply, and distribution agreements, with clear obligations and carefully addressed commercial risks.',
    points: ['Representing clients in commercial disputes between traders, companies, and business partners.', 'Handling negotiable instrument matters, including checks, promissory notes, bills of exchange, and commercial insolvency.', 'Drafting commercial agency, distribution, and franchise agreements.']
  }
];
