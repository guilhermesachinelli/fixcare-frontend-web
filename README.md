# <div align="center">Historico de Manutenção SENAI 564 (Fixcare)</div>


## 💻 Seja muito bem-vindo!
#### Esta documentação fornecerá informações abrangentes sobre como usar o nosso software e apresentará o nosso projeto em detalhes.

<center>
<img src="./public/paginainicial.png" width="60%" height="60%">
</center>

### O que é?

Esse software de código aberto  utiliza  uma API criada pelos alunos para documentar as manutenções nos equipamentos utilizados pelas turmas que utilizam  a oficina de mecânica do SENAI 564 Valinhos.

### Começando.
Para começar a utilizar esse software e entender melhor o projeto, siga os passos abaixo:

1. Em seu projeto, utilize o comando "npm i" no terminal para fazer a instalação de todas as bibliotecas utilizadas no projeto.
2. Em seguida, utilize o comando "npm run dev" no terminal para poder abri-lo em seu navegador.

## Esquema de classes:
Tabela machine:
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| categoria            | string   | Categoria da maquina                                |
| marca          | string   | Define a marca da maquina                             |
| modelo          | string   | Define o modelo da maquina                           |
| numero_de_patrimonio         | string   | Número de patrimonio da maquina (UNICO) 
| numero_de_serie         | string   | Número de serie da maquina  (UNICO)
| numero_do_torno        | number   | Número do torno (UNICO)
| data_de_aquisicao         | date   | Data de aquisição da maquina

Tabela adm:
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| email             | string   | Define um email para o Administrador (UNICO)                                |
| senha          | string   | Define a senha do Administrados                            |


Tabela aluno:
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| email             | string   | Define um email para o Aluno (UNICO)                                |
| senha          | string   | Define a senha do Aluno                            |

Tabela funcionario:
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| email             | string   | Define um email para o Funcionario (UNICO)                                |
| senha          | string   | Define a senha do Funcionario                            |

Tabela requestmaintenance:
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| numero_de_patrimonioID            | string   | Define o número de patrimonido pegando o número da maquina                                |
| nome          | string   | Nome da pessoa que fez o requerimento de manutenção                             |
| causa_do_problema         | string   | Causa do problema que esta na maquina  
| descricao         | string   | Descrição do problema  
| data_de_solicitacao        | date   | Data que foi feita a requisição
| status         | boolean   | Status que define se a requição ainda esta de pé ou não

Tabela maintenance:
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| numero_de_patrimonioID            | string   | Define o número de patrimonido pegando o número da maquina                                |
| nome_do_responsavel          | string   | Nome do responsavel que fez a manutenção                             |
| tipo_de_manutencao          | string   | Define o tipo da manutenção feita                           |
| descricao         | string   | Descrição da manutenção 
| data_da_manutenção        | date   | Data que foi feita a manutenção
| status         | boolean   | Status que define se a manutenção ja foi feita ou não

## Boas práticas em nosso código:

Clean code: Estruturação de pastas organizada, dentação de código, versionamento de branchs.

Componentização: Utilizada nos elementos: Cards, Footer, Header, Navegação por imagem, PopUp.


## Documentação de cores oficiais do site

| Cores Degrade             | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor Azul 1       | ![#0050CEEE](https://via.placeholder.com/10/0050CEEE?text=+) #0050CEEE |
| Cor Azul 2       | ![#013484](https://via.placeholder.com/10/013484?text=+) #013484 |
| Cor Azul 3       | ![#002D73](https://via.placeholder.com/10/002D73?text=+) #002D73 |
| Cor Azul 4       | ![#0F3064](https://via.placeholder.com/10/0F3064?text=+) #0F3064 |
| Cor Azul 5       | ![#0D213F](https://via.placeholder.com/10/002D73?text=+) #0D213F |


| Cores               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor Branca       | ![#F1F1F19A](https://via.placeholder.com/10/F1F1F19A?text=+) #F1F1F19A |
| Cor Azul Claro 1       | ![#1F23FD7A](https://via.placeholder.com/10/1F23FD7A?text=+) #1F23FD7A |
| Cor Azul     | ![#001AFF99](https://via.placeholder.com/10/001AFF99?text=+) #001AFF99 |


# Equipe

Somos um grupo de estudantes que estão no quarto semestre do curso técnico de desenvolvimento de sistemas no SENAI de Valinhos, e gostaríamos de compartilhar o nosso TCC que criamos com base no que aprendemos até agora. Nosso objetivo com esta documentação é mostrar como aplicamos as habilidades que adquirimos no SENAI para solucionar problemas e criar, além de solucionarmos um problema recorrente no SENAI, a falta de documentação das manutenções e lubrificações dos equipamentos na área da oficina de mecânica. Atualmente, o projeto é focado no equipamento torno.


### Entre em contato conosco pelo GitHub!

#### - Richard Macedo
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/richardmsiqueira)
                                                    
#### - Luana Fassini
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/LuFassini)                         

#### - Guilherme Lima
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/GuiHJLima)


#### - Guilherme Sachinelli
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/guilhermesachinelli)

#### - Isabelle Barquilia
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/IsaBarquilia)


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio destes email's:
1. guilhermelima@aluno.senai.br,
2. guilherme.sachinelli@aluno.senai.br,
3. richard.siqueira@aluno.senai.br,
4. luana-fassini@aluno.senai.br,
5. isabelle-moraes@aluno.senai.br.
