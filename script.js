// ===== Crops Management =====
let crops = [
    { name: 'Wheat', variety: 'HD2967', plantingDate: '2025-06-15', harvestDate: '2025-10-15', area: 5 },
    { name: 'Rice', variety: 'Basmati', plantingDate: '2025-05-20', harvestDate: '2025-09-20', area: 3 },
    { name: 'Maize', variety: 'Hybrid', plantingDate: '2025-06-01', harvestDate: '2025-10-01', area: 4 }
];

// ===== Inventory Management =====
let inventory = [
    { name: 'NPK Fertilizer', category: 'Fertilizer', quantity: 500, unit: 'kg', cost: 15000 },
    { name: 'Urea', category: 'Fertilizer', quantity: 300, unit: 'kg', cost: 8000 },
    { name: 'Pesticide Spray', category: 'Tools', quantity: 50, unit: 'liters', cost: 25000 }
];

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', function () {
    loadCrops();
    loadInventory();
    setupEventListeners();
    drawCharts();
});

// ===== Load Crops Display =====
function loadCrops() {
    const cropsList = document.getElementById('cropsList');
    cropsList.innerHTML = '';

    crops.forEach((crop, index) => {
        const cropItem = document.createElement('div');
        cropItem.className = 'crop-item';
        cropItem.innerHTML = `
            <h4>${crop.name}</h4>
            <small><strong>Variety:</strong> ${crop.variety}</small>
            <small><strong>Planting:</strong> ${formatDate(crop.plantingDate)}</small>
            <small><strong>Harvest:</strong> ${formatDate(crop.harvestDate)}</small>
            <small><strong>Area:</strong> ${crop.area} hectares</small>
            <button class="btn btn-secondary" style="margin-top: 0.5rem; width: 100%;" onclick="deleteCrop(${index})">Remove</button>
        `;
        cropsList.appendChild(cropItem);
    });
}

// ===== Load Inventory Display =====
function loadInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    inventory.forEach((item, index) => {
        const inventoryItem = document.createElement('div');
        inventoryItem.className = 'inventory-item';
        inventoryItem.innerHTML = `
            <h4>${item.name}</h4>
            <small><strong>Category:</strong> ${item.category}</small>
            <small><strong>Quantity:</strong> ${item.quantity} ${item.unit}</small>
            <small><strong>Cost:</strong> ₹${item.cost.toLocaleString('en-IN')}</small>
            <button class="btn btn-secondary" style="margin-top: 0.5rem; width: 100%;" onclick="deleteInventory(${index})">Remove</button>
        `;
        inventoryList.appendChild(inventoryItem);
    });
}

// ===== Add Crop Form Handler =====
function setupEventListeners() {
    const cropForm = document.getElementById('cropForm');
    if (cropForm) {
        cropForm.addEventListener('submit', function (e) {
            e.preventDefault();
            addCrop();
        });
    }

    const inventoryForm = document.getElementById('inventoryForm');
    if (inventoryForm) {
        inventoryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            addInventoryItem();
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleContactForm();
        });
    }

    // Hamburger Menu
    setupHamburgerMenu();
}

// ===== Add Crop =====
function addCrop() {
    const cropName = document.getElementById('cropName').value;
    const cropVariety = document.getElementById('cropVariety').value;
    const plantingDate = document.getElementById('plantingDate').value;
    const harvestDate = document.getElementById('harvestDate').value;
    const area = parseFloat(document.getElementById('area').value);

    if (cropName && cropVariety && plantingDate && harvestDate && area) {
        crops.push({
            name: cropName,
            variety: cropVariety,
            plantingDate: plantingDate,
            harvestDate: harvestDate,
            area: area
        });

        loadCrops();
        document.getElementById('cropForm').reset();
        showNotification('Crop added successfully!');
        updateDashboard();
    }
}

// ===== Delete Crop =====
function deleteCrop(index) {
    if (confirm('Are you sure you want to delete this crop?')) {
        crops.splice(index, 1);
        loadCrops();
        showNotification('Crop deleted successfully!');
        updateDashboard();
    }
}

// ===== Add Inventory Item =====
function addInventoryItem() {
    const itemName = document.getElementById('itemName').value;
    const itemCategory = document.getElementById('itemCategory').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const unit = document.getElementById('unit').value;
    const cost = parseFloat(document.getElementById('cost').value);

    if (itemName && itemCategory && quantity && unit && cost) {
        inventory.push({
            name: itemName,
            category: itemCategory,
            quantity: quantity,
            unit: unit,
            cost: cost
        });

        loadInventory();
        document.getElementById('inventoryForm').reset();
        showNotification('Inventory item added successfully!');
    }
}

// ===== Delete Inventory Item =====
function deleteInventory(index) {
    if (confirm('Are you sure you want to delete this item?')) {
        inventory.splice(index, 1);
        loadInventory();
        showNotification('Inventory item deleted successfully!');
    }
}

// ===== Contact Form Handler =====
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    showNotification('Thank you for reaching out! We will contact you soon.');
    contactForm.reset();
}

// ===== Update Dashboard =====
function updateDashboard() {
    document.getElementById('totalFields').textContent = crops.length;
}

// ===== Show Notification =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== Format Date =====
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ===== Smooth Scroll to Section =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Hamburger Menu Setup =====
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '60px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.flexDirection = 'column';
            navMenu.style.backgroundColor = '#2c3e50';
            navMenu.style.gap = '0';
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.style.display = 'none';
            });
        });
    }
}

// ===== Chart Drawing =====
function drawCharts() {
    // Check if Chart.js is available, otherwise use simple canvas drawing
    drawYieldChart();
    drawExpenseChart();
    drawHealthChart();
    drawProductivityChart();
}

// ===== Simple Chart Drawing Functions =====
function drawYieldChart() {
    const canvas = document.getElementById('yieldChart');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 200;

    // Simple bar chart for yield
    const months = ['June', 'July', 'Aug', 'Sept', 'Oct'];
    const yields = [400, 600, 800, 1000, 1200];
    const barWidth = width / months.length;

    ctx.fillStyle = '#2ecc71';
    yields.forEach((yield, index) => {
        const barHeight = (yield / 1500) * height * 0.8;
        ctx.fillRect(index * barWidth + 10, height - barHeight - 20, barWidth - 20, barHeight);
    });

    // Draw labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    months.forEach((month, index) => {
        ctx.fillText(month, index * barWidth + barWidth / 2, height - 5);
    });
}

function drawExpenseChart() {
    const canvas = document.getElementById('expenseChart');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 200;

    // Draw pie chart
    const expenses = [
        { label: 'Seeds', value: 30, color: '#3498db' },
        { label: 'Fertilizer', value: 40, color: '#2ecc71' },
        { label: 'Tools', value: 20, color: '#e74c3c' },
        { label: 'Labor', value: 10, color: '#f39c12' }
    ];

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;

    let currentAngle = 0;
    expenses.forEach(expense => {
        const sliceAngle = (expense.value / 100) * 2 * Math.PI;

        ctx.fillStyle = expense.color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        currentAngle += sliceAngle;
    });
}

function drawHealthChart() {
    const canvas = document.getElementById('healthChart');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 200;

    // Simple line chart for crop health
    ctx.strokeStyle = '#2ecc71';
    ctx.lineWidth = 2;
    ctx.beginPath();

    const points = [30, 40, 55, 70, 85, 90];
    const pointX = width / (points.length - 1);

    points.forEach((point, index) => {
        const x = index * pointX;
        const y = height - (point / 100) * height + 20;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });

    ctx.stroke();

    // Draw points
    ctx.fillStyle = '#2ecc71';
    points.forEach((point, index) => {
        const x = index * pointX;
        const y = height - (point / 100) * height + 20;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function drawProductivityChart() {
    const canvas = document.getElementById('productivityChart');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 200;

    // Stacked bar chart
    const fields = ['Field 1', 'Field 2', 'Field 3', 'Field 4'];
    const productivity = [75, 85, 70, 90];
    const barWidth = width / fields.length;

    ctx.fillStyle = '#f39c12';
    productivity.forEach((prod, index) => {
        const barHeight = (prod / 100) * height * 0.8;
        ctx.fillRect(index * barWidth + 10, height - barHeight - 20, barWidth - 20, barHeight);
    });

    // Draw labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    fields.forEach((field, index) => {
        ctx.fillText(field, index * barWidth + barWidth / 2, height - 5);
    });
}

// ===== Add CSS Animations =====
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Active Navigation Link Highlighting =====
window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Simple Data Calculations =====
function calculateTotalInventoryCost() {
    return inventory.reduce((total, item) => total + item.cost, 0);
}

function calculateExpectedYield() {
    // Simple calculation: area × expected yield per hectare
    const yieldPerHectare = 300; // Default quintals per hectare
    return crops.reduce((total, crop) => total + (crop.area * yieldPerHectare), 0);
}

// Update dashboard calculations
function updateAllStats() {
    document.getElementById('totalFields').textContent = crops.length;
    document.getElementById('totalCrops').textContent = crops.length;
    document.getElementById('expectedYield').textContent = Math.round(calculateExpectedYield());
}

// Call this on startup
updateAllStats();
