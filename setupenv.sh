#!/bin/sh

echo "1. Verificando instalacao do Deno"

DENO_INSTALLED=$(command -v vr)
if [ $(echo "$?") -eq 0 ]; then
    echo "\t- Deno ja instalado."
else
    echo "\t- Instalando Deno"
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
    echo "\t- Velociraptor ja instalado."
else
    echo "\t- Instalando Velociraptor"
    deno install -qA -n vr https://deno.land/x/velociraptor@1.0.0-beta.18/cli.ts
fi

echo '---'
echo "3. Criando arquivo dotenv"

DOTENV_GENERATED=$(cat .env)

if [ $(echo "$?") -eq 0 ]; then
    echo "\t- dotenv ja criado."
else
    echo "\t- Criando dotenv"
    cp .env.template .env
fi

echo '---'
echo "Pronto."