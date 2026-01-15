/* i18n.js — Avenor site i18n (URL param + full reload) */
(() => {
  const SUPPORTED = ["ru", "en", "es", "pt", "de", "fr", "uk"];

  const FLAGS = {
    ru: "🇷🇺",
    en: "🇺🇸",
    es: "🇪🇸",
    pt: "🇵🇹",
    de: "🇩🇪",
    fr: "🇫🇷",
    uk: "🇺🇦",
  };

  // Словарь (основные ключи, которые реально есть в твоих страницах сейчас)
  const T = {
    ru: {
      meta_title: "Avenor Downloader — скачивание YouTube, TikTok, Instagram",
      meta_desc:
        "Avenor Downloader — программа для скачивания, обрезки и конвертации видео и аудио с YouTube, Instagram, TikTok и других платформ.",

        site_notice:
        "Сайт работает в тестовом режиме. Оплата тарифов временно недоступна — мы ожидаем подтверждение платёжной системы. Пожалуйста, следите за обновлениями.",
      
        
      nav_why: "Почему Avenor",
      nav_how: "Как работает",
      nav_pricing: "Подписки",
      nav_support: "Поддержка",
      nav_faq: "FAQ",
      cta_download: "Скачать",

      hero_kicker: "УНИКАЛЬНАЯ ФУНКЦИЯ: ФРАГМЕНТ ДО СКАЧИВАНИЯ",
      hero_title_1: "Avenor Downloader —",
      hero_title_accent: "вырезай фрагмент ДО скачивания",
      hero_title_2: "",
      hero_subtitle:
        "Скачивай видео и аудио с YouTube, TikTok, Instagram и других платформ. Выбирай In/Out и сохраняй только нужный фрагмент — быстро и локально.",
      

        
      hero_btn_win: "Скачать для Windows",
      hero_btn_mac: "Скачать для macOS",
      hero_btn_how: "Как это работает?",
      hero_meta_before: "Скачивая вы принимаете нашу",
      hero_meta_privacy: "политику конфиденциальности",
      hero_meta_and: "и",
      hero_meta_terms: "пользовательское соглашение",
      hero_badge_clip: "Фрагмент до скачивания",
      hero_badge_local: "Работает локально (приватно)",
      hero_badge_free: "Free-план доступен",
      

      // ===== UI mockup (макет приложения) =====
      ui_tab_download: "Скачать",
      ui_tab_compress: "Сжать",
      ui_tab_convert: "Конвертировать",
      ui_tab_fragments: "Фрагмент",

      why_title: "Почему именно Avenor Downloader",
      why_subtitle:
        "Не просто «ещё один загрузчик», а полноценный инструмент для работы с видео и аудио.",
      why_card1_t: "Скачивает отовсюду",
      why_card1_p:
        "YouTube, Instagram, TikTok, Facebook, Pinterest и другие. Если ссылку можно открыть в браузере — Avenor почти всегда сможет её скачать.",
      why_card2_t: "Сжатие размера видео",
      why_card2_p:
        "Видео не лезет в Телеграм или на почту? Сожми его в пару кликов и отправь без потери качества.",
      why_card3_t: "Конвертация форматов",
      why_card3_p:
        "Скачался «кривой» файл или неподходящий формат? Просто конвертируйте его в MP4, MOV, MKV, MP3, WAV и другие форматы.",
      why_card4_t: "Создавайте клипы еще до загрузки",
      why_card4_p:
        "Точно выбирайте нужные фрагменты видео. Сохраняйте только важные моменты. Избавляйтесь от лишнего контента — быстро, удобно и без сторонних редакторов.",
      trust_label: "Avenor Downloader уже выбирают для ежедневной работы с видео:",
      trust_1: "монтажёры",
      trust_2: "SMM-специалисты",
      trust_3: "создатели контента",

      how_title: "Как это работает",
      how_subtitle: "Всего три шага — и нужный ролик уже на вашем диске.",
      how_s1_t: "Выберите параметры скачивания",
      how_s1_p: "Формат, качество, режим (видео или аудио) и папку скачивания.",
      how_s2_t: "Вставьте ссылку",
      how_s2_p:
        "Скопируйте ссылку на видео, нажмите одну кнопку — и скачивание сразу начнётся.",
      how_s3_t: "Наслаждайтесь результатом",
      how_s3_p:
        "Наглядный прогресс, статус задачи и история загрузок. Файлы всегда под контролем и в одном месте.",

      pricing_title: "Подписки Avenor",
      pricing_subtitle:
        "PRO открывает 2K/4K/8K, безлимитные задачи и вкладку Фрагменты для создания клипов ещё до загрузки.",

      faq_title: "Часто задаваемые вопросы",
      faq_more_open: "Показать ещё вопросы",
      faq_more_close: "Скрыть вопросы",

      support_title: "Поддержка",
      support_p:
        "Опишите вопрос — мы ответим на почту. Обычно отвечаем в течение 6 часов.\n\nЕсли столкнулись с проблемами в Avenor Downloader, максимально подробно опишите эту проблему. Качество вашего описания проблемы поможет нам исправить её как можно быстрее!",
      support_direct: "Написать напрямую",
      support_email_label: "Ваш email",
      support_subject_label: "Тема",
      support_message_label: "Сообщение",
      support_send: "Отправить",
      support_copy: "Скопировать email",

      footer_privacy: "Политика конфиденциальности",
      footer_terms: "Пользовательское соглашение",
      footer_refund: "Политика возвратов",

      legal_back: "← На главную",
      privacy_title: "Политика конфиденциальности — Avenor Downloader",
      terms_title: "Пользовательское соглашение — Avenor Downloader",

      pro_m_li_fragments: "Фрагменты (обрезка до загрузки)",
      pro_y_li_fragments: "Фрагменты (обрезка до загрузки)",
      studio_li_fragments: "Фрагменты для команд",

      compare_fragments: "Фрагменты (обрезка до загрузки)",



      refund_title: "Политика возвратов",

      refund_text_html: `
      <p>Запрос на возврат средств может быть подан в течение <strong>14 дней</strong> с момента первоначальной оплаты подписки при условии, что сервис не был существенно использован.</p>

      <p>В связи с цифровой природой сервиса и немедленным предоставлением доступа к функциям подписки, возврат средств может быть отклонён, если сервис был активно использован, включая, но не ограничиваясь, загрузкой контента, конвертацией, пакетной обработкой или использованием PRO-функций.</p>

      <p>В случае автоматического продления подписки запросы на возврат рассматриваются в индивидуальном порядке. Возврат средств после начала нового платёжного периода не гарантируется.</p>

      <p>Возврат средств не осуществляется, если сервис функционирует в соответствии с описанием, а ограничения или проблемы вызваны сторонними платформами, изменениями внешних API или иными факторами, не зависящими от Avenor Downloader.</p>

      <p>Все платежи обрабатываются системой <strong>Paddle</strong>, выступающей в роли Merchant of Record. Одобренные возвраты осуществляются через Paddle в соответствии с их политикой возвратов и применимым законодательством.</p>

      <p>Avenor Downloader оставляет за собой право рассматривать запросы на возврат по своему усмотрению в рамках применимого законодательства о защите прав потребителей и отказывать в возврате в случае злоупотреблений, нарушения настоящего соглашения или неправомерного использования сервиса.</p>

      <p>Настоящая политика возвратов не ограничивает законные права потребителей, предусмотренные применимым законодательством.</p>
      `,

      included_title: "Что входит в Avenor PRO",
      included_li_1: "Скачивание видео и аудио с поддерживаемых платформ",
      included_li_2: "Обрезка и создание фрагментов ещё до загрузки",
      included_li_3: "Конвертация видео и аудио (MP4, MKV, MP3, WAV и др.)",
      included_li_4: "Повышенное качество и расширенные лимиты в PRO-планах",
      included_li_5: "Вся обработка выполняется локально на вашем устройстве",
      



    },

    en: {
      meta_title: "Avenor Downloader — download YouTube, TikTok, Instagram",
      meta_desc:
        "Avenor Downloader is a desktop app to download, trim, compress and convert video/audio from YouTube, Instagram, TikTok and more.",

      nav_why: "Why Avenor",
      nav_how: "How it works",
      nav_pricing: "Plans",
      nav_support: "Support",
      nav_faq: "FAQ",
      cta_download: "Download",
      site_notice:
      "The website is currently in test mode. Paid plans are temporarily unavailable while we await payment system approval. Please stay tuned for updates.",
    
      hero_kicker: "UNIQUE FEATURE: CLIP BEFORE DOWNLOAD",
      hero_title_1: "Avenor Downloader —",
      hero_title_accent: "cut clips BEFORE downloading",
      hero_title_2: "",
      hero_subtitle:
        "Select In/Out points and download only the clip you need — fast and local.",
      
      hero_btn_win: "Download for Windows",
      hero_btn_mac: "Download for macOS",
      hero_btn_how: "How it works?",
      hero_meta_before: "By downloading you accept our",
      hero_meta_privacy: "Privacy Policy",
      hero_meta_and: "and",
      hero_meta_terms: "Terms of Service",
      hero_badge_clip: "Clip before download",
      hero_badge_local: "Runs locally (private)",
      hero_badge_free: "Free plan available",
      
      why_title: "Why Avenor Downloader",
      why_subtitle:
        "Not just another downloader — a complete tool for video & audio work.",
      why_card1_t: "Downloads from anywhere",
      why_card1_p:
        "YouTube, Instagram, TikTok, Facebook, Pinterest and more. If a link opens in your browser, Avenor can usually download it.",
      why_card2_t: "Video compression",
      why_card2_p:
        "File too large for Telegram or email? Compress it in a couple of clicks without sacrificing quality.",
      why_card3_t: "Format conversion",
      why_card3_p:
        "Got an unsupported file? Convert to MP4, MOV, MKV, MP3, WAV and other formats.",
      why_card4_t: "Create clips before downloading",
      why_card4_p:
        "Pick exact video segments, save only the moments that matter, and skip the rest — fast, convenient, and without third-party editors.",

      trust_label: "Chosen for daily video work by:",
      trust_1: "editors",
      trust_2: "SMM specialists",
      trust_3: "content creators",

      how_title: "How it works",
      how_subtitle: "Three steps — and the file is on your disk.",
      how_s1_t: "Choose download settings",
      how_s1_p: "Format, quality, mode (video/audio) and download folder.",
      how_s2_t: "Paste the link",
      how_s2_p: "Copy a link, press one button — downloading starts instantly.",
      how_s3_t: "Enjoy the result",
      how_s3_p:
        "Clear progress, task status and download history. Everything stays under control.",

      pricing_title: "Avenor Plans",
      pricing_subtitle:
        "Free plan up to 1080p. PRO unlocks 2K/4K/8K and higher limits.",

      faq_title: "Frequently asked questions",
      faq_more_open: "Show more questions",
      faq_more_close: "Hide questions",

      support_title: "Support",
      support_p:
        "Describe your issue — we’ll reply by email. Usually within 6 hours.\n\nIf you face problems in Avenor Downloader, please describe them in detail so we can fix them faster.",
      support_direct: "Write directly",
      support_email_label: "Your email",
      support_subject_label: "Subject",
      support_message_label: "Message",
      support_send: "Send",
      support_copy: "Copy email",

      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_refund: "Refund Policy",

      legal_back: "← Back to home",
      privacy_title: "Privacy Policy — Avenor Downloader",
      terms_title: "Terms of Service — Avenor Downloader",

            // ===== UI mockup (макет приложения) =====
      ui_tab_download: "Download",
      ui_tab_fragments: "Fragment",

      ui_tab_compress: "Compress",
      ui_tab_convert: "Convert",
      ui_paste_link: "Paste link",
      ui_best_quality: "Best",
      ui_filter_all: "All",
      ui_filter_video: "Video",
      ui_filter_audio: "Audio",
      ui_items_count: "39 items",
      ui_task_meta: "Done · 1920×1080 · MP4",
      ui_open_folder: "Open folder",

      // ===== Pricing cards =====
      pricing_btn_download: "Download",
      free_li_1: "For getting started and basic tasks",
      free_li_2: "Up to 1080p + daily limits",
      free_li_3: "2 devices per email",

      per_month: "/ month",
      btn_get_pro: "Get PRO",

      pro_m_li_1: "Full PRO for one month",
      pro_m_li_2: "4K/8K + unlimited tasks",
      pro_m_li_3: "Best way to try PRO",

      badge_recommended: "RECOMMENDED",

      per_year_month_equiv: "/ year • €3.25 / month",
      pro_y_li_1: "Best value for PRO",
      pro_y_li_2: "Save ~55% vs Monthly",
      pro_y_li_3: "One payment per year",

      per_year_month_equiv_studio: "/ year • €5.00 / month",
      studio_li_1: "For studios and teams",
      studio_li_2: "Up to 10 devices per account",
      studio_li_3: "One payment per year",

      // ===== Comparison table =====
      compare_title: "Feature comparison",
      compare_subtitle: "All plan differences in one table.",
      compare_col_features: "Features",
      compare_devices: "Devices",
      compare_quality: "Max download quality",
      compare_quality_free: "up to 1080p",
      compare_quality_pro: "up to 8K",
      compare_downloads_day: "Downloads per day",
      compare_convert_compress: "Convert & compress",
      compare_limit_3_day: "3 / day",
      compare_file_size: "File size for convert/compress",
      compare_file_size_free: "up to 500 MB",
      compare_batch: "Batch downloads",
      compare_audio_only: "Audio-only downloads",
      compare_cookies: "Cookies.txt (private/age-restricted content)*",
      compare_history: "Download history",
      compare_priority_support: "Priority support",
      compare_commercial: "Commercial use",
      unlimited: "Unlimited",
      no_limits: "No limits",

      // ===== FAQ Q/A =====
      faq_q1: "What is Avenor Downloader and how is it different from other downloaders?",
      faq_a1:
        "Avenor Downloader is a desktop app for downloading, trimming and converting video and audio from popular platforms. Unlike online services, Avenor works locally on your computer without uploading files to third-party servers. This means: no file size limits, original quality preserved, maximum speed, and full privacy of your data.",
      faq_q2: "Which platforms are supported?",
      faq_a2:
        "Avenor supports most popular video platforms including YouTube, Instagram, TikTok, Facebook and Pinterest. The list is constantly expanding thanks to the updateable download engine.",
      faq_q3: "Why can PRO videos be larger in size?",
      faq_a3:
        "Because Avenor does not degrade quality. Unlike many online services that compress files, Avenor preserves the original bitrate, audio track and codec whenever possible. Larger size is the cost of honest quality.",
      faq_q4: "Can I download audio only?",
      faq_a4:
        "Yes. You can extract only the audio track and save it in a convenient format (e.g. MP3). Great for music, podcasts, lectures and interviews.",
      faq_q5: "Is Avenor safe to use?",
      faq_a5:
        "Yes. Avenor does not inject ads, does not install browser extensions, does not share your files with third parties, and does not collect the content of downloaded videos. It uses well-known open tools for media processing.",
      faq_q6: "Why do I need Cookies and how do I use them?",
      faq_a6:
        "Cookies allow access to content that is available only to logged-in users, restricted by region/age, or hidden behind private account settings. For most public videos, cookies are not required.",
      faq_q7: "How many devices can I use with one subscription?",
      faq_a7:
        "One subscription can be activated on 2/10 devices at the same time depending on your plan. Useful if you work on a home and a work computer.",
      faq_q8: "Which operating systems are supported?",
      faq_a8: "Currently: Windows 10 and Windows 11. A macOS version is in development.",
      faq_q9: "Is it legal to download videos via Avenor?",
      faq_a9:
        "You are responsible for how you use content. Avenor is a tool intended for your own materials, public content, or content used with permission.",

      // ===== Final CTA =====
      cta_title: "Try Avenor Downloader for free",
      cta_subtitle:
        "Download video and audio in seconds, reduce file size and convert formats for your workflow — all in one app.",

      // ===== Support placeholders =====
      support_subject_ph: "For example: video won't download",
      support_message_ph: "Describe your issue in as much detail as possible.",

      pro_m_li_fragments: "Fragments (trim before download)",
      pro_y_li_fragments: "Fragments (trim before download)",
      studio_li_fragments: "Fragments for teams",

      compare_fragments: "Fragments (trim before download)",



      refund_title: "Refund Policy",
      refund_text_html: `
      <p>Refund requests may be submitted within <strong>14 days</strong> of the initial subscription purchase, provided that the service has not been substantially used.</p>

      <p>Due to the nature of digital services and immediate access to subscription features, refunds may be refused if the service has been actively used, including but not limited to content downloads, conversions, batch processing, or access to PRO features.</p>

      <p>In the case of automatic subscription renewals, refund requests are reviewed on a case-by-case basis. No refunds are guaranteed once a new billing period has started.</p>

      <p>Refunds are not provided where the service operates as described, and any limitations, restrictions, or compatibility issues are caused by third-party platforms, changes to external APIs, or factors outside of Avenor Downloader’s control.</p>

      <p>All payments are processed by <strong>Paddle</strong> as the Merchant of Record. Any approved refunds are issued via Paddle in accordance with their refund policies and applicable laws.</p>

      <p>Avenor Downloader reserves the right to assess refund requests at its sole discretion, in accordance with applicable consumer protection laws, and to refuse refunds in cases of abuse, violation of these Terms, or misuse of the service.</p>

      <p>This refund policy does not affect any statutory rights that may apply under local consumer protection laws.</p>
      `,

      included_title: "What you get with Avenor PRO",
      included_li_1: "Download video and audio from supported platforms",
      included_li_2: "Trim and create video fragments before downloading",
      included_li_3: "Convert video and audio formats (MP4, MKV, MP3, WAV, etc.)",
      included_li_4: "Higher quality and increased limits with PRO plans",
      included_li_5: "All processing is performed locally on the user’s device",
      
    },

    // Для ES/PT/DE/FR/UK — ставлю качественные короткие переводы основных UI-строк.
    // Тексты legal-документов (большие) мы позже переведём отдельным блоком, иначе будет огромный файл.
    es: {
      meta_title: "Avenor Downloader — descargar YouTube, TikTok, Instagram",
      meta_desc:
        "Avenor Downloader es una aplicación de escritorio para descargar, recortar, comprimir y convertir video y audio de YouTube, Instagram, TikTok y más.",
    
      nav_why: "Por qué Avenor",
      nav_how: "Cómo funciona",
      nav_pricing: "Planes",
      nav_support: "Soporte",
      nav_faq: "FAQ",
      cta_download: "Descargar",
    
      site_notice:
      "El sitio está en modo de prueba. Los planes de pago no están disponibles temporalmente mientras esperamos la aprobación del sistema de pagos.",
    
      hero_kicker: "FUNCIÓN ÚNICA: RECORTA ANTES DE DESCARGAR",
      hero_title_1: "Avenor Downloader —",
      hero_title_accent: "recorta clips ANTES de descargar",
      hero_title_2: "",
      hero_subtitle:
        "Descarga video y audio de YouTube, TikTok, Instagram y más. Define puntos In/Out y guarda solo el fragmento que necesitas — rápido y local.",
      
      hero_btn_win: "Descargar para Windows",
      hero_btn_mac: "Descargar para macOS",

      hero_btn_how: "¿Cómo funciona?",
      hero_meta_before: "Al descargar aceptas nuestra",
      hero_meta_privacy: "Política de privacidad",
      hero_meta_and: "y",
      hero_meta_terms: "Términos de servicio",
    
      why_title: "Por qué elegir Avenor Downloader",
      why_subtitle:
        "No es solo otro descargador, es una herramienta completa para trabajar con video y audio.",
      why_card1_t: "Descarga desde cualquier sitio",
      why_card1_p:
        "YouTube, Instagram, TikTok, Facebook, Pinterest y más. Si el enlace se abre en el navegador, Avenor casi siempre puede descargarlo.",
      why_card2_t: "Compresión de video",
      why_card2_p:
        "¿El archivo es demasiado grande para Telegram o correo? Comprímelo en pocos clics sin perder calidad.",
      why_card3_t: "Conversión de formatos",
      why_card3_p:
        "¿Formato incompatible? Convierte fácilmente a MP4, MOV, MKV, MP3, WAV y otros.",
      why_card4_t: "Crea clips antes de descargar",
      why_card4_p:
        "Elige con precisión los fragmentos del video, guarda solo los momentos importantes y elimina lo innecesario — rápido, cómodo y sin editores externos.",

      trust_label: "Avenor Downloader ya es elegido para el trabajo diario por:",
      trust_1: "editores",
      trust_2: "especialistas en SMM",
      trust_3: "creadores de contenido",
      hero_badge_clip: "Recorte antes de descargar",
      hero_badge_local: "Funciona localmente (privado)",
      hero_badge_free: "Plan gratuito disponible",
      
      how_title: "Cómo funciona",
      how_subtitle: "Solo tres pasos y el archivo estará en tu disco.",
      how_s1_t: "Elige los parámetros de descarga",
      how_s1_p: "Formato, calidad, modo (video o audio) y carpeta de destino.",
      how_s2_t: "Pega el enlace",
      how_s2_p:
        "Copia el enlace del video, pulsa un botón y la descarga comenzará al instante.",
      how_s3_t: "Disfruta el resultado",
      how_s3_p:
        "Progreso claro, estado de tareas e historial de descargas. Todo bajo control.",
    
      pricing_title: "Planes de Avenor",
      pricing_subtitle:
        "Plan gratuito hasta 1080p. PRO desbloquea 2K/4K/8K y límites ampliados.",
    
      faq_title: "Preguntas frecuentes",
      faq_more_open: "Mostrar más preguntas",
      faq_more_close: "Ocultar preguntas",
    
      support_title: "Soporte",
      support_p:
        "Describe tu problema y te responderemos por correo. Normalmente en un plazo de 6 horas.\n\nSi tienes problemas con Avenor Downloader, descríbelos con el mayor detalle posible para que podamos solucionarlos más rápido.",
      support_direct: "Escribir directamente",
      support_email_label: "Tu correo electrónico",
      support_subject_label: "Asunto",
      support_message_label: "Mensaje",
      support_send: "Enviar",
      support_copy: "Copiar correo",
    
      footer_privacy: "Política de privacidad",
      footer_terms: "Términos de servicio",
      footer_refund: "Política de reembolsos",

      legal_back: "← Volver al inicio",
      privacy_title: "Política de privacidad — Avenor Downloader",
      terms_title: "Términos de servicio — Avenor Downloader",
    
      // ===== UI mockup =====
      ui_tab_download: "Descargar",
      ui_tab_fragments: "Fragmento",

      ui_tab_compress: "Comprimir",
      ui_tab_convert: "Convertir",
      ui_paste_link: "Pegar enlace",
      ui_best_quality: "Mejor",
      ui_filter_all: "Todo",
      ui_filter_video: "Video",
      ui_filter_audio: "Audio",
      ui_items_count: "39 elementos",
      ui_task_meta: "Listo · 1920×1080 · MP4",
      ui_open_folder: "Abrir carpeta",
    
      // ===== Pricing cards =====
      pricing_btn_download: "Descargar",
      free_li_1: "Para comenzar y tareas básicas",
      free_li_2: "Hasta 1080p + límites diarios",
      free_li_3: "2 dispositivos por correo",
    
      per_month: "/ mes",
      btn_get_pro: "Obtener PRO",
    
      pro_m_li_1: "PRO completo por un mes",
      pro_m_li_2: "4K/8K + tareas ilimitadas",
      pro_m_li_3: "La mejor forma de probar PRO",
    
      badge_recommended: "RECOMENDADO",
    
      per_year_month_equiv: "/ año • €3.25 / mes",
      pro_y_li_1: "Mejor precio para PRO",
      pro_y_li_2: "Ahorra ~55% frente al plan mensual",
      pro_y_li_3: "Un solo pago al año",
    
      per_year_month_equiv_studio: "/ año • €5.00 / mes",
      studio_li_1: "Para estudios y equipos",
      studio_li_2: "Hasta 10 dispositivos por cuenta",
      studio_li_3: "Un solo pago al año",
    
      // ===== Comparison table =====
      compare_title: "Comparación de funciones",
      compare_subtitle: "Todas las diferencias de planes en una tabla.",
      compare_col_features: "Funciones",
      compare_devices: "Dispositivos",
      compare_quality: "Calidad máxima",
      compare_quality_free: "hasta 1080p",
      compare_quality_pro: "hasta 8K",
      compare_downloads_day: "Descargas por día",
      compare_convert_compress: "Convertir y comprimir",
      compare_limit_3_day: "3 / día",
      compare_file_size: "Tamaño de archivo",
      compare_file_size_free: "hasta 500 MB",
      compare_batch: "Descargas por lotes",
      compare_audio_only: "Solo audio",
      compare_cookies: "Cookies.txt (contenido privado/restringido)*",
      compare_history: "Historial de descargas",
      compare_priority_support: "Soporte prioritario",
      compare_commercial: "Uso comercial",
      unlimited: "Ilimitado",
      no_limits: "Sin límites",
    
      // ===== FAQ =====
      faq_q1: "¿Qué es Avenor Downloader y en qué se diferencia?",
      faq_a1:
        "Avenor Downloader es una aplicación de escritorio para descargar, recortar y convertir video y audio. A diferencia de los servicios online, funciona localmente sin subir archivos a servidores externos, preservando la calidad y la privacidad.",
      faq_q2: "¿Qué plataformas son compatibles?",
      faq_a2:
        "Avenor es compatible con YouTube, Instagram, TikTok, Facebook, Pinterest y muchas más. La lista crece con cada actualización.",
      faq_q3: "¿Por qué los archivos PRO pueden pesar más?",
      faq_a3:
        "Porque Avenor no reduce la calidad. Conserva el bitrate original, el audio y los códecs siempre que sea posible.",
      faq_q4: "¿Puedo descargar solo el audio?",
      faq_a4:
        "Sí. Puedes extraer únicamente el audio y guardarlo en formatos como MP3. Ideal para música, podcasts y clases.",
      faq_q5: "¿Es seguro usar Avenor?",
      faq_a5:
        "Sí. Avenor no muestra anuncios, no instala extensiones y no comparte tus archivos. Utiliza herramientas abiertas y confiables.",
      faq_q6: "¿Para qué sirven las Cookies?",
      faq_a6:
        "Las cookies permiten acceder a contenido privado, restringido por edad o región. Para la mayoría de los videos públicos no son necesarias.",
      faq_q7: "¿Cuántos dispositivos puedo usar?",
      faq_a7:
        "Una suscripción puede activarse en 2 o 10 dispositivos según el plan.",
      faq_q8: "¿Qué sistemas operativos son compatibles?",
      faq_a8:
        "Actualmente: Windows 10 y Windows 11. macOS está en desarrollo.",
      faq_q9: "¿Es legal descargar videos con Avenor?",
      faq_a9:
        "El uso del contenido es responsabilidad del usuario. Avenor está pensado para material propio, público o con permiso.",
    
      // ===== Final CTA =====
      cta_title: "Prueba Avenor Downloader gratis",
      cta_subtitle:
        "Descarga video y audio en segundos, reduce el tamaño y convierte formatos — todo en una sola app.",
    
      // ===== Support placeholders =====
      support_subject_ph: "Por ejemplo: el video no se descarga",
      support_message_ph: "Describe el problema con el mayor detalle posible.",

      pro_m_li_fragments: "Fragmentos (recorta antes de descargar)",
      pro_y_li_fragments: "Fragmentos (recorta antes de descargar)",
      studio_li_fragments: "Fragmentos para equipos",

      compare_fragments: "Fragmentos (recorte antes de descargar)",


      refund_title: "Política de reembolsos",
      refund_text_html: `
      <p>Las solicitudes de reembolso pueden enviarse dentro de los <strong>14 días</strong> posteriores a la compra inicial de la suscripción, siempre que el servicio no se haya utilizado de forma sustancial.</p>

      <p>Debido a la naturaleza de los servicios digitales y al acceso inmediato a las funciones de la suscripción, el reembolso puede rechazarse si el servicio se ha utilizado activamente, incluyendo, entre otros, descargas de contenido, conversiones, procesamiento por lotes o acceso a funciones PRO.</p>

      <p>En caso de renovaciones automáticas, las solicitudes de reembolso se revisan caso por caso. No se garantiza el reembolso una vez iniciado un nuevo período de facturación.</p>

      <p>No se otorgan reembolsos cuando el servicio funciona según lo descrito y las limitaciones, restricciones o problemas de compatibilidad se deban a plataformas de terceros, cambios en APIs externas o factores fuera del control de Avenor Downloader.</p>

      <p>Todos los pagos son procesados por <strong>Paddle</strong> como Merchant of Record. Cualquier reembolso aprobado se emite a través de Paddle conforme a sus políticas y a la legislación aplicable.</p>

      <p>Avenor Downloader se reserva el derecho de evaluar las solicitudes de reembolso a su sola discreción, conforme a las leyes de protección al consumidor aplicables, y de rechazar reembolsos en caso de abuso, incumplimiento de estos términos o uso indebido del servicio.</p>

      <p>Esta política de reembolsos no afecta los derechos legales que puedan aplicarse según la normativa local de protección al consumidor.</p>
      `,

      included_title: "Qué incluye Avenor PRO",
      included_li_1: "Descarga de video y audio desde plataformas compatibles",
      included_li_2: "Recorte y creación de fragmentos antes de la descarga",
      included_li_3: "Conversión de formatos de video y audio (MP4, MKV, MP3, WAV, etc.)",
      included_li_4: "Mayor calidad y límites ampliados en los planes PRO",
      included_li_5: "Todo el procesamiento se realiza localmente en el dispositivo del usuario",
      
    },
    
    pt: {
      meta_title: "Avenor Downloader — baixar YouTube, TikTok, Instagram",
      meta_desc:
        "Avenor Downloader é um aplicativo desktop para baixar, recortar, comprimir e converter vídeo e áudio do YouTube, Instagram, TikTok e outras plataformas.",
    
      nav_why: "Por que Avenor",
      nav_how: "Como funciona",
      nav_pricing: "Planos",
      nav_support: "Suporte",
      nav_faq: "FAQ",
      cta_download: "Baixar",
      site_notice:
      "O site está em modo de teste. Os planos pagos estão temporariamente indisponíveis enquanto aguardamos a aprovação do sistema de pagamento.",
    
      hero_kicker: "RECURSO ÚNICO: CORTE ANTES DO DOWNLOAD",
      hero_title_1: "Avenor Downloader —",
      hero_title_accent: "corte trechos ANTES do download",
      hero_title_2: "",
      hero_subtitle:
        "Baixe vídeos e áudios do YouTube, TikTok, Instagram e muito mais. Defina os pontos In/Out e salve apenas o trecho necessário — rápido e local.",
      
      hero_btn_win: "Baixar para Windows",
      hero_btn_mac: "Baixar para macOS",

      hero_btn_how: "Como funciona?",
      hero_meta_before: "Ao baixar, você aceita nossa",
      hero_meta_privacy: "Política de Privacidade",
      hero_meta_and: "e",
      hero_meta_terms: "Termos de Serviço",
    
      why_title: "Por que escolher o Avenor Downloader",
      why_subtitle:
        "Não é apenas mais um downloader, é uma ferramenta completa para vídeo e áudio.",
      why_card1_t: "Baixa de qualquer lugar",
      why_card1_p:
        "YouTube, Instagram, TikTok, Facebook, Pinterest e muito mais. Se o link abre no navegador, o Avenor quase sempre consegue baixar.",
      why_card2_t: "Compressão de vídeo",
      why_card2_p:
        "Arquivo grande demais para Telegram ou e-mail? Comprima em poucos cliques sem perder qualidade.",
      why_card3_t: "Conversão de formatos",
      why_card3_p:
        "Formato incompatível? Converta facilmente para MP4, MOV, MKV, MP3, WAV e outros.",
      why_card4_t: "Crie clipes antes de baixar",
      why_card4_p:
        "Escolha com precisão os trechos do vídeo, salve apenas os momentos importantes e elimine o restante — rápido, prático e sem editores externos.",
      trust_label: "Avenor Downloader já é escolhido para uso diário por:",
      trust_1: "editores",
      trust_2: "especialistas em SMM",
      trust_3: "criadores de conteúdo",
      hero_badge_clip: "Corte antes do download",
      hero_badge_local: "Funciona localmente (privado)",
      hero_badge_free: "Plano gratuito disponível",
      
      how_title: "Como funciona",
      how_subtitle: "Apenas três passos e o arquivo estará no seu computador.",
      how_s1_t: "Escolha as configurações de download",
      how_s1_p: "Formato, qualidade, modo (vídeo ou áudio) e pasta de destino.",
      how_s2_t: "Cole o link",
      how_s2_p:
        "Copie o link do vídeo, clique em um botão e o download começa imediatamente.",
      how_s3_t: "Aproveite o resultado",
      how_s3_p:
        "Progresso claro, status das tarefas e histórico de downloads. Tudo sob controle.",
    
      pricing_title: "Planos Avenor",
      pricing_subtitle:
        "Plano gratuito até 1080p. PRO desbloqueia 2K/4K/8K e limites ampliados.",
    
      faq_title: "Perguntas frequentes",
      faq_more_open: "Mostrar mais perguntas",
      faq_more_close: "Ocultar perguntas",
    
      support_title: "Suporte",
      support_p:
        "Descreva seu problema e responderemos por e-mail. Normalmente em até 6 horas.\n\nSe você encontrar problemas no Avenor Downloader, descreva-os com o máximo de detalhes para que possamos corrigi-los mais rapidamente.",
      support_direct: "Escrever diretamente",
      support_email_label: "Seu e-mail",
      support_subject_label: "Assunto",
      support_message_label: "Mensagem",
      support_send: "Enviar",
      support_copy: "Copiar e-mail",
    
      footer_privacy: "Política de Privacidade",
      footer_terms: "Termos de Serviço",
      footer_refund: "Política de reembolso",

      legal_back: "← Voltar para a página inicial",
      privacy_title: "Política de Privacidade — Avenor Downloader",
      terms_title: "Termos de Serviço — Avenor Downloader",
    
      // ===== UI mockup =====
      ui_tab_download: "Baixar",
      ui_tab_fragments: "Fragmento",
      ui_tab_compress: "Comprimir",
      ui_tab_convert: "Converter",
      ui_paste_link: "Colar link",
      ui_best_quality: "Melhor",
      ui_filter_all: "Tudo",
      ui_filter_video: "Vídeo",
      ui_filter_audio: "Áudio",
      ui_items_count: "39 itens",
      ui_task_meta: "Concluído · 1920×1080 · MP4",
      ui_open_folder: "Abrir pasta",
    
      // ===== Pricing cards =====
      pricing_btn_download: "Baixar",
      free_li_1: "Para começar e tarefas básicas",
      free_li_2: "Até 1080p + limites diários",
      free_li_3: "2 dispositivos por e-mail",
    
      per_month: "/ mês",
      btn_get_pro: "Obter PRO",
    
      pro_m_li_1: "PRO completo por um mês",
      pro_m_li_2: "4K/8K + tarefas ilimitadas",
      pro_m_li_3: "A melhor forma de testar o PRO",
    
      badge_recommended: "RECOMENDADO",
    
      per_year_month_equiv: "/ ano • €3.25 / mês",
      pro_y_li_1: "Melhor custo-benefício do PRO",
      pro_y_li_2: "Economize ~55% em relação ao mensal",
      pro_y_li_3: "Pagamento único anual",
    
      per_year_month_equiv_studio: "/ ano • €5.00 / mês",
      studio_li_1: "Para estúdios e equipes",
      studio_li_2: "Até 10 dispositivos por conta",
      studio_li_3: "Pagamento único anual",
    
      // ===== Comparison table =====
      compare_title: "Comparação de recursos",
      compare_subtitle: "Todas as diferenças entre os planos em uma tabela.",
      compare_col_features: "Recursos",
      compare_devices: "Dispositivos",
      compare_quality: "Qualidade máxima",
      compare_quality_free: "até 1080p",
      compare_quality_pro: "até 8K",
      compare_downloads_day: "Downloads por dia",
      compare_convert_compress: "Converter e comprimir",
      compare_limit_3_day: "3 / dia",
      compare_file_size: "Tamanho do arquivo",
      compare_file_size_free: "até 500 MB",
      compare_batch: "Downloads em lote",
      compare_audio_only: "Somente áudio",
      compare_cookies: "Cookies.txt (conteúdo privado/restrito)*",
      compare_history: "Histórico de downloads",
      compare_priority_support: "Suporte prioritário",
      compare_commercial: "Uso comercial",
      unlimited: "Ilimitado",
      no_limits: "Sem limites",
    
      // ===== FAQ =====
      faq_q1: "O que é o Avenor Downloader e o que o diferencia?",
      faq_a1:
        "Avenor Downloader é um aplicativo desktop para baixar, recortar e converter vídeo e áudio. Diferente de serviços online, ele funciona localmente, sem enviar arquivos para servidores externos, garantindo qualidade e privacidade.",
      faq_q2: "Quais plataformas são suportadas?",
      faq_a2:
        "O Avenor suporta YouTube, Instagram, TikTok, Facebook, Pinterest e muitas outras. A lista cresce a cada atualização.",
      faq_q3: "Por que os arquivos PRO podem ser maiores?",
      faq_a3:
        "Porque o Avenor não reduz a qualidade. Ele preserva o bitrate original, o áudio e os codecs sempre que possível.",
      faq_q4: "Posso baixar apenas o áudio?",
      faq_a4:
        "Sim. Você pode extrair apenas o áudio e salvá-lo em formatos como MP3. Ideal para música, podcasts e aulas.",
      faq_q5: "O Avenor é seguro?",
      faq_a5:
        "Sim. O Avenor não exibe anúncios, não instala extensões e não compartilha seus arquivos. Utiliza ferramentas abertas e confiáveis.",
      faq_q6: "Para que servem as Cookies?",
      faq_a6:
        "As cookies permitem acessar conteúdo privado, restrito por idade ou região. Para a maioria dos vídeos públicos, elas não são necessárias.",
      faq_q7: "Quantos dispositivos posso usar?",
      faq_a7:
        "Uma assinatura pode ser ativada em 2 ou 10 dispositivos, dependendo do plano.",
      faq_q8: "Quais sistemas operacionais são suportados?",
      faq_a8:
        "Atualmente: Windows 10 e Windows 11. Uma versão para macOS está em desenvolvimento.",
      faq_q9: "É legal baixar vídeos com o Avenor?",
      faq_a9:
        "O uso do conteúdo é responsabilidade do usuário. O Avenor é destinado a material próprio, público ou autorizado.",
    
      // ===== Final CTA =====
      cta_title: "Experimente o Avenor Downloader gratuitamente",
      cta_subtitle:
        "Baixe vídeo e áudio em segundos, reduza o tamanho dos arquivos e converta formatos — tudo em um único aplicativo.",
    
      // ===== Support placeholders =====
      support_subject_ph: "Por exemplo: o vídeo não baixa",
      support_message_ph: "Descreva o problema com o máximo de detalhes possível.",

      pro_m_li_fragments: "Fragmentos (cortar antes de baixar)",
      pro_y_li_fragments: "Fragmentos (cortar antes de baixar)",
      studio_li_fragments: "Fragmentos para equipes",

      compare_fragments: "Fragmentos (corte antes de baixar)",


      refund_title: "Política de reembolso",
      refund_text_html: `
      <p>Solicitações de reembolso podem ser enviadas dentro de <strong>14 dias</strong> após a compra inicial da assinatura, desde que o serviço não tenha sido usado de forma substancial.</p>

      <p>Devido à natureza dos serviços digitais e ao acesso imediato aos recursos da assinatura, o reembolso pode ser recusado se o serviço tiver sido utilizado ativamente, incluindo, entre outros, downloads de conteúdo, conversões, processamento em lote ou acesso a recursos PRO.</p>

      <p>No caso de renovações automáticas, as solicitações de reembolso são analisadas caso a caso. Não há garantia de reembolso após o início de um novo período de cobrança.</p>

      <p>Não há reembolso quando o serviço funciona conforme descrito e quaisquer limitações, restrições ou problemas de compatibilidade forem causados por plataformas de terceiros, alterações em APIs externas ou fatores fora do controle do Avenor Downloader.</p>

      <p>Todos os pagamentos são processados pela <strong>Paddle</strong> como Merchant of Record. Quaisquer reembolsos aprovados serão emitidos via Paddle de acordo com suas políticas e com a legislação aplicável.</p>

      <p>O Avenor Downloader reserva-se o direito de avaliar solicitações de reembolso a seu exclusivo critério, de acordo com as leis de proteção ao consumidor aplicáveis, e de recusar reembolsos em casos de abuso, violação destes termos ou uso indevido do serviço.</p>

      <p>Esta política de reembolso não afeta quaisquer direitos legais que possam se aplicar conforme as leis locais de proteção ao consumidor.</p>
      `,

      included_title: "O que está incluído no Avenor PRO",
      included_li_1: "Download de vídeo e áudio de plataformas compatíveis",
      included_li_2: "Corte e criação de fragmentos antes do download",
      included_li_3: "Conversão de formatos de vídeo e áudio (MP4, MKV, MP3, WAV, etc.)",
      included_li_4: "Qualidade superior e limites aumentados nos planos PRO",
      included_li_5: "Todo o processamento é feito localmente no dispositivo do usuário",
      
    },
    
    de: {
      meta_title: "Avenor Downloader — YouTube, TikTok, Instagram herunterladen",
      meta_desc:
        "Avenor Downloader ist eine Desktop-App zum Herunterladen, Schneiden, Komprimieren und Konvertieren von Video/Audio von YouTube, Instagram, TikTok und mehr.",
    
      nav_why: "Warum Avenor",
      nav_how: "So funktioniert’s",
      nav_pricing: "Pläne",
      nav_support: "Support",
      nav_faq: "FAQ",
      cta_download: "Download",
    
      hero_kicker: "EINZIGARTIGE FUNKTION: CLIP VOR DEM DOWNLOAD",
      hero_title_1: "Avenor Downloader —",
      hero_title_accent: "Clips VOR dem Download schneiden",
      hero_title_2: "",
      hero_subtitle:
        "Lade Video- und Audiodateien von YouTube, TikTok, Instagram und mehr herunter. Setze In/Out-Punkte und speichere nur den benötigten Ausschnitt — schnell und lokal.",      
      
      hero_btn_win: "Für Windows herunterladen",
      hero_btn_mac: "Für macOS herunterladen",

      hero_btn_how: "Wie funktioniert das?",
      hero_meta_before: "Mit dem Download akzeptierst du unsere",
      hero_meta_privacy: "Datenschutzerklärung",
      hero_meta_and: "und",
      hero_meta_terms: "Nutzungsbedingungen",
    

      site_notice:
      "Die Website befindet sich derzeit im Testmodus. Bezahlte Tarife sind vorübergehend nicht verfügbar, während wir auf die Freigabe des Zahlungssystems warten.",
    
      why_title: "Warum Avenor Downloader",
      why_subtitle:
        "Nicht nur ein weiterer Downloader — ein komplettes Tool für Video & Audio.",
      why_card1_t: "Lädt von überall",
      why_card1_p:
        "YouTube, Instagram, TikTok, Facebook, Pinterest und mehr. Wenn sich ein Link im Browser öffnen lässt, kann Avenor ihn meistens herunterladen.",
      why_card2_t: "Videokomprimierung",
      why_card2_p:
        "Datei zu groß für Telegram oder E-Mail? Komprimiere sie in wenigen Klicks ohne spürbaren Qualitätsverlust.",
      why_card3_t: "Formatkonvertierung",
      why_card3_p:
        "Datei im falschen Format? Konvertiere zu MP4, MOV, MKV, MP3, WAV und weiteren Formaten.",
      why_card4_t: "Clips vor dem Download erstellen",
      why_card4_p:
        "Wähle präzise Videoausschnitte aus, speichere nur die wichtigen Momente und lass den Rest weg — schnell, bequem und ohne externe Editoren.",
      trust_label: "Für tägliche Videoarbeit gewählt von:",
      trust_1: "Editoren",
      trust_2: "SMM-Spezialisten",
      trust_3: "Content-Creators",
    
      how_title: "So funktioniert’s",
      how_subtitle: "Drei Schritte — und die Datei ist auf deiner Festplatte.",
      how_s1_t: "Download-Einstellungen wählen",
      how_s1_p: "Format, Qualität, Modus (Video/Audio) und Zielordner.",
      how_s2_t: "Link einfügen",
      how_s2_p:
        "Link zum Video kopieren, einen Button drücken — der Download startet sofort.",
      how_s3_t: "Ergebnis genießen",
      how_s3_p:
        "Klarer Fortschritt, Aufgabenstatus und Download-Verlauf. Alles bleibt unter Kontrolle.",
    
      pricing_title: "Avenor Pläne",
      pricing_subtitle:
        "Gratis-Plan bis 1080p. PRO schaltet 2K/4K/8K und höhere Limits frei.",
    
      faq_title: "Häufig gestellte Fragen",
      faq_more_open: "Mehr Fragen anzeigen",
      faq_more_close: "Fragen ausblenden",

      
      hero_badge_clip: "Clip vor dem Download",
      hero_badge_local: "Läuft lokal (privat)",
      hero_badge_free: "Kostenloser Plan verfügbar",
      
      support_title: "Support",
      support_p:
        "Beschreibe dein Anliegen — wir antworten per E-Mail. In der Regel innerhalb von 6 Stunden.\n\nWenn du Probleme mit Avenor Downloader hast, beschreibe sie bitte so detailliert wie möglich, damit wir sie schneller beheben können.",
      support_direct: "Direkt schreiben",
      support_email_label: "Deine E-Mail",
      support_subject_label: "Betreff",
      support_message_label: "Nachricht",
      support_send: "Senden",
      support_copy: "E-Mail kopieren",
    
      footer_privacy: "Datenschutzerklärung",
      footer_terms: "Nutzungsbedingungen",
      footer_refund: "Rückerstattungsrichtlinie",

      legal_back: "← Zur Startseite",
      privacy_title: "Datenschutzerklärung — Avenor Downloader",
      terms_title: "Nutzungsbedingungen — Avenor Downloader",
    
      // ===== UI mockup =====
      ui_tab_download: "Download",
      ui_tab_fragments: "Fragment",

      ui_tab_compress: "Komprimieren",
      ui_tab_convert: "Konvertieren",
      ui_paste_link: "Link einfügen",
      ui_best_quality: "Beste",
      ui_filter_all: "Alle",
      ui_filter_video: "Video",
      ui_filter_audio: "Audio",
      ui_items_count: "39 Elemente",
      ui_task_meta: "Fertig · 1920×1080 · MP4",
      ui_open_folder: "Ordner öffnen",
    
      // ===== Pricing cards =====
      pricing_btn_download: "Download",
      free_li_1: "Zum Einstieg und für Basisaufgaben",
      free_li_2: "Bis 1080p + tägliche Limits",
      free_li_3: "2 Geräte pro E-Mail",
    
      per_month: "/ Monat",
      btn_get_pro: "PRO holen",
    
      pro_m_li_1: "Volles PRO für einen Monat",
      pro_m_li_2: "4K/8K + unbegrenzte Aufgaben",
      pro_m_li_3: "Der beste Weg, PRO zu testen",
    
      badge_recommended: "EMPFOHLEN",
    
      per_year_month_equiv: "/ Jahr • €3.25 / Monat",
      pro_y_li_1: "Bestes Preis-Leistungs-Verhältnis",
      pro_y_li_2: "Spare ~55% gegenüber monatlich",
      pro_y_li_3: "Eine Zahlung pro Jahr",
    
      per_year_month_equiv_studio: "/ Jahr • €5.00 / Monat",
      studio_li_1: "Für Studios und Teams",
      studio_li_2: "Bis zu 10 Geräte pro Account",
      studio_li_3: "Eine Zahlung pro Jahr",
    
      // ===== Comparison table =====
      compare_title: "Funktionsvergleich",
      compare_subtitle: "Alle Plan-Unterschiede in einer Tabelle.",
      compare_col_features: "Funktionen",
      compare_devices: "Geräte",
      compare_quality: "Maximale Download-Qualität",
      compare_quality_free: "bis 1080p",
      compare_quality_pro: "bis 8K",
      compare_downloads_day: "Downloads pro Tag",
      compare_convert_compress: "Konvertieren & komprimieren",
      compare_limit_3_day: "3 / Tag",
      compare_file_size: "Dateigröße für Konvertierung/Komprimierung",
      compare_file_size_free: "bis 500 MB",
      compare_batch: "Batch-Downloads",
      compare_audio_only: "Nur Audio-Downloads",
      compare_cookies: "Cookies.txt (privater/altersbeschränkter Inhalt)*",
      compare_history: "Download-Verlauf",
      compare_priority_support: "Prioritäts-Support",
      compare_commercial: "Kommerzielle Nutzung",
      unlimited: "Unbegrenzt",
      no_limits: "Keine Limits",
    
      // ===== FAQ =====
      faq_q1: "Was ist Avenor Downloader und worin unterscheidet es sich?",
      faq_a1:
        "Avenor Downloader ist eine Desktop-App zum Herunterladen, Schneiden und Konvertieren von Video und Audio. Im Gegensatz zu Online-Diensten arbeitet Avenor lokal, ohne Dateien auf fremde Server hochzuladen. Das bedeutet: keine Dateigrößenlimits, originale Qualität, maximale Geschwindigkeit und volle Privatsphäre.",
      faq_q2: "Welche Plattformen werden unterstützt?",
      faq_a2:
        "Avenor unterstützt die meisten gängigen Plattformen wie YouTube, Instagram, TikTok, Facebook und Pinterest. Die Liste wächst durch Updates der Download-Engine.",
      faq_q3: "Warum können PRO-Dateien größer sein?",
      faq_a3:
        "Weil Avenor die Qualität nicht reduziert. Im Gegensatz zu vielen Online-Diensten behält Avenor Bitrate, Audiospur und Codec nach Möglichkeit bei. Größere Dateien sind der Preis für echte Qualität.",
      faq_q4: "Kann ich nur Audio herunterladen?",
      faq_a4:
        "Ja. Du kannst nur die Audiospur extrahieren und in einem passenden Format speichern (z. B. MP3). Ideal für Musik, Podcasts, Vorlesungen und Interviews.",
      faq_q5: "Ist Avenor sicher?",
      faq_a5:
        "Ja. Avenor blendet keine Werbung ein, installiert keine Browser-Erweiterungen, teilt keine Dateien mit Dritten und sammelt keine Inhalte heruntergeladener Videos. Es verwendet bekannte Open-Tools zur Medienverarbeitung.",
      faq_q6: "Warum brauche ich Cookies und wie nutze ich sie?",
      faq_a6:
        "Cookies ermöglichen den Zugriff auf Inhalte, die nur für eingeloggte Nutzer verfügbar sind, regional/altersbedingt eingeschränkt sind oder hinter privaten Einstellungen liegen. Für die meisten öffentlichen Videos sind Cookies nicht nötig.",
      faq_q7: "Wie viele Geräte kann ich mit einem Abo nutzen?",
      faq_a7:
        "Ein Abo kann gleichzeitig auf 2/10 Geräten aktiviert werden, je nach Plan. Praktisch, wenn du zu Hause und im Büro arbeitest.",
      faq_q8: "Welche Betriebssysteme werden unterstützt?",
      faq_a8:
        "Derzeit: Windows 10 und Windows 11. Eine macOS-Version ist in Entwicklung.",
      faq_q9: "Ist das Herunterladen von Videos mit Avenor legal?",
      faq_a9:
        "Du bist selbst verantwortlich, wie du Inhalte nutzt. Avenor ist ein Tool für eigene Inhalte, öffentliche Inhalte oder Inhalte mit Erlaubnis.",
    
      // ===== Final CTA =====
      cta_title: "Avenor Downloader kostenlos testen",
      cta_subtitle:
        "Lade Video und Audio in Sekunden herunter, reduziere die Dateigröße und konvertiere Formate für deinen Workflow — alles in einer App.",
    
      // ===== Support placeholders =====
      support_subject_ph: "Zum Beispiel: Video lässt sich nicht herunterladen",
      support_message_ph: "Beschreibe dein Problem so detailliert wie möglich.",

      pro_m_li_fragments: "Fragmente (vor dem Download schneiden)",
      pro_y_li_fragments: "Fragmente (vor dem Download schneiden)",
      studio_li_fragments: "Fragmente für Teams",

      compare_fragments: "Fragmente (Schnitt vor dem Download)",



      refund_title: "Rückerstattungsrichtlinie",
      refund_text_html: `
      <p>Rückerstattungsanfragen können innerhalb von <strong>14 Tagen</strong> nach dem erstmaligen Abschluss des Abonnements gestellt werden, sofern der Dienst nicht wesentlich genutzt wurde.</p>

      <p>Aufgrund der digitalen Natur des Dienstes und des sofortigen Zugriffs auf Abonnementfunktionen kann eine Rückerstattung abgelehnt werden, wenn der Dienst aktiv genutzt wurde, einschließlich, aber nicht beschränkt auf Inhaltsdownloads, Konvertierungen, Batch-Verarbeitung oder den Zugriff auf PRO-Funktionen.</p>

      <p>Bei automatischen Verlängerungen werden Rückerstattungsanfragen im Einzelfall geprüft. Eine Rückerstattung ist nicht garantiert, sobald ein neuer Abrechnungszeitraum begonnen hat.</p>

      <p>Es erfolgt keine Rückerstattung, wenn der Dienst wie beschrieben funktioniert und Einschränkungen, Beschränkungen oder Kompatibilitätsprobleme durch Drittplattformen, Änderungen externer APIs oder Faktoren außerhalb der Kontrolle von Avenor Downloader verursacht werden.</p>

      <p>Alle Zahlungen werden von <strong>Paddle</strong> als Merchant of Record verarbeitet. Genehmigte Rückerstattungen werden über Paddle gemäß deren Richtlinien und dem anwendbaren Recht ausgezahlt.</p>

      <p>Avenor Downloader behält sich das Recht vor, Rückerstattungsanfragen nach eigenem Ermessen im Rahmen der geltenden Verbraucherschutzgesetze zu prüfen und Rückerstattungen bei Missbrauch, Verstoß gegen diese Bedingungen oder missbräuchlicher Nutzung des Dienstes abzulehnen.</p>

      <p>Diese Rückerstattungsrichtlinie berührt keine gesetzlichen Rechte, die nach lokalem Verbraucherschutzrecht gelten können.</p>
      `,

      included_title: "Ce qui est inclus dans Avenor PRO",
      included_li_1: "Téléchargement de vidéos et d’audio depuis des plateformes prises en charge",
      included_li_2: "Découpage et création de fragments avant le téléchargement",
      included_li_3: "Conversion des formats vidéo et audio (MP4, MKV, MP3, WAV, etc.)",
      included_li_4: "Qualité supérieure et limites étendues avec les offres PRO",
      included_li_5: "Tout le traitement est effectué localement sur l’appareil de l’utilisateur",
      
    },
    
    fr: {
      meta_title: "Avenor Downloader — télécharger YouTube, TikTok, Instagram",
      meta_desc:
        "Avenor Downloader est une application de bureau pour télécharger, découper, compresser et convertir des vidéos et audios depuis YouTube, Instagram, TikTok et d’autres plateformes.",
    
      nav_why: "Pourquoi Avenor",
      nav_how: "Comment ça marche",
      nav_pricing: "Offres",
      nav_support: "Support",
      nav_faq: "FAQ",
      cta_download: "Télécharger",
    
      hero_kicker: "FONCTION UNIQUE : EXTRAIT AVANT LE TÉLÉCHARGEMENT",
      hero_title_1: "Avenor Downloader —",
      hero_title_accent: "découpez des extraits AVANT le téléchargement",
      hero_title_2: "",
      hero_subtitle:
        "Téléchargez des vidéos et de l’audio depuis YouTube, TikTok, Instagram et plus encore. Définissez les points In/Out et enregistrez uniquement l’extrait nécessaire — rapide et local.",
      
      hero_btn_win: "Télécharger pour Windows",
      hero_btn_mac: "Télécharger pour macOS",

      hero_btn_how: "Comment ça marche ?",
      hero_meta_before: "En téléchargeant, vous acceptez notre",
      hero_meta_privacy: "Politique de confidentialité",
      hero_meta_and: "et",
      hero_meta_terms: "Conditions d’utilisation",
    
      why_title: "Pourquoi choisir Avenor Downloader",
      why_subtitle:
        "Pas simplement un autre téléchargeur, mais un outil complet pour la vidéo et l’audio.",
      why_card1_t: "Télécharge partout",
      why_card1_p:
        "YouTube, Instagram, TikTok, Facebook, Pinterest et bien plus. Si le lien s’ouvre dans un navigateur, Avenor peut généralement le télécharger.",
      why_card2_t: "Compression vidéo",
      why_card2_p:
        "Fichier trop volumineux pour Telegram ou l’e-mail ? Compressez-le en quelques clics sans perte de qualité.",
      why_card3_t: "Conversion de formats",
      why_card3_p:
        "Format incompatible ? Convertissez facilement en MP4, MOV, MKV, MP3, WAV et autres.",
      why_card4_t: "Créez des clips avant le téléchargement",
      why_card4_p:
        "Choisissez précisément les extraits, ne gardez que les moments importants et ignorez le reste — rapide, pratique et sans éditeurs externes.",
      trust_label: "Avenor Downloader est déjà choisi pour le travail quotidien par :",
      trust_1: "monteurs",
      trust_2: "spécialistes SMM",
      trust_3: "créateurs de contenu",
      hero_badge_clip: "Extrait avant le téléchargement",
      hero_badge_local: "Fonctionne localement (privé)",
      hero_badge_free: "Plan gratuit disponible",


      site_notice:
      "Le site est actuellement en mode test. Les offres payantes sont temporairement indisponibles en attente de la validation du système de paiement.",
    
      how_title: "Comment ça marche",
      how_subtitle: "Trois étapes — et le fichier est sur votre disque.",
      how_s1_t: "Choisissez les paramètres de téléchargement",
      how_s1_p: "Format, qualité, mode (vidéo ou audio) et dossier de destination.",
      how_s2_t: "Collez le lien",
      how_s2_p:
        "Copiez le lien de la vidéo, cliquez sur un bouton — le téléchargement démarre immédiatement.",
      how_s3_t: "Profitez du résultat",
      how_s3_p:
        "Progression claire, état des tâches et historique des téléchargements. Tout reste sous contrôle.",
    
      pricing_title: "Offres Avenor",
      pricing_subtitle:
        "Plan gratuit jusqu’à 1080p. PRO débloque 2K/4K/8K et des limites étendues.",
    
      faq_title: "Questions fréquentes",
      faq_more_open: "Afficher plus de questions",
      faq_more_close: "Masquer les questions",
    
      support_title: "Support",
      support_p:
        "Décrivez votre problème — nous vous répondrons par e-mail. Généralement sous 6 heures.\n\nSi vous rencontrez des problèmes avec Avenor Downloader, décrivez-les aussi précisément que possible afin que nous puissions les résoudre plus rapidement.",
      support_direct: "Écrire directement",
      support_email_label: "Votre e-mail",
      support_subject_label: "Sujet",
      support_message_label: "Message",
      support_send: "Envoyer",
      support_copy: "Copier l’e-mail",
    
      footer_privacy: "Politique de confidentialité",
      footer_terms: "Conditions d’utilisation",
      footer_refund: "Politique de remboursement",

      legal_back: "← Retour à l’accueil",
      privacy_title: "Politique de confidentialité — Avenor Downloader",
      terms_title: "Conditions d’utilisation — Avenor Downloader",
    
      // ===== UI mockup =====
      ui_tab_download: "Télécharger",
      ui_tab_fragments: "Fragment",

      ui_tab_compress: "Compresser",
      ui_tab_convert: "Convertir",
      ui_paste_link: "Coller le lien",
      ui_best_quality: "Meilleure",
      ui_filter_all: "Tout",
      ui_filter_video: "Vidéo",
      ui_filter_audio: "Audio",
      ui_items_count: "39 éléments",
      ui_task_meta: "Terminé · 1920×1080 · MP4",
      ui_open_folder: "Ouvrir le dossier",
    
      // ===== Pricing cards =====
      pricing_btn_download: "Télécharger",
      free_li_1: "Pour débuter et les tâches simples",
      free_li_2: "Jusqu’à 1080p + limites quotidiennes",
      free_li_3: "2 appareils par e-mail",
    
      per_month: "/ mois",
      btn_get_pro: "Obtenir PRO",
    
      pro_m_li_1: "PRO complet pour un mois",
      pro_m_li_2: "4K/8K + tâches illimitées",
      pro_m_li_3: "La meilleure façon d’essayer PRO",
    
      badge_recommended: "RECOMMANDÉ",
    
      per_year_month_equiv: "/ an • 3,25 € / mois",
      pro_y_li_1: "Meilleur rapport qualité-prix",
      pro_y_li_2: "Économisez ~55 % par rapport au mensuel",
      pro_y_li_3: "Un seul paiement par an",
    
      per_year_month_equiv_studio: "/ an • 5,00 € / mois",
      studio_li_1: "Pour les studios et les équipes",
      studio_li_2: "Jusqu’à 10 appareils par compte",
      studio_li_3: "Un seul paiement par an",
    
      // ===== Comparison table =====
      compare_title: "Comparaison des fonctionnalités",
      compare_subtitle: "Toutes les différences entre les offres dans un tableau.",
      compare_col_features: "Fonctionnalités",
      compare_devices: "Appareils",
      compare_quality: "Qualité maximale",
      compare_quality_free: "jusqu’à 1080p",
      compare_quality_pro: "jusqu’à 8K",
      compare_downloads_day: "Téléchargements par jour",
      compare_convert_compress: "Convertir et compresser",
      compare_limit_3_day: "3 / jour",
      compare_file_size: "Taille du fichier",
      compare_file_size_free: "jusqu’à 500 Mo",
      compare_batch: "Téléchargements par lot",
      compare_audio_only: "Audio uniquement",
      compare_cookies: "Cookies.txt (contenu privé/restreint)*",
      compare_history: "Historique des téléchargements",
      compare_priority_support: "Support prioritaire",
      compare_commercial: "Usage commercial",
      unlimited: "Illimité",
      no_limits: "Sans limites",
    
      // ===== FAQ =====
      faq_q1: "Qu’est-ce qu’Avenor Downloader et en quoi est-il différent ?",
      faq_a1:
        "Avenor Downloader est une application de bureau pour télécharger, découper et convertir des vidéos et audios. Contrairement aux services en ligne, il fonctionne localement sans envoyer de fichiers à des serveurs tiers, garantissant ainsi la qualité et la confidentialité.",
      faq_q2: "Quelles plateformes sont prises en charge ?",
      faq_a2:
        "Avenor prend en charge YouTube, Instagram, TikTok, Facebook, Pinterest et bien d’autres. La liste s’élargit grâce aux mises à jour.",
      faq_q3: "Pourquoi les fichiers PRO peuvent-ils être plus volumineux ?",
      faq_a3:
        "Parce qu’Avenor ne dégrade pas la qualité. Il conserve le débit, l’audio et les codecs d’origine lorsque c’est possible.",
      faq_q4: "Puis-je télécharger uniquement l’audio ?",
      faq_a4:
        "Oui. Vous pouvez extraire uniquement la piste audio et l’enregistrer dans des formats pratiques comme MP3.",
      faq_q5: "Avenor est-il sûr ?",
      faq_a5:
        "Oui. Avenor n’affiche pas de publicités, n’installe pas d’extensions et ne partage pas vos fichiers. Il utilise des outils ouverts et fiables.",
      faq_q6: "Pourquoi ai-je besoin des cookies ?",
      faq_a6:
        "Les cookies permettent d’accéder à du contenu privé, restreint par âge ou région. Pour la plupart des vidéos publiques, ils ne sont pas nécessaires.",
      faq_q7: "Combien d’appareils puis-je utiliser ?",
      faq_a7:
        "Un abonnement peut être activé sur 2 ou 10 appareils selon l’offre.",
      faq_q8: "Quels systèmes d’exploitation sont pris en charge ?",
      faq_a8:
        "Actuellement : Windows 10 et Windows 11. Une version macOS est en cours de développement.",
      faq_q9: "Est-il légal de télécharger des vidéos avec Avenor ?",
      faq_a9:
        "L’utilisation du contenu est de la responsabilité de l’utilisateur. Avenor est destiné aux contenus personnels, publics ou autorisés.",
    
      // ===== Final CTA =====
      cta_title: "Essayez Avenor Downloader gratuitement",
      cta_subtitle:
        "Téléchargez des vidéos et audios en quelques secondes, réduisez la taille des fichiers et convertissez les formats — tout dans une seule application.",
    
      // ===== Support placeholders =====
      support_subject_ph: "Par exemple : la vidéo ne se télécharge pas",
      support_message_ph: "Décrivez le problème avec le plus de détails possible.",

      pro_m_li_fragments: "Fragments (découper avant le téléchargement)",
      pro_y_li_fragments: "Fragments (découper avant le téléchargement)",
      studio_li_fragments: "Fragments pour les équipes",

      compare_fragments: "Fragments (découpe avant le téléchargement)",




      refund_title: "Politique de remboursement",
      refund_text_html: `
      <p>Les demandes de remboursement peuvent être soumises dans un délai de <strong>14 jours</strong> suivant l’achat initial de l’abonnement, à condition que le service n’ait pas été utilisé de manière substantielle.</p>

      <p>En raison de la nature des services numériques et de l’accès immédiat aux fonctionnalités de l’abonnement, un remboursement peut être refusé si le service a été utilisé activement, notamment (sans s’y limiter) les téléchargements de contenu, les conversions, le traitement par lot ou l’accès aux fonctionnalités PRO.</p>

      <p>En cas de renouvellement automatique, les demandes de remboursement sont examinées au cas par cas. Aucun remboursement n’est garanti une fois qu’une nouvelle période de facturation a commencé.</p>

      <p>Aucun remboursement n’est accordé lorsque le service fonctionne comme décrit et que les limitations, restrictions ou problèmes de compatibilité sont causés par des plateformes tierces, des changements d’API externes ou des facteurs échappant au contrôle d’Avenor Downloader.</p>

      <p>Tous les paiements sont traités par <strong>Paddle</strong> en tant que Merchant of Record. Tout remboursement approuvé est effectué via Paddle conformément à leurs politiques et au droit applicable.</p>

      <p>Avenor Downloader se réserve le droit d’évaluer les demandes de remboursement à sa seule discrétion, conformément aux lois applicables de protection des consommateurs, et de refuser les remboursements en cas d’abus, de violation des présentes conditions ou d’utilisation abusive du service.</p>

      <p>Cette politique de remboursement n’affecte pas les droits légaux pouvant s’appliquer en vertu des lois locales de protection des consommateurs.</p>
      `,
      included_title: "Ce qui est inclus dans Avenor PRO",
      included_li_1: "Téléchargement de vidéos et d’audio depuis des plateformes prises en charge",
      included_li_2: "Découpage et création de fragments avant le téléchargement",
      included_li_3: "Conversion des formats vidéo et audio (MP4, MKV, MP3, WAV, etc.)",
      included_li_4: "Qualité supérieure et limites étendues avec les offres PRO",
      included_li_5: "Tout le traitement est effectué localement sur l’appareil de l’utilisateur",
      

    },
    
    uk: {
      meta_title: "Avenor Downloader — завантаження YouTube, TikTok, Instagram",
      meta_desc:
        "Avenor Downloader — це десктопна програма для завантаження, обрізки, стиснення та конвертації відео й аудіо з YouTube, Instagram, TikTok та інших платформ.",
    
      nav_why: "Чому Avenor",
      nav_how: "Як працює",
      nav_pricing: "Плани",
      nav_support: "Підтримка",
      nav_faq: "FAQ",
      cta_download: "Завантажити",
      site_notice:
      "Сайт наразі працює в тестовому режимі. Платні тарифи тимчасово недоступні — ми очікуємо підтвердження платіжної системи.",
    
      hero_kicker: "УНІКАЛЬНА ФУНКЦІЯ: ФРАГМЕНТ ДО ЗАВАНТАЖЕННЯ",
      hero_title_1: "Avenor Downloader —",
      hero_title_accent: "вирізай фрагмент ДО завантаження",
      hero_title_2: "",
      hero_subtitle:
        "Завантажуй відео та аудіо з YouTube, TikTok, Instagram та інших платформ. Обирай точки In/Out і зберігай лише потрібний фрагмент — швидко та локально.",
      
      hero_btn_win: "Завантажити для Windows",
      hero_btn_mac: "Завантажити для macOS",

      hero_btn_how: "Як це працює?",
      hero_meta_before: "Завантажуючи, ви приймаєте нашу",
      hero_meta_privacy: "Політику конфіденційності",
      hero_meta_and: "та",
      hero_meta_terms: "Умови використання",
    
      why_title: "Чому варто обрати Avenor Downloader",
      why_subtitle:
        "Це не просто ще один завантажувач, а повноцінний інструмент для роботи з відео та аудіо.",
      why_card1_t: "Завантажує звідусіль",
      why_card1_p:
        "YouTube, Instagram, TikTok, Facebook, Pinterest та інші. Якщо посилання відкривається в браузері — Avenor зазвичай може його завантажити.",
      why_card2_t: "Стиснення відео",
      why_card2_p:
        "Файл занадто великий для Telegram чи пошти? Стисніть його в кілька кліків без втрати якості.",
      why_card3_t: "Конвертація форматів",
      why_card3_p:
        "Невідповідний формат? Легко конвертуйте у MP4, MOV, MKV, MP3, WAV та інші формати.",
      why_card4_t: "Створюйте кліпи ще до завантаження",
      why_card4_p:
        "Точно обирайте потрібні фрагменти відео, зберігайте лише важливі моменти та прибирайте зайве — швидко, зручно і без сторонніх редакторів.",

      trust_label: "Avenor Downloader вже обирають для щоденної роботи з відео:",
      trust_1: "монтажери",
      trust_2: "SMM-спеціалісти",
      trust_3: "креатори контенту",
      hero_badge_clip: "Фрагмент до завантаження",
      hero_badge_local: "Працює локально (приватно)",
      hero_badge_free: "Free-план доступний",
      
      how_title: "Як це працює",
      how_subtitle: "Усього три кроки — і файл уже на вашому диску.",
      how_s1_t: "Оберіть параметри завантаження",
      how_s1_p: "Формат, якість, режим (відео або аудіо) та папку збереження.",
      how_s2_t: "Вставте посилання",
      how_s2_p:
        "Скопіюйте посилання на відео, натисніть кнопку — і завантаження почнеться миттєво.",
      how_s3_t: "Насолоджуйтесь результатом",
      how_s3_p:
        "Зрозумілий прогрес, статус завдань та історія завантажень. Усе під повним контролем.",
    
      pricing_title: "Плани Avenor",
      pricing_subtitle:
        "Безкоштовний план — до 1080p. PRO відкриває 2K/4K/8K та розширені ліміти.",
    
      faq_title: "Поширені запитання",
      faq_more_open: "Показати більше запитань",
      faq_more_close: "Приховати запитання",
    
      support_title: "Підтримка",
      support_p:
        "Опишіть свою проблему — ми відповімо електронною поштою. Зазвичай протягом 6 годин.\n\nЯкщо у вас виникли проблеми з Avenor Downloader, опишіть їх якомога детальніше, щоб ми могли швидше їх вирішити.",
      support_direct: "Написати напряму",
      support_email_label: "Ваш e-mail",
      support_subject_label: "Тема",
      support_message_label: "Повідомлення",
      support_send: "Надіслати",
      support_copy: "Скопіювати e-mail",
    
      footer_privacy: "Політика конфіденційності",
      footer_terms: "Умови використання",
      footer_refund: "Політика повернення коштів",

      legal_back: "← На головну",
      privacy_title: "Політика конфіденційності — Avenor Downloader",
      terms_title: "Умови використання — Avenor Downloader",
    
      // ===== UI mockup =====
      ui_tab_download: "Завантаження",
      ui_tab_fragments: "Фрагмент",

      ui_tab_compress: "Стиснення",
      ui_tab_convert: "Конвертація",
      ui_paste_link: "Вставити посилання",
      ui_best_quality: "Найкраща",
      ui_filter_all: "Усе",
      ui_filter_video: "Відео",
      ui_filter_audio: "Аудіо",
      ui_items_count: "39 елементів",
      ui_task_meta: "Готово · 1920×1080 · MP4",
      ui_open_folder: "Відкрити папку",
    
      // ===== Pricing cards =====
      pricing_btn_download: "Завантажити",
      free_li_1: "Для початку та базових задач",
      free_li_2: "До 1080p + денні ліміти",
      free_li_3: "2 пристрої на e-mail",
    
      per_month: "/ місяць",
      btn_get_pro: "Отримати PRO",
    
      pro_m_li_1: "Повний PRO на один місяць",
      pro_m_li_2: "4K/8K + необмежені завдання",
      pro_m_li_3: "Найкращий спосіб спробувати PRO",
    
      badge_recommended: "РЕКОМЕНДОВАНО",
    
      per_year_month_equiv: "/ рік • €3.25 / місяць",
      pro_y_li_1: "Найвигідніший варіант PRO",
      pro_y_li_2: "Економія ~55% порівняно з місячним",
      pro_y_li_3: "Один платіж на рік",
    
      per_year_month_equiv_studio: "/ рік • €5.00 / місяць",
      studio_li_1: "Для студій та команд",
      studio_li_2: "До 10 пристроїв на акаунт",
      studio_li_3: "Один платіж на рік",
    
      // ===== Comparison table =====
      compare_title: "Порівняння можливостей",
      compare_subtitle: "Усі відмінності між планами в одній таблиці.",
      compare_col_features: "Функції",
      compare_devices: "Пристрої",
      compare_quality: "Максимальна якість",
      compare_quality_free: "до 1080p",
      compare_quality_pro: "до 8K",
      compare_downloads_day: "Завантажень на день",
      compare_convert_compress: "Конвертація та стиснення",
      compare_limit_3_day: "3 / день",
      compare_file_size: "Розмір файлу",
      compare_file_size_free: "до 500 МБ",
      compare_batch: "Пакетні завантаження",
      compare_audio_only: "Лише аудіо",
      compare_cookies: "Cookies.txt (приватний/обмежений контент)*",
      compare_history: "Історія завантажень",
      compare_priority_support: "Пріоритетна підтримка",
      compare_commercial: "Комерційне використання",
      unlimited: "Без обмежень",
      no_limits: "Без лімітів",
    
      // ===== FAQ =====
      faq_q1: "Що таке Avenor Downloader і чим він відрізняється?",
      faq_a1:
        "Avenor Downloader — це десктопна програма для завантаження, обрізки та конвертації відео й аудіо. На відміну від онлайн-сервісів, вона працює локально без завантаження файлів на сторонні сервери, зберігаючи якість і конфіденційність.",
      faq_q2: "Які платформи підтримуються?",
      faq_a2:
        "Avenor підтримує YouTube, Instagram, TikTok, Facebook, Pinterest та багато інших платформ. Список постійно розширюється.",
      faq_q3: "Чому файли PRO можуть бути більшими?",
      faq_a3:
        "Тому що Avenor не знижує якість. Зберігається оригінальний бітрейт, аудіо та кодеки, коли це можливо.",
      faq_q4: "Чи можу я завантажити лише аудіо?",
      faq_a4:
        "Так. Ви можете витягти лише аудіодоріжку та зберегти її у зручному форматі, наприклад MP3.",
      faq_q5: "Чи безпечно користуватися Avenor?",
      faq_a5:
        "Так. Avenor не показує рекламу, не встановлює розширення та не передає ваші файли третім сторонам. Використовує перевірені відкриті інструменти.",
      faq_q6: "Навіщо потрібні cookies?",
      faq_a6:
        "Cookies дозволяють отримати доступ до приватного або обмеженого контенту. Для більшості публічних відео вони не потрібні.",
      faq_q7: "Скільки пристроїв можна використовувати?",
      faq_a7:
        "Одна підписка може бути активована на 2 або 10 пристроях залежно від плану.",
      faq_q8: "Які операційні системи підтримуються?",
      faq_a8:
        "Наразі: Windows 10 та Windows 11. Версія для macOS у розробці.",
      faq_q9: "Чи легально завантажувати відео через Avenor?",
      faq_a9:
        "Ви несете відповідальність за використання контенту. Avenor призначений для власних, публічних або дозволених матеріалів.",
    
      // ===== Final CTA =====
      cta_title: "Спробуйте Avenor Downloader безкоштовно",
      cta_subtitle:
        "Завантажуйте відео та аудіо за секунди, зменшуйте розмір файлів і конвертуйте формати — усе в одному застосунку.",
    
      // ===== Support placeholders =====
      support_subject_ph: "Наприклад: відео не завантажується",
      support_message_ph: "Опишіть проблему якомога детальніше.",


      pro_m_li_fragments: "Фрагменти (обрізка до завантаження)",
      pro_y_li_fragments: "Фрагменти (обрізка до завантаження)",
      studio_li_fragments: "Фрагменти для команд",

      compare_fragments: "Фрагменти (обрізка до завантаження)",


      refund_title: "Політика повернення коштів",
      refund_text_html: `
      <p>Запит на повернення коштів може бути поданий протягом <strong>14 днів</strong> з моменту первинної оплати підписки за умови, що сервіс не був суттєво використаний.</p>

      <p>З огляду на цифрову природу сервісу та негайний доступ до функцій підписки, повернення коштів може бути відхилене, якщо сервіс активно використовувався, зокрема (але не обмежуючись) завантаженням контенту, конвертацією, пакетною обробкою або доступом до PRO-функцій.</p>

      <p>У разі автоматичного продовження підписки запити на повернення коштів розглядаються індивідуально. Повернення коштів після початку нового платіжного періоду не гарантується.</p>

      <p>Повернення коштів не здійснюється, якщо сервіс працює відповідно до опису, а обмеження або проблеми спричинені сторонніми платформами, змінами зовнішніх API або іншими факторами поза контролем Avenor Downloader.</p>

      <p>Усі платежі обробляються системою <strong>Paddle</strong>, яка виступає як Merchant of Record. Схвалені повернення здійснюються через Paddle відповідно до їхніх правил та чинного законодавства.</p>

      <p>Avenor Downloader залишає за собою право розглядати запити на повернення коштів на власний розсуд у межах застосовного законодавства про захист прав споживачів та відмовляти у поверненні у випадках зловживань, порушення цих умов або неправомірного використання сервісу.</p>

      <p>Ця політика повернення коштів не обмежує законні права споживачів, передбачені місцевим законодавством про захист прав споживачів.</p>
      `,

      included_title: "Що входить до Avenor PRO",
      included_li_1: "Завантаження відео та аудіо з підтримуваних платформ",
      included_li_2: "Обрізка та створення фрагментів ще до завантаження",
      included_li_3: "Конвертація відео та аудіо форматів (MP4, MKV, MP3, WAV тощо)",
      included_li_4: "Підвищена якість та розширені ліміти у PRO-планах",
      included_li_5: "Уся обробка виконується локально на пристрої користувача",
      
    },
    
  };

  function getParamLang() {
    const p = new URLSearchParams(location.search);
    const v = (p.get("lang") || "").toLowerCase();
    return SUPPORTED.includes(v) ? v : null;
  }

  function browserLang() {
    const raw = (navigator.language || "en").toLowerCase(); // e.g. en-us
    const base = raw.split("-")[0];
    if (SUPPORTED.includes(base)) return base;
    // Частые алиасы
    if (base === "ua") return "uk";
    return "en";
  }

  function setHtmlMeta(lang) {
    document.documentElement.setAttribute("lang", lang);
    const dict = T[lang] || T.en;

    if (dict.meta_title) document.title = dict.meta_title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc && dict.meta_desc) desc.setAttribute("content", dict.meta_desc);
  }

  function applyI18n(lang) {
    const dict = T[lang] || T.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const v = dict[key];
      if (typeof v !== "string") return;
    
      // Если внутри есть узел для текста — меняем только его
      const target = el.querySelector("[data-i18n-text]");
      if (target) {
        target.textContent = v;
      } else {
        el.textContent = v;
      }
    });
    

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      const v = dict[key];
      if (typeof v === "string") el.innerHTML = v;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      const v = dict[key];
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });

        // дать доступ внешнему JS (например, FAQ toggle)
        window.__AV_T = dict;
        window.__AV_LANG = lang;
    
  }

  function withLang(url, lang) {
    try {
      const u = new URL(url, location.origin);
      u.searchParams.set("lang", lang);
      return u.pathname + "?" + u.searchParams.toString() + u.hash;
    } catch {
      return url;
    }
  }

  function fixInternalLinks(lang) {
    // Добавляем ?lang= ко всем ссылкам на legal-страницы и на index
    document
      .querySelectorAll(
        'a[href*="privacy.html"], a[href*="terms.html"], a[href*="refund.html"], a[href*="index.html"]'
      )
      .forEach((a) => {
        const href = a.getAttribute("href");
        if (!href) return;
  
        // Не трогаем внешние ссылки
        if (/^https?:\/\//i.test(href)) return;
  
        a.setAttribute("href", withLang(href, lang));
      });
  }
  

  function setupLangDropdown(currentLang) {
    const root = document.querySelector("[data-lang]");
    if (!root) return;
  
    // ✅ Guard: не инициализировать повторно (иначе двойные обработчики)
    if (root.dataset.langInit === "1") return;
    root.dataset.langInit = "1";
  

    const btn  = root.querySelector("[data-lang-btn]");
    const menu = root.querySelector("[data-lang-menu]");
    const list = root.querySelectorAll("[data-set-lang]");

    function renderFlags() {
      // Короткие подписи рядом с флагом
      const SHORT = {
        ru: "RU",
        en: "EN",
        es: "ES",
        pt: "PT",
        de: "DE",
        fr: "FR",
        uk: "UA",
      };
    
      // === Flags rendering (Twemoji SVG fallback) ===
      const renderFlagHTML = (code) => {
        const emoji = FLAGS[code] || "🌐";
    
        if (window.twemoji && typeof window.twemoji.parse === "function") {
          return window.twemoji
            .parse(emoji, { folder: "svg", ext: ".svg" })
            .replace(/class="emoji"/g, 'class="flag-emoji"');
        }
        return emoji;
      };
    
      const LANG_CODE = {
        ru: "RU",
        en: "EN",
        es: "ES",
        pt: "PT",
        de: "DE",
        fr: "FR",
        uk: "UA",
      };
      
      const label = (code) => SHORT[code] || code.toUpperCase();
    
      // 1) Current language (button): флаг + код
      // Показать выбранный флаг + код на кнопке
      const flagEl = root.querySelector("[data-lang-flag]");
      if (flagEl) {
        // если используешь Twemoji-картинки:
        if (window.twemoji) {
          flagEl.innerHTML = twemoji.parse(FLAGS[currentLang] || "🌐", { folder: "svg", ext: ".svg" });
          const img = flagEl.querySelector("img");
          if (img) img.classList.add("flag-emoji");
        } else {
          // fallback на обычный emoji
          flagEl.textContent = FLAGS[currentLang] || "🌐";
        }
      }

      const codeEl = root.querySelector("[data-lang-code]");
      if (codeEl) codeEl.textContent = (LANG_CODE[currentLang] || currentLang.toUpperCase());

    
      // 2) Menu items: флаг + код
      list.forEach((item) => {
        const code = (item.getAttribute("data-set-lang") || "").toLowerCase();
        item.innerHTML = `
          <span class="lang__item-flag">${renderFlagHTML(code)}</span>
          <span class="lang__item-text">${label(code)}</span>
        `;
      });
      // Заполнить пункты меню: флаг + код
      list.forEach((item) => {
        const lang = (item.getAttribute("data-set-lang") || "").toLowerCase();
        const flag = item.querySelector("[data-item-flag]");
        const code = item.querySelector("[data-item-code]");

        if (flag) {
          if (window.twemoji) {
            flag.innerHTML = twemoji.parse(FLAGS[lang] || "🌐", { folder: "svg", ext: ".svg" });
            const img = flag.querySelector("img");
            if (img) img.classList.add("flag-emoji");
          } else {
            flag.textContent = FLAGS[lang] || "";
          }
        }

        if (code) code.textContent = LANG_CODE[lang] || lang.toUpperCase();
      });

    }
    
    
    function close() {
      root.classList.remove("is-open");
      btn?.setAttribute("aria-expanded", "false");
    }
    function open() {
      root.classList.add("is-open");
      btn?.setAttribute("aria-expanded", "true");
    }

    // ВАЖНО: “клик снаружи” — закрываем только если клик вне root
    document.addEventListener("click", (e) => {
      if (!root.contains(e.target)) close();
    });

    // Надёжнее в UI: pointerdown
    btn?.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      root.classList.contains("is-open") ? close() : open();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    list.forEach((item) => {
      item.addEventListener("click", () => {
        const lang = (item.getAttribute("data-set-lang") || "").toLowerCase();
        if (!SUPPORTED.includes(lang)) return;

        const u = new URL(location.href);
        u.searchParams.set("lang", lang);
        location.href = u.toString(); // перезагрузка по ТЗ
      });
    });

    renderFlags();

    // страховка: если что-то перерисовало DOM — повторим
    requestAnimationFrame(renderFlags);
    setTimeout(renderFlags, 0);
  }


  const lang = getParamLang() || browserLang();

  // Если параметра не было — ставим его через reload (строго по твоему ТЗ: перезагрузка)
  if (!getParamLang()) {
    const u = new URL(location.href);
    u.searchParams.set("lang", lang);
    location.replace(u.toString());
    return;
  }

  function runAfterDomReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }
  
  runAfterDomReady(() => {
    setHtmlMeta(lang);
    applyI18n(lang);
    fixInternalLinks(lang);
  
    // ВАЖНО: делаем после всего, чтобы никто не успел перетереть пункты
    setupLangDropdown(lang);
  });
  
})();
