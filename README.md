# Asset Tree Directory System

A multi-brand asset management system built with Astro, React, and Tailwind CSS. This system allows you to organize and manage digital assets across multiple brands with an intuitive accordion-style interface.

## 🎯 Project Overview

This asset directory system provides:
- **Multi-brand support** - Manage assets for different brands (Asheville Dispensary, plantbar, etc.)
- **Accordion-style categories** - Categories expand to reveal organized Asset Nodes links
- **Search functionality** - Find assets quickly across all brands
- **Admin interface** - Easy content management for brands, categories, and links
- **Brand theming** - Each brand has its own visual identity

## 🚀 Features

### Core Functionality
- **Brand Selection** - Choose which brand's assets to view
- **Category Organization** - Assets organized into expandable categories (Branding, Products, Retail, etc.)
- **Asset Links** - Direct access to digital assets with descriptions
- **Real-time Search** - Find asset nodes across all brands and categories
- **Admin Dashboard** - Manage brands, categories, and links

### UI/UX Features
- **Accordion Interface** - Categories expand to show asset links
- **Responsive Design** - Works on desktop and mobile
- **Brand Theming** - Each brand has custom colors and styling
- **Clean Navigation** - Intuitive flow from brand selection to asset access

## 🏗️ Project Structure

```
src/
├── components/
│   ├── BrandGrid.astro          # Brand selection grid
│   ├── BrandPortal.astro        # Individual brand pages
│   ├── CategoryButton.tsx       # Expandable category buttons
│   ├── ExpandableCategory.tsx   # Accordion category component
│   ├── SearchInterface.tsx      # Search functionality
│   └── AdminDashboard.tsx       # Admin management interface
├── data/
│   ├── brands.json              # Brand definitions and themes
│   ├── categories.json          # Category structure
│   └── links.json               # Asset links and metadata
├── pages/
│   ├── index.astro              # Brand selection landing page
│   ├── [brand].astro            # Dynamic brand portal pages
│   ├── search.astro             # Global search page
│   └── admin/                   # Admin interface pages
├── styles/
│   └── brand-themes.css         # Brand-specific styling
└── utils/
    ├── storage.ts               # Data management
    └── search.ts                # Search functionality
```

## 🛠️ Technology Stack

- **Astro 4.0+** - Static site generation with React islands
- **React 18** - Interactive components
- **Tailwind CSS** - Utility-first styling
- **Fuse.js** - Client-side search
- **TypeScript** - Type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ad-asset-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📱 User Flow

1. **Brand Selection** - Choose from available brands on the landing page
2. **Category Browse** - View organized categories for the selected brand
3. **Asset Access** - Click categories to expand and access asset links
4. **Search** - Use the search interface to find specific assets
5. **Admin Management** - Manage content through the admin interface

## 🎨 Brand Support

Currently supports:
- **Asheville Dispensary** - Cannabis dispensary branding
- **plantbar** - Coffee & tea brand

Each brand has:
- Custom color schemes
- Brand-specific categories
- Tailored asset organization

## 🔧 Development

### Adding New Brands
1. Add brand definition to `src/data/brands.json`
2. Create brand theme in `src/styles/brand-themes.css`
3. Add brand-specific categories and assets

### Adding Categories
1. Use the admin interface to add new categories
2. Categories automatically support accordion expansion
3. Link assets to categories for organized access

## 📈 Roadmap

### MVP (Current)
- ✅ Multi-brand support
- ✅ Accordion category interface
- ✅ Basic search functionality
- ✅ Admin content management

### Future Enhancements
- Database integration
- User authentication
- File upload capabilities
- Advanced search filters
- Bulk import/export
- Analytics and usage tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
