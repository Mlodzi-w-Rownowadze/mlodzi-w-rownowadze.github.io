# Młodzi w Równowadze

## Project Description

This is the official repository for the Młodzi w Równowadze project. It is a Jekyll-based website with custom SCSS and Bootstrap integration.

## How to Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Ruby](https://www.ruby-lang.org/en/) (version 3.1.4)
- [Bundler](https://bundler.io/)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Mlodzi-w-Rownowadze/mlodzi-w-rownowadze.github.io.git
    cd mlodzi-w-rownowadze.github.io
    ```

2. **Install Ruby dependencies**:
    ```bash
    bundle install
    ```

3. **Install Node.js dependencies**:
    ```bash
    npm install
    ```

4. **Copy Bootstrap and Bootstrap Icons to `assets` folder**:
    ```bash
    mkdir -p "assets/vendor"
    cp -r "node_modules/bootstrap" "assets/vendor/bootstrap"
    cp -r "node_modules/bootstrap-icons" "assets/vendor/bootstrap-icons"
    ```

5. **Copy icon fonts to `assets` folder**:
    ```bash
    mkdir -p "assets/css"
    cp -r "node_modules/bootstrap-icons/font/fonts" "assets/css/fonts"
    ```

### Running the Project

1. **Start the Jekyll server**:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:4000` to see the website.

## Deployment

The project is deployed using GitHub Pages. The deployment process is automated using GitHub Actions.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.