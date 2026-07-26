// import React, { useState, useEffect } from 'react';
// import './Header.css';

// const navItems = [
//   {
//     href: '#qualifications',
//     label: 'Qualifications',
//     num: '01',
//     submenu: [
//       { href: '#upcoming-exams-section', label: 'Upcoming Exams' },
//       { href: '#exam-card-slider-section', label: 'Exam Levels' },
//     ],
//   },
//   {
//     href: '#organizations',
//     label: 'Organizations',
//     num: '02',
//     submenu: [
//       { href: '#statistics-section', label: 'Statistics' },
//       { href: '#subscribe-section', label: 'Subscribe' },
//     ],
//   },
//   {
//     href: '#research',
//     label: 'Research & Analysis',
//     num: '03',
//     submenu: [
//       { href: '#faq-section', label: 'FAQ' },
//       { href: '#footer-section', label: 'Contact' },
//     ],
//   },
//   { href: '#lorem1', label: 'Lorem ipsum', num: '04' },
//   { href: '#lorem2', label: 'Lorem ipsum', num: '05' },
// ];

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//     if (!isSearchOpen) {
//       setTimeout(() => document.getElementById('site-search-input')?.focus(), 300);
//     } else {
//       setSearchQuery('');
//       setSearchResults([]);
//     }
//   };

//   useEffect(() => {
//     if (!searchQuery.trim()) { setSearchResults([]); return; }
//     const query = searchQuery.toLowerCase();
//     const sections = [
//       { id: 'hero', name: 'Hero / Banner', text: 'Lorem ipsum dolor sit amet' },
//       { id: 'upcoming-exams-section', name: 'Upcoming Examinations', text: 'Level 1 exam, Level 2, Level 3 Grad' },
//       { id: 'exam-card-slider-section', name: 'Examination Cards', text: 'Lorem ipsum, card details' },
//       { id: 'statistics-section', name: 'Statistics', text: '123+, 12+, stats numbers' },
//       { id: 'faq-section', name: 'FAQ / Questions', text: 'MF Utility, CAN Registration Form' },
//       { id: 'subscribe-section', name: 'Subscribe', text: 'Subscribe to newsletter' },
//       { id: 'footer-section', name: 'Contact & Head Office', text: 'Marathon Icon, Mumbai' }
//     ];
//     setSearchResults(sections.filter(s => s.name.toLowerCase().includes(query) || s.text.toLowerCase().includes(query)));
//   }, [searchQuery]);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 16);
//     handleScroll();
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleResultClick = (id) => {
//     const el = document.querySelector(`.${id}`);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth' });
//       el.style.outline = '3px solid #13406F';
//       setTimeout(() => { el.style.outline = 'none'; }, 2000);
//     }
//     setIsSearchOpen(false);
//     setSearchQuery('');
//   };

//   return (
//     <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="header-container">
//         <div className="header-logo"><a href="/">LOGO</a></div>

//         {/* ===== NAV DRAWER ===== */}
//         <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>

//           {/* Drawer top branding strip */}
//           <div className="nav-drawer-top">
//             <span className="nav-drawer-label">NAVIGATE</span>
//             <div className="nav-drawer-accent"></div>
//           </div>

//           <ul className="nav-list">
//             {navItems.map(({ href, label, num, submenu }) => (
//               <li className={`nav-item ${submenu ? 'has-submenu' : ''}`} key={href}>
//                 <a
//                   href={href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   aria-haspopup={submenu ? 'true' : undefined}
//                 >
//                   <span className="nav-num">{num}</span>
//                   <span className="nav-label">{label}</span>
//                   {submenu && (
//                     <span className="nav-arrow" aria-hidden="true">
//                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                         <polyline points="6 9 12 15 18 9"/>
//                       </svg>
//                     </span>
//                   )}
//                 </a>
//                 {submenu && (
//                   <ul className="submenu">
//                     {submenu.map((item) => (
//                       <li key={item.href}>
//                         <a href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
//                           {item.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <button className="enrolment-btn mobile-only" onClick={() => setIsMobileMenuOpen(false)}>
//             Enrolment &rarr;
//           </button>
//         </nav>

//         <div className="header-actions">
//           <button className="search-btn" onClick={toggleSearch} aria-label="Toggle Search">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="11" cy="11" r="8"></circle>
//               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//             </svg>
//           </button>
//           <button className="enrolment-btn desktop-only">Enrolment</button>

//           {/* Animated Hamburger */}
//           <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
//             <span className="hamburger-line"></span>
//             <span className="hamburger-line"></span>
//             <span className="hamburger-line"></span>
//           </button>
//         </div>
//       </div>

//       {/* ===== SEARCH OVERLAY ===== */}
//       <div className={`search-overlay ${isSearchOpen ? 'open' : ''}`}>
//         <div className="search-bar-container">
//           <input
//             type="text"
//             id="site-search-input"
//             placeholder="Search website content (e.g., FAQ, Exams, Contacts)..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="search-input"
//           />
//           <button className="search-close-btn" onClick={toggleSearch}>
//             <i className="fa-solid fa-xmark"></i>
//           </button>
//         </div>
//         {searchResults.length > 0 && (
//           <div className="search-results-dropdown">
//             {searchResults.map(result => (
//               <div key={result.id} className="search-result-item" onClick={() => handleResultClick(result.id)}>
//                 <h4>{result.name}</h4>
//                 <p>{result.text}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import './Header.css';

const navItems = [
  {
    href: '#qualifications',
    label: 'Qualifications',
    num: '01',
    submenu: [
      { href: '#upcoming-exams-section', label: 'Upcoming Exams' },
      { href: '#exam-card-slider-section', label: 'Exam Levels' },
    ],
  },
  {
    href: '#organizations',
    label: 'Organizations',
    num: '02',
    submenu: [
      { href: '#statistics-section', label: 'Statistics' },
      { href: '#subscribe-section', label: 'Subscribe' },
    ],
  },
  {
    href: '#research',
    label: 'Research & Analysis',
    num: '03',
    submenu: [
      { href: '#faq-section', label: 'FAQ' },
      { href: '#footer-section', label: 'Contact' },
    ],
  },
  { href: '#lorem1', label: 'Lorem ipsum', num: '04' },
  { href: '#lorem2', label: 'Lorem ipsum', num: '05' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenSubmenu(null);
    // Close search if it's open so both don't overlap
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const toggleSearch = () => {
    const willOpen = !isSearchOpen;
    setIsSearchOpen(willOpen);

    if (willOpen) {
      // Close the mobile menu whenever search is opened
      setIsMobileMenuOpen(false);
      setOpenSubmenu(null);
      setTimeout(() => document.getElementById('site-search-input')?.focus(), 300);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Toggle a submenu open/closed without closing the whole drawer
  const handleParentClick = (e, href) => {
    e.preventDefault();
    setOpenSubmenu((prev) => (prev === href ? null : href));
  };

  const handleLeafClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); return; }
    const query = searchQuery.toLowerCase();
    const sections = [
      { id: 'hero', name: 'Hero / Banner', text: 'Lorem ipsum dolor sit amet' },
      { id: 'upcoming-exams-section', name: 'Upcoming Examinations', text: 'Level 1 exam, Level 2, Level 3 Grad' },
      { id: 'exam-card-slider-section', name: 'Examination Cards', text: 'Lorem ipsum, card details' },
      { id: 'statistics-section', name: 'Statistics', text: '123+, 12+, stats numbers' },
      { id: 'faq-section', name: 'FAQ / Questions', text: 'MF Utility, CAN Registration Form' },
      { id: 'subscribe-section', name: 'Subscribe', text: 'Subscribe to newsletter' },
      { id: 'footer-section', name: 'Contact & Head Office', text: 'Marathon Icon, Mumbai' }
    ];
    setSearchResults(sections.filter(s => s.name.toLowerCase().includes(query) || s.text.toLowerCase().includes(query)));
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResultClick = (id) => {
    const el = document.querySelector(`.${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.style.outline = '3px solid #13406F';
      setTimeout(() => { el.style.outline = 'none'; }, 2000);
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo"><a href="/">LOGO</a></div>

        {/* ===== NAV DRAWER ===== */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map(({ href, label, num, submenu }) => (
              <li
                className={`nav-item ${submenu ? 'has-submenu' : ''} ${openSubmenu === href ? 'submenu-open' : ''}`}
                key={href}
              >
                <a
                  href={href}
                  onClick={(e) => submenu ? handleParentClick(e, href) : handleLeafClick()}
                  aria-haspopup={submenu ? 'true' : undefined}
                  aria-expanded={submenu ? openSubmenu === href : undefined}
                >
                  <span className="nav-num">{num}</span>
                  <span className="nav-label">{label}</span>
                  {submenu && (
                    <span className="nav-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  )}
                </a>
                {submenu && (
                  <div className="submenu-wrapper">
                    <ul className="submenu">
                      {submenu.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} onClick={handleLeafClick}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <button className="enrolment-btn mobile-only" onClick={handleLeafClick}>
            Enrolment &rarr;
          </button>
        </nav>

        <div className="header-actions">
          <button className="search-btn" onClick={toggleSearch} aria-label="Toggle Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="enrolment-btn desktop-only">Enrolment</button>

          {/* Animated Hamburger */}
          <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* ===== SEARCH OVERLAY ===== */}
      <div className={`search-overlay ${isSearchOpen ? 'open' : ''}`}>
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <svg className="search-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              id="site-search-input"
              placeholder="Search website content (e.g., FAQ, Exams, Contacts)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="search-input-clear"
                onClick={() => { setSearchQuery(''); document.getElementById('site-search-input')?.focus(); }}
                aria-label="Clear search"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
          <button className="search-close-btn" onClick={toggleSearch} aria-label="Close search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {searchQuery.trim() && (
          <div className="search-results-dropdown">
            {searchResults.length > 0 ? (
              searchResults.map(result => (
                <div key={result.id} className="search-result-item" onClick={() => handleResultClick(result.id)}>
                  <span className="search-result-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                  <div className="search-result-text">
                    <h4>{result.name}</h4>
                    <p>{result.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="search-no-results">No results found for "{searchQuery}"</div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;