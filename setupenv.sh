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
echo "2. Verificando instalacao do Velociraptor"

VR_INSTALLED=$(command -v vr)

if [ $(echo "$?") -eq 0 ]; then
    echo "- Velociraptor instalado ✅"
else
    echo "- Instalando Velociraptor"
    deno install -qA -n vr https://deno.land/x/velociraptor@1.4.0/cli.ts
fi

echo '---'
echo "3. Criando arquivo dotenv"

DOTENV_GENERATED=$(cat .env)

if [ $(echo "$?") -eq 0 ]; then
    echo "- dotenv ja criado ✅"
else
    echo "- Criando dotenv"
    cp .env.template .env
fi

echo '---'
echo "Tudo certo 🎉"