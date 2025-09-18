---
layout: page
permalink: /project/book/
title: Грокаем машинное обучение
---

# Грокаем машинное обучение

<div class="book-container">
    <div class="book-cover">
        <img src="/ai_mephi/assets/images/book-cover.jpg" alt="Обложка книги Грокаем машинное обучение" 
             onerror="this.style.display='none'">
    </div>
    
    <div class="book-info">
        <h2>О книге</h2>
        <p>Практическое руководство по машинному обучению, которое поможет разобраться в основных концепциях и алгоритмах.</p>
        
        <div class="book-details">
            <div class="detail-item">
                <span class="label">Формат:</span>
                <span class="value">PDF</span>
            </div>
            <div class="detail-item">
                <span class="label">Размер:</span>
                <span class="value">15.2 MB</span>
            </div>
            <div class="detail-item">
                <span class="label">Страниц:</span>
                <span class="value">480</span>
            </div>
        </div>
        
        <div class="action-buttons">
            <a href="/ai_mephi/public/books/grokaem_ml.pdf" class="btn btn-download" download>
                <span class="btn-icon">📥</span>
                Скачать книгу
            </a>
            
            <a href="/ai_mephi/public/books/grokaem_ml.pdf" class="btn btn-view" target="_blank">
                <span class="btn-icon">👁️</span>
                Открыть в новой вкладке
            </a>
        </div>
    </div>
</div>

<div class="pdf-viewer-section">
    <h2>Просмотр книги</h2>
    <div class="pdf-viewer">
        <iframe src="/ai_mephi/public/books/grokaem_ml.pdf#view=FitH" width="100%" height="600px">
            <p>Ваш браузер не поддерживает просмотр PDF. 
               <a href="/ai_mephi/public/books/grokaem_ml.pdf">Скачайте книгу</a> для просмотра.</p>
        </iframe>
    </div>
    
    <div class="viewer-controls">
        <button onclick="zoomIn()" class="control-btn">+ Увеличить</button>
        <button onclick="zoomOut()" class="control-btn">- Уменьшить</button>
        <button onclick="fitToWidth()" class="control-btn">📏 По ширине</button>
    </div>
</div>

<script>
function zoomIn() {
    const iframe = document.querySelector('.pdf-viewer iframe');
    const currentSrc = iframe.src;
    iframe.src = currentSrc.replace(/#.*$/, '') + '#zoom=150';
}

function zoomOut() {
    const iframe = document.querySelector('.pdf-viewer iframe');
    const currentSrc = iframe.src;
    iframe.src = currentSrc.replace(/#.*$/, '') + '#zoom=50';
}

function fitToWidth() {
    const iframe = document.querySelector('.pdf-viewer iframe');
    const currentSrc = iframe.src;
    iframe.src = currentSrc.replace(/#.*$/, '') + '#view=FitH';
}

// Анимация при наведении на кнопки
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
</script>

<style>
.book-container {
    display: flex;
    gap: 30px;
    margin: 30px 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;
}

.book-cover {
    flex: 0 0 200px;
}

.book-cover img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.book-info {
    flex: 1;
}

.book-info h2 {
    margin-top: 0;
    color: #fff;
    border-bottom: 2px solid rgba(255,255,255,0.2);
    padding-bottom: 10px;
}

.book-details {
    margin: 20px 0;
}

.detail-item {
    display: flex;
    margin-bottom: 8px;
}

.label {
    font-weight: bold;
    min-width: 80px;
    color: #e0e0e0;
}

.value {
    color: #fff;
}

.action-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 25px;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-download {
    background: #4CAF50;
    color: white;
}

.btn-download:hover {
    background: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
}

.btn-view {
    background: #2196F3;
    color: white;
}

.btn-view:hover {
    background: #1976D2;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
}

.btn-icon {
    margin-right: 8px;
    font-size: 1.1em;
}

.pdf-viewer-section {
    margin: 40px 0;
}

.pdf-viewer-section h2 {
    color: #333;
    margin-bottom: 20px;
}

.pdf-viewer {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.viewer-controls {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    justify-content: center;
}

.control-btn {
    padding: 8px 16px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.control-btn:hover {
    background: #e9ecef;
    transform: translateY(-1px);
}

/* Адаптивность */
@media (max-width: 768px) {
    .book-container {
        flex-direction: column;
        text-align: center;
    }
    
    .book-cover {
        flex: none;
        margin: 0 auto;
        max-width: 150px;
    }
    
    .action-buttons {
        justify-content: center;
    }
    
    .detail-item {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .action-buttons {
        flex-direction: column;
    }
    
    .btn {
        justify-content: center;
    }
}
</style>