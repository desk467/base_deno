#!/bin/sh
set -euo pipefail
IFS=$'\n\t'

echo "1. Verificando instalacao do Deno"

DENO_INSTALLED=$(command -v deno)
if [ $(echo "$?") -eq 0 ]; then
    echo "- Deno instalado ✅"
else
    echo "- Instalando Deno"
    curl -fsSL https://deno.land/x/install/install.sh | sh

    BASH_FILE="~/.bashrc"
    ZSH_FILE="~/.zshrc"

    "\t- Recarregando shell"
    if [ "$SHELL" =eq "/bin/bash" ]; then
        source ~/.bashrc
    fi
    if [ "$SHELL" =eq "/bin/zsh" ]; then
        source ~/.zshrc
    fi
fi

echo '---'
echo "2. Criando arquivo dotenv"

DOTENV_GENERATED=$(cat .env)

if [ $(echo "$?") -eq 0 ]; then
    echo "- dotenv ja criado ✅"
else
    echo "- Criando dotenv"
    cp .env.template .env
fi

echo '---'
echo "Tudo certo 🎉"