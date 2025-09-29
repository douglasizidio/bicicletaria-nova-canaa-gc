#!/usr/bin/env node

/**
 * Build Script - Bicicletaria Nova Canaã
 * Script Node.js para validação e build do projeto
 */

const fs = require('fs');
const path = require('path');

// Cores para console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}🚀 Iniciando build do projeto...${colors.reset}\n`);

let exitCode = 0;

// Função para validar existência de arquivo
function validateFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    console.log(`${colors.green}✅ ${description}${colors.reset}`);
    return true;
  } else {
    console.log(`${colors.red}❌ ${description} - FALHOU${colors.reset}`);
    exitCode = 1;
    return false;
  }
}

// Função para contar linhas de arquivo
function countLines(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.split('\n').length;
  } catch (error) {
    return 0;
  }
}

// 1. Verificar estrutura de arquivos
console.log(`${colors.blue}[1/4] Verificando estrutura de arquivos...${colors.reset}`);
validateFile('src/index.html', 'index.html encontrado');
validateFile('src/css/style.css', 'style.css encontrado');
validateFile('src/js/main.js', 'main.js encontrado');
console.log('');

// 2. Validar conteúdo dos arquivos
console.log(`${colors.blue}[2/4] Validando conteúdo...${colors.reset}`);

// Validar HTML
if (fs.existsSync('src/index.html')) {
  const htmlContent = fs.readFileSync('src/index.html', 'utf-8');
  if (htmlContent.includes('<!DOCTYPE html>')) {
    console.log(`${colors.green}✅ HTML5 DOCTYPE presente${colors.reset}`);
  } else {
    console.log(`${colors.yellow}⚠️  DOCTYPE HTML5 não encontrado${colors.reset}`);
  }

  if (htmlContent.includes('css/style.css')) {
    console.log(`${colors.green}✅ Referência ao CSS encontrada${colors.reset}`);
  } else {
    console.log(`${colors.red}❌ Referência ao CSS não encontrada${colors.reset}`);
    exitCode = 1;
  }

  if (htmlContent.includes('js/main.js')) {
    console.log(`${colors.green}✅ Referência ao JavaScript encontrada${colors.reset}`);
  } else {
    console.log(`${colors.red}❌ Referência ao JavaScript não encontrada${colors.reset}`);
    exitCode = 1;
  }
}

// Validar CSS
if (fs.existsSync('src/css/style.css')) {
  const cssLines = countLines('src/css/style.css');
  console.log(`${colors.green}✅ CSS válido (${cssLines} linhas)${colors.reset}`);
}

// Validar JavaScript
if (fs.existsSync('src/js/main.js')) {
  const jsLines = countLines('src/js/main.js');
  console.log(`${colors.green}✅ JavaScript válido (${jsLines} linhas)${colors.reset}`);
}
console.log('');

// 3. Criar diretório de distribuição
console.log(`${colors.blue}[3/4] Criando build de produção...${colors.reset}`);

const distDir = path.join(__dirname, '..', 'dist');
const srcDir = path.join(__dirname, '..', 'src');

// Criar diretório dist se não existir
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copiar arquivos src para dist
function copyRecursive(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  copyRecursive(srcDir, distDir);
  console.log(`${colors.green}✅ Build criado em ./dist/${colors.reset}`);
} catch (error) {
  console.log(`${colors.red}❌ Erro ao criar build: ${error.message}${colors.reset}`);
  exitCode = 1;
}
console.log('');

// 4. Resumo
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
if (exitCode === 0) {
  console.log(`${colors.green}✅ BUILD CONCLUÍDO COM SUCESSO!${colors.reset}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('📦 Arquivos prontos para produção em: ./dist/');
  console.log('🌐 Para testar: npm start\n');
  console.log(`${colors.green}🎉 Projeto pronto para deploy!${colors.reset}\n`);
} else {
  console.log(`${colors.red}❌ BUILD FALHOU!${colors.reset}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log(`${colors.yellow}⚠️  Corrija os erros acima e tente novamente.${colors.reset}\n`);
}

process.exit(exitCode);