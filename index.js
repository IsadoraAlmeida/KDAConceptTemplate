function imgChanger(e) {
    document.querySelector('.kda').src = e;
}

function infos(val) {
    switch (val) {
        case 'KDAS':
            document.querySelector('.textBox').innerHTML = `
            <h2>AS ESTRELAS DO <br><span>SHOW</span></h2>
            <p>A mais nova parceira do K/DA é Seraphine, uma produtora e compositora jovem e talentosa. Ela usa a música para se conectar consigo mesma e com outras pessoas, e, ao lado do K/DA, está decidida a expandir ainda mais esse contato. Sincera e generosa, o sonho de Seraphine é unir o mundo por meio da arte.</p>
            <a href="#seraSection">Descubra a ARTISTA CONVIDADA</a>
            `
          break;
        case 'Ahri':
            document.querySelector('.textBox').innerHTML = `
            <h2> <br><span>AHRI</span></h2>
            <p>Líder, fundadora e vocalista principal do K/DA, Ahri encanta o público com seu charme contagiante. Ela é a integrante mais calma do grupo e incentiva as colegas a se expressarem no palco sem medo nem restrições. Ahri sabe descobrir novos talentos como ninguém e consegue extrair o potencial máximo dessas pessoas.</p>
            <a href="#seraSection">Descubra a ARTISTA CONVIDADA</a>
            `
          break;
        case 'Akali':
            document.querySelector('.textBox').innerHTML = `
            <h2> <br><span>AKALI</span></h2>
            <p>Akali é a rapper principal do grupo e sua pegada é mais voltada para a ousadia e a subversão. Ela faz questão de manter todo mundo nos eixos e valoriza sua independência criativa acima de tudo. Akali está sempre pensando em novos projetos e se recusa a abrir mão de sua arte.</p>
            <a href="#seraSection">Descubra a ARTISTA CONVIDADA</a>
            `
          break;
        case 'Evelynn':
            document.querySelector('.textBox').innerHTML = `
            <h2> <br><span>EVE</span></h2>
            <p>Evelynn é a vocalista principal do K/DA e impõe uma presença hipnotizante no palco. Sem nunca ficar à sombra dos outros, ela se delicia com a reação do público ao seu visual elaborado à perfeição. Cofundadora do K/DA em parceria com a Ahri, Evelynn sempre encabeça as apostas criativas mais emocionantes do grupo.</p>
            <a href="#seraSection">Descubra a ARTISTA CONVIDADA</a>
            `
            break;
        case 'Kaisa':
            document.querySelector('.textBox').innerHTML = `
            <h2> <br><span>KAI'SA</span></h2>
            <p>Coreógrafa e dançarina principal do grupo, Kai'Sa não aceita nada menos que a perfeição. Com seu foco intenso e silencioso, ela ajuda a equipe com conceitos de outro mundo e tem uma atenção redobrada aos detalhes. Kai'Sa prefere um estilo de vida sem fronteiras e busca por inspiração em todos os cantos do mundo.</p>
            <a href="#seraSection">Descubra a ARTISTA CONVIDADA</a>
            `
            break;
        default:
    }
}