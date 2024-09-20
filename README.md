![Banner](https://firebasestorage.googleapis.com/v0/b/imgcompressor-app.appspot.com/o/public%2Freadme_banner.png?alt=media)

# imgCompressor

Simple Image Compressor web app for compressing images in formats such as `PNG, JPG, JPEG, and GIF` with just a single click without losing much quality. The app utilizes a custom compression API that can be used to compress multiple images simultaneously with ease. For more details see the [API Documentation](API_DOC.md).

<a href="https://imgcompressor-app.web.app" target="_blank">
<img alt="Live Demo" src="https://img.shields.io/badge/See%20Live%20Demo-red?style=flat"/>
</a>

## Features

- **One-Click Compression:** Compress images effortlessly with just a single click.
- **High-Quality Retention:** Reduce the size of your images while preserving their original quality.
- **Batch Processing:** Compress multiple images at once for increased efficiency.

## Technology Stack

- **Frontend:** React ([Vite](https://vitejs.dev/))
- **Backend:** PHP (Custom Compressor API)

## Usage

1. **Upload:** Select the image(s) you want to compress.
2. **Compress:** Click the compress button to reduce the image size.
3. **Download:** Save the compressed image(s) to your device.

## Quick Start

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/akshayraj-1/ImgCompressor.git
   cd ImgCompressor
```

2. **Install dependencies:**

```bash
   npm install
```

### Run the Development Server

Start the development server:

```bash
   npm run dev
```

This will start the app by default locally at http://localhost:3939.

### Building for Production

To build the project for production, run:

```bash
   npm run build
```

The output will be in the `dist/` directory, ready to be deployed.

## License

This project is licensed under the MIT license.
