import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'reviewed', 'thinking', 'member'
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState({ success: false, message: '' });

  // 用於控制目前正在閱讀哪一篇文章。若為 null 則顯示首頁
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght=300;400;500;700&family=Noto+Serif+TC:wght=400;600;700&family=Inter:wght=300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // 當切換文章時，自動將視窗滾動回最上方，維持極佳閱讀體驗
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedArticle]);

  const articles = [
    {
      id: 1,
      title: '時間的複利：在高速迭代的世界中，選擇慢速寫作的代價與收穫',
      excerpt: '在這個以秒計秒的碎片化時代，堅持每篇文字均歷經數周的推敲，看似是自絕於流量。然而，正是這種與時間對抗的慢速寫作，為我們過濾了焦躁，沈澱出真正值得傳承的深刻觀點。當思考擁有長度，靈魂才有空間開展。',
      tags: ['寫作論', '時代觀察'],
      date: '2026-05-18',
      status: 'reviewed', 
      statusLabel: '已審稿',
      readTime: '8 min read',
      // 每篇文章的深度閱讀內文
      content: (
        <div className="space-y-6">
          <p>
            我們活在一個「快」被奉為圭臬的時代。演算法以毫秒為單位計算我們的注意力，社群平台的短貼文以秒為單位刷新。在這樣的高速迭代中，寫作似乎也變成了一種軍備競賽——誰能在事件發生的第一時間產出評論，誰就能奪得流量的紅利。
          </p>
          <p>
            然而，這種即時性的產出，代價往往是思考的廉價化與情緒的極端化。當我們沒有時間沉澱，我們的文字就只能是直覺的、本能的、甚至是迎合集體情緒的宣洩。
          </p>
          <blockquote className="border-l-4 border-[#803E2F] pl-4 py-1 my-6 italic text-[#803E2F] font-serif">
            「慢，不是效率的低下，而是主動對抗平庸的思維防線。」
          </blockquote>
          <p>
            慢速寫作（Slow Writing）是我對這個時代的一種溫和反叛。當我選擇花費數周的時間去推敲一個論點、核實一個數據、甚至僅僅是尋找一個更精準的形容詞時，我其實是在為讀者的注意力把關。我深信，只有經過時間反覆淬鍊的思想，才具備穿越噪音的複利效應。
          </p>
          <p>
            這種選擇的代價是顯而易見的：我無法擁有驚人的日更流量，也可能在熱點事件褪去後才發表文章。但其收穫卻是無價的——我換來了與讀者之間深沉、持久的信任感，以及一篇在五年、十年後，依然值得被重讀與反思的文字。
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: '親密關係裡的理性留白：如何不以愛為名進行情緒勒索',
      excerpt: '我們常在最在乎的人面前失去分寸。本文試圖從心理學與溝通倫理出發，剖析溫柔理性在衝突中的關鍵作用，並提供三個在日常對話中『留白』的實作框架。愛需要溫度的承接，更需要距離的敬意。',
      tags: ['人際關係', '心理學'],
      date: '2026-06-02',
      status: 'thinking',
      statusLabel: '思考中',
      readTime: '12 min read',
      content: (
        <div className="space-y-6">
          <p>
            在親密關係中，我們最容易犯的錯誤，就是將「毫無保留」誤認為愛的極致。因為足夠親近，所以我們卸下了防備；但也因為卸下了防備，我們常常將自己未經整理的焦慮、憤怒與不安全感，毫無過濾地傾倒給對方。
          </p>
          <p>
            情緒勒索往往由此而生。我們常說「我這都是為了你好」或「因為我很在乎你才這樣說」，這些話語的底層，其實是理性缺失下的控制欲。
          </p>
          <blockquote className="border-l-4 border-[#803E2F] pl-4 py-1 my-6 italic text-[#803E2F] font-serif">
            「有溫度的理性，是親密關係裡最珍貴的避風港。」
          </blockquote>
          <p>
            「理性留白」並不是冷漠，而是在情緒即將失控的瞬間，主動按下一個暫停鍵。這裡提供三個我們可以在衝突中實踐的「對話留白」框架：
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-[#2B3A45]/90">
            <li><strong>情緒命名法</strong>：在爆發前，先平靜地說出自己的感受（例如：「我現在覺得有些焦慮，這不是你的錯」）。</li>
            <li><strong>時間隔離法</strong>：衝突升溫時，協議「在二十分鐘後再行討論」，給彼此的交感神經降溫的空間。</li>
            <li><strong>主體性尊重</strong>：認清伴侶是獨立的個體，他的選擇不必然要為你的安全感負責。</li>
          </ol>
          <p>
            溫柔的理性是，在愛中我們學會承接彼此，但同時也為彼此的靈魂保留一份呼吸的空間。
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: '演算法牢籠下的深度閱讀：重拾主動思辨的認知重建指南',
      excerpt: '當推薦系統比你更了解你的偏好，我們的獨立思考正悄然被格式化。這是一份針對現代讀者的注意力重建提案，探討如何建立個人專屬的資訊免疫系統，並在回饋迴路中保持警醒。',
      tags: ['社會議題', '認知科學'],
      date: '2026-06-12',
      status: 'member',
      statusLabel: '私密（會員）',
      readTime: '15 min read',
      content: (
        <div className="space-y-6">
          <p>
            你今天讀了什麼？這個問題在過去很容易回答，但在今天卻變得無比模糊。我們每天在手機螢幕上滑動數百公尺，吞食著無數的資訊碎片，但到了深夜，我們卻常感到大腦一片空虛，甚至伴隨著資訊焦慮。
          </p>
          <p>
            這是演算法牢籠的代價。推薦系統的核心逻辑是「迎合」，而非「啟發」。它會不斷餵養你本就認同的觀點，從而將你的思想格式化，鎖進資訊繭房中。
          </p>
          <blockquote className="border-l-4 border-[#803E2F] pl-4 py-1 my-6 italic text-[#803E2F] font-serif">
            「當閱讀不再需要努力，思考就開始退化。」
          </blockquote>
          <p>
            要重拾主動思辨的能力，我們必須展開一場「注意力的認知重建」。這不是一朝一夕的事，而是需要我們有意識地建立個人的「資訊免疫系統」：
          </p>
          <p>
            首先，是<strong>刻意閱讀具有摩擦力的內容</strong>。主動去讀那些你不同意、或需要花費力氣理解的書籍與長文。這種智力上的「不舒服」，正是大腦建立新神經元連結的關鍵時刻。
          </p>
          <p>
            其次，是<strong>建立你的資訊護城河</strong>。取消關注那些只會製造情緒對立的帳號，將時間留給重視事實查核與深度分析的獨立創作者。我們無法關閉演算法，但我們可以選擇不當演算法最溫順的順民。
          </p>
        </div>
      )
    }
  ];

  const filteredArticles = articles.filter(art => {
    if (activeFilter === 'all') return true;
    return art.status === activeFilter;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setSubscribeStatus({ success: false, message: '請輸入正確的電子信箱。' });
      return;
    }
    setSubscribeStatus({ success: true, message: '感謝您的訂閱。我們承諾只發送深思熟慮的文章，不打擾您的寧靜空間。' });
    setEmail('');
  };

  // 關閉文章閱讀，返回首頁
  const handleBackToHome = () => {
    setSelectedArticle(null);
  };

  // 新增：優雅的跨頁錨點導航，解決文章頁與首頁間切換時，錨點定位失敗的問題
  const handleNavigation = (targetId) => {
    setSelectedArticle(null);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EE] text-[#2B3A45] font-sans antialiased selection:bg-[#7B8C86]/20 selection:text-[#2B3A45] transition-colors duration-300">
      
      {/* 導覽列 */}
      <nav className="sticky top-0 z-50 bg-[#F5F2EE]/90 backdrop-blur-md border-b border-[#E8E5E2] px-6 md:px-16 py-4 md:py-5 flex justify-between items-center">
        <div 
          onClick={handleBackToHome}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="font-serif font-bold text-xl tracking-wider text-[#2B3A45] group-hover:text-[#803E2F] transition-colors">CW</span>
          {/*<span className="text-[10px] uppercase tracking-widest bg-[#7B8C86]/10 text-[#7B8C86] px-1.5 py-0.5 rounded font-semibold">Slow Writing</span>*/}
        </div>

        {/* 桌面版選單 */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2B3A45]/80">
          <button onClick={() => handleNavigation('about')} className="hover:text-[#803E2F] transition-colors focus:outline-none">關於</button>
          <button onClick={() => handleNavigation('articles')} className="hover:text-[#803E2F] transition-colors focus:outline-none">精選創作</button>
          <button onClick={() => handleNavigation('philosophy')} className="hover:text-[#803E2F] transition-colors focus:outline-none">寫作理念</button>
          <button onClick={() => handleNavigation('subscribe')} className="px-4 py-2 bg-[#2B3A45] text-[#FAF9F7] rounded-lg hover:bg-[#803E2F] transition-all shadow-sm focus:outline-none">訂閱文章</button>
        </div>

        {/* 行動版漢堡按鈕 */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-[#E8E5E2]/60 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5 text-[#2B3A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#2B3A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* 行動版選單抽屜 */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-20 bg-[#F5F2EE] px-6 py-8 flex flex-col gap-6 animate-fade-in border-b border-[#E8E5E2] shadow-lg">
          <button 
            onClick={() => handleNavigation('about')}
            className="text-left text-lg font-serif border-b border-[#E8E5E2] pb-3 text-[#2B3A45] focus:outline-none"
          >
            關於作者
          </button>
          <button 
            onClick={() => handleNavigation('articles')}
            className="text-left text-lg font-serif border-b border-[#E8E5E2] pb-3 text-[#2B3A45] focus:outline-none"
          >
            精選創作
          </button>
          <button 
            onClick={() => handleNavigation('philosophy')}
            className="text-left text-lg font-serif border-b border-[#E8E5E2] pb-3 text-[#2B3A45] focus:outline-none"
          >
            寫作理念
          </button>
          <button 
            onClick={() => handleNavigation('subscribe')}
            className="mt-4 px-6 py-3 bg-[#2B3A45] text-[#FAF9F7] rounded-lg text-center font-medium shadow-sm focus:outline-none"
          >
            訂閱文章
          </button>
        </div>
      )}

      {/* ==================== 頁面核心渲染邏輯 ==================== */}
      {selectedArticle ? (
        /* ------------------ 深度文章閱讀頁視角 ------------------ */
        <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-10 animate-fade-in">
          {/* 返回按鈕與文章標籤 */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button 
              onClick={handleBackToHome}
              className="group flex items-center gap-2 text-sm text-[#7B8C86] hover:text-[#803E2F] transition-colors"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回慢寫首頁
            </button>
            <div className="flex gap-2">
              {selectedArticle.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-[#E8E5E2]/80 text-[#2B3A45]/80 px-2.5 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 文章標題區 */}
          <div className="space-y-4 border-b border-[#E8E5E2] pb-8">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#2B3A45]/50">
              <span>發佈於 {selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wider ${
                selectedArticle.status === 'reviewed' ? 'bg-[#7B8C86]/10 text-[#7B8C86]' :
                selectedArticle.status === 'thinking' ? 'bg-[#803E2F]/10 text-[#803E2F]' :
                'bg-[#2B3A45]/10 text-[#2B3A45]'
              }`}>
                {selectedArticle.statusLabel}
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3A45] leading-tight tracking-wide">
              {selectedArticle.title}
            </h1>
          </div>

          {/* 文章本體內容 */}
          <div className="font-serif text-base sm:text-lg leading-relaxed text-[#2B3A45]/95 text-justify space-y-6">
            {selectedArticle.content}
          </div>

          {/* 閱讀完畢小提醒與訂閱轉化 */}
          <div className="bg-[#FAF9F7] border border-[#E8E5E2] rounded-2xl p-6 sm:p-8 mt-12 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#803E2F]">謝謝您閱讀到最後</h4>
            <p className="text-xs sm:text-sm text-[#2B3A45]/80 leading-relaxed">
              每一篇文章的孕育，都需要在寧靜中經過時間反覆梳理。如果您喜歡這種帶有理性厚度與同理溫度的「慢寫作」筆調，歡迎加入讀者信件名單，在未來的路上一起對話、一起思考。
            </p>
            <button 
              onClick={() => handleNavigation('subscribe')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2B3A45] hover:text-[#803E2F] transition-colors focus:outline-none"
            >
              前往訂閱我的電子報
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </article>
      ) : (
        /* ------------------ 預設首頁 Landing Page 視角 ------------------ */
        <>
          {/* Hero 首屏 */}
          <section className="max-w-7xl mx-auto px-6 md:px-16 pt-12 pb-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="space-y-6 lg:col-span-7">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#7B8C86] uppercase">Claudia's Journal / 慢寫之境</span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2B3A45] tracking-wide font-semibold">
                慢寫：<br/>讓思想有時間成熟
              </h1>
              <p className="text-[#2B3A45]/80 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl">
                文字是我理解世界與整理思緒的方法。在這裡，我們拒絕即時與碎片化的喧嘩，每篇發佈皆為深思熟慮，讓真正的關懷沉澱出理性的溫度。
              </p>
              
              {/* 按鈕群 */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => handleNavigation('articles')}
                  className="px-6 py-3.5 bg-[#2B3A45] text-[#FAF9F7] font-medium text-sm rounded-lg text-center hover:bg-[#803E2F] transition-all shadow-sm flex items-center justify-center gap-2 focus:outline-none"
                >
                  閱讀最新文章
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => handleNavigation('subscribe')}
                  className="px-6 py-3.5 bg-transparent border border-[#2B3A45]/30 text-[#2B3A45] font-medium text-sm rounded-lg text-center hover:bg-[#E8E5E2] transition-all focus:outline-none"
                >
                  加入讀者名單
                </button>
              </div>
            </div>

            {/* 右側照片區（完美黃金比例直橢圓 + 優雅內陰影 + 修正寬高比例） */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative w-72 h-[432px] sm:w-80 sm:h-[480px] rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-sm">
                
                {/* 1. 底層真實照片 */}
                <img 
                  src="/myProfile.png" 
                  alt="Claudia" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // 防錯機制：若找不到 myProfile.png，顯示一張有文藝氣息的大理石書本背景照
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000";
                  }}
                />

                {/* 2. 頂層內陰影遮罩（高度和諧的質感，不會在非標準尺寸下跑位） */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_24px_rgba(43,58,69,0.25)] pointer-events-none border border-[#2B3A45]/5" />

              </div>
            </div>
          </section>

          {/* About Section (關於作者) */}
          <section id="about" className="bg-[#FAF9F7] px-6 md:px-16 py-16 md:py-24 border-y border-[#E8E5E2]">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="w-20 h-20 rounded-full bg-[#2B3A45] text-[#F5F2EE] flex items-center justify-center font-serif text-3xl font-semibold shadow-md flex-shrink-0">
                  C.
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2B3A45] font-semibold">Claudia | 慢寫作者</h2>
                  <p className="text-[#7B8C86] text-xs sm:text-sm tracking-widest uppercase font-semibold">關注自我成長、人際關係與社會議題</p>
                </div>
              </div>

              <p className="text-[#2B3A45]/95 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                「我深信文字是有重量與責任的。在這個強調即時反饋、眼球爭奪的網絡生態中，我選擇建立這個安靜的角落。寫作是我理性與情感交會的地方，歡迎與我一起在時間的寬容裡，進行不被催促的思考。」
              </p>

              {/* 創作倫理與審稿承諾 */}
              <div className="border border-[#E8E5E2] rounded-xl bg-[#F5F2EE] overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setIsBioExpanded(!isBioExpanded)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left hover:bg-[#E8E5E2]/30 transition-all focus:outline-none"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#7B8C86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#2B3A45]">創作倫理與審稿承諾</span>
                  </div>
                  <svg className={`w-4 h-4 text-[#2B3A45]/60 transition-transform duration-300 ${isBioExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isBioExpanded && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#2B3A45]/80 space-y-3 leading-relaxed border-t border-[#E8E5E2]">
                    <p><strong>一、事實查核承諾</strong>：涉及社會議題與科學研究之引述，均詳列可驗證來源，不散播無根據之偏見。</p>
                    <p><strong>二、理性與同理並行</strong>：評論事物時，拒絕情緒化的獵巫與對立，保持論理中立，並盡最大努力同理不同立場的決策困境。</p>
                    <p><strong>三、透明編輯流程</strong>：所有公開文章皆經自審、沉澱與至少兩次修改。若經讀者勘誤，修改處皆會明示標註，對產出之言論負起完全責任。</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 精選文章區（Featured Works） */}
          <section id="articles" className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 space-y-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#7B8C86] uppercase">Selected Works</span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2B3A45] font-semibold">精選文章與思想軌跡</h2>
              </div>

              {/* 文章篩選按鈕 */}
              <div className="flex flex-wrap gap-1.5 bg-[#FAF9F7] p-1 rounded-xl border border-[#E8E5E2] text-xs">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeFilter === 'all' ? 'bg-[#2B3A45] text-white shadow-xs' : 'text-[#2B3A45]/80 hover:bg-[#E8E5E2]'}`}
                >
                  全部 ({articles.length})
                </button>
                <button 
                  onClick={() => setActiveFilter('reviewed')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeFilter === 'reviewed' ? 'bg-[#7B8C86] text-white shadow-xs' : 'text-[#2B3A45]/80 hover:bg-[#E8E5E2]'}`}
                >
                  已審稿
                </button>
                <button 
                  onClick={() => setActiveFilter('thinking')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeFilter === 'thinking' ? 'bg-[#803E2F] text-white shadow-xs' : 'text-[#2B3A45]/80 hover:bg-[#E8E5E2]'}`}
                >
                  思考中
                </button>
                <button 
                  onClick={() => setActiveFilter('member')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${activeFilter === 'member' ? 'bg-[#2B3A45] text-white shadow-xs' : 'text-[#2B3A45]/80 hover:bg-[#E8E5E2]'}`}
                >
                  私密會員
                </button>
              </div>
            </div>

            {/* 文章卡片網格（修正：點擊卡片會流暢切換至 selectedArticle） */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map(art => (
                <div 
                  key={art.id} 
                  onClick={() => setSelectedArticle(art)}
                  className="bg-[#FAF9F7] border border-[#E8E5E2] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#2B3A45]/50 font-mono">{art.date}</span>
                      
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-medium tracking-wider ${
                        art.status === 'reviewed' ? 'bg-[#7B8C86]/10 text-[#7B8C86]' :
                        art.status === 'thinking' ? 'bg-[#803E2F]/10 text-[#803E2F]' :
                        'bg-[#2B3A45]/10 text-[#2B3A45]'
                      }`}>
                        {art.statusLabel}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-[#2B3A45] group-hover:text-[#803E2F] transition-colors">
                      {art.title}
                    </h3>

                    <p className="text-[#2B3A45]/70 text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8E5E2]/60 flex justify-between items-center text-xs">
                    <div className="flex gap-1.5 flex-wrap">
                      {art.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-[#E8E5E2]/60 text-[#2B3A45]/70 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-[10px] text-[#2B3A45]/40 flex items-center gap-1">
                      {art.readTime}
                      <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}

              {filteredArticles.length === 0 && (
                <div className="col-span-full py-16 text-center text-[#2B3A45]/50 font-serif">
                  此類別暫無文章，正在深刻醞釀中。
                </div>
              )}
            </div>
          </section>

          {/* 寫作理念 */}
          <section id="philosophy" className="bg-[#E8E5E2]/30 px-6 md:px-16 py-16 md:py-24 border-t border-[#E8E5E2]">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#7B8C86] uppercase">The Philosophy</span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2B3A45] font-semibold">為什麼我們需要「慢寫作」？</h2>
              </div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                <div className="bg-[#FAF9F7] p-8 rounded-2xl border border-[#D9D5D0]/60 space-y-4 shadow-3xs">
                  <div className="w-10 h-10 rounded-xl bg-[#7B8C86]/10 text-[#7B8C86] flex items-center justify-center font-serif text-lg font-bold">I</div>
                  <h3 className="font-serif text-lg font-semibold text-[#2B3A45]">為何慢寫？</h3>
                  <p className="text-xs sm:text-sm text-[#2B3A45]/80 leading-relaxed text-justify">
                    即時的評論往往流於情緒的宣洩，碎片化的載體稀釋了複雜議題的深度。慢寫，是主動向演算法奪回思維的主導權，給予思想充足的熟成時間，讓每一次產出都對得起讀者的注意力。
                  </p>
                </div>

                <div className="bg-[#FAF9F7] p-8 rounded-2xl border border-[#D9D5D0]/60 space-y-4 shadow-3xs">
                  <div className="w-10 h-10 rounded-xl bg-[#803E2F]/10 text-[#803E2F] flex items-center justify-center font-serif text-lg font-bold">II</div>
                  <h3 className="font-serif text-lg font-semibold text-[#2B3A45]">負責任地發表</h3>
                  <p className="text-xs sm:text-sm text-[#2B3A45]/80 leading-relaxed text-justify">
                    每一篇發表都是一次公信力的付託。Claudia 在寫作過程中採取多源交叉比對、潛在認知偏見評估與事實澄清，避免跟風轉載。我們追求的不是第一時間的爆紅，而是五年後依然經得起檢驗的內容。
                  </p>
                </div>

                <div className="bg-[#FAF9F7] p-8 rounded-2xl border border-[#D9D5D0]/60 space-y-4 shadow-3xs">
                  <div className="w-10 h-10 rounded-xl bg-[#2B3A45]/10 text-[#2B3A45] flex items-center justify-center font-serif text-lg font-bold">III</div>
                  <h3 className="font-serif text-lg font-semibold text-[#2B3A45]">讀者如何參與</h3>
                  <p className="text-xs sm:text-sm text-[#2B3A45]/80 leading-relaxed text-justify">
                    這不是一場單向的布道。您可以透過訂閱電子報，在每月安靜的清晨收到最新整理；您亦可加入核心讀者群組，與相同溫度的靈魂進行深度的文字思辨、共同修訂思維地圖。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 訂閱區（Newsletter CTA，首頁與文章內文均可流暢使用） */}
      <section id="subscribe" className="px-6 md:px-16 py-16 md:py-28 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#7B8C86] uppercase">Newsletter Subscription</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2B3A45] font-semibold">加入讀者信件名單</h2>
          <p className="text-xs sm:text-sm text-[#2B3A45]/70 max-w-md mx-auto leading-relaxed">
            不主動推送無關廣告，亦不進行高頻率干擾。僅於新文章沉澱完成、或有深度思維彙整時，親自寄送給您。
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="輸入您的電子信箱..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-3.5 bg-[#FAF9F7] text-sm text-[#2B3A45] rounded-lg border border-[#D9D5D0] focus:outline-none focus:ring-1 focus:ring-[#7B8C86] focus:border-[#7B8C86] placeholder-[#2B3A45]/40"
          />
          <button 
            type="submit"
            className="px-6 py-3.5 bg-[#2B3A45] text-[#FAF9F7] text-sm font-medium rounded-lg hover:bg-[#803E2F] transition-all shadow-sm focus:outline-none"
          >
            訂閱文章
          </button>
        </form>

        {subscribeStatus.message && (
          <div className={`p-4 rounded-lg text-xs max-w-md mx-auto leading-relaxed ${subscribeStatus.success ? 'bg-[#7B8C86]/10 text-[#7B8C86]' : 'bg-[#803E2F]/10 text-[#803E2F]'}`}>
            {subscribeStatus.message}
          </div>
        )}
      </section>

      {/* 頁尾 */}
      <footer className="bg-[#2B3A45] text-[#FAF9F7]/80 px-6 md:px-16 py-12 md:py-16 border-t border-[#D9D5D0]/10 text-xs md:text-sm">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <span className="font-serif font-bold text-xl text-white">Claudia.</span>
            <p className="text-[#FAF9F7]/60 leading-relaxed max-w-xs text-xs">
              一個讓思想有時間成熟的空間。在喧囂中保持清澈，在盲從中堅守思辨。
            </p>
          </div>
          
          {/* 聲明與智慧財產權 */}
          <div className="space-y-3 text-xs text-[#FAF9F7]/60 leading-relaxed">
            <h4 className="font-semibold text-white">智慧財產與 AI 編輯聲明</h4>
            <p>
              © 2026 Claudia. All rights reserved. 網站所有文章、思想框架與排版美學均為作者原創。
            </p>
            <p>
              【編輯倫理】AI 僅被視為拼字檢查與文法修飾之編輯輔助工具。所有原創觀點、洞察、推論與最終修稿均由作者本人獨立完成，保障原稿之真實性與靈魂溫度。
            </p>
            <p>
              【版權引用】如需引用，請標明作者、出處與原始連結。禁止未經授權之全文轉載、商業利用或餵入語言模型訓練。
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#FAF9F7]/10 text-center text-[10px] text-[#FAF9F7]/40 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>DESIGN BY CLAUDIA</span>
        </div>
      </footer>

    </div>
  );
}