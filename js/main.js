// ===== MAIN.JS =====
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initFeaturedDesigners();
    initLatestPosts();
    initAllDesigners();
    initAllPosts();
    initDesignerDetail();
    initTestimonials();
    initModal();
});

function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('active'));
}

function initFeaturedDesigners() {
    const container = document.getElementById('featured-designers');
    if (!container || typeof designers === 'undefined') return;
    container.innerHTML = designers.filter(d => d.featured).slice(0, 3).map(d => createDesignerCard(d)).join('');
}

function initLatestPosts() {
    const container = document.getElementById('latest-posts');
    if (!container || typeof blogPosts === 'undefined') return;
    container.innerHTML = blogPosts.slice(0, 3).map(p => createPostCard(p)).join('');
}

function initAllDesigners() {
    const container = document.getElementById('all-designers');
    if (!container || typeof designers === 'undefined') return;
    
    // Add filterTags to designers for easier filtering
    designers.forEach(d => {
        d.filterTags = {
            location: [],
            price: '',
            style: ''
        };
        
        // Location tags
        const areas = (d.location.areas.join(' ') + ' ' + d.location.base).toLowerCase();
        if (areas.includes('budapest')) d.filterTags.location.push('budapest');
        if (areas.includes('balaton')) d.filterTags.location.push('balaton');
        if (areas.includes('vidék') || areas.includes('országszerte') || areas.includes('nagyobb')) d.filterTags.location.push('videk');
        
        // Price tag
        const price = d.pricing.range.toLowerCase();
        if (price.includes('prémium')) d.filterTags.price = 'premium';
        else if (price.includes('közép-felső') || price.includes('felső')) d.filterTags.price = 'kozep-felso';
        else if (price.includes('közepes')) d.filterTags.price = 'kozepes';
        
        // Style tag
        const specialty = d.specialty.toLowerCase();
        if (specialty.includes('modern') || specialty.includes('minimalizmus')) d.filterTags.style = 'modern';
        else if (specialty.includes('skandináv')) d.filterTags.style = 'skandinav';
        else if (specialty.includes('luxus')) d.filterTags.style = 'luxus';
        else if (specialty.includes('loft') || specialty.includes('ipari')) d.filterTags.style = 'loft';
        else if (specialty.includes('eklektikus') || specialty.includes('bohém')) d.filterTags.style = 'eklektikus';
    });
    
    // Current filters state
    const filters = { location: '', price: '', style: '' };
    
    // Initial render
    renderDesigners(designers);
    
    // Setup pill filters
    document.querySelectorAll('.filter-pills').forEach(pillGroup => {
        const filterType = pillGroup.dataset.filter;
        
        pillGroup.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                // Update active state
                pillGroup.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                
                // Update filter
                filters[filterType] = pill.dataset.value;
                
                // Apply filters
                applyFilters();
            });
        });
    });
    
    function applyFilters() {
        const filtered = designers.filter(d => {
            // Location filter
            if (filters.location && !d.filterTags.location.includes(filters.location)) {
                return false;
            }
            // Price filter
            if (filters.price && d.filterTags.price !== filters.price) {
                return false;
            }
            // Style filter
            if (filters.style && d.filterTags.style !== filters.style) {
                return false;
            }
            return true;
        });
        
        renderDesigners(filtered);
    }
}

function renderDesigners(list) {
    const container = document.getElementById('all-designers');
    const noResults = document.getElementById('no-results');
    const resultsInfo = document.getElementById('results-info');
    
    if (!container) return;
    
    if (list.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        if (resultsInfo) resultsInfo.textContent = '';
    } else {
        container.innerHTML = list.map(d => createDesignerCard(d)).join('');
        if (noResults) noResults.style.display = 'none';
        if (resultsInfo) {
            resultsInfo.textContent = list.length === designers.length 
                ? `${list.length} lakberendező` 
                : `${list.length} találat`;
        }
    }
}

function initAllPosts() {
    const container = document.getElementById('all-posts');
    if (!container || typeof blogPosts === 'undefined') return;
    container.innerHTML = blogPosts.map(p => createPostCard(p)).join('');
}

function initTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container || typeof testimonials === 'undefined') return;
    container.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar">
                <div class="testimonial-info"><h4>${t.name}</h4><p>${t.role}</p></div>
            </div>
        </div>
    `).join('');
}


// ===== Designer Detail =====
function initDesignerDetail() {
    const container = document.getElementById('designer-detail');
    if (!container || typeof designers === 'undefined') return;
    
    const id = new URLSearchParams(window.location.search).get('id');
    const designer = designers.find(d => d.id === id);
    if (!designer) { container.innerHTML = '<p>Lakberendező nem található.</p>'; return; }
    
    document.title = `${designer.name} - Lakberendezők.com`;
    const d = designer;
    const hasReviews = d.reviews && d.reviews.length > 0;
    const hasAwards = d.awards && d.awards.length > 0;
    
    container.innerHTML = `
        <div class="designer-hero">
            <div class="profile-image">
                <img src="${d.image}" alt="${d.name}">
                ${d.badges?.length ? `<div class="profile-badges">${d.badges.map(b => `<span>${b}</span>`).join('')}</div>` : ''}
            </div>
            <div class="profile-content">
                <h1>${d.name}</h1>
                <p class="profile-specialty">${d.specialty}</p>
                <div class="profile-stats">
                    <div class="profile-stat"><strong>${d.experience}</strong><span>Év tapasztalat</span></div>
                    <div class="profile-stat"><strong>${d.projectCount}+</strong><span>Projekt</span></div>
                    ${hasReviews ? `<div class="profile-stat"><strong>${d.reviewCount}</strong><span>Értékelés</span></div>` : ''}
                </div>
                ${hasReviews ? `
                <div class="profile-rating">
                    <span class="stars">${'★'.repeat(Math.floor(d.rating))}</span>
                    <span>${d.rating} / 5.0 (${d.reviewCount} értékelés alapján)</span>
                </div>` : ''}
                <div class="profile-cta">
                    <a href="mailto:${d.email}" class="btn btn-primary">Kapcsolatfelvétel</a>
                    ${d.website ? `<a href="${d.website}" target="_blank" class="btn btn-secondary">Weboldal</a>` : ''}
                    ${d.instagram ? `<a href="https://instagram.com/${d.instagram.replace('@','')}" target="_blank" class="btn btn-secondary">Instagram</a>` : ''}
                </div>
            </div>
        </div>
        
        <!-- Bemutatkozás -->
        <div class="intro-section">
            <h2>Bemutatkozás</h2>
            <div class="intro-text">${d.intro.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
        </div>
        
        <!-- Megközelítés -->
        <div class="approach-section">
            <h2>Hogyan dolgozom</h2>
            <div class="approach-text">${d.approach.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
        </div>
        
        <!-- Folyamat -->
        ${d.process ? `
        <div class="process-section">
            <h2>A folyamat</h2>
            <div class="process-grid">
                ${d.process.map(p => `
                    <div class="process-step">
                        <div class="process-number">${p.step}</div>
                        <h4>${p.title}</h4>
                        <p>${p.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>` : ''}
        
        <!-- Szolgáltatások -->
        <div class="services-section">
            <h2>Szolgáltatások</h2>
            <div class="services-grid">
                ${d.services.map(s => `
                    <div class="service-item">
                        <div class="service-icon">${s.icon}</div>
                        <div><h4>${s.name}</h4><p>${s.desc}</p></div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Praktikus infók -->
        <div class="info-grid-section">
            <div class="info-card">
                <h3>📍 Földrajzi lefedettség</h3>
                <p><strong>Bázis:</strong> ${d.location.base}</p>
                <ul>${d.location.areas.map(a => `<li>${a}</li>`).join('')}</ul>
                <p class="info-note">${d.location.remote}</p>
            </div>
            <div class="info-card">
                <h3>💰 Árazás</h3>
                <p><strong>Típus:</strong> ${d.pricing.type}</p>
                <p><strong>Kategória:</strong> ${d.pricing.range}</p>
                ${d.pricing.startingFrom !== 'Egyedi kalkuláció' ? `<p><strong>Kezdő ár:</strong> ${d.pricing.startingFrom}</p>` : ''}
                <p class="info-note">${d.pricing.note}</p>
            </div>
            <div class="info-card">
                <h3>ℹ️ Praktikus információk</h3>
                <p><strong>Nyelvek:</strong> ${d.practicalInfo.languages.join(', ')}</p>
                <p><strong>Válaszidő:</strong> ${d.practicalInfo.responseTime}</p>
                <p><strong>Min. projekt:</strong> ${d.practicalInfo.minProjectSize}</p>
                <p><strong>Tipikus időtartam:</strong> ${d.practicalInfo.typicalDuration}</p>
            </div>
        </div>
        
        <!-- Díjak - csak ha van -->
        ${hasAwards ? `
        <div class="awards-section">
            <h2>Díjak és elismerések</h2>
            <div class="awards-list">
                ${d.awards.map(a => `<span class="award-badge">🏆 ${a}</span>`).join('')}
            </div>
        </div>` : ''}
        
        <!-- Referenciák -->
        <div class="references-section">
            <h2>Referenciák</h2>
            <div class="references-grid">
                ${d.references.map((r, i) => `
                    <div class="reference-card" onclick="openModal(${designers.indexOf(d)}, ${i})">
                        <img src="${r.image}" alt="${r.title}">
                        <div class="reference-info">
                            <h4>${r.title}</h4>
                            <div class="reference-meta">
                                <span>${r.location}</span>
                                <span>${r.year} · ${r.size}</span>
                            </div>
                            <p>${r.description.substring(0, 120)}...</p>
                            <div class="reference-tags">${r.tags.map(t => `<span>${t}</span>`).join('')}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Értékelések - csak ha van -->
        ${hasReviews ? `
        <div class="reviews-section">
            <h2>Ügyfelek mondták</h2>
            <div class="reviews-list">
                ${d.reviews.map(r => `
                    <div class="review-card">
                        <div class="review-header">
                            <div class="review-author">
                                <img src="${r.avatar}" alt="${r.name}" class="review-avatar">
                                <div class="review-author-info"><h4>${r.name}</h4><p>${r.date}</p></div>
                            </div>
                            <div class="review-stars">${'★'.repeat(r.rating)}</div>
                        </div>
                        <p class="review-text">"${r.text}"</p>
                        <p class="review-project">Projekt: ${r.project}</p>
                    </div>
                `).join('')}
            </div>
        </div>` : ''}
    `;
}


// ===== Modal =====
function initModal() {
    const modal = document.getElementById('reference-modal');
    if (!modal) return;
    modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function openModal(designerIndex, refIndex) {
    const modal = document.getElementById('reference-modal');
    if (!modal) return;
    const ref = designers[designerIndex].references[refIndex];
    const designer = designers[designerIndex];
    
    modal.querySelector('.modal-image').src = ref.image;
    modal.querySelector('.modal-content').innerHTML = `
        <h2>${ref.title}</h2>
        <div class="modal-meta">
            <span>📍 ${ref.location}</span>
            <span>📐 ${ref.size}</span>
            <span>📅 ${ref.year}</span>
            <span>⏱️ ${ref.duration}</span>
        </div>
        <p class="modal-description">${ref.description}</p>
        <div class="modal-details">
            <div class="modal-detail"><strong>Lakberendező</strong><span>${designer.name}</span></div>
            <div class="modal-detail"><strong>Stílus</strong><span>${ref.tags.join(', ')}</span></div>
            ${ref.budget ? `<div class="modal-detail"><strong>Költségvetés</strong><span>${ref.budget}</span></div>` : ''}
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('reference-modal');
    if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

// ===== Cards =====
function createDesignerCard(d) {
    const hasReviews = d.reviews && d.reviews.length > 0;
    return `
        <a href="lakberendezo.html?id=${d.id}" class="designer-card">
            <div class="designer-image">
                <img src="${d.image}" alt="${d.name}">
                ${d.featured ? '<span class="designer-badge">Kiemelt</span>' : ''}
            </div>
            <div class="designer-info">
                <h3>${d.name}</h3>
                <p class="designer-specialty">${d.specialty}</p>
                <div class="designer-meta">
                    ${hasReviews ? `<div class="designer-rating"><span class="stars">★</span> ${d.rating}</div>` : ''}
                    <span>${d.projectCount}+ projekt</span>
                    <span>${d.experience} év</span>
                </div>
                <p>${d.shortBio}</p>
            </div>
        </a>
    `;
}

function createPostCard(p) {
    return `
        <a href="${p.path}" class="post-card">
            <div class="post-image"><img src="${p.image}" alt="${p.title}"></div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-category">${p.category}</span>
                    <span>${formatDate(p.date)}</span>
                </div>
                <h3>${p.title}</h3>
                <p class="post-excerpt">${p.excerpt}</p>
            </div>
        </a>
    `;
}

function formatDate(str) {
    return new Date(str).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' });
}