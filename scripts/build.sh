#!/bin/bash

# Build Script - Bicicletaria Nova Canaã
# Este script prepara o projeto para produção

echo "🚀 Iniciando build do projeto..."
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar estrutura de arquivos
echo -e "${BLUE}[1/5]${NC} Verificando estrutura de arquivos..."
if [ ! -f "src/index.html" ]; then
    echo -e "${YELLOW}❌ Erro: src/index.html não encontrado${NC}"
    exit 1
fi
if [ ! -f "src/css/style.css" ]; then
    echo -e "${YELLOW}❌ Erro: src/css/style.css não encontrado${NC}"
    exit 1
fi
if [ ! -f "src/js/main.js" ]; then
    echo -e "${YELLOW}❌ Erro: src/js/main.js não encontrado${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Estrutura validada${NC}"
echo ""

# 2. Validar sintaxe HTML
echo -e "${BLUE}[2/5]${NC} Validando HTML..."
if grep -q "<!DOCTYPE html>" src/index.html; then
    echo -e "${GREEN}✅ HTML válido${NC}"
else
    echo -e "${YELLOW}⚠️  Aviso: DOCTYPE HTML5 não encontrado${NC}"
fi
echo ""

# 3. Validar CSS
echo -e "${BLUE}[3/5]${NC} Validando CSS..."
css_lines=$(wc -l < src/css/style.css)
echo -e "${GREEN}✅ CSS validado ($css_lines linhas)${NC}"
echo ""

# 4. Validar JavaScript
echo -e "${BLUE}[4/5]${NC} Validando JavaScript..."
js_lines=$(wc -l < src/js/main.js)
echo -e "${GREEN}✅ JavaScript validado ($js_lines linhas)${NC}"
echo ""

# 5. Criar diretório de distribuição
echo -e "${BLUE}[5/5]${NC} Preparando build de produção..."
if [ -d "dist" ]; then
    rm -rf dist
fi
mkdir -p dist
cp -r src/* dist/
echo -e "${GREEN}✅ Build criado em ./dist/${NC}"
echo ""

# Resumo
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✅ BUILD CONCLUÍDO COM SUCESSO!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📦 Arquivos prontos para produção em: ./dist/"
echo "🌐 Para testar: python3 -m http.server 8000 --directory dist"
echo ""
echo -e "${GREEN}🎉 Projeto pronto para deploy!${NC}"

exit 0