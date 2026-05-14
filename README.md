# 🌾 AgroHub - Agricultural Management System

A comprehensive web-based agricultural management system designed to help farmers and agricultural businesses manage crops, inventory, weather information, and generate detailed reports.

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features Overview](#features-overview)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### 1. **Dashboard**
   - Real-time statistics on active fields
   - Total crops count tracking
   - Expected yield calculations
   - Soil health monitoring

### 2. **Crops Management**
   - Add new crops with variety details
   - Track planting and harvest dates
   - Manage field areas
   - Delete crops easily
   - Real-time crop list updates

### 3. **Weather Information**
   - Current temperature and conditions
   - 3-day weather forecast
   - Humidity levels
   - Air quality index (AQI)
   - Safe farming recommendations

### 4. **Inventory Management**
   - Track fertilizers and seeds
   - Manage farming tools
   - Monitor inventory quantities
   - Cost tracking
   - Category-based organization

### 5. **Reports & Analytics**
   - Monthly yield reports
   - Expense tracking charts
   - Crop health status visualization
   - Field productivity analysis
   - Downloadable reports

### 6. **Contact & Support**
   - Contact form for farmer support
   - Farm information display
   - Working hours and location
   - Direct communication channels

## 🛠 Technologies Used

- **Frontend:**
  - HTML5
  - CSS3 (with Flexbox and CSS Grid)
  - Vanilla JavaScript (ES6+)

- **Features:**
  - Responsive Design
  - Mobile-First Approach
  - Smooth Animations
  - Interactive Charts

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nakilanmanoharan-ui/Agro-Management-System.git
   cd Agro-Management-System
   ```

2. **Open the application:**
   - Double-click `index.html` to open in your default browser
   - OR right-click → Open with → Choose your preferred browser

3. **No additional installation needed!**
   - All dependencies are built-in
   - Works offline once loaded

## 🚀 Usage

### Adding a Crop
1. Navigate to the **Crops** section
2. Fill in crop details:
   - Crop Name
   - Variety
   - Planting Date
   - Expected Harvest Date
   - Area (in hectares)
3. Click **"Add Crop"** button
4. Crop will appear in the crops list

### Managing Inventory
1. Go to **Inventory** section
2. Enter item details:
   - Item Name
   - Category (Seeds, Fertilizer, Tools)
   - Quantity
   - Unit (kg, liters, pieces)
   - Cost
3. Click **"Add Item"**
4. Track all supplies in one place

### Viewing Reports
1. Visit the **Reports** section
2. View various analytics:
   - Yield charts
   - Expense tracking
   - Crop health status
   - Field productivity
3. Download individual reports

### Weather Tracking
1. Check the **Weather** section
2. View:
   - Current temperature and conditions
   - 3-day forecast
   - Humidity levels
   - Air quality index

## 📁 Project Structure

```
Agro-Management-System/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

### File Descriptions

**index.html**
- Navigation bar with responsive menu
- Hero section with welcome message
- Dashboard with statistics
- Crops management interface
- Weather information display
- Inventory management form
- Reports & Analytics section
- Contact form
- Footer with social links

**styles.css**
- Modern green theme (agriculture-focused)
- Responsive grid layouts
- Mobile-friendly design
- Smooth animations and transitions
- Interactive hover effects
- Professional card designs

**script.js**
- Dynamic crop management
- Inventory tracking
- Form validation
- Chart visualizations
- Notification system
- Responsive navigation
- Data persistence

## 🎯 Features Overview

### Dashboard Statistics
- **Total Fields:** Number of active farms
- **Total Crops:** Count of planted crops
- **Yield Expected:** Projected harvest in quintals
- **Soil Health:** Percentage indicator

### Responsive Design
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All screen sizes (480px - 4K)

### Data Management
- Add/Delete crops dynamically
- Add/Remove inventory items
- Real-time statistics updates
- Data stored in browser (localStorage ready)

### Visual Elements
- Responsive navigation bar
- Hamburger menu for mobile
- Interactive cards with hover effects
- Smooth scrolling
- Professional color scheme
- Chart visualizations

## 🔧 Customization

### Change Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2ecc71;      /* Green */
    --secondary-color: #27ae60;    /* Dark Green */
    --dark-color: #2c3e50;         /* Dark Gray */
    --light-color: #ecf0f1;        /* Light Gray */
}
```

### Update Contact Information
Edit the contact section in `index.html`:
```html
<p>+91-XXXX-XXXX-XX</p>
<p>support@agrohub.com</p>
<p>Agricultural Research Center</p>
```

### Modify Dashboard Stats
Update JavaScript calculations in `script.js`:
```javascript
document.getElementById('totalFields').textContent = crops.length;
document.getElementById('totalCrops').textContent = crops.length;
```

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Browsers

## 📝 Sample Data

The application comes with pre-loaded sample data:
- 3 sample crops (Wheat, Rice, Maize)
- 3 sample inventory items (Fertilizers, Pesticides)
- Default dashboard statistics

Modify or delete these samples as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Contact & Support

- **Email:** support@agrohub.com
- **GitHub:** [nakilanmanoharan-ui](https://github.com/nakilanmanoharan-ui)
- **Repository:** [Agro-Management-System](https://github.com/nakilanmanoharan-ui/Agro-Management-System)

## 🙏 Acknowledgments

- Built for farmers and agricultural businesses
- Designed with user experience in mind
- Responsive and accessible interface
- Community feedback welcome

## 📊 Future Enhancements

- [ ] Backend database integration (Node.js/Express)
- [ ] User authentication system
- [ ] Real-time weather API integration
- [ ] Advanced analytics and predictions
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Export to PDF/Excel
- [ ] Cloud storage integration

## 🐛 Known Issues

None currently. Please report any issues found!

---

**Made with ❤️ for farmers and agricultural enthusiasts**

Last Updated: May 14, 2026
