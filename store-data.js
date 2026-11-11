/*
  بيانات متجر لمسة — غيّري النصوص والأسعار والروابط هنا دون تعديل تصميم الصفحة.
  الصور: أضيفي ملفاتك داخل مجلد images واكتبي المسار، مثال: 'images/lipstick.jpg'.
  واتساب: رقم دولي أرقام فقط، بدون + أو مسافات (مثال السعودية: 9665xxxxxxxx).
  الفئات المتاحة للمنتجات: face, lips, eyes, care. أضيفي فئة هنا ثم استخدمي معرّفها للمنتج.
*/
window.STORE_DATA = {
  storeName: 'لَمْسَة',
  tagline: 'جمالك يبدأ من هنا',
  metaDescription: 'متجر لمسة لمستحضرات التجميل والعناية بالبشرة. اكتشفي منتجات مختارة بعناية واطلبي بسهولة عبر واتساب.',
  locale: 'ar-SA',
  currency: 'ر.س',
  // اكتبي رقم واتساب بصيغة دولية بدون علامة + لتفعيل الطلبات.
  whatsappNumber: '',
  email: 'hello@example.com',
  announcement: { text: 'توصيل مجاني للطلبات فوق', highlight: '٢٥٠ ر.س — دلّلي نفسك اليوم' },
  hero: {
    kicker: 'جمالك، بطريقتك',
    title: 'لأنكِ تستحقين<br><span>لمسة من الجمال</span>',
    description: 'اكتشفي مختاراتنا من مستحضرات التجميل التي تحتفي بجمالك الطبيعي وترافقكِ في كل لحظة.',
    button: 'تسوّقي المجموعة',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'مستحضرات تجميل وألوان مكياج'
  },
  catalog: { title: 'اختاري لمستك', subtitle: 'منتجات مختارة لترافقك في كل لحظة' },
  story: {
    title: 'جمالكِ، هو أجمل حكاية',
    description: 'في لمسة نؤمن أن الجمال يبدأ من شعورك بالراحة والثقة. لهذا نختار لكِ منتجات نحبها، لتكون كل لمسة أقرب إلى أسلوبك الخاص.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85'
  },
  categories: [
    { id: 'face', name: 'الوجه' },
    { id: 'lips', name: 'الشفاه' },
    { id: 'eyes', name: 'العيون' },
    { id: 'care', name: 'العناية' }
  ],
  socials: { Instagram: '', TikTok: '', Snapchat: '' },
  products: [
    { id: 1, name: 'كريم أساس مخملي', category: 'face', description: 'تغطية ناعمة وإطلالة طبيعية تدوم.', badge: 'الأكثر مبيعًا', price: 145, oldPrice: 175, rating: '★★★★★', image: 'https://images.unsplash.com/photo-1631214540242-9c6e7c7cc2e5?auto=format&fit=crop&w=650&q=80' },
    { id: 2, name: 'أحمر شفاه روزي', category: 'lips', description: 'لون غني بلمسة مخملية مريحة.', badge: 'جديد', price: 78, rating: '★★★★★', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=650&q=80' },
    { id: 3, name: 'باليت ظلال دافئة', category: 'eyes', description: 'درجات يومية ناعمة للمسة عيون ساحرة.', badge: 'اختيارنا', price: 125, rating: '★★★★☆', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=650&q=80' },
    { id: 4, name: 'ماسكارا للرموش', category: 'eyes', description: 'لمسة تحدد رموشك وتبرز جمال عينيك.', badge: '', price: 89, rating: '★★★★★', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=650&q=80' },
    { id: 5, name: 'بودرة خدود ناعمة', category: 'face', description: 'لون متوهج يضيف حيوية إلى إطلالتك.', badge: '', price: 68, rating: '★★★★☆', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=650&q=80' },
    { id: 6, name: 'ملمع شفاه كريمي', category: 'lips', description: 'لمعان لطيف وترطيب يدوم طوال اليوم.', badge: 'جديد', price: 59, rating: '★★★★★', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=650&q=80' },
    { id: 7, name: 'سيروم إشراقة البشرة', category: 'care', description: 'خطوة عناية خفيفة لبشرة مشرقة.', badge: 'عناية', price: 112, oldPrice: 135, rating: '★★★★★', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=650&q=80' },
    { id: 8, name: 'فرش مكياج أساسية', category: 'face', description: 'مجموعة عملية لنتيجة متقنة كل مرة.', badge: '', price: 99, rating: '★★★★☆', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=650&q=80' }
  ]
};
