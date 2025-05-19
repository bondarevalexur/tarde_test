# 📊 Candlestick Chart Viewer

Интерактивный график японских свечей с возможностью выбора торгового инструмента, таймфрейма и масштабирования.

## 🚀 Быстрый старт

### 1. Клонировать репозиторий

```bash
git clone https://github.com/your-username/candlestick-chart-viewer.git
cd candlestick-chart-viewer
```

### 2. Установить зависимости

```bash
npm install
# или
yarn install
```

### 3. Создайте файл .env

```bash
cp .env.example .env

VITE_TWELVEDATA_API_KEY=your_api_key_here
```

### 4. Запустите проект
```bash
npm run dev
# или
yarn dev
```


#### 🧰 Стек технологий
	•	⚛️ React + TypeScript
	•	⚡ Vite
	•	📊 Recharts
	•	🌐 Axios
	•	💾 Zustand
	•	📡 TwelveData API


#### 🧪 Возможности
    •	Выбор символа и интервала
    •	Динамическое масштабирование графика
    •	Отображение последних свечных данных (OHLC)
    •	Автоматическое масштабирование по цене
    •	Удобный UI на TailwindCSS


#### 📂 Структура проекта
    src/
    ├── components/        # UI-компоненты (Header, Chart и т.д.)
    ├── hooks/             # Хуки загрузки данных
    ├── store/             # Zustand store для масштаба
    ├── types/             # Типы и интерфейсы
    ├── utils/             # Вспомогательные функции
    └── App.tsx            # Главный компонент